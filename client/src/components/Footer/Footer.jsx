import React from "react";
import styles from "./Footer.module.scss";
import Navlink from "@components/Navlink/Navlink.jsx";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.footer__links}>
          <Navlink url="/" className={styles.navLink}>
            Home
          </Navlink>
          <Navlink url="/about" className={styles.navLink}>
            About
          </Navlink>
          <Navlink url="/projects" className={styles.navLink}>
            Projects
          </Navlink>
          <Navlink url="/contact" className={styles.navLink}>
            Contact
          </Navlink>
        </div>
        <p className={styles.footer__text}>
          © {new Date().getFullYear()} decorio.app All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
