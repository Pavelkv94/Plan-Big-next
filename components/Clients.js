import React, { useState } from "react";
import styles from "../styles/Clients.module.scss";
import Title from "./Title";
import Client from "./Client";
import Carousel from "./Carousel";

const Clients = ({ isDarkTheme }) => {
  const clients1 = [
    { img: "/png/clients/1. Сбер-PhotoRoom 2.webp" },
    { img: "/png/clients/4. undp-PhotoRoom 2.webp" },
    { img: "/png/clients/5. Правительство Москвы-PhotoRoom 4.webp" },
    { img: "/png/clients/6. РЖД-PhotoRoom 3.webp" },
    { img: "/png/clients/3 529083.webp" },
    { img: "/png/clients/8. Sanofi-PhotoRoom 3.webp" },
    { img: "/png/clients/10. Teva-PhotoRoom 2.webp" },
    { img: "/png/clients/7. Boehringer Ingelheim-PhotoRoom 3.webp" },
    { img: "/png/clients/9. Пятёрочка-PhotoRoom 2.webp" },
    { img: "/png/clients/image 95 (1).webp" },
    { img: "/png/clients/2__Роснефть-transformed 2.webp" },
    { img: "/png/clients/13. Макдональдс-PhotoRoom 2.webp" },
    { img: "/png/clients/16. Технополис Москва-PhotoRoom 2.webp" },
    { img: "/png/clients/14. МИСиС-PhotoRoom 2.webp" },
    { img: "/png/clients/image 96 (1).webp" },
  ];

  const clients2 = [
    { img: "/png/clients/2 10.webp" },
    { img: "/png/clients/28 1.webp" },
    { img: "/png/clients/9 1.webp" },
    { img: "/png/clients/22 1.webp" },
    { img: "/png/clients/21 1.webp" },
    { img: "/png/clients/18 1.webp" },
    { img: "/png/clients/7 1.webp" },
    { img: "/png/clients/24 1.webp" },
    { img: "/png/clients/26 1.webp" },
    { img: "/png/clients/29 1.webp" },
    { img: "/png/clients/15 1.webp" },
    { img: "/png/clients/11 1.webp" },
    { img: "/png/clients/8 1.webp" },
    { img: "/png/clients/10 1.webp" },
    { img: "/png/clients/4 1.webp" },
  ];

  const clients3 = [
    { img: "/png/clients/9 2.webp" },
    { img: "/png/clients/27 2.webp" },
    { img: "/png/clients/12 2.webp" },
    { img: "/png/clients/4 2.webp" },
    { img: "/png/clients/8 2.webp" },
    { img: "/png/clients/13 1.webp" },
    { img: "/png/clients/28 2.webp" },
    { img: "/png/clients/11 2.webp" },
    { img: "/png/clients/16 2.webp" },
    { img: "/png/clients/14 2.webp" },
    { img: "/png/clients/15 2.webp" },
    { img: "/png/clients/25 2.webp" },
    { img: "/png/clients/10 2.webp" },
    { img: "/png/clients/29 2.webp" },
    { img: "/png/clients/26 2.webp" },
  ];

  const firstSlide = (
    <div className={styles.sliderWindow}>
      {clients1.map((el, i) => (
        <Client key={i} img={el.img} isDarkTheme={isDarkTheme} />
      ))}
    </div>
  );
  const secondSlide = (
    <div className={styles.sliderWindow}>
      {clients2.map((el, i) => (
        <Client key={i} img={el.img} isDarkTheme={isDarkTheme} />
      ))}
    </div>
  );
  const thirdSlide = (
    <div className={styles.sliderWindow}>
      {clients3.map((el, i) => (
        <Client key={i} img={el.img} isDarkTheme={isDarkTheme} />
      ))}
    </div>
  );

  return (
    <div className={`${styles.clientsWrapper} ${isDarkTheme ? styles.dark : styles.light}`}>
      <div className={styles.clientsContent}>
        <div className={styles.title}>
          <Title isDarkTheme={isDarkTheme} text="НАМ ДОВЕРЯЮТ" mainTitle width={"464px"} left={"30px"} />
        </div>
        <div className={styles.carousel}>
          <Carousel array={[firstSlide, secondSlide, thirdSlide]} isDarkTheme={isDarkTheme} />
        </div>
      </div>
    </div>
  );
};

export default Clients;
