import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import styles from "./page.module.css";

const NotFound = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.main_header404}>
          <h1 className={styles.main_title404}>Erreur 404</h1>
        </section>
        <article className={styles.main_article}>
          <section className={styles.article_section404}>
            <p className={styles.section_subtitle}>
              La page demandée n'a pas été trouvée.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
