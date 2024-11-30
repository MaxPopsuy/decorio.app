import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles from "./Form.module.scss";
import { alert } from "@pnotify/core";

const Form = () => {
  const [state, handleSubmit] = useForm("xkgnpyow");
  const [showMessage, setShowMessage] = useState(false);

  if (state.succeeded) {
    alert("Thanks for contacting us! We will get back to you soon.");
  }

  return (
    <section className={styles.formSection}>
      {state.succeeded ? (
        <div className={styles.formSection__successMessage}>
          <p className={styles.formSection__successMessage__text}>Thanks for contacting us! We will get back to you soon.</p>
        </div>
      ) : (
        <>
          <p className={styles.formSection__description}>
            Have a project in mind? Let us know, and we'll bring it to life!
          </p>
          <form onSubmit={handleSubmit} className={styles.formSection__form}>
            <div className={styles.formSection__inputGroup}>
              <label htmlFor="name" className={styles.formSection__label}>
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                required
                className={styles.formSection__input}
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>

            <div className={styles.formSection__inputGroup}>
              <label htmlFor="phone" className={styles.formSection__label}>
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                className={styles.formSection__input}
                placeholder="Phone number"
                required
              />
            </div>

            {showMessage && (
              <div className={styles.formSection__inputGroup}>
                <label htmlFor="message" className={styles.formSection__label}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={styles.formSection__textarea}
                  placeholder="Your message (optional)"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
            )}

            <button
              type="button"
              onClick={() => setShowMessage(!showMessage)}
              className={styles.formSection__showMessageButton}
            >
              {showMessage ? "Collapse" : "Extend"}
            </button>

            <button
              type="submit"
              className={styles.formSection__submit}
              disabled={state.submitting}
            >
              Submit
            </button>
          </form>
        </>
      )}
    </section>
  );
};

export default Form;
