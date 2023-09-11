import React, { useRef, useState } from 'react';
import styles from "../styles/VideoPlayer.module.scss";

const VideoPlayer = ({width, height, src, style}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
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
      <video controls width={width} height={height}>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {!isPlaying && (
        <button className={styles.playButton} onClick={handlePlayPause}>
          Play
        </button>
      )}
    </div>
  );
};

export default VideoPlayer;