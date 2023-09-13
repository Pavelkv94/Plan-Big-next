import React, { useState } from "react";
import styles from "../styles/Footer.module.scss";
import LogoLight from "../svgs/footer-logo-light.svg";
import LogoBlack from "../svgs/footer-logo-black.svg";

const Footer = ({ isDarkTheme }) => {
  return (
    <div className={`${styles.footerWrapper} ${isDarkTheme ? styles.dark : styles.light}`}>
      <div className={styles.footerContent}>
        <div className={styles.logo}>
        {isDarkTheme ? <LogoBlack /> : <LogoLight />}
        </div>
        <div className={styles.navigation}>
          
          </div>
          <div className={styles.services}>
          
          </div>
          <div className={styles.contacts}>
          
          </div>
      </div>
    </div>
  );
};

export default Footer;
