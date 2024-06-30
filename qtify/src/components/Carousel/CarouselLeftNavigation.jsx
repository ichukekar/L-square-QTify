/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import styles from './CarouselLeftNavigation.module.css';
import LeftArrow from "../../assets/LeftNav.svg";

export default function CarouselLeftNavigation({ swiper }) {
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  useEffect(() => {
    const handleSlideChange = () => {
      setIsBeginning(swiper.isBeginning);
    };

    swiper.on("slideChange", handleSlideChange);
    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [swiper]);

  return (
    <div className={styles.leftNavigation}>
      {!isBeginning && <img src={LeftArrow} onClick={() => swiper.slidePrev()} />}
    </div>
  );
}

