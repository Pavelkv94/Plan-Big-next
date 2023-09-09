import React from "react";
import styles from "../styles/HeaderNavMenu.module.scss";
import LogoBlack from "../svgs/logo-black.svg";
import Telegram from "../svgs/telegram.svg";
import WhatsApp from "../svgs/whatsapp.svg";

const HeaderNavMenu = ({isDarkTheme}) => {
    console.log(isDarkTheme);
  return (
    <div className={`${styles.headerWrapper} ${isDarkTheme ? styles.dark : styles.light}`}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <LogoBlack />
        </div>
        <div className={styles.menuWrapper}>
          <div className={styles.menu}>
            <ul>
              <li className={`${styles.active} ${isDarkTheme ? styles.dark : styles.light}`}>ГЛАВНАЯ</li>
              <li>О НАС</li>
              <li>ПОРТФОЛИО</li>
              <li>УСЛУГИ</li>
              <li>ПРЕИМУЩЕСТВА</li>
              <li>ОТЗЫВЫ</li>
            </ul>
          </div>
          <div className={`${styles.calculate} ${isDarkTheme ? styles.dark : styles.light}`}>
            <p>РАССЧИТАТЬ КП</p>
          </div>
          <div className={styles.contacts}>
            <p>+7 (495) 127-01-34</p>
            <p>WELCOME@PLAN-BIG.COM</p>
          </div>
        </div>
        <div className={styles.messengers}>
          <WhatsApp />
          <Telegram />
        </div>
      </div>
    </div>
  );
};

export default HeaderNavMenu;
