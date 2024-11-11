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
                            src="/images/articles/5-Championnat_Vendome/Championship.webp"
                            //
                            width={1072}
                            height={500}
                            alt="Photographie d'une coupe dorée prise en gros plan"
                            className={styles.section_coverimage}
                        ></Image>
                        <figcaption className={styles.img_captioncover}>
                            Crédits - Unsplash
                        </figcaption>
                    </figure>
                    <section className={styles.article_section}>
                        <h2 className={styles.section_title}>
                            Le prochain championnat régional aura lieu à Vendôme
                        </h2>
                        <p className={styles.section_date}>02/09/2024</p>
                        <p className={styles.section_text}>
                            Nous sommes ravis de vous annoncer la prochaine
                            compétition régionale de Taekwondo, co-organisée par
                            la Région Centre Val de Loire, notre club et la
                            Ville de Vendôme !
                        </p>
                        <p className={styles.section_text}>
                            Elle aura lieu le dimanche{" "}
                            <strong>8 Décembre 2024</strong> au{" "}
                            <strong>
                                Dojo des Grands Prés, 6 Rue Geoffroy Martel,
                                41100 Vendôme
                            </strong>
                            .
                        </p>

                        {/* <h3 className={styles.section_subtitle}>
                            Une journée exceptionnelle
                        </h3> */}
                        <p className={styles.section_text}>
                            Cet événement sera l'occasion de découvrir et de
                            célébrer le talent et la détermination de nos
                            athlètes régionaux ! Venez soutenir les
                            compétiteurs, des plus jeunes aux plus expérimentés,
                            dans un esprit de respect et de fair-play.
                        </p>

                        <p className={styles.section_text}>
                            Que vous soyez passionné de sports de combat ou
                            simplement curieux, rejoignez-nous pour une journée
                            riche en émotions et en performances !
                        </p>

                        <p className={styles.section_text}>Entrée gratuite !</p>
                        <figure className={styles.section_imagecontainer}>
                            <Image
                                src="/images/articles/5-Championnat_Vendome/Championnat_Vendome.jpeg"
                                //
                                width={1072}
                                height={500}
                                alt="Affiche présentant les modalités de la compétition qui aura lieu prochainement à Vendôme"
                                className={styles.section_image_full}
                            ></Image>
                            {/* <figcaption className={styles.img_caption}>
                                Crédits -
                            </figcaption> */}
                        </figure>
                    </section>
                </article>
            </main>
            <Footer />
        </>
    );
};

export default Article;
