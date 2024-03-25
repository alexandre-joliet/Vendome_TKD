"use client";
import { FormEvent, useState } from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import styles from "./page.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(name, mail, message);
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.main_header}>
          <h1 className={styles.main_title}>Contact</h1>
        </section>
        <article className={styles.main_article}>
          <section className={styles.article_section}>
            <p className={styles.section_text}>
              Une question ? N'hésitez pas à nous contacter via le formulaire
              ci-dessous. Nous vous répondrons dès que possible !
            </p>{" "}
            <h2 className={styles.section_title}>Formulaire de contact</h2>
            <form onSubmit={handleFormSubmit} className={styles.form}>
              <label htmlFor="name" id="name" className={styles.form_label}>
                Votre nom{" "}
                <span className={styles.label_required}>(requis)</span>
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className={styles.form_input}
              />
              <label htmlFor="mail" id="mail" className={styles.form_label}>
                Votre adresse mail{" "}
                <span className={styles.label_required}>(requis)</span>
              </label>
              <input
                type="mail"
                id="mail"
                value={mail}
                onChange={(event) => setMail(event.target.value)}
                className={styles.form_input}
              />
              <label
                htmlFor="message"
                id="message"
                className={styles.form_label}
              >
                Votre message{" "}
                <span className={styles.label_required}>(requis)</span>
              </label>
              <textarea
                id="message"
                rows={10}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className={styles.form_text}
              />
              <button type="submit" className={styles.form_button}>
                Envoyer
              </button>
            </form>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
