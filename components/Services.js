import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Services.module.scss";
import Title from "./Title";
import ArrowBlack from "../svgs/gamepad-arrow-black.svg";
import ArrowLight from "../svgs/gamepad-arrow-light.svg";
import { gameButtons, gameContents } from "./contants";

const Services = ({ isDarkTheme }) => {
  const iframeRef = useRef(null);

  const [activeButton, setActiveButton] = useState(0);
  const [autoChange, setAutoChange] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showEllipse, setShowEllipse] = useState(null);

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

  const handleMouseEnter = (i) => () => {
    setShowEllipse(i);
  };

  const handleMouseLeave = (i) => () => {
    setShowEllipse(null);
  };

  return (
    <div className={`${styles.servicesWrapper} ${isDarkTheme ? styles.dark : styles.light}`} id="services">
      <div className={styles.servicesContent}>
        <div className={styles.title}>
          <Title isDarkTheme={isDarkTheme} text="ВИДЫ УСЛУГ" mainTitle width={"345px"} />
        </div>

        <div className={`${styles.gamepad} ${isDarkTheme ? styles.dark : styles.light}`}>
          {gameButtons.map((el, i) => (
            <div className={`${styles.gameButton} ${activeButton === i ? styles.active : {}}`} key={i} onMouseEnter={handleMouseEnter(i)} onMouseLeave={handleMouseLeave(i)}>
              {activeButton === i && <div className={styles[`eclipse${i}`]}></div>}
              {showEllipse === i && activeButton !== i && <div className={styles[`eclipse${i}`]}></div>}

              <p
                className={styles.gameTitle}
                onClick={() => {
                  setActiveButton(i);
                  setAutoChange(false);
                  setIsPlaying(false);
                  iframeRef.current.src = "";
                }}
              >
                {el.title}
              </p>
            </div>
          ))}
          <ContentServices
            iframeRef={iframeRef}
            service={gameContents[activeButton]}
            isDarkTheme={isDarkTheme}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            withPlay={withPlay}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;

const ContentServices = ({ service, isDarkTheme, isPlaying, setIsPlaying, withPlay, iframeRef }) => {
  const playVideo = () => {
    setIsPlaying(true);
    withPlay();
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
