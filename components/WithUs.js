import React, { useState } from "react";
import styles from "../styles/WithUs.module.scss";
import Title from "./Title";
import WithUsItem from "./WithUsItem";

const WithUs = ({ isDarkTheme }) => {
  return (
    <div className={`${styles.withUsWrapper} ${isDarkTheme ? styles.dark : styles.light}`} id="feedback">
      <div className={styles.withUsContent}>
        <div className={styles.title}>
          <Title isDarkTheme={isDarkTheme} text="C НАМИ ПРОСТО И ЭФФЕКТИВНО" mainTitle width={"860px"} left={"50px"} />
        </div>

        <WithUsItem
          isDarkTheme={isDarkTheme}
          title={"НАЗВАНИЕ КОМПАНИИ"}
          description={
            "От имени АО «НИИАС» РЖД выражаю благодарность Вашей креативной команде за высокий профессионализм в создании видеопродукции в рамках комплексных проектов цифровой трансформации железнодорожной отрасли."
          }
          jobTitle={"Ген. директор "}
          jobContact={"Иванов И.И."}
          widthTime={200}
           widthMoney={220}
           widthDiff={170}

        />
      </div>
    </div>
  );
};

export default WithUs;
