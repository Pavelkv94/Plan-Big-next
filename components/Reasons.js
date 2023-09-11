import React, { useState } from "react";
import styles from "../styles/Reasons.module.scss";
import Title from "./Title";
import VideoPlayer from "./VideoPlayer";

const Reasons = ({ isDarkTheme }) => {
  return (
    <div className={`${styles.reasonsWrapper} ${isDarkTheme ? styles.dark : styles.light}`}>
      <div className={styles.reasonsContent}>
      <div className={styles.title}>
          <Title isDarkTheme={isDarkTheme} text="ПОЧЕМУ ВЫБИРАЮТ НАС?" mainTitle width={"700px"} />
        </div>

<div style={{border: "1px solid red"}}>
<VideoPlayer /></div>
      </div>
    </div>
  );
};

export default Reasons;
