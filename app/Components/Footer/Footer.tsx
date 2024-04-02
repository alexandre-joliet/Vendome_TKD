import styles from "./page.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.infos_container}>
        <p className={styles.infos_title}>Vendôme Taekwondo Club</p>
        <p className={styles.infos_address}>
          2 Rue Jacques Offenbach, <br />
          41100 Vendôme
        </p>
      </div>
      <a
        href="https://www.facebook.com/groups/2491193871168095?locale=fr_FR"
        target="_blank"
        className={styles.footer_social}
      >
        <img
          src="/logos/facebook.png"
          alt="Logo Facebook"
          className={styles.social_fb}
        />
      </a>
    </footer>
  );
};

export default Footer;
