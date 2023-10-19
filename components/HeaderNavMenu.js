import React, { useEffect, useState } from "react";
import styles from "../styles/HeaderNavMenu.module.scss";
import LogoBlack from "../svgs/logo-black.svg";
import LogoLight from "../svgs/logo-light.svg";

import Telegram from "../svgs/telegram.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import CopyIcon from "../svgs/copy.svg";

const HeaderNavMenu = ({ isDarkTheme, setOpenModal }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isPopoverHover, setIsPopoverHover] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => setIsPopoverOpen(false), 1000);
    return () => clearTimeout(timer);
  }, [isPopoverOpen]);

  return (
    <div className={`${styles.headerWrapper} ${isDarkTheme ? styles.dark : styles.light}`}>
      <div className={styles.content}>
        <div className={styles.logo}>
          {isDarkTheme ? <LogoBlack /> : <LogoLight />}
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

              <Link activeClass={`${styles.active} ${isDarkTheme ? styles.dark : styles.light}`} to="services" spy={true} smooth={true} offset={-50} duration={500}>
                <div className={styles.li}>УСЛУГИ</div>
              </Link>

              <Link activeClass={`${styles.active} ${isDarkTheme ? styles.dark : styles.light}`} to="adv" spy={true} smooth={true} offset={-50} duration={500}>
                <div className={styles.li}>ПРЕИМУЩЕСТВА</div>
              </Link>

              <Link activeClass={`${styles.active} ${isDarkTheme ? styles.dark : styles.light}`} to="feedback" spy={true} smooth={true} offset={-50} duration={500}>
                <div className={styles.li}> ОТЗЫВЫ</div>
              </Link>
            </nav>
          </div>
          <div className={`${styles.calculate} ${isDarkTheme ? styles.dark : styles.light}`} onClick={() => setOpenModal(true)}>
            <p>РАССЧИТАТЬ КП</p>
          </div>
          <div className={styles.contacts}>
            <p>+7 (495) 127-01-34</p>
            <a href="mailto:WELCOME@PLAN-BIG.COM">WELCOME@PLAN-BIG.COM</a>
          </div>
          <div
              className={`${styles.copy} ${isDarkTheme ? styles.dark : styles.light}`}
              onClick={() => {
                navigator.clipboard.writeText("WELCOME@PLAN-BIG.COM");
                setIsPopoverOpen(true);
                setIsPopoverHover(false);
              }}
              onMouseEnter={() => setIsPopoverHover(true)}
              onMouseLeave={() => setIsPopoverHover(false)}
            >
              {isPopoverOpen && <span>Скопировано</span>}
              {isPopoverHover && <span className={styles.hover}>Скопировать E-mail</span>}
              <CopyIcon />
            </div>
        </div>
        <div className={styles.messengers}>
          <a
            href="https://api.whatsapp.com/send?phone=79660132196&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%9F%D0%BE%D1%81%D0%B5%D1%82%D0%B8%D0%BB(%D0%B0)%20%D0%92%D0%B0%D1%88%20%D1%81%D0%B0%D0%B9%D1%82%20plan-big.%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BF%D1%80%D0%BE%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BF%D0%BE%20%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D1%8E%20%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE"
            target="_blank"
          >
            <img src="/png/whatsapp.webp" width={28} height={28} />
          </a>
          <a href="https://t.me/Agency_Video" target="_blank" style={{marginLeft: "9px"}}>
            <Telegram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderNavMenu;
