import React, { useState } from "react";
import styles from "../styles/WorkStages.module.scss";

const WorkStages = ({ isDarkTheme }) => {
  return (
    <div className={`${styles.reasonsWrapper} ${isDarkTheme ? styles.dark : styles.light}`}>
      <div className={styles.reasonsContent}>
      </div>
    </div>
  );
};

export default WorkStages;
