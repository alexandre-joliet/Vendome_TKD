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
        <img
          src="/images/VendômeCover.jpg"
          alt="Photo de couverture présentant une vue des toits et des clochers de la ville de Vendôme"
          className={styles.main_image}
        ></img>
        <article className={styles.main_article}>
          <section className={styles.article_section}>
            <h1 className={styles.main_title}>Informations pratiques</h1>
            <p className={styles.section_text}>
              Vous trouverez ci-dessous toutes les informations concernant les
              horaires d'entraînement ainsi que les tarifs pour la saison{" "}
              <b>2023/2024</b>.
            </p>
          </section>

          <section className={styles.article_section}>
            <h2 className={styles.section_title}>Horaires des entraînements</h2>
            <table className={styles.table_hours}>
              <thead className={styles.table_head}>
                <tr>
                  <th>Cours</th>
                  <th>Jours</th>
                  <th>Horaires</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Enfants (-13 ans)</td>
                  <td>Mardis et Jeudis</td>
                  <td>18h - 19h</td>
                </tr>
                <tr>
                  <td>Adolescents & Adultes</td>
                  <td>Mardis et Jeudis</td>
                  <td>19h05 - 20h30</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className={styles.article_section}>
            <h2 className={styles.section_title}>Tarifs</h2>
            <table className={styles.table_price}>
              <thead className={styles.table_head}>
                <tr>
                  <th>Catégories</th>
                  <th>Tarifs</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Enfants (-13 ans)</td>
                  <td>120€</td>
                </tr>
                <tr>
                  <td>Adolescents (13-17 ans)</td>
                  <td>130€</td>
                </tr>
                <tr>
                  <td>Adultes</td>
                  <td>150€</td>
                </tr>
                <tr>
                  <td>License (obligatoire)</td>
                  <td>35€</td>
                </tr>
                <tr>
                  <td>Passeport (achat unique)</td>
                  <td>20€</td>
                </tr>
              </tbody>
            </table>
            <h4 className={styles.section_equipment}>
              &#128161; Note sur l'équipement :
            </h4>
            <p className={styles.equipment_text}>
              L'achat de Dobok (tenue traditionnelle) ou d'équipements de
              protection n'est pas nécessaire pour débuter la pratique du
              Taekwnondo. <b>Une tenue de sport</b> appropriée suffit !
            </p>

            <p className={styles.equipment_text}>
              De plus, nous organisons en début de saison également des
              commandes groupées avec notre fournisseur pour équiper ceux qui le
              souhaitent tout en bénéficiant de réductions.
            </p>
          </section>

          <section className={styles.article_section}>
            <h2 className={styles.section_title}>Nous trouver</h2>
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
