import React, { useState } from "react";
import styles from "../styles/VideoMaking.module.scss";
import PlaySvg from "../svgs/play.svg";
import Title from "./Title";

const VideoMaking = ({ isDarkTheme }) => {
  return (
    <div className={`${styles.videoMakingWrapper} ${isDarkTheme ? styles.dark : styles.light}`}>
      <div className={styles.videoMakingContent}>
        <div className={styles.videoMakingTitleBlockWrap}>
          <div className={styles.videoMakingTitleBlock}>
            <Title isDarkTheme={isDarkTheme} text="ВИДЕОСЪЁМКА" />
            <div className={styles.divider}></div>
            <Title isDarkTheme={isDarkTheme} text="АНИМАЦИЯ" right />
          </div>
        </div>

        <div className={styles.digits}></div>
        <div className={styles.playBlock}>
        <div className={styles.playButton}>
          <PlaySvg />
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
