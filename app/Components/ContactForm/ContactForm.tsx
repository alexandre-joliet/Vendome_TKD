"use client";
import { FormEvent, useState } from "react";
import styles from "./page.module.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeyMail, setHoneyMail] = useState("");
  const [validationMessage, setValidationMessage] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // honeypot condition
    if (honeyMail != "") {
      setValidationMessage(true);
      // setName("");
      // setEmail("");
      // setMessage("");
      setModalOpen(true);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          mail: email,
          message: message,
        }),
        headers: {
          "content-type": "application/json",
        },
      });

      if (!response.ok) {
        console.log("falling over");
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData["message"]);

      alert("Message successfully sent");
    } catch (error: any) {
      console.error("Error:", error);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} className={styles.form}>
        <label htmlFor="name" className={styles.form_label}>
          Votre nom <span className={styles.label_required}>(requis)</span>
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          className={styles.form_input}
        />
        <label htmlFor="mail" className={styles.form_label}>
          Votre adresse mail{" "}
          <span className={styles.label_required}>(requis)</span>
        </label>
        <input
          type="email"
          id="mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          className={styles.form_input}
        />
        <label htmlFor="message" className={styles.form_label}>
          Votre message <span className={styles.label_required}>(requis)</span>
        </label>
        <textarea
          id="message"
          rows={10}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
          className={styles.form_text}
        />
        {/* form honeypot for bots */}
        <input
          type="email"
          name="real_mail"
          value={honeyMail}
          onChange={(event) => setHoneyMail(event.target.value)}
          aria-hidden="true"
          className={styles.honeymail}
        />{" "}
        <button type="submit" className={styles.form_button}>
          Envoyer
        </button>
      </form>
      {validationMessage && modalOpen && (
        <div className={styles.modal_bg}>
          <dialog open className={styles.modal}>
            <p className={styles.modal_text}>
              Votre message a bien été envoyé !
            </p>
            <form method="dialog">
              <button
                autoFocus
                onClick={handleCloseModal}
                className={styles.modal_button}
              >
                Fermer
              </button>
            </form>
          </dialog>
        </div>
      )}
    </>
  );
};

export default ContactForm;
