import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import styles from "./page.module.css";

const Infos = () => {
  const MapSize = {
    width: "100%",
    radius: "10px",
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.main_header}>
          <h1 className={styles.main_title}>Informations pratiques</h1>
        </section>
        <article className={styles.main_article}>
          <section className={styles.article_section}>
            <p className={styles.section_text}>
              Vous trouverez ci-dessous toutes les informations concernant les
              horaires d'entraînement, les tarifs pour la saison{" "}
              <b>2023/2024</b> et l'adresse de notre Dojang.
            </p>
          </section>

          <section className={styles.article_section}>
            <h2 className={styles.section_title}>
              <img
                src="/icons/schedule_black_24dp.svg"
                alt=""
                aria-hidden="true"
              />
              Horaires des entraînements
            </h2>
            <p className={styles.section_text}>
              Les entrainements ont lieu tous les <b>Mardis et Jeudis</b> aux
              horaires suivantes :
            </p>
            <table className={styles.table_hours}>
              <tbody>
                <tr>
                  <td>Enfants (-13 ans)</td>
                  <td className={styles.hours}>18h - 19h</td>
                </tr>
                <tr>
                  <td>Adolescents & Adultes</td>
                  <td className={styles.hours}>19h05 - 20h30</td>
                </tr>
              </tbody>
            </table>
            <h4 className={styles.section_note}>
              &#128161; Vacances scolaires :
            </h4>
            <p className={styles.note_text}>
              Sauf mention contraire du professeur, aucun cours n'a lieu durant
              les vacances scolaires.
            </p>
          </section>

          <section className={styles.article_section}>
            <h2 className={styles.section_title}>
              <img src="/icons/euro_black_24dp.svg" alt="" aria-hidden="true" />
              Tarifs
            </h2>
            <table className={styles.table_price}>
              <tbody>
                <tr>
                  <td className={styles.table_row}>Enfants (-13 ans)</td>
                  <td className={styles.price}>120€</td>
                </tr>
                <tr>
                  <td>Adolescents (13-17 ans)</td>
                  <td className={styles.price}>130€</td>
                </tr>
                <tr>
                  <td>Adultes</td>
                  <td className={styles.price}>150€</td>
                </tr>
                <tr>
                  <td>Licence (obligatoire)</td>
                  <td className={styles.price}>35€</td>
                </tr>
                <tr>
                  <td>Passeport (achat unique)</td>
                  <td className={styles.price}>20€</td>
                </tr>
              </tbody>
            </table>
            <h4 className={styles.section_note}>
              &#128161; Note sur l'équipement :
            </h4>
            <p className={styles.note_text}>
              L'achat de Dobok (tenue traditionnelle) ou d'équipements de
              protection n'est pas nécessaire pour débuter la pratique du
              Taekwnondo. <b>Une tenue de sport</b> appropriée suffit !
            </p>

            <p className={styles.note_text}>
              De plus, nous organisons en début de saison également des
              commandes groupées avec notre fournisseur pour équiper ceux qui le
              souhaitent tout en bénéficiant de réductions.
            </p>
          </section>

          <section className={styles.article_section}>
            <h2 className={styles.section_title}>
              <img
                src="/icons/location_on_black_24dp.svg"
                alt=""
                aria-hidden="true"
              />
              Nous trouver
            </h2>
            <p className={styles.location_text}>
              Tous les entrainements ont lieu au{" "}
              <b>Complexe Sportif d'Arts Martiaux</b> de Vendôme situé au :
            </p>
            <p className={styles.location_address}>
              6 Rue Geoffroy Martel, 41100 Vendôme
            </p>
            <p className={styles.location_text}>
              Un parking est à disposition juste à côté du complexe pour
              stationner.
            </p>

            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=1.0679805278778078%2C47.78808242879076%2C1.0789024829864504%2C47.79619128338885&amp;layer=mapnik&amp;marker=47.79213701425164%2C1.073441505432129"
              width={MapSize.width}
              height="300"
              style={{ border: 0, borderRadius: "10px" }}
              className={styles.map_iframe}
            ></iframe>
            {/* <br />
            <small>
              <a href="https://www.openstreetmap.org/?mlat=47.79214&amp;mlon=1.07344#map=17/47.79214/1.07344">
                Afficher une carte plus grande
              </a>
            </small> */}
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default Infos;
