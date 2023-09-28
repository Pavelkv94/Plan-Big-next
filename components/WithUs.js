import React, { useState } from "react";
import styles from "../styles/WithUs.module.scss";
import Title from "./Title";
import WithUsItem from "./WithUsItem";
import { useSnapCarousel } from "react-snap-carousel";
import LeftArrow from "../svgs/arrow-client-left-black.svg";
import RightArrow from "../svgs/arrow-client-right-black.svg";
import LeftArrowLight from "../svgs/arrow-client-left-light.svg";
import RightArrowLight from "../svgs/arrow-client-right-light.svg";
import { feedbacks } from "./contants";

const WithUs = ({ isDarkTheme }) => {
  const [open, setOpen] = useState(false);
  const [imgUrl, setImgUrl] = useState("");

  const items = feedbacks.map((el, i) => (
    <WithUsItem
      key={i}
      isDarkTheme={isDarkTheme}
      title={el.title}
      description={el.text}
      jobTitle={"Ген. директор "}
      jobContact={el.director}
      widthTime={250 * el.urgent}
      widthMoney={250 * el.money}
      widthDiff={250 * el.difficult}
      ind={i + 1}
      imgUrl={el.imgUrl}
      setOpen={setOpen}
      setImgUrl={setImgUrl}
    />
  ));

  return (
    <div className={`${styles.withUsWrapper} ${isDarkTheme ? styles.dark : styles.light}`} id="feedback">
      <div className={styles.withUsContent}>
        <div className={styles.title}>
          <Title isDarkTheme={isDarkTheme} text="C НАМИ ПРОСТО И ЭФФЕКТИВНО" mainTitle width={"860px"} left={"50px"} />
        </div>
        <div className={styles.slider}>
          <Slider array={items} isDarkTheme={isDarkTheme} />
        </div>
      </div>
      {open && <Approvement imgUrl={imgUrl} setOpen={setOpen}/>}
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
        <div onClick={() => prev()} className={`${styles.arrow} ${styles.left}`}>
          {activePageIndex !== 0 && (isDarkTheme ? <LeftArrow /> : <LeftArrowLight />)}
        </div>
        {activePageIndex !== 0 && isDarkTheme && <div className={styles.test1}></div>}

        <div onClick={() => next()} className={`${styles.arrow} ${styles.right}`}>
          {activePageIndex !== pages.length - 1 && (isDarkTheme ? <RightArrow /> : <RightArrowLight />)}
        </div>
        {activePageIndex !== pages.length - 1 && isDarkTheme && <div className={styles.test2}></div>}

      </div>
    </>
  );
};

const Approvement = ({ imgUrl, setOpen }) => {
  return (
    <div className={styles.approvement} onClick={() => setOpen(false)}>
      <img src={imgUrl} width={500} onClick={e => e.stopPropagation()}/>
    </div>
  );
};
