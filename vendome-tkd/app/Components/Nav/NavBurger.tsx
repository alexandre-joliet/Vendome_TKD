import styles from "./page.module.css";

type Props = {
  menuIsOpen: boolean;
  onClickMenu: (state: boolean) => void;
};

const NavBurger = ({ menuIsOpen, onClickMenu }: Props) => {
  const handleCloseMenu = () => {
    onClickMenu(false);
  };

  const hiddenMenu = menuIsOpen
    ? `${styles.visibleMenu}`
    : `${styles.hiddenMenu}`;

  return (
    <div className={`${styles.nav_container} ${hiddenMenu}`}>
      <img
        className={styles.header_closenavicon}
        src="/icons/close_light_48dp.svg"
        alt="Fermer le menu"
        onClick={handleCloseMenu}
      ></img>
      <h4 className={styles.nav_title}>Menu</h4>
      <nav className={styles.nav}>
        <ul className={styles.nav_list}>
          <li>
            <a href="/le-club" className={styles.nav_items}>
              Découvrir le club
            </a>
          </li>
          <li>
            <a href="/infos" className={styles.nav_items}>
              Informations pratiques
            </a>
          </li>
          <li>
            <a href="/le-taekwondo" className={styles.nav_items}>
              Découvrir le Taekwondo
            </a>
          </li>
          <li>
            <a href="/lexique-poomsaes" className={styles.nav_items}>
              Lexique
            </a>
          </li>
          <li>
            <a href="/contact" className={styles.nav_items}>
              Nous contacter
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBurger;
