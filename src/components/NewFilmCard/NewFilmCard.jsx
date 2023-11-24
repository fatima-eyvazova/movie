import React from "react";
import styles from "../NewFilmCard/NewFilmCard.module.css";
import { FaStar, FaRegPlayCircle } from "react-icons/fa";

const NewFilmCard = ({ item }) => {
  const displayedItems = Array.isArray(item) ? item.slice(4, 7) : [];

  const starCount = 5;
  const stars = Array.from({ length: starCount }, (_, index) => index + 1);

  return (
    <div className={styles.NewFilmCard}>
      <div className={styles.container}>
        {displayedItems.map((movie, index) => (
          <div key={index} className={styles.item}>
            <figure>
              <img
                src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
              />
            </figure>
            <h4 className={styles.title}>{movie.title}</h4>
            <div className={styles.stars}>
              {stars.map((starIndex) => (
                <FaStar key={starIndex} className={styles.star} />
              ))}
            </div>
            <div className={styles.readMore}>
              <div>
                <FaRegPlayCircle className={styles.icon} />
                <p>Read More</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewFilmCard;
