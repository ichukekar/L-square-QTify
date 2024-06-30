import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './Carousel.module.css';

import CarouselLeftNavigation from './CarouselLeftNavigation';
import CarouselRightNavigation from './CarouselRightNavigation';

const Controls = ({ data, swiper }) => {
  useEffect(() => {
    if (swiper) {
      swiper.slideTo(0, 1);
    }
  }, [data, swiper]);

  return null;
};

const Carousel = ({ data, renderComponent }) => {
  const [swiperInstance, setSwiperInstance] = React.useState(null);

  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: '0px 20px' }}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={7}
        spaceBetween={40}
        allowTouchMove
        onSwiper={setSwiperInstance}
        navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
      >
        {swiperInstance && <Controls data={data} swiper={swiperInstance} />}
        {data.map((ele, index) => (
          <SwiperSlide key={index}>{renderComponent(ele)}</SwiperSlide>
        ))}
      </Swiper>
      {swiperInstance && <CarouselLeftNavigation swiper={swiperInstance} />}
      {swiperInstance && <CarouselRightNavigation swiper={swiperInstance} />}
    </div>
  );
};

export default Carousel;















