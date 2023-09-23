import React, { useState } from "react";
import styles from "../styles/Portfolio.module.scss";
import Title from "./Title";
import VideoPlayer from "./VideoPlayer";

const Portfolio = ({ isDarkTheme }) => {
  const [tab, setTab] = useState(1);

  const tabs = [
    { title: "2D \n АНИМАЦИЯ", key: 1 },
    { title: "3D \n АНИМАЦИЯ", key: 2 },
    { title: "РЕКЛАМНЫЕ \n РОЛИКИ", key: 3 },
    { title: "ВИДЕООБЗОРЫ \n ПРОДУКЦИИ", key: 4 },
    { title: "ПРЕЗЕНТАЦИОННЫЕ \n РОЛИКИ", key: 5 },
    { title: "СТОРИТЕЙЛ \n ВИДЕО", key: 6 },
  ];


  const videos = [1,2,3,4,5,6];

  return (
    <div className={`${styles.portfolioWrapper} ${isDarkTheme ? styles.dark : styles.light}`} id="portfolio">
      <div className={styles.portfolioContent}>
        <div className={styles.title}>
          <Title isDarkTheme={isDarkTheme} text="ПОРТФОЛИО" mainTitle />
        </div>
        <section className={styles.tabsContentWrapper}>
          <div className={`${styles.tabs} ${isDarkTheme ? styles.dark : styles.light}`}>
            {tabs.map((el, i) => (
              <div key={i} className={`${styles.tab} ${tab === el.key ? styles.active : {}}`} onClick={() => setTab(el.key)}>
                <p>{el.title}</p>
              </div>
            ))}
          </div>
          <div className={styles.tabsContent}>
            {videos.map((el, i) => <VideoPlayer
              width={isDarkTheme ? "500px" : "500px"}
              height={isDarkTheme ? "280px" : "300px"}
              isDarkTheme={isDarkTheme}
              src={"https://www.youtube.com/embed/P1kYDn62P2s?si=ylA-2JiBeS20lwL5&modestbranding=1&autoplay=1"}
            />)}
            
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
