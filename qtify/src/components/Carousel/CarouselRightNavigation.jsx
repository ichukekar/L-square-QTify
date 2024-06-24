/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import styles from './CarouselRightNavigation.module.css';
import RightArrow from "../../assets/RightNav.svg";

export default function CarouselRightNavigation({ swiper }) {
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    const handleSlideChange = () => {
      setIsEnd(swiper.isEnd);
    };

    swiper.on("slideChange", handleSlideChange);
    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [swiper]);

  return (
    <div className={styles.rightNavigation}>
      {!isEnd && <img src={RightArrow} onClick={() => swiper.slideNext()} />}
    </div>
  );
}

