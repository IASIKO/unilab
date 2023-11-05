import React from "react";
import styles from "../css/components/Table.module.css";
import sorticon from "../assets/sorticon.png";

const Table = ({ data }) => {
  return (
    <div className={styles.studentsCard}>
      <table>
        <thead>
          <tr className={styles.titles}>
            <th>სტუდეტის სახელი და გვარი</th>
            <th>სტატუსი</th>
            <th>სქესი</th>
            <th>
              <div className={styles.gradesContent}>
                <span>ქულები</span>
                <img
                  src={sorticon}
                  alt="sort icon"
                  className={styles.sorticon}
                />
              </div>
            </th>
            <th>პირადი ნომერი</th>
            <th>მეილი</th>
            <th>ტელეფონი</th>
            <th>მისამართი</th>
            <th>დაბადების თარიღი</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
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
  );
};

export default Table;
