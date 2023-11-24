'use server'

import { ProductType } from '@/models/mongo'
import { capitalize } from '@/utils/functions'

export async function getAllProductsType() {
    try {
        const datas = await ProductType.find()
        return JSON.parse(JSON.stringify(datas))
    } catch (error) {
        console.log('Devises introuvables')
        return null
    }
}

export async function createNewProductType(formData: FormData) {
    const label = formData.get('type')?.toString().trim()
    const slug = formData.get('slug')?.toString().trim()
    if (!label || label.length < 2 || !slug || slug.length < 2) return null
    try {
        const datas = JSON.parse(JSON.stringify(await ProductType.create({
            label: capitalize(label),
            slug
        })))

        return datas

        // return returnMessage(datas)

    } catch (error: any) {
        if (error?.code === 11000) return {
            error: {
                message: 'Ce type de produit existe déjà',
            }
        }

        return {
            error: {
                message: 'Les données transmises sont incorrectes.',
            }
        }
    }
}