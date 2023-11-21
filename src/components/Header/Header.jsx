// import React from "react";
import styles from "../Header/Header.module.css";
import logo from "../../assets/images/logo.svg";
import { BsFillTelephoneFill } from "react-icons/bs";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.top}>
          <span className={styles.tel}>
            <BsFillTelephoneFill className={styles.icon} />
            123 456 789
          </span>
        </div>
        <div className={styles.bottom}>
          <figure className={styles.logo}>
            <img src={logo} />
          </figure>
          <div className={styles.navigation}>
            <ul className={styles.menu}>
              <li className={styles.item}>Home</li>
              <li className={styles.item}>What’s on</li>
              <li className={styles.item}>News</li>
              <li className={styles.item}>Shortcodes</li>
              <li className={styles.item}>Contact us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
