import React, { useState } from "react";
import styles from "./FormContent.module.css";
import filter from "../assets/filter.png";
import ddarrow from "../assets/ddarrow.png";
import { DUMMY_DATA } from "../DummyData";

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
      <div className={styles.studentsCard}>
        <table>
          <thead>
            <tr className={styles.titles}>
              <th>სტუდეტის სახელი და გვარი</th>
              <th>სტატუსი</th>
              <th>სქესი</th>
              <th>ქულები</th>
              <th>პირადი ნომერი</th>
              <th>მეილი</th>
              <th>ტელეფონი</th>
              <th>მისამართი</th>
              <th>დაბადების თარიღი</th>
            </tr>
          </thead>
          <tbody>
            {DUMMY_DATA.map((item) => (
              <tr key={item.id}>
                <td>{`${item.firstName} ${item.lastName}`}</td>
                <td>{item.Status}</td>
                <td>{item.Gender}</td>
                <td>{item.Grades}</td>
                <td>{item.personalNumber}</td>
                <td>{item.Email}</td>
                <td>{item.mobileNumber}</td>
                <td>{item.Address}</td>
                <td>{item.birthDay}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FormContent;
