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
              src="/images/articles/1-Lancement_du_site/contact.webp"
              //
              width={1072}
              height={500}
              alt="Un homme utilisant son smartphone face à son ordinateur portable"
              className={styles.section_coverimage}
            ></Image>
            <figcaption className={styles.img_captioncover}>
              Crédits - Unsplash
            </figcaption>
          </figure>
          <section className={styles.article_section}>
            <h2 className={styles.section_title}>
              Lancement de notre site internet !
            </h2>
            <p className={styles.section_date}>01/08/2024</p>
            <p className={styles.section_text}>
              Nous avons le plaisir de vous annoncer le lancement officiel de
              notre site internet dédié à notre club de Taekwondo !
            </p>
            <p className={styles.section_text}>
              Vous y trouverez toutes les informations essentielles concernant
              notre club : nos valeurs, nos instructeurs, les horaires des
              cours, les informations pratiques, ainsi que les modalités
              d'inscription.
            </p>
            <p className={styles.section_text}>
              Que vous soyez un débutant curieux ou un pratiquant confirmé,
              notre site vous permettra de découvrir ou approfondir vos
              connaissances sur cet art martial dynamique et exigeant. Vous
              pourrez également y suivre les actualités du club, nos événements,
              compétitions et stages, afin de ne rien manquer de la vie de notre
              communauté. Nous vous invitons à explorer notre site et à nous
              rejoindre pour partager ensemble la passion du Taekwondo.
            </p>
            <p className={styles.section_text}>
              À très bientôt sur les tatamis !
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default Article;
