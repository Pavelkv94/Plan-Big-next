import React, { useEffect, useState } from "react";
import styles from "../styles/Footer.module.scss";
import LogoLight from "../svgs/footer-logo-light.svg";
import LogoBlack from "../svgs/footer-logo-black.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import CopyIcon from "../svgs/copy.svg";
import Telegram from "../svgs/telegram.svg";
import WhatsApp from "../svgs/whatsapp.svg";

const Footer = ({ isDarkTheme }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  useEffect(() => {
    let timer = setTimeout(() => setIsPopoverOpen(false), 1000)
    return () => clearTimeout(timer)
  }, [isPopoverOpen]);

  const [isPopoverOpen2, setIsPopoverOpen2] = useState(false);
  useEffect(() => {
    let timer2 = setTimeout(() => setIsPopoverOpen2(false), 1000)
    return () => clearTimeout(timer2)
  }, [isPopoverOpen2]);

  return (
    <div className={`${styles.footerWrapper} ${isDarkTheme ? styles.dark : styles.light}`}>
      <div className={styles.footerContent}>
        <div className={styles.logo}>{isDarkTheme ? <LogoBlack /> : <LogoLight />}</div>
        <div className={styles.navigation}>
          <h4>Навигация</h4>
          <Link to="main" spy={true} smooth={true} offset={-50} duration={500}>
            Главная
          </Link>
          <Link to="onas" spy={true} smooth={true} offset={-50} duration={500}>
            О нас
          </Link>

          <Link to="portfolio" spy={true} smooth={true} offset={-50} duration={500}>
            Услуги
          </Link>

          <Link to="services" spy={true} smooth={true} offset={0} duration={500}>
            Портфолио
          </Link>

          <Link to="adv" spy={true} smooth={true} offset={0} duration={500}>
            Преимущества
          </Link>

          <Link to="feedback" spy={true} smooth={true} offset={0} duration={500}>
            Отзывы
          </Link>
        </div>
        <div className={styles.services}>
          <h4>Услуги</h4>
          <span>2D анимация</span>
          <span>3D анимация</span>
          <span>Рекламные ролики</span>
          <span>Видеообзоры продукции</span>
          <span>Cторитейл видео</span>
        </div>
        <div className={styles.contacts}>
          <h4>Контакты</h4>
          <div className={styles.phone}>
            <span>+7 (495) 127-01-34</span>
            <div className={styles.copy} onClick={() => {navigator.clipboard.writeText("+7 (495) 127-01-34"); setIsPopoverOpen(true)}}>
              {isPopoverOpen && <span>Copied!</span>}
              <CopyIcon />
            </div>
            <div className={styles.whats}>
              <WhatsApp />
            </div>
            <div className={styles.teleg}>
              <Telegram />
            </div>
          </div>
          <div className={styles.email}>
            <span>WELCOME@PLAN-BIG.COM</span>
            <div className={styles.copy} onClick={() => {navigator.clipboard.writeText("WELCOME@PLAN-BIG.COM"); setIsPopoverOpen2(true)}}>
            {isPopoverOpen2 && <span>Copied!</span>}
              <CopyIcon />
            </div>
          </div>
          <div className={styles.address}>Москва, Крутицкая набережная, 1</div>
          <div className={`${styles.actions} ${isDarkTheme ? styles.dark : styles.light}`}>
            <div>
              <button>ОСТАВИТЬ ЗАЯВКУ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
