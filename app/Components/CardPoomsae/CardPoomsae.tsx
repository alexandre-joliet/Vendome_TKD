"use client";
import { PoomsaeType } from "@/app/types/poomsae";
import styles from "./page.module.css";
import { useState } from "react";

type PoomsaeProps = {
  poomsae: PoomsaeType;
};

const CardPoomsae = ({ poomsae }: PoomsaeProps) => {
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

  const bgPoomsae = () => {
    let className = "";
    const poomsaeId = poomsae.id;

    if (poomsaeId === 1 || poomsaeId === 2) {
      className = `${styles.bg_poomsaeyellow}`;
    } else if (poomsaeId === 3 || poomsaeId === 4 || poomsaeId === 5) {
      className = `${styles.bg_poomsaeblue}`;
    } else {
      className = `${styles.bg_poomsaered}`;
    }
    return className;
  };

  return (
    <>
      <section className={styles.section_poomsae}>
        <div
          className={`${styles.name_container} ${bgPoomsae()}`}
          onClick={handleExpandCard}
        >
          <h4 className={styles.poomsae_name}>
            {poomsae.id} - {poomsae.name}
          </h4>
          <button className={`${styles.expand_toggler} ${toggleClass}`}>
            <img
              src="/icons/expand_more_white_24dp.svg"
              alt="Dérouler le texte"
            />
          </button>
        </div>
        <div className={`${styles.content_container} ${expandClass}`}>
          <p className={styles.poomsae_description}>{poomsae.description}</p>
          <img src={poomsae.picture} alt="" />
          <h5 className={styles.poomsae_ressources}>Ressources</h5>
          <ul className={styles.poomsae_list}>
            <li>
              <span className={styles.emoji}>&#128218;</span>
              <a href={poomsae.file_pdf} target="_blank">
                Télécharger la fiche PDF
              </a>
            </li>
            <li>
              <span className={styles.emoji}>&#127909;</span>
              <a href={poomsae.video} target="_blank">
                Continuer vers la vidéo Youtube (en anglais)
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default CardPoomsae;
