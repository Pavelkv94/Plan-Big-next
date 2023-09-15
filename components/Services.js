import React, { useState } from "react";
import styles from "../styles/Services.module.scss";
import Title from "./Title";

const Services = ({ isDarkTheme }) => {
  return (
    <div className={`${styles.servicesWrapper} ${isDarkTheme ? styles.dark : styles.light}`} id="services">
      <div className={styles.servicesContent}>
        <div className={styles.title}>
          <Title isDarkTheme={isDarkTheme} text="ВИДЫ УСЛУГ" mainTitle width={"345px"} />
        </div>

        <div className={`${styles.gamepad} ${isDarkTheme ? styles.dark : styles.light}`}></div>
      </div>
    </div>
  );
};

export default Services;
