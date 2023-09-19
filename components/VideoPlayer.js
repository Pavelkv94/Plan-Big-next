import React, { useRef, useState } from "react";
import styles from "../styles/VideoPlayer.module.scss";

const VideoPlayer = ({ width, height, src, style, big }) => {
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

  return big ? (
    <div style={{ ...style, width, height }} className={styles.videoPlayer}>
      {/* <iframe
        width="400"
        height="250"
        src="https://www.youtube.com/embed/j5VKEayaTEc?si=OMEWLvv_Bl02LkuB?modestbranding=1&autoplay=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe> */}
      {/* <video width={width} height={height} ref={videoRef}>
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
    )} */}
    </div>
  ) : (
    <div style={{ ...style, width, height }} className={styles.videoPlayer}>
      {/* <iframe
        width="400"
        height="250"
        src="https://www.youtube.com/embed/j5VKEayaTEc?si=OMEWLvv_Bl02LkuB?modestbranding=1&autoplay=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe> */}
      {/* <video width={width} height={height} ref={videoRef}>
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
      )} */}
    </div>
  );
};

export default VideoPlayer;
