import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { IoIosPlay } from "react-icons/io";
import { Pagination } from "@mui/material";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "../Home/Home.module.css";
import NewFilmCard from "../../components/NewFilmCard/NewFilmCard";
import Tab from "../../components/Tab/Tab";
import Contact from "../../components/Contact/Contact";
import ComingSoon from "../../components/ComingSoon/ComingSoon";

// SwiperCore.use([Pagination]);

const Home = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const [records, setRecords] = useState([]);

  const movies = records.slice(0, 3);

  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=25fd04690e6e712dde58ac89e191a8a4";

  // const options = {
  //   method: "GET",
  //   url: "https://movies-tv-shows-database.p.rapidapi.com/",
  //   params: {
  //     movieid: "tt1375666",
  //   },
  //   headers: {
  //     Type: "get-movie-details",
  //     "X-RapidAPI-Key": "90af22bfc3msh10cade2264e930dp1851f2jsna892e7869370",
  //     "X-RapidAPI-Host": "movies-tv-shows-database.p.rapidapi.com",
  //   },
  // };

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setRecords(result.results);
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
            {/* {records.length ? ( */}
            {movies?.map((list, index) => (
              <SwiperSlide key={index} className={styles.SwiperSlide}>
                <div className={styles.SwiperItem}>
                  <img
                    className={styles.image}
                    src={`https://image.tmdb.org/t/p/original${list?.backdrop_path}`}
                    alt={list?.title}
                  />
                  <div className={styles.item}>
                    <span className={styles.title}>
                      Action, Adventure, Sci-Fi
                    </span>
                    <h1>{list?.title}</h1>
                    <p className={styles.description}>{list?.overview}</p>
                    <div className={styles.buttons}>
                      <span className={styles.certificate}>
                        {list?.vote_count}
                      </span>
                      <span className={styles.button}>
                        <IoIosPlay className={styles.play} />
                        <span>Play trailer</span>
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {/* ) : (
              <p>Something went wrong!</p>
             )} */}
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
      <ComingSoon item={records} />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
