'use server'

import { Product } from '@/models/mongo'
import { NextRequest } from 'next/server'
import { Blob } from 'buffer'
import { uploadFile } from '@/utils/libs/uploadFiles'

export async function createNewProduct(formData: FormData) {
    const title = formData.get('title')?.toString().trim()
    const description = formData.get('description')?.toString().trim() ?? null
    const p = formData?.get('price')?.toString().trim()
    const price = p ? parseInt(p, 10) : 0
    const type = formData.get('type[_id]')?.toString().trim()
    const currency = formData.get('currency[_id]')?.toString().trim()
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

    const imageUrl: any = await uploadFile(image, "products")

    if (!imageUrl) return {
        error: {
            message: "Une erreur est survenue lors du télécharment de l'image.",
        }
    }

    try {
        const datas = await Product.create({
            title,
            description,
            price,
            productType: type,
            image: imageUrl,
            currency,
            creator: "655dc5858174a5190110130b"
        })

        return JSON.parse(JSON.stringify(datas))

        // return returnMessage(datas)}

    } catch (error: any) {
        return {
            error: {
                message: error.message,
            }
        }
    }
}

export async function getAllProducts() {
    try {
        const datas = await Product.find()
            .populate('creator', ['firstName', 'lastName', 'image'])
            .populate('currency')
            .populate('producttype')
        return JSON.parse(JSON.stringify(datas))
    } catch (error) {
        console.log('Produits introuvables')
        return null
    }
}