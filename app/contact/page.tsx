import ContactForm from "../Components/ContactForm/ContactForm";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import styles from "./page.module.css";

const Contact = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.main_header}>
          <h1 className={styles.main_title}>Contact</h1>
        </section>
        <article className={styles.main_article}>
          <section className={styles.article_section}>
            <h2 className={styles.section_title}>Formulaire de contact</h2>
            <p className={styles.section_text}>
              Une question ? N'hésitez pas à nous contacter via le formulaire
              ci-dessous. Nous vous répondrons dès que possible !
            </p>{" "}
            <ContactForm />
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
