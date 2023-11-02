import React from "react";
import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  const userImage = localStorage.getItem("userImage");
  const userName = localStorage.getItem("userName");

  return (
    <div className={styles.navWrapper}>
      <div className={styles.routeContainer}>
        <Link to="/form">Form</Link>
        <Link to="/form/api">API</Link>
      </div>
      <div className={styles.infoContainer}>
        <h2>{userName ? userName : "your name"}</h2>
        <div>
          <img src={userImage} alt="profile image"/>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
