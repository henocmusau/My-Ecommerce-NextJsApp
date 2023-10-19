import { StaticImageData } from "next/image"

export type Article = {
    title: string
    description?: string
    type: number
    image: StaticImageData
}[]