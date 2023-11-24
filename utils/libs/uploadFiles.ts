import { stat, mkdir, writeFile } from 'fs/promises'
import mime from "mime"
import { join } from 'path'
import { Blob } from 'buffer'

export const uploadFile = async (image: Blob, target: string = 'creators') => {
    let date = new Date()

    const otherName = date.getFullYear().toString() +
        date.getMonth().toString().padStart(2, '0') +
        date.getDate().toString().padStart(2, '0') +
        date.getHours().toString().padStart(2, '0') +
        date.getMinutes().toString().padStart(2, '0') +
        date.getSeconds().toString().padStart(2, '0') +
        date.getMilliseconds().toString().padStart(2, '0')

    const buffer = Buffer.from(await image.arrayBuffer());
    const uploadDir = join(process.cwd(), "uploads", `/${target}/`);

    // TRYING TO ACCESS TO UPLOAD DIRECTORY
    try {
        await stat(uploadDir);
    } catch (err: any) {
        if (err.code === "ENOENT") {
            await mkdir(uploadDir, { recursive: true });
        } else {
            return { error: "Une erreur est survenue" }
        }
    }

    type imageExtensionType = '.jpg' | '.jpeg' | '.png' | '.webp'

    const MIME_TYPES: Record<string, imageExtensionType> = {
        'image/jpg': '.jpg',
        'image/jpeg': '.jpeg',
        'image/png': '.png',
        'image/webp': '.webp',
    }

    const isAutorizedType = MIME_TYPES[image.type] ?? null

    if (!isAutorizedType) return null

    // UPLOAD FILE IN SERVER
    try {
        const uniqueSuffix = `${otherName}${Math.round(Math.random() * 1e9)}`;
        const filename = `${uniqueSuffix}${isAutorizedType}`;
        await writeFile(`${uploadDir}/${filename}`, buffer);
        return `/uploads/${target}/` + filename
    } catch (err: any) {
        // console.log("Error while trying to upload a file\n", e);
        return null
    }
}