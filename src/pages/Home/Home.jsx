import Header from "../../components/Header/Header";
import styles from "../Home/Home.module.css";
import React, { useRef, useState } from "react";
import Footer from "../../components/Footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect } from "react";
import { IoIosPlay } from "react-icons/io";
import NewFilmCard from "../../components/NewFilmCard/NewFilmCard";
import Tab from "../../components/Tab/Tab";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const [records, setRecords] = useState([]);

  const url = "https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "90af22bfc3msh10cade2264e930dp1851f2jsna892e7869370",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setRecords(result.d);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className={styles.homePage}>
      <Header />
      <section className={styles.trailer}>
        <div className={styles.container}>
          <Swiper pagination={pagination} className={styles.mySwiper}>
            {records.map((list, index) => (
              <SwiperSlide key={index} className={styles.SwiperSlide}>
                <div className={styles.SwiperItem}>
                  <img className={styles.image} src={list?.i?.imageUrl} />
                  <div className={styles.item}>
                    <span className={styles.title}>
                      Action, Adventure, Sci-Fi
                    </span>
                    <h1>{list?.l}</h1>
                    <p className={styles.description}>{list?.s}</p>
                    <div className={styles.buttons}>
                      <span className={styles.certificate}>{list?.rank}</span>
                      <span className={styles.button}>
                        <IoIosPlay className={styles.play} />
                        <span>Play trailer</span>
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section className={styles.newMovies}>
        <div className={styles.container}>
          <div className={styles.top}>
            <h2>New in </h2>
          </div>
          <div className={styles.bottom}>
            <NewFilmCard item={records} />
          </div>
        </div>
      </section>
      <Tab item={records} />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
