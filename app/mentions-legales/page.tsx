import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import styles from "./mentions.module.css";

const Mentions = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.main_header}>
          <h1 className={styles.main_title}>Mentions légales </h1>
        </section>
        <article className={styles.main_article}>
          <section className={styles.article_section}>
            <h3 className={styles.section_subtitle}>Identité de l'éditeur</h3>
            <p className={styles.section_text}>
              Ce site est édité par{" "}
              <a href="https://www.linkedin.com/in/alexandrejoliet/">
                Alexandre JOLIET
              </a>
              , Développeur Web.
            </p>
            <h3 className={styles.section_subtitle}>Coordonnées</h3>
            <p className={styles.section_text}>
              {" "}
              Adresse : 10 rue Henri de Toulouse Lautrec, 41100 NAVEIL
            </p>

            <p className={styles.section_text}> Téléphone : 06 71 04 40 42</p>
            <p className={styles.section_text}>
              Courrier électronique :{" "}
              <a href="mailto:alexandre.joliet@gmail.com">
                alexandre.joliet@gmail.com
              </a>
            </p>
            <h3 className={styles.section_subtitle}>
              Propriété intellectuelle
            </h3>
            <p className={styles.section_text}>
              Les images utilisées sur ce site sont créditées lorsqu'elles
              proviennent de sources externes ou ont été réalisées par l'éditeur
              du site.
            </p>
            <h3 className={styles.section_subtitle}>Hébergement </h3>
            <p className={styles.section_text}>
              Ce site est hébergé par la société Vercel Inc., située 340 S Lemon
              Ave #4133 Walnut, CA 91789, et joignable au (559) 288-7060.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default Mentions;
