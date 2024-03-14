"use client";
import CardHome from "./Components/CardHome/CardHome";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import styles from "./page.module.css";

const Home = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <img
          src="/images/VendômeCover.jpg"
          alt="Photo de couverture présentant une vue des toits et des clochers de la ville de Vendôme"
          className={styles.main_image}
        ></img>
        <h1 className={styles.main_title}>
          Bienvenue au Taekwondo Club de Vendôme !
        </h1>
        <article className={styles.intro_article}>
          <p className={styles.intro_text}>
            Niché au cœur de la ville de Vendôme, dans le département du
            Loir-et-Cher (41), notre club offre un environnement dynamique et
            inclusif pour les pratiquants de tous âges et de tous niveaux. Que
            vous soyez un débutant curieux ou un expert chevronné, tout est mis
            en oeuvre pour vous guider à travers chaque étape de votre voyage
            dans ce noble art martial coréen.
          </p>

          <p className={styles.intro_text}>
            Au-delà de l'apprentissage des techniques de coups de pieds et de
            poings, nous nous engageons à promouvoir des valeurs telles que le
            respect, la persévérance et l'esprit d'équipe. Nos cours sont conçus
            pour favoriser le développement personnel, physique et mental de nos
            membres, les aidant ainsi à atteindre leurs objectifs, qu'il
            s'agisse de remise en forme, de compétition ou simplement de
            plaisir.
          </p>

          <p className={styles.intro_text}>
            Rejoignez-nous au Taekwondo Club de Vendôme et découvrez non
            seulement les enseignements du Taekwondo, mais aussi une communauté
            chaleureuse et solidaire prête à vous accueillir les bras ouverts.
            Que vous cherchiez à améliorer votre forme physique, à acquérir des
            compétences d'autodéfense ou à vous immerger dans la riche culture
            du Taekwondo, vous trouverez tout cela et bien plus encore parmi
            nous.
          </p>

          <p className={styles.intro_text}>A bientôt &#129355; !</p>
        </article>

        <CardHome
          CardProps={{
            image: "/images/VendômeCover.jpg",
            alt: "alt",
            title: "Découvrir le club",
            url: "/le-club",
          }}
        />
        <CardHome
          CardProps={{
            image: "/images/VendômeCover.jpg",
            alt: "alt",
            title: "Informations pratiques",
            url: "/infos",
          }}
        />
        <CardHome
          CardProps={{
            image: "/images/tkd.jpg",
            alt: "alt",
            title: "Découvrir le Taekwondo",
            url: "/le-teakwondo",
          }}
        />
        <CardHome
          CardProps={{
            image: "/images/lexique.jpg",
            alt: "alt",
            title: "Lexique",
            url: "/lexique-poomsaes",
          }}
        />
        <CardHome
          CardProps={{
            image: "/images/contact.jpg",
            alt: "alt",
            title: "Nous contacter",
            url: "/contact",
          }}
        />
      </main>
      <Footer />
    </>
  );
};

export default Home;
