import React, { useState } from "react";
import styles from "../styles/WorkStage.module.scss";

const WorkStage = ({ isDarkTheme, left, top }) => {
  return (
    <div className={`${styles.workStage} ${isDarkTheme ? styles.dark : styles.light}`} style={{left, top}}>
    
    </div>
  );
};

export default WorkStage;
