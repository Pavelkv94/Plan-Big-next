import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Services.module.scss";
import Title from "./Title";
import ArrowBlack from "../svgs/gamepad-arrow-black.svg";
import ArrowLight from "../svgs/gamepad-arrow-light.svg";

const Services = ({ isDarkTheme }) => {
  const iframeRef = useRef(null);


  const [activeButton, setActiveButton] = useState(0);
  const [autoChange, setAutoChange] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let interval =
      autoChange &&
      setInterval(() => {
        setActiveButton((prev) => (prev === 5 ? 0 : prev + 1));
      }, 5000);
    return () => clearInterval(interval);
  }, [autoChange]);

  const withPlay = () => {
    setAutoChange(false);
  };

  const gameButtons = [
    {
      title: "ПРЕЗЕНТАЦИОННЫЕ / ИМИДЖЕВЫЕ РОЛИКИ",
    },
    {
      title: "РЕКЛАМНЫЕ РОЛИКИ",
    },
    {
      title: "СТОРИТЕЙЛ ВИДЕО",
    },
    {
      title: "ВИДЕООБЗОРЫ ПРОДУКЦИИ",
    },
    {
      title: "3D АНИМАЦИЯ",
    },
    {
      title: "2D АНИМАЦИЯ",
    },
  ];

  const gameContents = [
    {
      id: 0,
      videoUrl: "https://www.youtube.com/embed/BIiffcdLp7Y?si=w1DtQXWpUGceuQ-b&modestbranding=1&autoplay=1&controls=0",
      descr: ["Рассказать и показать компанию", "Сформировать имидж в глазах ЦА", "Донести ключевые сообщения и преимущества", "Представить компанию на мероприятиях"],
      price: ["Оптимальная подача – от 200 000 до 1 000 000 рублей", "Эффектная/премиум подача – от 1 000 000 до 5 000 000 рублей"],
      screenUrl: "../pngs/gameFirst.png"
    },
    {
      id: 1,
      videoUrl: "https://www.youtube.com/embed/8PbRLS0rRtI?si=FafGI4sVXi-fO4v6&modestbranding=1&autoplay=1",
      descr: ["Провести Digital- или ТВ-рекламную кампанию", "Увеличить продажи", "Составить впечатление", "Донести ключевую информацию", "Вызвать доверие у покупателя"],
      price: ["Упрощённая подача и реализация – от 200 000 до 900 000рублей", "Рекламная постановочная съемка - от 1 500 000 до 10 000 000 рублей"],
    },
    {
      id: 2,
      videoUrl: "https://www.youtube.com/embed/KsWESMsdecI?si=y2G6ChtXOLlN8A7V&modestbranding=1&autoplay=1",
      descr: [
        "Рассказать эмоционально о компании, продукте или услуге",
        "Пронести идею через интервью спикера(ов)",
        "Расставить акценты и донести ключевые преимущества",
        "Вызвать доверие и соучастие ЦА",
      ],
      price: ["Упрощённая подача – от 200 000 рублей", "Сложная подача со множеством спикеров и локаций: от 500 000 рублей"],
    },
    {
      id: 3,
      videoUrl: "https://www.youtube.com/embed/j-3GIuCHf6I?si=u9lYxKRVufyeuyR7&modestbranding=1&autoplay=1",
      descr: ["Рассказать доходчиво о товаре/услуге", "Показать товар информативно, понятно и красиво", "Донести ключевые преимущества", "Раскрыть потенциал продукта"],
      price: ["От 150 000 до 600 000 рублей", "от 50 000 рублей (за одно видео при производстве серии видео)"],
    },
    {
      id: 4,
      videoUrl: "https://www.youtube.com/embed/ZUxSfgqQVF8?si=87LYbTnFWHgHN9Ri&modestbranding=1&autoplay=1",
      descr: [
        "Рассказать эффектно о компании, продукте или услуге",
        "Донести ключевые сообщения и преимущества",
        "Продемонстрировать сложные процессы",
        "Сформировать имидж в глазах ЦА",
        "Показать широкий спектр возможностей",
      ],
      price: ["Упрощённая подача – от 200 000 рублей", "Оптимальная и премиум подача – от 300 000 до 2 000 000 рублей"],
    },
    {
      id: 5,
      videoUrl: "https://www.youtube.com/embed/sECp7CTmT-4?si=hMUzJHm0gRPSF0Qv&modestbranding=1&autoplay=1",
      descr: [
        "Рассказать о бренде, услуге или продукте",
        "Продемонстрировать информацию в понятных образах",
        "Донести ключевые сообщения и преимущества",
        "Упорядочить и упростить подаваемую информацию",
        "Показать в видео то, чего ещё нет",
      ],
      price: ["Упрощённая подача – от 100 000 рублей", "Оптимальная и премиум подача – от 200 000 до 800 000 рублей"],
    },
  ];


  return (
    <div className={`${styles.servicesWrapper} ${isDarkTheme ? styles.dark : styles.light}`} id="services">
      <div className={styles.servicesContent}>
        <div className={styles.title}>
          <Title isDarkTheme={isDarkTheme} text="ВИДЫ УСЛУГ" mainTitle width={"345px"} />
        </div>

        <div className={`${styles.gamepad} ${isDarkTheme ? styles.dark : styles.light}`}>
          {gameButtons.map((el, i) => (
            <div className={`${styles.gameButton} ${activeButton === i ? styles.active : {}}`} key={i}>
              {activeButton === i && <div className={styles[`eclipse${i}`]}></div>}
              <p
                className={styles.gameTitle}
                onClick={() => {
                  setActiveButton(i);
                  setAutoChange(false);
                  setIsPlaying(false)
                  iframeRef.current.src = ""
                }}
              >
                {el.title}
              </p>
            </div>
          ))}
          <ContentServices iframeRef={iframeRef} service={gameContents[activeButton]} isDarkTheme={isDarkTheme} isPlaying={isPlaying} setIsPlaying={setIsPlaying} withPlay={withPlay}/>
        </div>
      </div>
    </div>
  );
};

export default Services;

const ContentServices = ({ service, isDarkTheme, isPlaying, setIsPlaying, withPlay, iframeRef }) => {

  const playVideo = () => {
    setIsPlaying(true);
    withPlay()
    iframeRef.current.src = service.videoUrl;
  };

  return (
    <div className={`${styles.gamepadContent} ${isDarkTheme ? styles.dark : styles.light}`}>
      <div className={styles.wrapper}>
        <div className={styles.descriptionWrapper}>
          <h3>ОПИСАНИЕ УСЛУГИ</h3>
          {service.descr.map((el, i) => (
            <div key={i} className={styles.descrItem}>
             {isDarkTheme ? <ArrowBlack /> : <ArrowLight />}
              <p>{el}</p>
            </div>
          ))}
        </div>
        <div className={styles.example}>
          <h3>ПРИМЕР</h3>
          <div className={styles.videoWrapper}>
            {!isPlaying && (
              <div className={`${styles.screen} ${styles[`screen${service.id}`]}`}>
                <div className={styles.playBtn} onClick={playVideo}>
                  <div className={styles.triangle}></div>
                </div>
              </div>
            )}
            <iframe
              ref={iframeRef}
              width="265"
              height="147"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className={styles.price}>
        <h3>СТОИМОСТЬ</h3>
        {service.price.map((el, i) => (
          <div key={i} className={styles.priceItem}>
            {el}
          </div>
        ))}
      </div>
    </div>
  );
};
