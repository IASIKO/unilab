import React, { useState } from "react";
import styles from "./FormContent.module.css";
import filter from "../assets/filter.png";
import search from "../assets/search.png";

const FormContent = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <>
      <div className={styles.bars}>
        <div
          className={styles.filter}
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <img src={filter} alt="filter icon" />
          <span>filter</span>
        </div>
        <div className={styles.search}>
          <input type="search" />
        </div>
      </div>
      {isFilterOpen && <div className={styles.filterMenu}></div>}
      <div className={styles.formList}>
        <div className={styles.titles}>
          <p>სტუდეტის სახელი და გვარი</p>
          <p>სტატუსი</p>
          <p>სქესი</p>
          <p>ქულები</p>
          <p>პირადი ნომერი</p>
          <p>მეილი</p>
          <p>ტელეფონი</p>
          <p>მისამართი</p>
          <p>დაბადების თარიღი</p>
        </div>
      </div>
    </>
  );
};

export default FormContent;
