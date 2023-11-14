'use server'
import { Creator } from '@/models/mongo'

export async function createNewCreator(formData: FormData) {
    const firstName = formData.get('firstName')?.toString().trim()
    const lastName = formData.get('lastName')?.toString().trim()
    const gender = formData.get('gender')?.toString().trim()
    const phoneNumber = formData.get('phoneNumber')?.toString().trim()
    const idCardNumber = formData.get('idCardNumber')?.toString().trim()
    const city = formData.get('city')?.toString().trim()
    const street = formData.get('street')?.toString().trim()
    const email = formData.get('email')?.toString().trim()

    try {
        const datas = JSON.parse(JSON.stringify(await Creator.create({
            firstName,
            lastName,
            gender,
            phoneNumber,
            email,
            idCardNumber,
            adress: {
                city, street
            }
        })))

        return datas

        // return returnMessage(datas)

    } catch (error: any) {
        if (error?.code === 11000) return {
            error: {
                message: "L'e-mail fourni est déjà utilisé.",
            }
        }

        return {
            error: {
                message: 'Les données transmis sont incorrectes.',
            }
        }
    }
}