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

export type ProductItem2 = {
    _id: string
    title: string
    description?: string
    productsType: {
        _id: string
        label: string
    }
    image: string
    price: number
    currency: {
        id: string
        symbol: string
        label: string
    }
    creator: {
        _id: string
        firstName: string
        lastName: string
        image: string
    }
}

export type ProductsList = ProductItem[]

