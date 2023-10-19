import { articles } from "@/constants/articles"
import ArticleItem from "@/components/Articles/ArticleItem"

export default function Home() {
  return (
    <div className="mainWrapper">
      <section>FILTRES</section>
      <section className="grid md:grid-cols-3 gap-4 md:gap-8">
        {
          articles && articles.map((article, i) => (
            <ArticleItem key={i} {...article} />
          ))
        }
      </section>
      <section>MEILLEURS PLANS</section>
      <section>SUGGESTIONS POUR LE CLIENT</section>
    </div>
  )
}
