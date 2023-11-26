import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import { MdOutlineDateRange, MdArrowForwardIos } from "react-icons/md";

import styles from "../ComingSoon/ComingSoon.module.css";

const ComingSoon = ({ item }) => {
  const swiper1Ref = useRef(null);
  const swiper2Ref = useRef();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  useEffect(() => {
    if (swiper1Ref.current !== null) {
      swiper1Ref.current.controller.control = swiper2Ref.current;
    }
  }, []);
  const starCount = 5;
  const stars = Array.from({ length: starCount }, (_, index) => index + 1);

  return (
    <div className={styles.ComingSoon}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2> Coming soon</h2>
        </div>
        <>
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            onSwiper={(swiper) => {
              if (swiper1Ref.current !== null) {
                swiper1Ref.current = swiper;
              }
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className={styles.mySwiper2}
          >
            {item.map((item, index) => (
              <SwiperSlide key={index} className={styles.element}>
                <div className={styles.container}>
                  <div className={styles.info}>
                    <span className={styles.title}>
                      Fantasy, Sci-fi, Action
                    </span>
                    <h3 className={styles.headingT}>{item.title}</h3>
                    <div className={styles.dataStars}>
                      {stars.map((starIndex) => (
                        <FaStar key={starIndex} className={styles.star} />
                      ))}
                      <span>
                        <MdOutlineDateRange className={styles.date} />
                        {item.release_date}
                      </span>
                    </div>
                    <p className={styles.description}>{item.overview}</p>
                    <div className={styles.moreInfo}>
                      <span>More info </span>
                      <MdArrowForwardIos className={styles.arrow} />
                    </div>
                  </div>
                  <div>
                    <img
                      style={{ height: "351px", width: "500px" }}
                      src={`https://image.tmdb.org/t/p/original${item?.poster_path}`}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className={styles.mySwiper}
          >
            {item.map((item, index) => (
              <SwiperSlide key={index}>
                <img
                  style={{ height: "203px", width: "362px" }}
                  src={`https://image.tmdb.org/t/p/original${item?.poster_path}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default ComingSoon;
