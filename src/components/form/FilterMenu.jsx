import React, { useState } from "react";
import styles from "./FilterMenu.module.css";
import ddarrow from "../../assets/ddarrow.png";


const FilterMenu = () => {
  const [isGenderOpen, setIsGenderOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);


  return (
    <div className={styles.filterMenu}>
      <div
        className={styles.drop}
        onClick={() => setIsStatusOpen(!isStatusOpen)}
      >
        <img src={ddarrow} alt="arrow icon" />
        <p> სტუდენტის სტატუსი</p>
      </div>
      {isStatusOpen && (
        <div className={styles.checkbox}>
          <input type="checkbox" name="active" />
          <label htmlFor="active">ACTIVE</label>
          <br></br>
          <input type="checkbox" name="inactive" />
          <label htmlFor="inactive">INACTIVE</label>
          <br></br>
        </div>
      )}
      <div
        className={styles.drop}
        onClick={() => setIsGenderOpen(!isGenderOpen)}
      >
        <img src={ddarrow} alt="arrow icon" />
        <p> სქესი</p>
      </div>
      {isGenderOpen && (
        <div className={styles.checkbox}>
          <input type="checkbox" name="male" />
          <label htmlFor="male">MALE</label>
          <br></br>
          <input type="checkbox" name="female" />
          <label htmlFor="female">FEMALE</label>
          <br></br>
        </div>
      )}
    </div>
  );
};

export default FilterMenu;
