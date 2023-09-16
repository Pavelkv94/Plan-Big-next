import { useSnapCarousel } from "react-snap-carousel";
import CustomDot from "./CustomDot";
import LeftArrow from "../svgs/arrow-client-left-black.svg";
import RightArrow from "../svgs/arrow-client-right-black.svg";
import styles from "../styles/Carousel.module.scss";

const Carousel = ({ array, isDarkTheme }) => {
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
          <LeftArrow />
          {isDarkTheme && <div className={styles.test}></div>}
        </div>

        <div className={styles.dots}>
          {pages.map((_, i) => (
            <CustomDot isDarkTheme={isDarkTheme} onClick={() => goTo(i)} isSelected={i === activePageIndex} key={i} />
          ))}
        </div>
        <div onClick={() => next()} className={styles.arrow}>
          <RightArrow />
          {isDarkTheme && <div className={styles.test}></div>}
        </div>
      </div>
    </>
  );
};

export default Carousel;
