import styles from "./page.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.infos_container}>
        <p className={styles.infos_title}> Taekwondo Club Vendôme</p>
        <p className={styles.infos_address}>
          6 Rue Geoffroy Martel, 41100 Vendôme
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
