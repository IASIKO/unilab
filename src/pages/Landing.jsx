import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/pages/Landing.module.css";
import pngegg from "../assets/pngegg.png";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.landingContainer}>
      <img src={pngegg} alt="pngegg" />
      <h1>Get Started Today</h1>
      <button onClick={() => navigate("/registration")}>Get Started</button>
    </div>
  );
};

export default Landing;
