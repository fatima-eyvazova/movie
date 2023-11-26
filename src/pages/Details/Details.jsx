import React, { useState, useRef, useEffect } from "react";
import Header from "../../components/Header/Header";
import { Link, useParams } from "react-router-dom";
import styles from "../Details/Details.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
// react icons
import { IoIosPlay } from "react-icons/io";
import { MdOutlineDateRange, MdArrowForwardIos } from "react-icons/md";

import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaGooglePlusG,
} from "react-icons/fa";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

const Details = () => {
  const [product, setProduct] = useState([]);
  const swiper1Ref = useRef(null);
  const swiper2Ref = useRef();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  let { id } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=25fd04690e6e712dde58ac89e191a8a4`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setProduct(result);
      });
  }, []);

  useEffect(() => {
    if (swiper1Ref.current !== null) {
      swiper1Ref.current.controller.control = swiper2Ref.current;
    }
  }, [product]);
  return (
    <div className={styles.details}>
      <div className={styles.container}>
        <Header />
        <section className={styles.content}>
          <img
            className={styles.image}
            src={`https://image.tmdb.org/t/p/original${product?.backdrop_path}`}
            alt={product?.title}
          />
          <div className={styles.item}>
            <span className={styles.title}>Action, Adventure, Sci-Fi</span>
            <h1>{product?.title}</h1>
            <p className={styles.description}>{product?.overview}</p>
            <div className={styles.buttons}>
              <span className={styles.certificate}>{product?.vote_count}</span>
              <span className={styles.button}>
                <IoIosPlay className={styles.play} />
                <span>Play trailer</span>
              </span>
            </div>
          </div>
        </section>
        <section className={styles.synopsis}>
          <div className={styles.container}>
            <div className={styles.heading}>
              <h2>Synopsis</h2>
            </div>
            <div className={styles.info}>
              <div className={styles.left}>
                <img
                  src={`https://image.tmdb.org/t/p/original${product?.backdrop_path}`}
                  alt="bg-image"
                />
                <div className={styles.share}>
                  <span>
                    <FaFacebookF className={styles.icon} />
                  </span>
                  <span>
                    <FaTwitter className={styles.icon} />
                  </span>
                  <span>
                    <FaPinterest className={styles.icon} />
                  </span>
                  <span>
                    <FaGooglePlusG className={styles.icon} />
                  </span>
                </div>
              </div>
              <div className={styles.right}>
                <h3 className={styles.title}>{product?.title}</h3>
                <p className={styles.description}>{product?.overview}</p>
                <p className={styles.text}>{product?.overview}</p>
                <ul className={styles.movieInfo}>
                  <li>
                    <i>Language</i>
                    <span>{product?.original_language}</span>
                  </li>
                  <li>
                    <i>Popularity</i>
                    <span>{product?.popularity}</span>
                  </li>
                  <li>
                    <i>Released</i>
                    <span>{product?.release_date}</span>
                  </li>
                  <li>
                    <i>imdb</i>
                    <span>{product?.vote_average}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.trailer}>
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
            {Array.isArray(product) &&
              product.map((product, index) => (
                <SwiperSlide key={index} className={styles.element}>
                  <div className={styles.container}>
                    <div className={styles.info}>
                      <span className={styles.title}>
                        Fantasy, Sci-fi, Action
                      </span>
                      <h3 className={styles.headingT}>{product?.title}</h3>
                      <div className={styles.dataStars}>
                        <span>
                          <MdOutlineDateRange className={styles.date} />
                          {product?.release_date}
                        </span>
                      </div>
                      <p className={styles.description}>{product?.overview}</p>
                      <div className={styles.moreInfo}>
                        <span>More info </span>
                        <MdArrowForwardIos className={styles.arrow} />
                      </div>
                    </div>
                    <div>
                      <img
                        style={{ height: "351px", width: "500px" }}
                        src={`https://image.tmdb.org/t/p/original${product?.poster_path}`}
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
            className="mySwiper"
          >
            {Array.isArray(product) &&
              product.map((product, index) => (
                <SwiperSlide key={index}>
                  <img
                    style={{ height: "203px", width: "327px" }}
                    src={`https://image.tmdb.org/t/p/original${product?.poster_path}`}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </section>
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Details;
