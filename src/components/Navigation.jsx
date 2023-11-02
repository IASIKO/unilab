import React from "react";
import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className={styles.navWrapper}>
      <div className={styles.routeContainer}>
        <Link to="/form">Form</Link>
        <Link to="/form/api">API</Link>
      </div>
      <div className={styles.infoContainer}>
        <h2>your name</h2>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Navigation;
