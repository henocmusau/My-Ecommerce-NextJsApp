import { articles } from "@/constants/articles"
import ArticleItem from "@/components/Articles/ArticleItem"
import SectionTitle from "@/components/SectionTitle"

const plans = articles.slice(2).reverse()

export default function Home() {
  return (
    <div className="mainWrapper">
      <section>FILTRES</section>
      <section className="productsList">
        {
          articles && articles.map((article, i) => (
            <ArticleItem key={i} {...article} />
          ))
        }
      </section>

      {/* MEILLEURS PLANS */}
      <section className="productsList">
        <SectionTitle title="Meilleurs Plans" />
        {
          plans?.map((article, i) => (
            <ArticleItem key={i} {...article} />
          ))
        }
      </section>


      <section>SUGGESTIONS POUR LE CLIENT</section>
    </div>
  )
}
