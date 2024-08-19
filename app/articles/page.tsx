import articles from "@/public/articles/articles";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import NewsCard from "../Components/NewsCard/NewsCard";
import styles from "./articles.module.css";

const Articles = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.main_header}>
          <h1 className={styles.main_title}>Actualités</h1>
        </section>
        <article className={styles.main_article}>
          <section className={styles.article_section}>
            <div className={styles.news_wrapper}>
              <div className={styles.newscard_container}>
                {articles.map((item) => {
                  return <NewsCard article={item} key={item.id}></NewsCard>;
                })}
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default Articles;
