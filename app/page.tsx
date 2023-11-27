import ProductItem from "@/components/Products/ProductItem"
import SectionTitle from "@/components/SectionTitle"
import ProductsList from "@/components/Products/ProductsList"

import { articles } from "@/constants/articles"
import MainModal from "@/components/Modals/MainModal"
import { getAllProducts } from "@/serverActions/products"
import type { ProductItem2 as ProductItemProps } from "@/types/Article"
import { GiDividedSquare } from "react-icons/gi"

const products = articles
const plans = articles.slice(2).reverse()

export default async function Home() {
  const datas: ProductItemProps[] = await getAllProducts()

  return (
    <div className="mainWrapper">

      {/* LISTE DES PRODUITS ET FILTRES */}
      {/* products ? <ProductsList products={JSON.parse(JSON.stringify(products))} /> : null */}
      {
        datas && datas.length > 0 ?
          <>
            <ProductsList products={JSON.parse(JSON.stringify(datas))} />
            {/* MEILLEURS PLANS */}
            <section className="productsList">
              <SectionTitle title="Meilleurs Plans" />
              {
                datas?.map((p, i) => (
                  <ProductItem key={i} {...p} />
                ))
              }
            </section>

            <section className="productsList">
              <SectionTitle title="Quelques suggestions pour vous" />
              {datas?.reverse().map((p, i) => (
                <ProductItem key={i} {...p} />
              ))}
            </section>
          </>
          : <p
            className="text-2xl font-semibold h-full w-full text-center my-auto"
          >
            Aucun prodit n'a été enregistré
          </p>
      }

      <MainModal />
    </div>
  )
}
