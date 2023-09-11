import React, { useState } from "react";
import styles from "../styles/Reason.module.scss";

const Reason = ({ isDarkTheme, title, text }) => {
    const [height, setHeight] = useState("108px");

    const handleClick = () => setHeight(height === "200px" ? "108px" : "200px");

  return (
    <section className={`${styles.reason} ${isDarkTheme ? styles.dark : styles.light}`} style={{height: height}}>
        <h4>{title}</h4>
        <div className={styles.arrows} onClick={handleClick}>
        </div>
        <p style={{opacity: height === "200px" ? 1 : 0}}>
            {text}
        </p>
    </section>
  );
};

export default Reason;
