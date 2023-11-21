'use server'
import { stat, mkdir, writeFile } from 'fs/promises'
import mime from "mime"
import { join } from 'path'
import { Creator } from '@/models/mongo'
import { NextRequest } from 'next/server'
import { Blob } from 'buffer'

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

    let date = new Date()
    const dirname = date.getFullYear().toString() + date.getMonth().toString().padStart(2, '0') + date.getDate().toString().padStart(2, '0')

    const buffer = Buffer.from(await image.arrayBuffer());
    const relativeUploadDir = `/uploads/${dirname}`;
    const uploadDir = join(process.cwd(), "uploads", relativeUploadDir);

    try {
        await stat(uploadDir);
    } catch (e: any) {
        if (e.code === "ENOENT") {
            await mkdir(uploadDir, { recursive: true });
        } else {
            console.log(
                "Error while trying to create directory when uploading a file\n",
                e
            );
            return {
                error: {
                    message: "Une erreur est survenue",
                }
            }
        }
    }

    try {
        const uniqueSuffix = `${dirname}${Math.round(Math.random() * 1e9)}`;
        const filename = `${uniqueSuffix}.${mime.getExtension(image.type)}`;
        const uploaded = await writeFile(`${uploadDir}/${filename}`, buffer);
        return { uploaded }

    } catch (e: any) {

        console.log("Error while trying to upload a file\n", e);
        return {
            error: {
                message: e.message,
            }
        }
    }

    // const image = i as Blob
    // const form = await req.formData()
    // console.log(form)
    // console.log(Date.now)
    // return

    // return
    // if (!image && image?.path == 'undefined' && image?.name == 'undefined') return

    // try {

    //     fs.readFile(image.path, (err, data) => {
    //         const imageTitle = image.name
    //         const path = __dirname + '/uploads/pictures/main' + imageTitle
    //         fs.writeFile(path, data, (err) => {
    //             console.log(err)
    //         })

    //     })

    //     const datas = JSON.parse(JSON.stringify(await Creator.create({
    //         firstName,
    //         lastName,
    //         gender,
    //         phoneNumber,
    //         email,
    //         idCardNumber,
    //         adress: {
    //             city, street
    //         }
    //     })))

    //     return datas

    // return returnMessage(datas)

    // } catch (error: any) {
    //     if (error?.code === 11000) return {
    //         error: {
    //             message: "L'e-mail fourni est déjà utilisé.",
    //         }
    //     }

    //     return {
    //         error: {
    //             message: error.message,
    //         }
    //     }
    // }
}