import React from "react";
import styles from "../Contact/Contact.module.css";
const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h3 className={styles.help}>
            Need help? Contact our support team on
          </h3>
          <p className={styles.number}>0330 123 4567</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
