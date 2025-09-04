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
                        <p className={styles.section_date}>04/09/2025</p>
                        <p className={styles.section_text}>
                            Ne manquez pas la Fête des Sports et des
                            Associations de Vendôme, qui se tiendra le samedi{" "}
                            <strong>06 Septembre 2025</strong> ! L'occasion de
                            découvrir toutes les associations sportives et
                            culturelles présentes dans la ville et de pouvoir
                            directement échanger avec elles.
                        </p>
                        <p className={styles.section_text}>
                            Cette année, c'est <strong>sur le stand 30</strong>{" "}
                            que vous pourrez nous retrouver. Guy, notre
                            professeur et des adhérents vous accueilleront toute
                            la journée et pourront répondre à toutes vos
                            questions.
                        </p>
                        <p className={styles.section_text}>
                            Pour les plus courageux, il sera également possible
                            de participer à des démonstrations en notre
                            compagnie, pour que vous puissiez découvrir quelques
                            facettes de ce sport en pratiquant directement avec
                            nous !
                        </p>
                        <p className={styles.section_text}>
                            On vous attend nombreux !
                        </p>
                    </section>
                    <section className={styles.article_section}>
                        <figure className={styles.section_imagecontainer}>
                            <Image
                                src="/images/articles/6-Fete_des_Sports2025/PLANFDS2025.jpg"
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
                                href="/images/articles/6-Fete_des_Sports2025/PLANFDS2025.jpg"
                                download="Plan Fête des Sports - Taekwondo"
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
