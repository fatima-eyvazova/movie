import React, { useState, useEffect } from "react";
import styles from "../Header/Header.module.css";
import logo from "../../assets/images/logo.svg";
import { BsFillTelephoneFill } from "react-icons/bs";

const Header = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navbarStyles = isScrolled ? { backgroundColor: "black" } : {};
  const navbarBottomStyles = isScrolled ? { display: "none" } : {};

  const handleMenuItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <div className={styles.header} style={navbarStyles}>
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
              {["Home", "What’s on", "News", "Shortcodes", "Contact us"].map(
                (item, index) => (
                  <li
                    key={index}
                    className={`${styles.item} ${
                      selectedItem === index ? styles.selected : ""
                    }`}
                    onClick={() => handleMenuItemClick(index)}
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
          {/* <Link to="/action">Hello</Link>  */}
        </div>
      </div>
    </div>
  );
};

export default Header;
