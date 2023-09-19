import React, { useState } from "react";
import styles from "../styles/Clients.module.scss";
import Title from "./Title";
import Client from "./Client";
import Carousel from "./Carousel";

const Clients = ({ isDarkTheme }) => {

  const data = [
    { img: "/png/clients/1. Сбер-PhotoRoom 2.png" },
    { img: "/png/clients/4. undp-PhotoRoom 2.png" },
    { img: "/png/clients/5. Правительство Москвы-PhotoRoom 4.png" },
    { img: "/png/clients/6. РЖД-PhotoRoom 3.png" },
    { img: "/png/clients/3 529083.png" },
    { img: "/png/clients/8. Sanofi-PhotoRoom 3.png" },
    { img: "/png/clients/10. Teva-PhotoRoom 2.png" },
    { img: "/png/clients/7. Boehringer Ingelheim-PhotoRoom 3.png" },
    { img: "/png/clients/9. Пятёрочка-PhotoRoom 2.png" },
    { img: "/png/clients/image 95 (1).png" },
    { img: "/png/clients/2__Роснефть-transformed 2.png" },
    { img: "/png/clients/13. Макдональдс-PhotoRoom 2.png" },
    { img: "/png/clients/16. Технополис Москва-PhotoRoom 2.png" },
    { img: "/png/clients/14. МИСиС-PhotoRoom 2.png" },
    { img: "/png/clients/image 96 (1).png" },
  ];

  const firstSlide = <div className={styles.sliderWindow}>
  {data.map((el, i) => (
    <Client key={i} img={el.img} isDarkTheme={isDarkTheme} />
  ))}
</div>;
  const secondSlide = <div className={styles.sliderWindow}>
  {data.map((el, i) => (
    <Client key={i} img={el.img} isDarkTheme={isDarkTheme} />
  ))}
</div>;

  return (
    <div className={`${styles.clientsWrapper} ${isDarkTheme ? styles.dark : styles.light}`}>
      <div className={styles.clientsContent}>
        <div className={styles.title}>
          <Title isDarkTheme={isDarkTheme} text="НАМ ДОВЕРЯЮТ" mainTitle width={"430px"} left={"30px"} />
        </div>
        <div className={styles.carousel}>
          <Carousel array={[firstSlide, secondSlide]} isDarkTheme={isDarkTheme} />
         

         
        </div>
       
      </div>
    </div>
  );
};

export default Clients;
