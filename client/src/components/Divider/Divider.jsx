import React from "react";
import styles from "./Divider.module.scss";

const Divider = ({ title }) => {
  return (
    <div className={styles.divider}>
      <h1 className={styles.divider__title}>
          {title}
      </h1>
    </div>
  );
};

export default Divider;
