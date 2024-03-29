"use client";
import { useState } from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import styles from "./page.module.css";

const Infos = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  const handleExpandCard = () => {
    if (isExpanded) {
      setIsToggled(false);
      setIsExpanded(false);
    } else {
      setIsToggled(true);
      setIsExpanded(true);
    }
  };

  const expandClass = isExpanded ? `${styles.expanded}` : "";
  const toggleClass = isToggled ? `${styles.toggled}` : "";

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
              <img src="/icons/info_black_24dp.svg" alt="" aria-hidden="true" />
              Horaires et tarifs
            </h2>
            <p className={styles.card_free}>
              Deux cours d'essai offerts et sans engagement !
            </p>
            <div className={`${styles.card_container} ${styles.children}`}>
              <div className={styles.card_info}>
                <h3 className={styles.info_title}>Enfants (6 - 13 ans)</h3>
                <p className={styles.info_price}>
                  <span className={styles.price}>120€</span>/ pour l'année
                </p>
              </div>
              <div className={styles.card_hours}>
                <p className={styles.info_hours}>
                  <img
                    src="/icons/event_white_48dp.svg"
                    alt=""
                    aria-hidden="true"
                  />
                  Mardis et jeudis 18h - 19h
                </p>
              </div>
              <div className={styles.card_extras}>
                <table className={styles.table_price}>
                  <tbody>
                    <tr>
                      <td>
                        <span>&#11088;</span>Licence FFTDA (obligatoire)
                      </td>
                      <td className={styles.extra_price}>+35€</td>
                    </tr>
                    <tr>
                      <td>
                        <span>&#11088;</span>Passeport (obligatoire 1ère année
                        et valable 8 ans)
                      </td>
                      <td className={styles.extra_price}>+20€</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className={`${styles.card_container} ${styles.teens}`}>
              <div className={styles.card_info}>
                <h3 className={styles.info_title}>Adolescents (14 - 18 ans)</h3>
                <p className={styles.info_price}>
                  <span className={styles.price}>130€</span>/ pour l'année
                </p>
              </div>
              <div className={styles.card_hours}>
                <p className={styles.info_hours}>
                  <img
                    src="/icons/event_white_48dp.svg"
                    alt=""
                    aria-hidden="true"
                  />
                  Mardis et jeudis 18h - 19h
                </p>
              </div>
              <div className={styles.card_extras}>
                <table className={styles.table_price}>
                  <tbody>
                    <tr>
                      <td>
                        <span>&#11088;</span>Licence FFTDA (obligatoire)
                      </td>
                      <td className={styles.extra_price}>+35€</td>
                    </tr>
                    <tr>
                      <td>
                        <span>&#11088;</span>Passeport (obligatoire 1ère année
                        et valable 8 ans)
                      </td>
                      <td className={styles.extra_price}>+20€</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className={`${styles.card_container} ${styles.adults}`}>
              <div className={styles.card_info}>
                <h3 className={styles.info_title}>Adultes</h3>
                <p className={styles.info_price}>
                  <span className={styles.price}>150€</span>/ pour l'année
                </p>
              </div>
              <div className={styles.card_hours}>
                <p className={styles.info_hours}>
                  <img
                    src="/icons/event_white_48dp.svg"
                    alt=""
                    aria-hidden="true"
                  />
                  Mardis et jeudis 19h05 - 20h30
                </p>
              </div>
              <div className={styles.card_extras}>
                <table className={styles.table_price}>
                  <tbody>
                    <tr>
                      <td>
                        <span>&#11088;</span>Licence FFTDA (obligatoire)
                      </td>
                      <td className={styles.extra_price}>+35€</td>
                    </tr>
                    <tr>
                      <td>
                        <span>&#11088;</span>Passeport (obligatoire 1ère année
                        et valable 8 ans)
                      </td>
                      <td className={styles.extra_price}>+20€</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <section className={styles.section_documents}>
              <div className={styles.name_container} onClick={handleExpandCard}>
                <h4 className={styles.documents_name}>
                  Documents nécessaires pour l'inscription
                </h4>
                <button className={`${styles.expand_toggler} ${toggleClass}`}>
                  <img
                    src="/icons/expand_more_black_24dp.svg"
                    alt="Dérouler le texte"
                  />
                </button>
              </div>
              <div className={`${styles.content_container} ${expandClass}`}>
                <ul className={styles.documents_list}>
                  <li>2 photos d'identité</li>
                  <li>
                    <a
                      href="/files/VENDOME TAEKWENDO INSCRIPTION.pdf"
                      target="_blank"
                    >
                      Fiche d'inscription
                    </a>{" "}
                    complétée
                  </li>
                  <li>
                    Certificat médical de moins de 3 mois attestant de la
                    pratique du Taekwondo
                  </li>
                  <li>
                    Règlement de la cotisation et des frais annexes (licence et
                    passeport si applicable)
                  </li>
                </ul>
              </div>
            </section>

            <h4 className={styles.section_note}>
              &#128161; Vacances scolaires :
            </h4>
            <p className={styles.note_text}>
              Sauf mention contraire du professeur, aucun cours n'a lieu durant
              les vacances scolaires.
            </p>
            <h4 className={styles.section_note}>
              &#128161; Note sur l'équipement :
            </h4>
            <p className={styles.note_text}>
              L'achat de dobok (tenue traditionnelle) ou d'équipements de
              protection n'est pas nécessaire pour débuter la pratique du
              Taekwondo. <b>Une tenue de sport</b> appropriée suffit !
            </p>

            <p className={styles.note_text}>
              De plus, nous organisons en début de saison des commandes groupées
              avec notre fournisseur pour équiper ceux qui le souhaitent tout en
              bénéficiant de réductions. Si vous êtes intéressé, n'hésitez pas à
              nous en parler !
            </p>
          </section>

          <div className={styles.bg_wrapper}>
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
                style={{ border: 0 }}
                className={styles.map_iframe}
              ></iframe>
              {/* <br />
            <small>
              <a href="https://www.openstreetmap.org/?mlat=47.79214&amp;mlon=1.07344#map=17/47.79214/1.07344">
                Afficher une carte plus grande
              </a>
            </small> */}
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default Infos;
