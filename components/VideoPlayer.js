import React, { useRef, useState } from "react";
import styles from "../styles/VideoPlayer.module.scss";

const VideoPlayer = ({ width, height, src, style, big, isDarkTheme }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const playVideo = () => {
    setIsPlaying(true);
    videoRef.current.src = src;
  };

  return big ? (
    <div style={{ ...style, width, height }} className={`${styles.videoPlayer} ${styles.big} ${isDarkTheme ? styles.dark : styles.light}`}>
      {!isPlaying && (
        <div className={styles.screen}>
          <div className={styles.pulse}></div>
          <div className={styles.playBtn} onClick={playVideo}>
            <div className={styles.triangle}></div>
          </div>
        </div>
      )}
      <iframe
        ref={videoRef}
        width={isDarkTheme ? "598" : "628"}
        height={isDarkTheme ? "296" : "332"}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  ) : (
    <div style={{ ...style, width, height }} className={`${styles.videoPlayer} ${styles.little} ${isDarkTheme ? styles.dark : styles.light}`}>
    {!isPlaying && (
      <div className={styles.screen}>
        <div className={styles.playBtn} onClick={playVideo}>
          <div className={styles.triangle}></div>
        </div>
      </div>
    )}

    <iframe
      ref={videoRef}
      width={isDarkTheme ? "401" : "420"}
      height={isDarkTheme ? "199" : "220"}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </div>
  );
};

export default VideoPlayer;
