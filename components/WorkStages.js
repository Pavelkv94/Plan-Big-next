import React, { useState } from "react";
import styles from "../styles/WorkStages.module.scss";
import Title from "./Title";
import WorkStage from "./WorkStage";

const WorkStages = ({ isDarkTheme }) => {
  return (
    <div className={`${styles.workStagesWrapper} ${isDarkTheme ? styles.dark : styles.light}`}>
      <div className={styles.workStagesContent}>
        <div className={styles.title}>
          <Title isDarkTheme={isDarkTheme} text="ЭТАПЫ РАБОТЫ" mainTitle width={"430px"} left={"26px"} />
        </div>

        <div className={`${styles.stages}  ${isDarkTheme ? styles.dark : styles.light}`}>
          <WorkStage  isDarkTheme={isDarkTheme}left={isDarkTheme ? "10px" : "20px"} top={"50px"} title={"БРИФИРОВАНИЕ. ОБСУЖДЕНИЕ"} text={"1. Обсуждение проекта на встрече или по телефону"} />
          <WorkStage isDarkTheme={isDarkTheme}
            left={isDarkTheme ? "436px" : "460px"}
            top={isDarkTheme ? "50px" : "60px"}
            title={"КРЕАТИВНАЯ СТРАТЕГИЯ"}
            text={"3.1 Анимационные видео: создание сценария и раскадровки. Согласовывание. 3.2 Видео на основе видеосъемки: создание сценария. Согласование. Подготовка к съемке."}
          />
          <WorkStage isDarkTheme={isDarkTheme} left={isDarkTheme ? "906px" : "930px"} top={"50px"} title={"КОРРЕКТИВЫ"} text={"5. Внесение корректив и создание финальной версии видео."} />
          <WorkStage  topArr isDarkTheme={isDarkTheme} left={isDarkTheme ? "180px" : "200px"} top={"666px"} title={"ПРОЕКТИРОВАНИЕ ПРОЕКТА. ПОДГОТОВКА КП"} text={"2. Подготовка концепции и сметы. Согласование. Подписание договора."} />
          <WorkStage topArr isDarkTheme={isDarkTheme}
            left={isDarkTheme ? "660px" : "680px"}
            top={"666px"}
            title={"ПРОДАКШН"}
            text={
              "4.1 Создание моделей, анимация, текстурирование. озвучка. Согласование."
            }
            four
            text2={"4.2 видео на основе видеосъемки: проведение постановчной видеосъемки. Монтаж. Оформление 2d/3d графикой. Согласование."}
          />
          <WorkStage topArr isDarkTheme={isDarkTheme} left={isDarkTheme ? "1150px" : "1170px"} top={"666px"} title={"ИТОГ"} text={"6. Сдача готового видеоролика. Подписание акта выполненных работ."} />
        </div>
      </div>
    </div>
  );
};

export default WorkStages;

<p>{"text \n text"}</p>