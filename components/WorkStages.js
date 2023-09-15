import React, { useState } from "react";
import styles from "../styles/WorkStages.module.scss";
import Title from "./Title";

const WorkStages = ({ isDarkTheme }) => {
  return (
    <div className={`${styles.workStagesWrapper} ${isDarkTheme ? styles.dark : styles.light}`}>
      <div className={styles.workStagesContent}>
        <div className={styles.title}>
          <Title isDarkTheme={isDarkTheme} text="ЭТАПЫ РАБОТЫ" mainTitle width={"430px"} left={"26px"} />
        </div>

        <div className={`${styles.stages}  ${isDarkTheme ? styles.dark : styles.light}`}>

        </div>
      </div>
    </div>
  );
};

export default WorkStages;
