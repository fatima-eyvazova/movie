import React from "react";
import styles from "../Footer/Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.element}>
            <h6>Get in touch</h6>
            <ul className={styles.menu}>
              <li>FAQs</li>
              <li>Give us feedback</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className={styles.element}>
            <h6>About movie star</h6>
            <ul className={styles.menu}>
              <li>FAQs</li>
              <li>Give us feedback</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className={styles.element}>
            <h6>Legal stuff</h6>
            <ul className={styles.menu}>
              <li>FAQs</li>
              <li>Give us feedback</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className={styles.element}>
            <h6>Connect with us</h6>
            <ul className={styles.menu}>
              <li>FAQs</li>
              <li>Give us feedback</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>2020 © Specto. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
