"use client";
import { useState } from "react";
import styles from "./page.module.css";
import NavBurger from "../Nav/NavBurger";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <img
          className={styles.header_opennavicon}
          src="/icons/menu_light_48dp.svg"
          alt="Ouvrir le menu"
        ></img>
        <img
          className={styles.header_logo}
          src="/logos/Logo TKD Light.png"
          alt="Logo du club"
        ></img>
      </header>
      <NavBurger></NavBurger>
    </>
  );
};

export default Header;
