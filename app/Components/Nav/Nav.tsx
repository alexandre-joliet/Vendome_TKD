import Link from "next/link";
import styles from "./page.module.css";
import { useEffect, useRef, useState } from "react";

const Nav = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  const handleOpenMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const openClass = menuIsOpen ? styles.open_nav : "";

  const elementRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: any) => {
    if (elementRef.current && !elementRef.current.contains(event.target)) {
      setMenuIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  return (
    <>
      <nav className={`${styles.nav} ${openClass}`} ref={elementRef}>
        <button onClick={handleOpenMenu} className={styles.nav_button}>
          <span className={styles.button_bar}></span>
        </button>
        <div className={`${styles.nav_container} ${openClass}`}>
          <h4 className={styles.nav_title}>Menu</h4>
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
        </div>
      </nav>
    </>
  );
};

export default Nav;
