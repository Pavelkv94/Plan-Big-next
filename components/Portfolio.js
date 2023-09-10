import React, { useState } from "react";
import styles from "../styles/Portfolio.module.scss";
import Title from "./Title";

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

  return (
    <div className={`${styles.portfolioWrapper} ${isDarkTheme ? styles.dark : styles.light}`}>
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
          <div className={styles.tabsContent}></div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
