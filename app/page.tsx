"use client";
import CardHome from "./Components/CardHome/CardHome";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import NewsCard from "./Components/NewsCard/NewsCard";
import styles from "./page.module.css";
import { useRef } from "react";
import articles from "../public/articles/articles";

const Home = () => {
  const newsContainer = useRef<HTMLDivElement>(null);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.main_header}>
          <h1 className={styles.main_title}>
            Vendôme <br />
            Taekwondo Club
          </h1>
        </section>
        <div className={styles.global_wrapper}>
          <article className={styles.intro_article}>
            <p className={styles.intro_textwelcome}>Bienvenue !</p>
            <p className={styles.intro_text}>
              Situé au cœur de la ville de Vendôme, dans le département du
              Loir-et-Cher (41), notre club offre un environnement dynamique
              pour tous les pratiquants. Peu importe votre niveau, tout est mis
              en oeuvre pour vous guider à travers chaque étape de votre voyage
              dans ce noble art martial coréen.
            </p>
            <p className={styles.intro_text}>
              Que vous cherchiez à améliorer votre forme physique, à acquérir
              des compétences d'autodéfense ou à vous immerger dans la riche
              culture du Taekwondo, vous trouverez tout cela et bien plus encore
              parmi nous.
            </p>
            <p className={styles.intro_text}>
              <b>A bientôt</b> &#129355; !
            </p>
            <section>
              <h2 className={styles.section_title}>Nos valeurs</h2>
              <div className={styles.intro_values}>
                <div className={styles.value_card}>
                  <img
                    src="/icons/inclusive.svg"
                    alt=""
                    className={styles.value_icon}
                  />
                  <p className={styles.value_title}>Inclusivité</p>
                  <p className={styles.value_text}>
                    Notre club offre un environnement dynamique et inclusif pour
                    les pratiquants de tous âges, de tous niveaux et de tous
                    horizons.
                  </p>
                </div>
                <div className={styles.value_card}>
                  <img
                    src="/icons/respect.svg"
                    alt=""
                    className={styles.value_icon}
                  />
                  <p className={styles.value_title}>Respect</p>
                  <p className={styles.value_text}>
                    Nous sommes avant tout là pour apprendre, quelque soit notre
                    niveau. Respect et bienveillance sont donc les maîtres mots
                    de notre enseignement.
                  </p>
                </div>
                <div className={styles.value_card}>
                  <img
                    src="/icons/excellence.svg"
                    alt=""
                    className={styles.value_icon}
                  />
                  <p className={styles.value_title}>Persévérance</p>
                  <p className={styles.value_text}>
                    Nos cours sont conçus pour favoriser le développement
                    personnel, physique et mental de nos membres, les aidant
                    ainsi à atteindre leurs objectifs et à se dépasser.
                  </p>
                </div>
                <div className={styles.value_card}>
                  <img
                    src="/icons/team.svg"
                    alt=""
                    className={styles.value_icon}
                  />
                  <p className={styles.value_title}>Esprit d'équipe</p>
                  <p className={styles.value_text}>
                    Rejoignez une communauté chaleureuse et solidaire prête à
                    vous accueillir les bras ouverts dans une ambiance
                    conviviale.
                  </p>
                </div>
              </div>
            </section>
          </article>
          <article className={styles.intro_article}>
            <section>
              <h2 className={styles.section_title}>Notre actualité</h2>

              <div className={styles.news_wrapper}>
                <div
                  className={`${styles.newscard_container}`}
                  ref={newsContainer}
                  id="newsContainer"
                >
                  {articles.map((item) => {
                    return <NewsCard article={item} key={item.id}></NewsCard>;
                  })}
                </div>
              </div>
            </section>
          </article>
        </div>

        <div className={styles.bg_wrapper}>
          <div className={styles.cards_container}>
            <CardHome
              CardProps={{
                image: "/images/AICover2.jpeg",
                alt: "alt",
                title: "S'informer sur le club",
                url: "/le-club",
              }}
            />
            <CardHome
              CardProps={{
                image: "/images/infos.webp",
                alt: "alt",
                title: "Informations pratiques",
                url: "/infos",
              }}
            />
            <CardHome
              CardProps={{
                image: "/images/tkd.webp",
                alt: "alt",
                title: "Découvrir le Taekwondo",
                url: "/le-teakwondo",
              }}
            />
            <CardHome
              CardProps={{
                image: "/images/lexique.webp",
                alt: "alt",
                title: "Lexique et poomsaes",
                url: "/lexique-poomsaes",
              }}
            />
            <CardHome
              CardProps={{
                image: "/images/contact.webp",
                alt: "alt",
                title: "Nous contacter",
                url: "/contact",
              }}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
