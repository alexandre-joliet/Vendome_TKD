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
              src="/images/articles/2-JO2024/JO2024-Paris.avif"
              //
              width={1072}
              height={500}
              alt="Photographie de la façade du Grand Palais à Paris, décorée aux couleurs des Jeux Olympiques de Paris 2024"
              className={styles.section_coverimage}
            ></Image>
            <figcaption className={styles.img_captioncover}>
              Crédits - Paris 2024
            </figcaption>
          </figure>
          <section className={styles.article_section}>
            <h2 className={styles.section_title}>
              De l'argent pour Djelika Diallo en Para-Taekwondo !{" "}
            </h2>
            <p className={styles.section_date}>02/09/2024</p>
            <figure className={styles.section_imagecontainer}>
              <Image
                src="/images/articles/4-JOPARA2024/JOPARA2024-Djelika.avif"
                //
                width={1072}
                height={500}
                alt="L'athlète Française Djelika Diallo brandissant le drapeau français saluant le public après sa finale des Jeux Paralympiques de Paris 2024"
                className={styles.section_image}
              ></Image>
              <figcaption className={styles.img_caption}>
                Crédits - Elsa
              </figcaption>
            </figure>
            <p className={styles.section_text}>
              Djelika Diallo est devenue vice-championne paralympique de
              para-taekwondo dans la catégorie des -65 kg vendredi 30 août, lors
              des Jeux paralympiques de Paris 2024. À seulement 19 ans, elle a
              été battue en finale par Ana Carolina Silva de Moura, une
              Brésilienne expérimentée et championne du monde en titre.
            </p>

            <h3 className={styles.section_subtitle}>
              Une journée exceptionnelle
            </h3>
            <p className={styles.section_text}>
              Très stressée en début de journée, Djelika à su trouver la force
              pour s'imposer au Golden Score en quart de finale face à la
              Danoise Lisa Kjaer, championne paralympique des - de 58 kg aux
              Jeux de Tokyo 2020.
            </p>
            <p className={styles.section_text}>
              La demie-finale s'est mieux déroulée, malgré un début de match
              compliqué. Poussée par le public en lièce, elle a su renverser la
              tendance et finalement remporter ce combat pour rejoindre la
              finale.
            </p>
            <p className={styles.section_text}>
              Dans un Grand Palais survolté et une ambiance de folie, Djelika a
              tenu tête à la numéro 2 mondial pendant les premières minutes de
              la finale, mais s'est fait distancer en fin de combat, s'inclinant
              13-7. Une superbe performance pour elle, qui a commencé le
              Taekwondo il y a 5 ans seulement !
            </p>
          </section>

          <section className={styles.article_section}>
            <h3 className={styles.section_subtitle}>
              Un immense bravo également à Zakia Khudadadi
            </h3>
            <figure className={styles.section_imagecontainer}>
              <Image
                src="/images/articles/4-JOPARA2024/JOPARA2024-Zakia.avif"
                //
                width={1072}
                height={500}
                alt="L'athlète réfugiée Zakia Khudadadi portée en triomphe sur les épaules de son entraîneuse après sa victoire pour la médaille de bronze aux Jeux Paralympiques de Paris 2024"
                className={styles.section_image}
              ></Image>
              <figcaption className={styles.img_caption}>
                Crédits - Steph Chambers
              </figcaption>
            </figure>
            <p className={styles.section_text}></p>
            <p className={styles.section_text}>
              Zakia Khudadadi, athlète afghane ayant fui son pays sous le régime
              des Talibans, a marqué les Jeux Paralympiques de Paris 2024 en
              Para-Taekwondo par son histoire et sa résilience.
            </p>
            <p className={styles.section_text}>
              Ménacée de mort dans son pays, elle a trouvé refuge en France où
              elle s'est entraînée pour les Jeux de Paris 2024. N'ayant
              malheureusement pas obtenu à temps sa naturalisation avant le
              début de la compétition, elle a combattu sous la bannière de
              l’équipe des réfugiés et s'est offert une médaille de bronze
              qu'elle dédie à toutes les femmes afghanes.{" "}
            </p>
            <p className={styles.section_text}>
              Ces médailles nous remplissent de joie, et nous donne également
              quelques idées pour l'évolution du club pour les années à venir !
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default Article;
