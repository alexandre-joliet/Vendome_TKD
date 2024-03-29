"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import NavBurger from "../Nav/NavBurger";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  const handleOpenMenu = () => {
    if (menuIsOpen === false) {
      setMenuIsOpen(true);
    } else {
      setMenuIsOpen(false);
    }
  };

  return (
    <>
      <header className={styles.header}>
        <button className={styles.button_nav}>
          <img
            className={styles.header_opennavicon}
            src="/icons/menu_light_48dp.svg"
            alt="Ouvrir le menu"
            onClick={handleOpenMenu}
          ></img>
        </button>
        <img
          className={styles.header_logo}
          src="/logos/Logo TKD Light.png"
          alt="Logo du club"
        ></img>
      </header>
      <NavBurger menuIsOpen={menuIsOpen} onClickMenu={setMenuIsOpen} />
    </>
  );
};

export default Header;
