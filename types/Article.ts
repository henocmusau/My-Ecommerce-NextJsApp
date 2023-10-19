import { StaticImageData } from "next/image"

export type ArticleItem = {
    title: string
    description?: string
    type: number
    image: StaticImageData
}


export type ArticleList = ArticleItem[]

