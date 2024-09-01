import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import styles from "./page.module.css";

const LeClub = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.main_header}>
          <h1 className={styles.main_title}>Le club</h1>
        </section>
        <article className={styles.main_article}>
          <section className={styles.article_section}>
            <p className={styles.section_text}>
              Fondé en 2019 par notre professeur <strong>Guy NGUENANG</strong>,
              le Taekwondo Club de Vendôme compte aujourd'hui une cinquantaine
              d'adhérents, toutes tranches d'âge et niveaux confondus.
            </p>
          </section>
          <section className={styles.article_section}>
            <h2 className={styles.section_title}>
              Notre professeur, Guy NGUENANG
            </h2>
            <div className={styles.section_container}>
              <img
                src="/images/le-club/guy/Guy-buste.webp"
                alt="Portait de Guy, vêtu du dobok blanc à col noir, tenue traditionnelle portée par les pratiquants gradés de Taekwondo"
                className={styles.section_image}
              />
              <p className={styles.section_text}>
                "Passionné de sport depuis le plus jeune âge, j'ai découvert les
                arts martiaux à l'âge de 10 ans et commencé la pratique du
                Taekwondo trois ans plus tard au YUC Boom So Taekwondo au
                Cameroun. C’est là, sous l’enseignement de Maître Fabrice
                MAICKA, que m'ont été transmises les valeurs les plus pures du
                Taekwondo et que mon amour de ce sport est né.
              </p>
              <p className={styles.section_text}>
                Après avoir participé à quelques tournois, aussi bien nationaux
                qu'internationaux, j’ai vite compris que ma véritable vocation
                était de transmettre ce que j'avais appris. C'est donc tout
                naturellement que j'ai décidé de me tourner vers l'enseignement
                de cet art martial en y dédiant une part majeure de mon temps.
                Fort de mes années d'expérience accumulées à travers une
                pratique assidue, je partage au plus grand nombre cette passion
                qui m’anime depuis si longtemps, tout en faisant découvrir
                l’esprit du Taekwondo.
              </p>
              <p className={styles.section_text}>
                C'est un véritable honneur pour moi aujourd'hui de pouvoir
                transmettre les valeurs de ce sport qui m'ont tant apporté et
                d’accompagner tous les pratiquants et pratiquantes dans leur
                développement tant physique que martial.
              </p>
              <h3 className={styles.section_subtitle}>
                Une approche mêlant traditionnel et modernisme
              </h3>
              <p className={styles.section_text}>
                Spécialisé dans la pratique traditionnelle, mes programmes sont
                conçus pour répondre à vos besoins en matière de sport et de
                bien-être, que vous soyez débutant(e) ou athlète chevronné(e).
                En plus de mon enseignement traditionnel, j'intègre également
                une approche moderne à la pratique. Cette polyvalence stimule ma
                créativité en tant qu'enseignant et me permet de rester
                pleinement connecté à la fois aux aspects traditionnels et
                modernes de la discipline.
              </p>
              <h3 className={styles.section_subtitle}>
                Mes engagements en tant que professeur
              </h3>
              <p className={styles.section_text}>
                Je m'engage à vous accompagner dans l'atteinte de vos objectifs
                sport-santé, tels que : renforcer votre confiance en vous,
                développer vos compétences techniques en Taekwondo, stimuler et
                augmenter votre endurance, améliorer votre respiration,
                développer votre explosivité, préparer votre corps à la
                résistance, progresser et, surtout, vous surpasser !"
              </p>
              <p className={styles.section_textclosure}>
                감사합니다 <br />(<i>"Kamsa Hamnida"</i> - Merci en coréen)
              </p>
            </div>
          </section>
          {/* <div className={styles.bg_wrapper}>
            <section className={styles.article_section}>
              <h2 className={styles.section_title}>Présentation du bureau</h2>

              <p className={styles.section_text}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
                provident vitae ducimus ipsam est molestias, voluptates, illum
                sequi quam beatae placeat aliquid, blanditiis animi dignissimos!
                Est, adipisci modi. Nobis, voluptate? Placeat temporibus vel
                corrupti!
              </p>

              <div className={styles.board_wrapper}>
                <div className={styles.board_container}>
                  <img
                    src="/images/avatar.jpg"
                    alt=""
                    className={styles.board_avatar}
                  />
                  <div className={styles.board_infos}>
                    <p className={styles.board_position}>Position</p>
                    <p className={styles.board_name}>John Doe</p>

                    <p className={styles.board_bio}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure aspernatur labore molestias vel laborum obcaecati
                      earum corrupti eum, ipsam laboriosam aliquam minus quo nam
                      tempora, ex ducimus saepe laudantium placeat!
                    </p>
                  </div>
                </div>
                <div className={styles.board_container}>
                  <img
                    src="/images/avatar.jpg"
                    alt=""
                    className={styles.board_avatar}
                  />
                  <div className={styles.board_infos}>
                    <p className={styles.board_position}>Position</p>
                    <p className={styles.board_name}>John Doe</p>

                    <p className={styles.board_bio}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure aspernatur labore molestias vel laborum obcaecati
                      earum corrupti eum, ipsam laboriosam aliquam minus quo nam
                      tempora, ex ducimus saepe laudantium placeat!
                    </p>
                  </div>
                </div>
                <div className={styles.board_container}>
                  <img
                    src="/images/avatar.jpg"
                    alt=""
                    className={styles.board_avatar}
                  />
                  <div className={styles.board_infos}>
                    <p className={styles.board_position}>Position</p>
                    <p className={styles.board_name}>John Doe</p>

                    <p className={styles.board_bio}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure aspernatur labore molestias vel laborum obcaecati
                      earum corrupti eum, ipsam laboriosam aliquam minus quo nam
                      tempora, ex ducimus saepe laudantium placeat!
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.section_highlight}>
                <p className={styles.section_subtitle}>Adresse du bureau :</p>
                <p className={styles.section_text}>
                  2 Rue Jacques Offenbach, 41100 Vendôme
                </p>
              </div>
            </section>
          </div> */}
        </article>
      </main>
      <Footer />
    </>
  );
};

export default LeClub;
