import ProductItem from "@/components/Products/ProductItem"
import SectionTitle from "@/components/SectionTitle"
import ProductsList from "@/components/Products/ProductsList"


import { articles } from "@/constants/articles"

const products = articles
const plans = articles.slice(2).reverse()

export default function Home() {
  return (
    <div className="mainWrapper">

      {/* LISTE DES PRODUITS ET FILTRES */}
      {
        products ? <ProductsList products={products} /> : null
      }

      {/* MEILLEURS PLANS */}
      <section className="productsList">
        <SectionTitle title="Meilleurs Plans" />
        {
          plans?.map((p, i) => (
            <ProductItem key={i} {...p} />
          ))
        }
      </section>

      <section>SUGGESTIONS POUR LE CLIENT</section>
    </div>
  )
}
