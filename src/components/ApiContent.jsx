import React from "react";
import styles from "./ApiContent.module.css";

const ApiContent = ({ apiData }) => {
  return (
    <ul className={styles.list}>
      {apiData.map((item) => (
        <li key={item.id}>
          <div className={styles.userId}>
            <span>{item.userId}</span>
          </div>
            <div className={styles.id}>
              <span>{item.id}</span>
            </div>
            <p>{item.title}</p>
            <p>{item.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default ApiContent;
