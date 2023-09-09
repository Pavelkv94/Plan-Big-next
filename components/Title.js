import React from "react";
import styles from "../styles/Title.module.scss";

const Title = ({ isDarkTheme, text, right=false }) => {


  return (
    <div className={`${styles.titleWrapper} ${isDarkTheme ? styles.dark : styles.light}`}>
      <p className={`${styles.titleMain} ${right ? styles.right : styles.left}`}>
        {text}
      </p>
      <p className={`${styles.titleDublicate} ${right ? styles.right : styles.left}`}>
        {text}
      </p>
    </div>
  );
};

export default Title;
