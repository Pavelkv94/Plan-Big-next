import React, { useState } from "react";
import styles from "../styles/Main.module.scss";
import VideoPlayer from "./VideoPlayer";
import Link from "next/link";

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
              <div className={`${styles.textItem}  ${isDarkTheme ? styles.dark : styles.light}`}><p>ПРЕЗЕНТАЦИОННЫЕ</p></div>
              <div className={`${styles.textItem}  ${isDarkTheme ? styles.dark : styles.light}`}><p>РЕКЛАМНЫЕ</p></div>
              <div className={`${styles.textItem}  ${isDarkTheme ? styles.dark : styles.light}`}><p>ОБРАЗОВАТЕЛЬНЫЕ</p></div>
              <div className={`${styles.textItem}  ${isDarkTheme ? styles.dark : styles.light}`}><p>ИМИДЖЕВЫЕ</p></div>
            </section>

            <div className={`${styles.actions} ${isDarkTheme ? styles.dark : styles.light}`}>
                <div><button>ОСТАВИТЬ ЗАЯВКУ</button></div>
                <div><button>СМОТРЕТЬ ПОРТФОЛИО</button></div>
            </div>
          </div>
          <div className={styles.showInfo}>
            <div className={styles.testMain}>
              {/* <VideoPlayer src="/mp4/Showreel.mp4" width={"620px"} height={"325px"} style={{position: "absolute", right: 0, bottom: 0}}/> */}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
