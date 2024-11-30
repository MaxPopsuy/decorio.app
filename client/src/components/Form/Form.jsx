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
      <h2 className={styles.formSection__title}>Contact Us</h2>
      <p className={styles.formSection__description}>
        Have a project in mind? Let us know, and we'll bring it to life!
      </p>
      <form onSubmit={handleSubmit} className={styles.formSection__form}>
        {state.succeeded ? (
          <div className={styles.formSection__successMessage}>
            <p>Thanks for contacting us! We will get back to you soon.</p>
          </div>
        ) : (
          <>
            <div className={styles.formSection__inputGroup}>
              <label htmlFor="email" className={styles.formSection__label}>
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className={styles.formSection__input}
              />
              <ValidationError
                prefix="Email"
                field="email"
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
                placeholder="Optional"
              />
            </div>

            {/* Conditional Message Field */}
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

            {!showMessage && (
              <button
                type="button"
                onClick={() => setShowMessage(true)}
                className={styles.formSection__showMessageButton}
              >
                Add a Message (Optional)
              </button>
            )}

            <button
              type="submit"
              className={styles.formSection__submit}
              disabled={state.submitting}
            >
              Submit
            </button>
          </>
        )}
      </form>
    </section>
  );
};

export default Form;
