import React, { useState } from "react";
import styles from "../styles/WorkStage.module.scss";
import StagesArrowBlack from "../svgs/arrow-stages-black.svg";
import StagesArrowLight from "../svgs/arrow-stages-light.svg";

const WorkStage = ({ isDarkTheme, left, top, title, text, four, text2 }) => {
  const [expand, setExpand] = useState(false);

  return (
    <div className={`${styles.workStage} ${isDarkTheme ? styles.dark : styles.light}`} style={{ left, top, height: expand ? "300px" : "100px" }}>
      <h4>{title}</h4>
      <div className={styles.arrowIcon} onClick={() => setExpand(!expand)}>
        {isDarkTheme ? <StagesArrowBlack /> : <StagesArrowLight />}
      </div>
      {expand && (
        <section>
          <p>
            {text}
            {four && <br/>}
            {four && text2}</p>
        </section>
      )}
    </div>
  );
};

export default WorkStage;
