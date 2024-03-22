import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import styles from "./page.module.css";

const LeTaekwondo = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.main_header}>
          <h1 className={styles.main_title}>Le Taekwondo</h1>
        </section>
        <article className={styles.main_article}>
          <section className={styles.article_section}>
            <p className={styles.section_text}>
              Le Taekwondo, un art martial originaire de Corée, incarne une
              fusion harmonieuse entre la force brute et la discipline mentale.
            </p>
            <blockquote className={styles.section_quote}>
              <strong>« La voie des pieds et des poings »</strong>
            </blockquote>
            <p className={styles.section_text}>
              Avec ses racines historiques profondes remontant à des
              millénaires, le Taekwondo a évolué pour devenir bien plus qu'un
              simple système de défense. C'est un véritable mode de vie,
              imprégné de valeurs traditionnelles coréennes telles que le
              respect, la persévérance et l'auto-amélioration. Par sa
              combinaison de techniques de coups de pied spectaculaires et de
              mouvements gracieux, le Taekwondo est très apprécié à la fois pour
              sa beauté artistique et son efficacité pratique.
            </p>
          </section>

          <section className={styles.article_section}>
            <h2 className={styles.section_title}>L'Histoire du Taekwondo</h2>
            <img
              src="/images/TKDH-H.jpg"
              alt="Photographie d'une vieille estampe montrant deux personnages s'affrontant au milieu de la foule"
              className={styles.section_image}
            />
            <p className={styles.section_text}>
              Le Taekwondo puise ses racines dans une longue tradition de combat
              et de philosophie. Ses origines remontent à l'ère des Trois
              Royaumes de la Corée (57 av. J.-C. - 668 apr. J.-C.), où les
              techniques de combat étaient développées pour la défense
              personnelle et la protection des royaumes.
            </p>
            <p className={styles.section_text}>
              Cependant, le Taekwondo moderne prend véritablement forme après la
              Seconde Guerre mondiale, lorsque divers styles de combats
              traditionnels coréens sont codifiés et standardisés en un système
              unique, sous l'impulsion du gouvernement coréen désireux de
              promouvoir un art martial national.
            </p>
            <p className={styles.section_text}>
              Le véritable tournant pour le Taekwondo survient en 1955, lorsque
              la fédération coréenne de Taekwondo (KTA) est fondée. Peu de temps
              après, en 1966, la fédération internationale de Taekwondo (ITF)
              voit le jour grâce au Général Choi Hong Hi, ouvrant la voie à la
              reconnaissance mondiale de cet art martial.
            </p>
            <figure>
              <img
                src="/images/TKDH-Choi.jpg"
                alt="Photographie d'époque montrant 3 pratiquants de Taekwondo effectuant un coup de pied latéral"
                className={styles.section_image}
              />
              <figcaption className={styles.img_caption}>
                Le Général Choi (au centre) et deux autres pratiquants durant
                une démonstration
              </figcaption>
            </figure>
            <p className={styles.section_text}>
              Toutefois, des différends internes conduisent à une scission en
              1972, donnant naissance à une deuxième organisation majeure, la
              World Taekwondo Federation (rénommée WT depuis peu). Cette
              division marque le début d'une évolution divergente entre les deux
              organisations, avec des variations dans les règles, les techniques
              et les compétitions.
            </p>
            <p className={styles.section_text}>
              &#128161; <b>NB : </b>Dans notre club, nous enseignons le
              Taekwondo WT.
            </p>
            <p className={styles.section_text}>
              Depuis lors, le Taekwondo s'est répandu à travers le monde,
              devenant l'un des sports de combat les plus populaires aux Jeux
              olympiques en 2000. Sa popularité repose non seulement sur son
              efficacité en tant qu'art de self-défense, mais aussi sur les
              valeurs qu'il promeut : discipline, respect, persévérance et
              contrôle de soi. Aujourd'hui, le Taekwondo est pratiqué par des
              millions de personnes de tous âges et de tous horizons, incarnant
              à la fois un héritage culturel riche et une discipline physique et
              mentale exigeante.
            </p>
            <figure>
              <img
                src="/images/TKDH-M.jpg"
                alt="Photographie moderne montrant deux combattants lors des JO de 2016.3 L'un des combattants porte un coup de pied retourné à la tête de son adversaire"
                className={styles.section_image}
              />
              <figcaption className={styles.img_caption}>
                Deux combattants lors des JO de 2016 - <br />
                <a href="https://commons.wikimedia.org/wiki/File:Milad_Kharchegani_at_the_2016_Summer_Olympics.jpg">
                  Tasnim News Agency
                </a>
                ,{" "}
                <a href="https://creativecommons.org/licenses/by/4.0">
                  CC BY 4.0
                </a>
                , via Wikimedia Commons
              </figcaption>
            </figure>
          </section>

          <div className={styles.bg_wrapper}>
            <section className={styles.article_section}>
              <h2 className={styles.section_title}>
                Les composantes du Taekwondo
              </h2>
              <section className={styles.card_container}>
                <div
                  className={`${styles.card_header} ${styles.card_header_poomsae}`}
                >
                  <h1 className={styles.card_title}>Les Poomsaes</h1>
                </div>
                <p className={styles.card_text}>
                  Un poomsae est un combat codifié contre plusieurs adversaires
                  imaginaires utilisant des mouvements et des positions de base
                  : coup de pieds, coups de poings et blocages.
                </p>
              </section>

              <section className={styles.card_container}>
                <div
                  className={`${styles.card_header} ${styles.card_header_combat}`}
                >
                  <h1 className={styles.card_title}>Le Combat</h1>
                </div>
                <p className={styles.card_text}>
                  Activité d'opposition face à un adversaire en utilisant des
                  techniques de pieds et de poings et de stratégies d'attaque et
                  de défense. C'est la forme de pratique présentée aux Jeux
                  Olympiques. Le port des protections permet de pratiquer en
                  toute sécurité.
                </p>
              </section>

              <section className={styles.card_container}>
                <div
                  className={`${styles.card_header} ${styles.card_header_hoshinsoul}`}
                >
                  <h1 className={styles.card_title}>Ho Shin Soul</h1>
                </div>
                <p className={styles.card_text}>
                  Ensemble de techniques de self-défense : clefs, balayages,
                  projection et contrôle articulaire. Il est utilisé contre des
                  attaques ou des saisies. Le Ho Shin Soul complête la pratique
                  du Taekwondo.
                </p>
              </section>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default LeTaekwondo;
