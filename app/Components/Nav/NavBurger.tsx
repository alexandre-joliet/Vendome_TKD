import Link from "next/link";
import styles from "./page.module.css";
import { useEffect, useRef } from "react";

type Props = {
  menuIsOpen: boolean;
  onClickMenu: (state: boolean) => void;
};

const NavBurger = ({ menuIsOpen, onClickMenu }: Props) => {
  const handleCloseMenu = () => {
    onClickMenu(false);
  };

  const elementRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: any) => {
    if (elementRef.current && !elementRef.current.contains(event.target)) {
      onClickMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  const hiddenMenu = menuIsOpen
    ? `${styles.visibleMenu}`
    : `${styles.hiddenMenu}`;

  return (
    <div className={`${styles.nav_container} ${hiddenMenu}`} ref={elementRef}>
      <button className={styles.button_nav}>
        <img
          className={styles.header_closenavicon}
          src="/icons/close_light_48dp.svg"
          alt="Fermer le menu"
          onClick={handleCloseMenu}
        ></img>
      </button>
      <h4 className={styles.nav_title}>Menu</h4>
      <nav className={styles.nav}>
        <ul className={styles.nav_list}>
          <li>
            <Link href="/" className={styles.nav_items}>
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/articles" className={styles.nav_items}>
              Actualités
            </Link>
          </li>
          {/* <li>
            <Link href="/le-club" className={styles.nav_items}>
              Découvrir le club
            </Link>
          </li> */}
          <li>
            <Link href="/infos" className={styles.nav_items}>
              Informations pratiques
            </Link>
          </li>
          <li>
            <Link href="/le-taekwondo" className={styles.nav_items}>
              Découvrir le Taekwondo
            </Link>
          </li>
          <li>
            <Link href="/lexique-poomsaes" className={styles.nav_items}>
              Lexique
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.nav_items}>
              Nous contacter
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBurger;
