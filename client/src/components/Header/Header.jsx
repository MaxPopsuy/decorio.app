import React from "react";
import styles from "./Header.module.scss";
import Navlink from "@components/Navlink/Navlink";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to={""} className={styles.header__logo}>
        Decorio.app
      </Link>

      <div className={styles.navList}>
        <Navlink url={""} className={styles.navLink}>
          Home
        </Navlink>
        <Navlink url={"about"} className={styles.navLink}>
          About
        </Navlink>
        <Navlink url={"projects"} className={styles.navLink}>
          Projects
        </Navlink>
        <Navlink url={"contact"} className={styles.navLink}>
          Contact
        </Navlink>
      </div>
    </header>
  );
};

export default Header;
