import React from "react";
import styles from "../styles/HeaderNavMenu.module.scss";
import LogoBlack from "../svgs/logo-black.svg";
import Telegram from "../svgs/telegram.svg";
import WhatsApp from "../svgs/whatsapp.svg";
import { Link, animateScroll as scroll } from "react-scroll";

const HeaderNavMenu = ({ isDarkTheme }) => {

  return (
    <div className={`${styles.headerWrapper} ${isDarkTheme ? styles.dark : styles.light}`}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <LogoBlack />
        </div>
        <div className={styles.menuWrapper}>
          <div className={styles.menu}>
            <nav>
              <Link activeClass={`${styles.active} ${isDarkTheme ? styles.dark : styles.light} ${styles.li}`} to="main" spy={true} smooth={true} offset={-50} duration={500}>
                <div className={`${isDarkTheme ? styles.dark : styles.light} ${styles.li}`}>ГЛАВНАЯ</div>
              </Link>

              <Link activeClass={`${styles.active}  ${isDarkTheme ? styles.dark : styles.light}`} to="onas" spy={true} smooth={true} offset={-50} duration={500}>
                <div className={styles.li}>О НАС</div>
              </Link>

              <Link activeClass={`${styles.active} ${isDarkTheme ? styles.dark : styles.light}`} to="portfolio" spy={true} smooth={true} offset={-50} duration={500}>
                <div className={styles.li}>ПОРТФОЛИО </div>
              </Link>

              <Link activeClass={`${styles.active} ${isDarkTheme ? styles.dark : styles.light}`} to="services" spy={true} smooth={true} offset={0} duration={500}>
                <div className={styles.li}>УСЛУГИ</div>
              </Link>

              <Link activeClass={`${styles.active} ${isDarkTheme ? styles.dark : styles.light}`} to="adv" spy={true} smooth={true} offset={0} duration={500}>
                <div className={styles.li}>ПРЕИМУЩЕСТВА</div>
              </Link>

              <Link activeClass={`${styles.active} ${isDarkTheme ? styles.dark : styles.light}`} to="feedback" spy={true} smooth={true} offset={0} duration={500}>
                <div className={styles.li}> ОТЗЫВЫ</div>
              </Link>
            </nav>
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
