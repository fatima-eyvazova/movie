import React from "react";
import styles from "../Tab/Tab.module.css";
// material ui
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// react i
import { FaChevronRight } from "react-icons/fa";

const TabItem = ({ item }) => {
  const [value, setValue] = React.useState(0);

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
        {item.map((item, index) => (
          <CustomTabPanel
            value={value}
            index={index}
            key={index}
            className={styles.tabPanel}
          >
            <div className={styles.tabItem}>
              <div className={styles.tabImg}>
                <img src={item?.i?.imageUrl} alt="Tab" />
              </div>
              <div className={styles.info}>
                <div className={styles.type}>Thriller, Horror </div>
                <h3>{item?.l}</h3>
                <p className={styles.description}>{item?.s}</p>
                <p className={styles.synopsis}>
                  <span>FULL SYNOPSIS</span>
                  <FaChevronRight className={styles.icon} />
                </p>
              </div>
            </div>
          </CustomTabPanel>
        ))}
      </Box>
    </div>
  );
};

export default TabItem;
