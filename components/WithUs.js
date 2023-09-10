import React, { useState } from "react";
import styles from "../styles/WithUs.module.scss";

const WithUs = ({ isDarkTheme }) => {
  return (
    <div className={`${styles.reasonsWrapper} ${isDarkTheme ? styles.dark : styles.light}`}>
      <div className={styles.reasonsContent}>
      </div>
    </div>
  );
};

export default WithUs;
