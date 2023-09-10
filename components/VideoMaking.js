import React, { useState } from "react";
import styles from "../styles/VideoMaking.module.scss";
import PlaySvg from "../svgs/play.svg";
import PlayLightSvg from "../svgs/play-light.svg";
import Title from "./Title";

const VideoMaking = ({ isDarkTheme }) => {
  return (
    <div className={`${styles.videoMakingWrapper} ${isDarkTheme ? styles.dark : styles.light}`}>
      <div className={styles.videoMakingContent}>
        <div className={styles.videoMakingTitleBlockWrap}>
          <div className={`${styles.videoMakingTitleBlock} ${isDarkTheme ? styles.dark : styles.light}`}>
            <Title isDarkTheme={isDarkTheme} text="ВИДЕОСЪЁМКА" />
            <div className={`${styles.divider} ${isDarkTheme ? styles.dark : styles.light}`}></div>
            <Title isDarkTheme={isDarkTheme} text="АНИМАЦИЯ" right />
          </div>
        </div>

        <div className={`${styles.digits} ${isDarkTheme ? styles.dark : styles.light}`}>
          <div className={`${styles.circle} ${isDarkTheme ? styles.dark : styles.light}`}>
              <div className={styles.circleText}>
                <p>10+</p>
                <p>ЛЕТ ОПЫТА</p>
              </div>
          </div>
          <div className={`${styles.circle} ${isDarkTheme ? styles.dark : styles.light}`}>
            <div className={styles.circleText}>
              <p>560+</p>
              <p>ПРОЕКТОВ</p>
            </div>
            </div>
            <div className={`${styles.circle} ${isDarkTheme ? styles.dark : styles.light}`}>
            <div className={styles.circleText}>
              <p>30+</p>
              <p>СПЕЦИАЛИСТОВ</p>
            </div>
            </div>
        </div>

        <div className={styles.playBlock}>
        <div className={`${styles.playButton} ${isDarkTheme ? styles.dark : styles.light}`}>
          { isDarkTheme ? <PlaySvg /> : <PlayLightSvg/> }
        </div>
        {/* <p className={styles.playDescript}>Видео на основе 2D анимации</p> */}
        {/* <p className={styles.playDescript}>Видео на основе 3D анимации</p> */}
        {/* <p className={styles.playDescript}>Рекламные <br />видео</p> */}
        {/* <p className={styles.playDescript}>Презентационные <br />видео</p> */}
        </div>
       
      </div>
    </div>
  );
};

export default VideoMaking;
