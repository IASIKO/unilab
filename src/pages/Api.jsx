import React, { useEffect, useState } from "react";
import styles from "../css/pages/Api.module.css";
import Pagination from "../components/Pagination";

const Api = () => {
  const [apiData, setApiData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 10;

  const fetchData = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${limit}`
    );
    const data = await response.json();
    setApiData(data);
  };

  const fetchTotalCount = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setTotal(data.length);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    fetchTotalCount();
  }, []);

  useEffect(() => {
    fetchData();
  }, [currentPage, limit]);

  return (
    <>
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
      <Pagination
        currentPage={currentPage}
        total={total}
        limit={limit}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Api;
