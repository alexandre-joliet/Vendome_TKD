import Link from "next/link";
import Image from "next/image";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import styles from "./page.module.css";
import LogoFFTDA from "../../public/images/le-taekwondo/FFTDA.png";
import LogoLigue from "../../public/images/le-taekwondo/LigueCVL.jpg";

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
            <blockquote className={styles.section_quote}>
              <img
                src="/icons/martial_arts.svg"
                alt=""
                className={styles.quote_icon}
              />
              <strong>« La voie des pieds et des poings »</strong>
            </blockquote>
            <p className={styles.section_text}>
              Le Taekwondo, art martial originaire de Corée, incarne une fusion
              harmonieuse entre la force brute et la discipline mentale.
            </p>
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
            <div className={styles.section_subcontainer}>
              <figure className={styles.figure_left}>
                <img
                  src="/images/le-taekwondo/TKDH-H copie.webp"
                  alt="Photographie d'une vieille estampe montrant deux personnages s'affrontant au milieu de la foule"
                  className={styles.section_image}
                />
              </figure>
              <p className={styles.section_text}>
                Le Taekwondo puise ses racines dans une longue tradition de
                combat et de philosophie. Ses origines remontent à l'ère des
                Trois Royaumes de la Corée (57 av. JC - 668 ap. JC), où les
                techniques de combat étaient développées pour la défense
                personnelle et la protection des royaumes. Cependant, le
                Taekwondo moderne prend véritablement forme après la Seconde
                Guerre mondiale, lorsque divers styles de combats traditionnels
                coréens sont codifiés et standardisés en un système unique, sous
                l'impulsion du gouvernement coréen désireux de promouvoir un art
                martial national.
              </p>
            </div>
            {/* <p className={styles.section_text}>
              Cependant, le Taekwondo moderne prend véritablement forme après la
              Seconde Guerre mondiale, lorsque divers styles de combats
              traditionnels coréens sont codifiés et standardisés en un système
              unique, sous l'impulsion du gouvernement coréen désireux de
              promouvoir un art martial national.
            </p> */}

            <div className={styles.section_subcontainer}>
              <figure className={styles.figure_right}>
                <img
                  src="/images/le-taekwondo/TKDH-Choi copie.webp"
                  alt="Photographie d'époque montrant 2 pratiquants de Taekwondo effectuant un coup de pied latéral bloqués par un troisième personnage central"
                  className={styles.section_image}
                />
                <figcaption className={styles.img_caption}>
                  Le Général Choi (au centre) et deux autres pratiquants durant
                  une démonstration
                </figcaption>
              </figure>
              <p className={styles.section_text}>
                Le véritable tournant pour le Taekwondo survient en 1955,
                lorsque la fédération coréenne de Taekwondo (KTA) est fondée.
                Peu de temps après, en 1966, la fédération internationale de
                Taekwondo (ITF) voit le jour grâce au Général Choi Hong Hi,
                ouvrant la voie à la reconnaissance mondiale de cet art martial.
                Toutefois, des différends internes conduisent à une scission en
                1972, donnant naissance à une deuxième organisation majeure, la
                World Taekwondo Federation (renommée WT depuis peu). Cette
                division marque le début d'une évolution divergente entre les
                deux organisations, avec des variations dans les règles, les
                techniques et les compétitions.
              </p>
              <p
                className={`${styles.section_text} ${styles.section_highlight}`}
              >
                {" "}
                &#128161; <b>NB : </b>Dans notre club, nous enseignons le
                Taekwondo WT.
              </p>

              {/* <p className={styles.section_text}>
              Toutefois, des différends internes conduisent à une scission en
              1972, donnant naissance à une deuxième organisation majeure, la
              World Taekwondo Federation (renommée WT depuis peu). Cette
              division marque le début d'une évolution divergente entre les deux
              organisations, avec des variations dans les règles, les techniques
              et les compétitions.
            </p> */}
              {/* <p className={styles.section_text}>
                &#128161; <b>NB : </b>Dans notre club, nous enseignons le
                Taekwondo WT.
              </p> */}
            </div>
            <div className={styles.section_subcontainer}>
              <p className={styles.section_text}>
                Depuis lors, le Taekwondo s'est répandu à travers le monde,
                devenant l'un des sports de combat les plus populaires aux Jeux
                olympiques en 2000. Sa popularité repose non seulement sur son
                efficacité en tant qu'art de self-défense, mais aussi sur les
                valeurs qu'il promeut : discipline, respect, persévérance et
                contrôle de soi. Aujourd'hui, le Taekwondo est pratiqué par des
                millions de personnes de tous âges et de tous horizons,
                incarnant à la fois un héritage culturel riche et une discipline
                physique et mentale exigeante.
              </p>
            </div>
            <figure className={styles.figure_center}>
              <img
                src="/images/le-taekwondo/TKDH-M copie.webp"
                alt="Photographie moderne montrant deux combattants lors des JO de 2016.3 L'un des combattants porte un coup de pied retourné à la tête de son adversaire"
                className={styles.section_image}
              />
              <figcaption className={styles.img_caption}>
                Deux combattants lors des JO de 2016 - <br />
                <Link href="https://commons.wikimedia.org/wiki/File:Milad_Kharchegani_at_the_2016_Summer_Olympics.jpg">
                  Tasnim News Agency
                </Link>
                ,{" "}
                <Link href="https://creativecommons.org/licenses/by/4.0">
                  CC BY 4.0
                </Link>
                , via Wikimedia Commons
              </figcaption>
            </figure>
          </section>

          <section className={styles.article_section}>
            <h2 className={styles.section_title}>Liens utiles</h2>
            <ul className={styles.section_list}>
              <li className={styles.section_listitem}>
                <Link
                  href="https://www.fftda.fr/"
                  target="_blank"
                  className={styles.section_listitemcontent}
                >
                  <Image
                    src={LogoFFTDA}
                    width={96}
                    height={96}
                    alt="Logo de la FFTDA"
                  ></Image>
                  Fédération Française de Taekwondo et Disciplines Associées
                </Link>
              </li>
              <li className={styles.section_listitem}>
                <Link
                  href="https://www.facebook.com/LigueCVLTKD/"
                  target="_blank"
                  className={styles.section_listitemcontent}
                >
                  <Image
                    src={LogoLigue}
                    width={96}
                    height={96}
                    alt="Logo de la FFTDA"
                  ></Image>
                  Ligue Centre Val de Loire d'Arbitrage de Taekwondo
                </Link>
              </li>
            </ul>
          </section>

          <div className={styles.bg_wrapper}>
            <section className={styles.article_section}>
              <h2 className={styles.section_title}>
                Les composantes du Taekwondo
              </h2>
              <div className={styles.cards_container}>
                <section className={styles.card_container}>
                  <div
                    className={`${styles.card_header} ${styles.card_header_poomsae}`}
                  >
                    <h1 className={styles.card_title}>Les Poomsaes</h1>
                  </div>
                  <p className={styles.card_text}>
                    Un poomsae est un combat codifié contre plusieurs
                    adversaires imaginaires utilisant des mouvements et des
                    positions de base : coups de pieds, coups de poings et
                    blocages.
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
                    techniques de pieds, de poings et de stratégies d'attaque et
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
                    projection et contrôle articulaire. Il est utilisé contre
                    des attaques ou des saisies. Le Ho Shin Soul complète la
                    pratique du Taekwondo.
                  </p>
                </section>
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default LeTaekwondo;
