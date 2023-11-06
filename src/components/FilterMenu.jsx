import React, { useEffect, useState } from "react";
import styles from "../css/components/FilterMenu.module.css";
import ddarrow from "../assets/ddarrow.png";

const FilterMenu = ({ data, setData }) => {
  const [isGenderOpen, setIsGenderOpen] = useState(true);
  const [isStatusOpen, setIsStatusOpen] = useState(true);
  const [filterOptions, setFilterOptions] = useState({
    active: true,
    inactive: true,
    male: true,
    female: true,
  });

  useEffect(() => {
    const filteredData = data.filter((item) => {
      const statusMatch =
        (filterOptions.active && item.Status === "ACTIVE") ||
        (filterOptions.inactive && item.Status === "INACTIVE");

      const genderMatch =
        (filterOptions.male && item.Gender === "Male") ||
        (filterOptions.female && item.Gender === "Female");

      return statusMatch && genderMatch;
    });

    setData(filteredData);
  }, [filterOptions]);

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
          <input
            type="checkbox"
            name="active"
            checked={filterOptions.active}
            onChange={() =>
              setFilterOptions({
                ...filterOptions,
                active: !filterOptions.active,
              })
            }
          />
          <label htmlFor="active">ACTIVE</label>
          <br></br>
          <input
            type="checkbox"
            name="inactive"
            checked={filterOptions.inactive}
            onChange={() =>
              setFilterOptions({
                ...filterOptions,
                inactive: !filterOptions.inactive,
              })
            }
          />
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
          <input
            type="checkbox"
            name="male"
            checked={filterOptions.male}
            onChange={() =>
              setFilterOptions({
                ...filterOptions,
                male: !filterOptions.male,
              })
            }
          />
          <label htmlFor="male">MALE</label>
          <br></br>
          <input
            type="checkbox"
            name="female"
            checked={filterOptions.female}
            onChange={() =>
              setFilterOptions({
                ...filterOptions,
                female: !filterOptions.female,
              })
            }
          />
          <label htmlFor="female">FEMALE</label>
          <br></br>
        </div>
      )}
    </div>
  );
};

export default FilterMenu;
