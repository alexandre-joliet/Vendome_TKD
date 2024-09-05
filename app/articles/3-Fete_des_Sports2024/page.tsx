import articles from "@/public/articles/articles";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import styles from "../article.module.css";
import Image from "next/image";

const Article = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.main_header}>
          <h1 className={styles.main_title}>Actualités</h1>
        </section>
        <article className={styles.main_article}>
          <figure className={styles.section_coverimagecontainer}>
            <Image
              src="/images/articles/3-Fete_des_Sports2024/VendomeCover.webp"
              //
              width={1072}
              height={500}
              alt="Une vue aérienne des toits de la ville de Vendôme. On peut y voir les clochers des édifices religieux de la ville et la Mairie et son parc"
              className={styles.section_coverimage}
            ></Image>
            <figcaption className={styles.img_captioncover}>
              Crédits - Ville de Vendôme
            </figcaption>
          </figure>
          <section className={styles.article_section}>
            <h2 className={styles.section_title}>
              Retrouvez-nous à la Fête du Sport de Vendôme !{" "}
            </h2>
            <p className={styles.section_date}>19/08/2024</p>
            <p className={styles.section_text}>
              Evènement incontournable de la rentrée pour les Vendomois, la Fête
              des Sports et des Associations se tiendra cette année le samedi{" "}
              <strong>07 Septembre 2024</strong>. L'occasion de découvrir toutes
              les associations sportives et culturelles présentes dans la ville
              et de pouvoir directement échanger avec elles.
            </p>
            <p className={styles.section_text}>
              C'est <strong>sur le stand 29</strong>, au coeur du Parc Ronsard
              que vous pourrez donc nous retrouver, où notre Professeur et des
              adhérents vous accueilleront toute la journée et pourront répondre
              à toutes vos questions.
            </p>
            <p className={styles.section_text}>
              Pour les plus courageux, il sera également possible de participer
              à des démonstrations en notre compagnie, pour que vous puissiez
              découvrir quelques facettes de ce sport en pratiquant directement
              avec nous !
            </p>
            <p className={styles.section_text}>On vous attend nombreux !</p>
          </section>
          <section className={styles.article_section}>
            <figure className={styles.section_imagecontainer}>
              <Image
                src="/images/articles/3-Fete_des_Sports2024/PLANFDS.jpg"
                //
                width={1072}
                height={500}
                alt="Plan des stands la Fête des Sports de Vendôme"
                className={styles.section_image}
              ></Image>
            </figure>
            <button className={styles.download_button}>
              {" "}
              <a
                href="/images/articles/3-Fete_des_Sports2024/PLANFDS.jpg"
                download="Plan Fête des Sports - Taekwnondo"
              >
                Télécharger le plan
              </a>
            </button>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default Article;
