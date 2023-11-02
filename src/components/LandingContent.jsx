import React from "react";
import styles from "./LandingContent.module.css";
import pngegg from "../assets/pngegg.png";
import { useNavigate } from "react-router-dom";

const LandingContent = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.landingContainer}>
      <img src={pngegg} alt="pngegg" />
      <h1>Get Started Today</h1>
      <button onClick={() => navigate("/registration")}>Get Started</button>
    </div>
  );
};

export default LandingContent;
