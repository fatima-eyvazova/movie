import React, { useState } from "react";
import styles from "../Tab/Tab.module.css";
// material ui
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// react i
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const TabItem = ({ item }) => {
  const [value, setValue] = useState(0);

  const movies = Array.isArray(item) ? item : [];

  const daysOfWeek = ["Mon", "Today", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <div className={styles.tabComponent}>
      <Box sx={{ width: "100%" }} className={styles.tab}>
        <Box
          sx={{ borderBottom: 1, borderColor: "divider" }}
          className={styles.box}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            className={styles.tabs}
          >
            {daysOfWeek.map((day, index) => (
              <Tab
                label={day}
                {...a11yProps(index)}
                key={index}
                className={styles.tab}
              />
            ))}
          </Tabs>
        </Box>
        {movies.map((item, index) => (
          <CustomTabPanel
            value={value}
            index={index}
            key={index}
            className={styles.tabPanel}
          >
            <Link to={`/product/${item.id}`} className={styles.tabItem}>
              <div className={styles.tabImg}>
                <img
                  src={`https://image.tmdb.org/t/p/original${item?.poster_path}`}
                  alt="Tab"
                />
              </div>
              <div className={styles.info}>
                <div className={styles.type}>Thriller, Horror </div>
                <h3>{item?.title}</h3>
                <p className={styles.description}>{item?.overview}</p>
                <p className={styles.synopsis}>
                  <span>FULL SYNOPSIS</span>
                  <FaChevronRight className={styles.icon} />
                </p>
              </div>
            </Link>
          </CustomTabPanel>
        ))}
      </Box>
    </div>
  );
};

export default TabItem;
