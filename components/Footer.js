import React, { useEffect, useState } from "react";
import styles from "../styles/Footer.module.scss";
import LogoBlack from "../svgs/footer-logo-black.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import CopyIcon from "../svgs/copy.svg";
import Telegram from "../svgs/telegram.svg";

const Footer = ({ isDarkTheme }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  useEffect(() => {
    let timer = setTimeout(() => setIsPopoverOpen(false), 1000);
    return () => clearTimeout(timer);
  }, [isPopoverOpen]);

  const [isPopoverOpen2, setIsPopoverOpen2] = useState(false);
  useEffect(() => {
    let timer2 = setTimeout(() => setIsPopoverOpen2(false), 1000);
    return () => clearTimeout(timer2);
  }, [isPopoverOpen2]);

  return (
    <div className={`${styles.footerWrapper} ${isDarkTheme ? styles.dark : styles.light}`}>
      <div className={styles.footerContent}>
        <div className={styles.logo}>{isDarkTheme ? <LogoBlack /> : <img src="/png/logo light.webp" width={239} height={33} />}</div>
        <div className={styles.navigation}>
          <h4>Навигация</h4>
          <Link to="main" spy={true} smooth={true} offset={-50} duration={500}>
            Главная
          </Link>
          <Link to="onas" spy={true} smooth={true} offset={-50} duration={500}>
            О нас
          </Link>

          <Link to="services" spy={true} smooth={true} offset={-50} duration={500}>
            Услуги
          </Link>

          <Link to="portfolio" spy={true} smooth={true} offset={0} duration={500}>
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
          <Link to="portfolio" spy={true} smooth={true} offset={0} duration={500}>
            2D анимация
          </Link>
          <Link to="portfolio" spy={true} smooth={true} offset={0} duration={500}>
            3D анимация
          </Link>
          <Link to="portfolio" spy={true} smooth={true} offset={0} duration={500}>
            Рекламные ролики
          </Link>
          <Link to="portfolio" spy={true} smooth={true} offset={0} duration={500}>
            Видеообзоры продукции
          </Link>
          <Link to="portfolio" spy={true} smooth={true} offset={0} duration={500}>
            Cторитейл видео
          </Link>
        </div>
        <div className={styles.contacts}>
          <h4>Контакты</h4>
          <div className={styles.phone}>
            <span>+7 (495) 127-01-34</span>
            <div
              className={styles.copy}
              onClick={() => {
                navigator.clipboard.writeText("+7 (495) 127-01-34");
                setIsPopoverOpen(true);
              }}
            >
              {isPopoverOpen && <span>Copied!</span>}
              <CopyIcon />
            </div>
            <div className={styles.whats}>
              <a
                href="https://api.whatsapp.com/send?phone=79660132196&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%9F%D0%BE%D1%81%D0%B5%D1%82%D0%B8%D0%BB(%D0%B0)%20%D0%92%D0%B0%D1%88%20%D1%81%D0%B0%D0%B9%D1%82%20plan-big.%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BF%D1%80%D0%BE%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BF%D0%BE%20%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D1%8E%20%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE"
                target="_blank"
              >
                <img src="/png/whatsapp.webp" width={22} height={23} />
              </a>
            </div>
            <div className={styles.teleg}>
              <a href="https://t.me/Agency_Video" target="_blank">
                <Telegram />
              </a>
            </div>
          </div>
          <div className={styles.email}>
            <span>WELCOME@PLAN-BIG.COM</span>
            <div
              className={styles.copy}
              onClick={() => {
                navigator.clipboard.writeText("WELCOME@PLAN-BIG.COM");
                setIsPopoverOpen2(true);
              }}
            >
              {isPopoverOpen2 && <span>Copied!</span>}
              <CopyIcon />
            </div>
          </div>
          <div className={styles.address}>Москва, Крутицкая набережная, 1</div>
          <div className={`${styles.actions} ${isDarkTheme ? styles.dark : styles.light}`}>
            <div>
            <Link to="order" spy={true} smooth={true} offset={-50} duration={500}>
              <button>ОСТАВИТЬ ЗАЯВКУ</button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
