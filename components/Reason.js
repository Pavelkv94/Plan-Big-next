import React, { useEffect, useState } from "react";
import styles from "../styles/Reason.module.scss";
import ArrowBlack1 from "../svgs/arrow-black-1.svg";
import ArrowBlack2 from "../svgs/arrow-black-2.svg";
import ArrowBlack3 from "../svgs/arrow-black-3.svg";
import ArrowLight1 from "../svgs/arrow-light-1.svg";
import ArrowLight2 from "../svgs/arrow-light-2.svg";
import ArrowLight3 from "../svgs/arrow-light-3.svg";

const Reason = ({ isDarkTheme, title, text, screenSize }) => {
  const initHeight = screenSize > 1560 ? "108px" : "82px"
    const [height, setHeight] = useState(initHeight);

    const handleClick = () => setHeight(height === "200px" ? initHeight : "200px");

    const [arrowAnim, setArrowAnim] = useState(1);

    // useEffect(() => {
    //   let timeout = setInterval(() => {
    //     arrowAnim === 1 ? setArrowAnim(2) : arrowAnim === 2 ? setArrowAnim(3) : setArrowAnim(1);
    //   }, 1000)

    //   return () => clearInterval(timeout);
    // }, [arrowAnim]);

    const handleSetArrow = () => {
      if(isDarkTheme) {
        return arrowAnim === 1 ? <ArrowBlack1 className="arrow-black"/> : arrowAnim === 2 ? <ArrowBlack2 /> : <ArrowBlack3 />
      } else {
        return arrowAnim === 1 ? <ArrowLight1 className="arrow-light"/> : arrowAnim === 2 ? <ArrowLight2 /> : <ArrowLight3 />
      }
    };
   
  return (
    <section className={`${styles.reason} ${isDarkTheme ? styles.dark : styles.light}`} style={{height: height}}>
        <h4>{title}</h4>
        <div className={styles.arrows} onClick={handleClick}>
        {handleSetArrow()}
        </div>
        <p style={{opacity: height === "200px" ? 1 : 0, }} className={styles[height === "200px" ? "full" : "notFull"]}>
            {text}
        </p>
    </section>
  );
};
//transition: height === "200px" ? "0.2s" : "0.8s"
export default Reason;
