import React, { useRef, useState } from 'react';
import styles from "../styles/VideoPlayer.module.scss";

const VideoPlayer = ({width, height, src, style}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    console.log(videoRef);
    if (videoRef.current) {
      const video = videoRef.current;
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div style={{...style, width, height}} className={styles.videoPlayer}>
      <video width={width} height={height} ref={videoRef}>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {!isPlaying ? (
        <div className={styles.pauseWrapper}>
        <button className={styles.playButton} onClick={handlePlayPause}>
          <div className={styles.play}></div>
        </button>
        </div>
      ) : (
        <div className={styles.playWrapper} onClick={handlePlayPause}>
          </div>
      )}
    </div>
  );
};

export default VideoPlayer;