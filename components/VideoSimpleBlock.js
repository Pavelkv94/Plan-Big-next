import React, { useState } from "react";
import styles from "../styles/VideoSimpleBlock.module.scss";
import VideoPlayer from "./VideoPlayer";

const VideoSimpleBlock = ({ isDarkTheme }) => {
  return (
    <div className={styles.videoSimpleWrapper}>
      <div className={`${styles.videoSimpleContent} ${isDarkTheme ? styles.dark : styles.light}`}></div>
      {!isDarkTheme && <div className={styles.empty1}></div>}
      {!isDarkTheme && <div className={styles.empty2}></div>}
      {!isDarkTheme && <div className={styles.empty3}></div>}
      {!isDarkTheme && <div className={styles.empty4}></div>}
      {!isDarkTheme && <div className={styles.empty5}></div>}
      <VideoPlayer src="/mp4/Showreel.mp4" width={"446px"} height={"250px"} style={{ position: "absolute", left: 36, top: 40 }} />
    </div>
  );
};

export default VideoSimpleBlock;
