import { StaticImageData } from "next/image"

export type ProductItem = {
    title: string
    description?: string
    type: number
    image: StaticImageData
    price: number
    devise: {
        id: number
        label: string
    }
}


export type ProductsList = ProductItem[]

