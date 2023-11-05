import React, { useEffect, useState } from "react";
import styles from "../css/pages/Api.module.css";

const Api = () => {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setApiData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

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

export default Api;
