'use server'

import { Creator } from '@/models/mongo'
import { NextRequest } from 'next/server'
import { Blob } from 'buffer'
import { uploadFile } from '@/utils/libs/uploadFiles'

export async function createNewCreator(formData: FormData) {
    const firstName = formData.get('firstName')?.toString().trim()
    const lastName = formData.get('lastName')?.toString().trim()
    const gender = formData.get('gender')?.toString().trim()
    const phoneNumber = formData.get('phoneNumber')?.toString().trim()
    const idCardNumber = formData.get('idCardNumber')?.toString().trim()
    const city = formData.get('city')?.toString().trim()
    const street = formData.get('street')?.toString().trim()
    const email = formData.get('email')?.toString().trim()
    const image = formData.get('image') as Blob | null

    if (!image) return {
        error: {
            message: "Image réquis",
        }
    }

    if (image.size > 4096000) return {
        error: {
            message: "La taille de l'image ne doit pas dépasser 4Mb.",
        }
    }

    const imageUrl = await uploadFile(image)

    if (!imageUrl) return {
        error: {
            message: "Une erreur est survenue lors du télécharment de l'image.",
        }
    }

    try {
        const datas = await Creator.create({
            firstName,
            lastName,
            gender,
            image: imageUrl,
            phoneNumber,
            email,
            idCardNumber,
            adress: {
                city, street
            }
        })

        return JSON.parse(JSON.stringify(datas))

        // return returnMessage(datas)}

    } catch (error: any) {
        if (error?.code === 11000) return {
            error: {
                message: "L'e-mail fourni est déjà utilisé.",
            }
        }

        return {
            error: {
                message: error.message,
            }
        }
    }
}