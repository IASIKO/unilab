import React from "react";
import styles from "../css/components/Pagination.module.css";
import chevronsLeft from "../assets/chevrons-left.png";
import chevronLeft from "../assets/chevron-left.png";
import chevronRight from "../assets/chevron-right.png";
import chevronsRight from "../assets/chevrons-right.png";

const Pagination = ({ currentPage, total, limit, onPageChange }) => {
  const pagesCount = Math.ceil(total / limit);
  const range = (start, end) => {
    return [...Array(end).keys()].map((el) => el + start);
  };
  const pages = range(1, pagesCount);

  return (
    <div className={styles.pagination}>
      <div>
        <img src={chevronsLeft} alt="chevrons left" />
      </div>
      <div>
        <img src={chevronLeft} alt="chevron left" />
      </div>
      <div className={styles.pages}>
        {pages.map((p) => (
          <span
            key={p}
            className={p == currentPage ? `${styles.active}` : ""}
            onClick={() => onPageChange(p)}
          >
            {p}
          </span>
        ))}
      </div>
      <div>
        <img src={chevronRight} alt="chevron right" />
      </div>
      <div>
        <img src={chevronsRight} alt=" chevrons right" />
      </div>
    </div>
  );
};

export default Pagination;
