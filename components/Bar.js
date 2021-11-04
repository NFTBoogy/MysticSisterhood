import React from "react";
import styles from "../styles/Home.module.css";

const Bar = (props) => {
  return (
    <hr
      className={`${styles.hr} ${styles.animated} ${styles.fadeInUp} ${styles.animatedFadeInUp}`}
    />
  );
};

export default Bar;
