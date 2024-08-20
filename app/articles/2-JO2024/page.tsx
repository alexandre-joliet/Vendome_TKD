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
            <figcaption className={styles.img_caption}>
              Crédits - Paris 2024
            </figcaption>
          </figure>
          <section className={styles.article_section}>
            <h2 className={styles.section_title}>
              Deux médailles olympiques pour le Taekwondo Français !
            </h2>
            <p className={styles.section_date}>10/08/2024</p>
            <h3 className={styles.section_subtitle}>Althéa Laurin en or !</h3>
            <figure className={styles.section_imagecontainer}>
              <Image
                src="/images/articles/2-JO2024/JO2024-Laurin.webp"
                //
                width={1072}
                height={500}
                alt="L'athlète Française Althéa Laurin brandissant le drapeau français dans son dos et éclatante de joie après sa victoire en finale des JO de Paris 2024"
                className={styles.section_image}
              ></Image>
              <figcaption className={styles.img_caption}>
                Crédits - Buda Mendes
              </figcaption>
            </figure>
            <p className={styles.section_text}>
              Althéa Laurin a marqué l'histoire du Taekwondo français en
              remportant la médaille d'or dans la catégorie des +67kg lors des
              Jeux Olympiques de Paris 2024. À 22 ans, elle devient la première
              championne olympique française dans cette discipline. Déjà
              médaillée de bronze à Tokyo en 2020, Laurin a démontré une
              progression impressionnante en dominant l'Ouzbèke Svetlana Osipova
              lors de la finale. Cette victoire confirme son statut de numéro 1
              mondiale et symbolise un tournant pour le Taekwondo en France,
              inspirant, on l'espère, une nouvelle génération de pratiquants.
            </p>
            <p className={styles.section_text}>
              Althéa a su s’imposer dans une compétition particulièrement
              exigeante, où elle a su utiliser son agilité, sa technique et sa
              détermination pour surpasser ses adversaires. La finale contre
              Osipova a été un véritable test de sa résilience et de son talent,
              et elle l'a remporté à la toute dernière seconde, offrant à la
              France une victoire mémorable sur le sol national.
            </p>
          </section>

          <section className={styles.article_section}>
            <h3 className={styles.section_subtitle}>
              Du bronze pour Cyrian Ravet
            </h3>
            <figure className={styles.section_imagecontainer}>
              <Image
                src="/images/articles/2-JO2024/JO2024-Ravet.avif"
                //
                width={1072}
                height={500}
                alt="L'athlète Cyrian Ravet Laurin fêtant sa médaille de bronze en brandissant le drapeau tricolore lors des JO de Paris 2024"
                className={styles.section_image}
              ></Image>
              <figcaption className={styles.img_caption}>
                Crédits - Getty Images
              </figcaption>
            </figure>
            <p className={styles.section_text}></p>
            <p className={styles.section_text}>
              Cyrian Ravet a remporté quant à lui la médaille de bronze en
              Taekwondo aux après une victoire en repêchage contre le
              Vénézuélien Yohandri Granado. Il a obtenu la médaille pour la
              troisième place sans combattre , son adversaire italien Vito
              Dell'Aquila ayant déclaré forfait. Ravet s'est dit heureux et
              soulagé, exprimant sa fierté de remporter cette médaille devant
              ses proches.
            </p>
            <p className={styles.section_text}>
              Nous sommes bien entendu très fiers de ces résultats et de l'image
              plus que positive que cela renvoit sur le Teakwondo français sur
              la scène internationale.
            </p>
            <p className={styles.section_text}>
              Félicitations à eux et encore merci pour ces moments d'émotions !
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default Article;
