import SectionTitle from "@/components/SectionTitle"

import { articles } from "@/constants/articles"
import MainModal from "@/components/Modals/MainModal"
import type { ProductItem2 as ProductItemProps } from "@/types/Article"
import { GiDividedSquare } from "react-icons/gi"
import { getProductById } from "@/serverActions/products"
import { notFound } from "next/navigation"

const products = articles
const plans = articles.slice(2).reverse()

export default async function Home({ params }: { params: { id: string } }) {
  const { id } = params
  const datas: any = await getProductById(id)

  if (!datas) return notFound()

  return (
    <div className="mainWrapper">
      <h1 className="heading-one">{datas?.title}</h1>
      <p className="heading-three">Page :{datas.description} </p>
    </div>
  )
}
