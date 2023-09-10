import React from "react";
import styles from "../styles/Title.module.scss";

const Title = ({ isDarkTheme, text, right = false, mainTitle, width }) => {
  return mainTitle ? (
    <div className={`${styles.mainTitleWrapper} ${isDarkTheme ? styles.dark : styles.light}`} style={{minWidth: width}}>
      <p className={styles.mainTitleMain}>{text}</p>
      <p className={styles.mainTitleDublicate}>{text}</p>
    </div>
  ) : (
    <div className={`${styles.titleWrapper} ${isDarkTheme ? styles.dark : styles.light}`} >
      <p className={`${styles.titleMain} ${right ? styles.right : styles.left}`}>{text}</p>
      <p className={`${styles.titleDublicate} ${right ? styles.right : styles.left}`}>{text}</p>
    </div>
  );
};

export default Title;
