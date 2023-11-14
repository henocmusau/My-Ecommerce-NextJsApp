'use server'

import { Currency } from '@/models/mongo'

export async function createNewCurrency(formData: FormData) {
    const label = formData.get('label')?.toString().trim()
    const symbol = formData.get('symbol')?.toString().trim()

    try {
        const datas = JSON.parse(JSON.stringify(await Currency.create({
            label,
            symbol
        })))

        return datas

        // return returnMessage(datas)

    } catch (error: any) {
        if (error?.code === 11000) return {
            error: {
                message: 'Cette dévise existe déjà.',
            }
        }

        return {
            error: {
                message: 'Les données transmises sont incorrectes.',
            }
        }
    }
}