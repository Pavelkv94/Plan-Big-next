import React, { useState } from "react";
import styles from "../styles/WithUs.module.scss";
import Title from "./Title";
import WithUsItem from "./WithUsItem";
import { useSnapCarousel } from "react-snap-carousel";
import LeftArrow from "../svgs/arrow-client-left-black.svg";
import RightArrow from "../svgs/arrow-client-right-black.svg";
import LeftArrowLight from "../svgs/arrow-client-left-light.svg";
import RightArrowLight from "../svgs/arrow-client-right-light.svg";

const WithUs = ({ isDarkTheme }) => {
  const item = (
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
  );

  return (
    <div className={`${styles.withUsWrapper} ${isDarkTheme ? styles.dark : styles.light}`} id="feedback">
      <div className={styles.withUsContent}>
        <div className={styles.title}>
          <Title isDarkTheme={isDarkTheme} text="C НАМИ ПРОСТО И ЭФФЕКТИВНО" mainTitle width={"860px"} left={"50px"} />
        </div>
        <div className={styles.slider}>
          <Slider array={[item, item, item]} isDarkTheme={isDarkTheme} />
        </div>
      </div>
    </div>
  );
};

export default WithUs;

const Slider = ({ array, isDarkTheme }) => {
  const { scrollRef, pages, activePageIndex, next, prev, goTo } = useSnapCarousel();

  return (
    <>
      <ul ref={scrollRef} className={styles.carousel}>
        {array.map((el, i) => (
          <li key={i} className={styles.carouselItem}>
            {el}
          </li>
        ))}
      </ul>
      <div className={styles.controlls}>
        <div onClick={() => prev()} className={styles.arrow}>
          {activePageIndex !== 0 && (isDarkTheme ? <LeftArrow /> : <LeftArrowLight />)}
          {activePageIndex !== 0 && isDarkTheme && <div className={styles.test}></div>}
        </div>

        <div onClick={() => next()} className={styles.arrow}>
          {activePageIndex !== pages.length - 1 && (isDarkTheme ? <RightArrow /> : <RightArrowLight />)}
          {activePageIndex !== pages.length - 1 && isDarkTheme && <div className={styles.test}></div>}
        </div>
      </div>
    </>
  );
};
