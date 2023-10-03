import React, { useState } from "react";
import styles from "../styles/Main.module.scss";
import VideoPlayer from "./VideoPlayer";
import { Link, animateScroll as scroll } from "react-scroll";

const Main = ({ isDarkTheme, toggleTheme }) => {
  const [position, setPosition] = useState(194); // Initial position

  const switchTheme = () => {
    toggleTheme();
    setPosition((prevPosition) => (prevPosition === 0 ? 194 : 0));
  };

  return (
    <div className={`${styles.mainWrapper} ${isDarkTheme ? styles.dark : styles.light}`} id="main">
      <div className={styles.mainContent}>
        <div className={styles.themeSwitcherWrapper}>
          <div className={`${styles.themeSwitcher} ${isDarkTheme ? styles.dark : styles.light}`}>
            <div className={styles.pulse}></div>
            <div onClick={switchTheme} className={styles.toggler} style={{ transform: `translateX(${position}%)`, transition: "transform 0.3s ease" }}>
              <div className={styles.togglerBox}></div>
            </div>
          </div>
        </div>

        <div className={styles.mainInfo}>
          <div className={`${styles.textInfo} ${isDarkTheme ? styles.dark : styles.light}`}>
            <p className={styles.preTitle}>VIDEO AGENCY</p>
            <h1>ПРОИЗВОДСТВО КОРПОРАТИВНЫХ ВИДЕО </h1>
            <section>
              <div className={`${styles.textItem}  ${isDarkTheme ? styles.dark : styles.light}`}>
                <p>ПРЕЗЕНТАЦИОННЫЕ</p>
              </div>
              <div className={`${styles.textItem}  ${isDarkTheme ? styles.dark : styles.light}`}>
                <p>РЕКЛАМНЫЕ</p>
              </div>
              <div className={`${styles.textItem}  ${isDarkTheme ? styles.dark : styles.light}`}>
                <p>ОБРАЗОВАТЕЛЬНЫЕ</p>
              </div>
              <div className={`${styles.textItem}  ${isDarkTheme ? styles.dark : styles.light}`}>
                <p>ИМИДЖЕВЫЕ</p>
              </div>
            </section>

            <div className={`${styles.actions} ${isDarkTheme ? styles.dark : styles.light}`}>
              <div>
                <Link to="order" spy={true} smooth={true} offset={-100} duration={500}>
                  <button style={isDarkTheme ? {} : { background: "linear-gradient(137.83deg, #0076e4 -38%, #7abfff 21.36%, #c1fdfe 80.72%, #98fcfe 140.08%)" }}>
                    ОСТАВИТЬ ЗАЯВКУ
                  </button>
                </Link>
              </div>
              <div>
                <Link to="portfolio" spy={true} smooth={true} offset={-50} duration={500}>
                  <button>СМОТРЕТЬ ПОРТФОЛИО</button>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.showInfo}>
            {isDarkTheme && <p className={styles.showreelP}>SHOWREEL</p>}
            <VideoPlayer
              width={"745px"}
              height={"475px"}
              style={{ position: "absolute", right: 0, bottom: 0 }}
              isDarkTheme={isDarkTheme}
              big
              src={"https://www.youtube.com/embed/P1kYDn62P2s?si=ylA-2JiBeS20lwL5&modestbranding=1&autoplay=1&showinfo=0"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
