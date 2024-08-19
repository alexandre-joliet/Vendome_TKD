import articles from "@/public/articles/articles";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import styles from "./article.module.css";

const Article = ({ params }: any) => {
  const id: number = parseInt(params.id);
  console.log("ID:", id);

  const selectedArticle = articles.find((item) => item.id === id);
  console.log(selectedArticle);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.main_header}>
          <h1 className={styles.main_title}>Actualités</h1>
        </section>
        <article className={styles.main_article}>
          <section className={styles.article_section}>
            <h2 className={styles.section_title}>{selectedArticle?.title}</h2>
            <p className={styles.section_text}>{selectedArticle?.textFull}</p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default Article;
