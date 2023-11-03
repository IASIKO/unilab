import React from "react";
import styles from "./FormContent.module.css";
import filter from "../assets/filter.png";
import search from "../assets/search.png";

const FormContent = () => {
  return (
    <>
      <div className={styles.bars}>
        <div className={styles.filter}>
          <img src={filter} alt="filter icon" />
          <span>filter</span>
        </div>
        <div className={styles.search}>
          <input type="search" />
        </div>
      </div>
      <div className={styles.formList}></div>
    </>
  );
};

export default FormContent;
