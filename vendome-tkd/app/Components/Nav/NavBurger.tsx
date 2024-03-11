import styles from "./page.module.css";

const NavBurger = () => {
  return (
    <div className={styles.nav_container}>
      <img
        className={styles.header_closenavicon}
        src="/icons/close_light_48dp.svg"
        alt="Fermer le menu"
      ></img>
      <h4 className={styles.nav_title}>Menu</h4>
      <nav className={styles.nav}>
        <ul className={styles.nav_list}>
          <li>Découvrir le club</li>
          <li>Informations pratiques</li>
          <li>Découvrir le Taekwondo</li>
          <li>Lexique</li>
          <li>Nous contacter</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBurger;
