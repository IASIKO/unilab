import React from "react";
import styles from "../../css/components/header/Popup.module.css";
import { useNavigate } from "react-router-dom";

const Popup = ({ isOpen, isClose }) => {
  const navigate = useNavigate();

  const onLogoutClickHandler = () => {
    localStorage.removeItem("userImage");
    localStorage.removeItem("userName");
    navigate("/");
  };

  return (
    <div className={`${styles.popupContainer} ${isOpen ? styles.open : ""}`}>
      <button onClick={isClose}>Close</button>
      <button onClick={onLogoutClickHandler}>Log out</button>
    </div>
  );
};

export default Popup;
