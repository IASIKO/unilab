import React, { useState } from "react";
import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";
import Popup from "./Popup";

const Navigation = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const userImage = localStorage.getItem("userImage");
  const userName = localStorage.getItem("userName");

  return (
    <>
      <div className={styles.navWrapper}>
        <div className={styles.routeContainer}>
          <Link to="/form">Form</Link>
          <Link to="/form/api">API</Link>
        </div>
        <div className={styles.infoContainer}>
          <h2>{userName ? userName : "your name"}</h2>
          <div onClick={() => setIsPopupOpen(true)}>
            <img src={userImage} alt="profile image" />
          </div>
        </div>
      </div>
      {isPopupOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setIsPopupOpen(false)}
        ></div>
      )}
      <Popup isOpen={isPopupOpen} isClose={() => setIsPopupOpen(false)} />
    </>
  );
};

export default Navigation;
