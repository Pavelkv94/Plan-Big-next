import React, { useState } from "react";
import styles from "../styles/Portfolio.module.scss";
import Title from "./Title";
import VideoPlayer from "./VideoPlayer";
import Carousel from "./Carousel";

const videos = [
  [
    {
      elements: [
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
      ],
    },
    {
      elements: [
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
      ],
    },
    {
      elements: [
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
      ],
    },
  ],
  [
    {
      elements: [
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
      ],
    },
  ],
  [
    {
      elements: [
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
      ],
    },

    {
      elements: [
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
      ],
    },
  ],
  [
    {
      elements: [
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
      ],
    },
    {
      elements: [
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
      ],
    },
    {
      elements: [
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
      ],
    },
  ],
  [
    {
      elements: [
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
      ],
    },

    {
      elements: [
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
      ],
    },
  ],
  [
    {
      elements: [
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
      ],
    },
    {
      elements: [
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
      ],
    },
    {
      elements: [
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
        { id: 1, src: "blabla" },
      ],
    },
  ],
];

const Portfolio = ({ isDarkTheme }) => {
  const [tab, setTab] = useState(0);

  const tabs = [
    { title: "2D \n АНИМАЦИЯ", key: 0 },
    { title: "3D \n АНИМАЦИЯ", key: 1 },
    { title: "РЕКЛАМНЫЕ \n РОЛИКИ", key: 2 },
    { title: "ВИДЕООБЗОРЫ \n ПРОДУКЦИИ", key: 3 },
    { title: "ПРЕЗЕНТАЦИОННЫЕ \n РОЛИКИ", key: 4 },
    { title: "СТОРИТЕЙЛ \n ВИДЕО", key: 5 },
  ];

  const tabContent = (videos, tabNum) => {
    const slides = videos[tabNum].map((el, i) => (
      <div className={styles.tabsContent} key={i}>
        {el.elements.map((el, i) => (
          <VideoPlayer
            key={i}
            width={isDarkTheme ? "500px" : "500px"}
            height={isDarkTheme ? "280px" : "300px"}
            isDarkTheme={isDarkTheme}
            src={"https://www.youtube.com/embed/P1kYDn62P2s?si=ylA-2JiBeS20lwL5&modestbranding=1&autoplay=1"}
          />
        ))}
      </div>
    ));

    return (
      <div style={{ width: "1560px" }}>
        <Carousel array={slides} isDarkTheme={isDarkTheme} portfolio/>
      </div>
    );
  };

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
          {tabContent(videos, tab)}
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
