import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navlink.module.scss";
import classnames from "classnames";

const Navlink = ({ url, className, children, canBeActive = true }) => {
  return (
    <NavLink
      to={url}
      className={({ isActive }) => {
        return classnames(
          className,
          styles.link,
          canBeActive && isActive === true && styles["link--active"]
        );
      }}
      id={styles.link}
    >
      {children}
    </NavLink>
  );
};

export default Navlink;
