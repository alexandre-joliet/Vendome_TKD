"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./page.module.css";
import Joi from "joi";
import Spinner from "../Spinner/Spinner";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeyMail, setHoneyMail] = useState("");
  const [validationModal, setValidationModal] = useState(false);
  const [formErrorMessage, setFormErrorMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //* VALIDATIONS
  const [nameNotificationError, setNameNotificationError] = useState(false);
  const [emailNotificationError, setEmailNotificationError] = useState(false);
  const [messageNotificationError, setMessageNotificationError] =
    useState(false);

  const handleNameValidation = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setName(value);

    const schema = Joi.string().pattern(
      new RegExp(/^[a-zàâçéèêëîïôûùüÿñæœ -']{2,50}$/i)
    );
    const validation = schema.validate(value);

    if (validation.error != undefined) {
      setNameNotificationError(true);
    } else {
      setNameNotificationError(false);
    }

    if (value === "") {
      setNameNotificationError(false);
    }
  };

  const handleEmailValidation = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);

    const schema = Joi.string().email({ tlds: false });
    const validation = schema.validate(value);

    if (validation.error != undefined) {
      setEmailNotificationError(true);
    } else {
      setEmailNotificationError(false);
    }

    if (value === "") {
      setEmailNotificationError(false);
    }
  };

  const handleMessageValidation = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setMessage(value);

    const schema = Joi.string().pattern(
      new RegExp(/^[\r\na-zàâçéèêëîïôûùüÿñæœ0-9 -'",.:;?!€()@/-]{50,2000}$/i)
    );
    const validation = schema.validate(value);

    if (validation.error != undefined) {
      setMessageNotificationError(true);
    } else {
      setMessageNotificationError(false);
    }

    if (value === "") {
      setMessageNotificationError(false);
    }
  };

  //* FORM
  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //* HONEYPOT
    if (honeyMail != "") {
      setName("");
      setEmail("");
      setMessage("");
      setValidationModal(true);
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
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
      setIsLoading(false);
      setValidationModal(true);
      setName("");
      setEmail("");
      setMessage("");
      const responseData = await response.json();
      // console.log(responseData);
    } catch (error: any) {
      console.error("Error:", error);
      setIsLoading(false);
      setFormErrorMessage(true);
    }
  };

  const handleCloseModal = () => {
    setValidationModal(false);
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
          onChange={(event) => handleNameValidation(event)}
          required
          className={styles.form_input}
        />
        {nameNotificationError === true && (
          <div className={styles.error_notification}>
            <p>
              Le nom renseigné n&apos;est pas valide. Il doit faire au miminum 2
              caractères et ne pas contenir de caractères spéciaux.
            </p>
          </div>
        )}
        <label htmlFor="mail" className={styles.form_label}>
          Votre adresse mail{" "}
          <span className={styles.label_required}>(requis)</span>
        </label>
        <input
          type="email"
          id="mail"
          value={email}
          onChange={(event) => handleEmailValidation(event)}
          required
          className={styles.form_input}
        />
        {emailNotificationError === true && (
          <div className={styles.error_notification}>
            <p>L&apos;adresse mail renseignée n&apos;est pas valide.</p>
          </div>
        )}
        <label htmlFor="message" className={styles.form_label}>
          Votre message <span className={styles.label_required}>(requis)</span>
        </label>
        <textarea
          id="message"
          rows={10}
          value={message}
          onChange={(event) => handleMessageValidation(event)}
          required
          className={styles.form_text}
        />
        {messageNotificationError === true && (
          <div className={styles.error_notification}>
            <p>
              Votre message n&apos;est pas valide. Il doit faire au miminum 50
              caractères et ne peut pas contenir certains caractères spéciaux.
            </p>
          </div>
        )}
        {/* Form honeypot for bots */}
        <input
          type="email"
          name="real_email"
          value={honeyMail}
          onChange={(event) => setHoneyMail(event.target.value)}
          aria-hidden="true"
          autoComplete="off"
          tabIndex={-1}
          className={styles.real_email}
        />{" "}
        <button type="submit" className={styles.form_button}>
          Envoyer
        </button>
        {formErrorMessage === true && (
          <div className={styles.error_form}>
            <p>
              Une erreur interne est survenue lors de l'envoi de votre message.
              Veuillez nous en excuser et réssayer plus tard.
            </p>
          </div>
        )}
      </form>
      {isLoading && <Spinner />}
      {validationModal && (
        <div className={styles.modal_bg}>
          <dialog open className={styles.modal}>
            <p className={styles.modal_text}>
              Votre message a bien été envoyé !
            </p>
            <form method="dialog">
              <button
                type="button"
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
