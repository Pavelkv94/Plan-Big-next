import React, { useState } from "react";
import styles from "../styles/Portfolio.module.scss";

const Portfolio = ({ isDarkTheme }) => {


  return (
    <div className={`${styles.portfolioWrapper} ${isDarkTheme ? styles.dark : styles.light}`}>
      <div className={styles.portfolioContent}>
        
      </div>
    </div>
  );
};

export default Portfolio;
