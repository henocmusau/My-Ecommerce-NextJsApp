'use server'

import { Product } from '@/models/mongo'
import { NextRequest } from 'next/server'
import { Blob } from 'buffer'
import { uploadFile } from '@/utils/libs/uploadFiles'
import { revalidatePath } from "next/cache";

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
            productsType: type,
            image: imageUrl,
            currency,
            creator: "65614bcc6c869d329f31dfb6"
        })

        revalidatePath('/')

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
            .populate('productsType', 'label')
            .sort('-createdAt')
        // .exec()
        return JSON.parse(JSON.stringify(datas))
    } catch (error) {
        console.error('Produits introuvables', error)
        return null
    }
}

export async function getProductById(id: string) {
    try {
        const datas = await Product.findById(id)
            .populate('creator', ['firstName', 'lastName', 'image'])
            .populate('currency')
            .populate('productsType', 'label')
        console.log('Datas :', datas)
        // .exec()
        return JSON.parse(JSON.stringify(datas))
    } catch (error) {
        console.error('Produits introuvables', error)
        return null
    }
}