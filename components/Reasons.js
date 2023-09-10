import React, { useState } from "react";
import styles from "../styles/Reasons.module.scss";

const Reasons = ({ isDarkTheme }) => {
  return (
    <div className={`${styles.reasonsWrapper} ${isDarkTheme ? styles.dark : styles.light}`}>
      <div className={styles.reasonsContent}>
      </div>
    </div>
  );
};

export default Reasons;
