import React, { useState } from "react";
import styles from "./FormContent.module.css";
import filter from "../assets/filter.png";
import ddarrow from "../assets/ddarrow.png";

const FormContent = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isGenderOpen, setIsGenderOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);

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
      {isFilterOpen && (
        <div className={styles.filterMenu}>
          <div
            className={styles.drop}
            onClick={() => setIsStatusOpen(!isStatusOpen)}
          >
            <img src={ddarrow} alt="arrow icon" />
            <p> სტუდენტის სტატუსი</p>
          </div>
          {isStatusOpen && (
            <>
              <input type="checkbox" name="active" />
              <label htmlFor="active">ACTIVE</label>
              <br></br>
              <input type="checkbox" name="inactive" />
              <label htmlFor="inactive">INACTIVE</label>
              <br></br>
            </>
          )}
          <div
            className={styles.drop}
            onClick={() => setIsGenderOpen(!isGenderOpen)}
          >
            <img src={ddarrow} alt="arrow icon" />
            <p> სქესი</p>
          </div>
          {isGenderOpen && (
            <>
              <input type="checkbox" name="male" />
              <label htmlFor="male">MALE</label>
              <br></br>
              <input type="checkbox" name="female" />
              <label htmlFor="female">FEMALE</label>
              <br></br>
            </>
          )}
        </div>
      )}
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
