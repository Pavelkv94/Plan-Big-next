import React, { useState } from "react";
import styles from "../styles/WithUsItem.module.scss";

const WithUsItem = ({ isDarkTheme, title, description, jobTitle, jobContact, widthTime, widthMoney, widthDiff }) => {
  return (
    <div className={`${styles.withUssliderItem} ${isDarkTheme ? styles.dark : styles.light}`}>
      <h3>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.job}>
        <p>{jobTitle}</p>
        <p>{jobContact}</p>
      </div>

      <div className={`${styles.parameters} ${isDarkTheme ? styles.dark : styles.light}`}>
        <div className={styles.percents}>
          <p>1%</p>
          <p>100%</p>
        </div>
        <section>
          <div className={styles.indicator}>
            <div style={{ width: widthTime }}></div>
          </div>
          <p>срок</p>
          <div className={styles.indicator}>
            <div style={{ width: widthMoney }}></div>
          </div>
          <p>бюджет</p>
          <div className={styles.indicator}>
            <div style={{ width: widthDiff }}></div>
          </div>
          <p>сложность</p>
        </section>
      </div>
    </div>
  );
};

export default WithUsItem;
