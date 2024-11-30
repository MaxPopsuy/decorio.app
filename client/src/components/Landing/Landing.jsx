import React from "react";
import styles from "./Landing.module.scss";

const Landing = () => {
  return (
    <section className={styles.landing}>
      <h1 className={styles.landing__title}>
        DECORIO
      </h1>
      <p className={styles.landing__description}>
        Your trusted partner in architectural design and building orders. <br />
        From concept to creation, we turn your space into a work of art.
      </p>
      <p className={styles.landing__description}>
        Explore our collection of interior designs, renovations, and custom orders. <br />
        Let us help you create a space that reflects your style and needs.
      </p>
      {/* <div className={styles.landing__container}>
        <a href="#TO ORDER" target="_blank">
          <img
            src={"DECORIO LOGO"}
            alt="Landing"
            className={styles.landing__container__image}
          />
        </a>
      </div> */}
    </section>
  );
};

export default Landing;
