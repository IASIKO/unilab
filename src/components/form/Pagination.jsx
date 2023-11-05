import React from "react";
import styles from "./Pagination.module.css";
import chevronsLeft from "../../assets/chevrons-left.png";
import chevronLeft from "../../assets/chevron-left.png";
import chevronRight from "../../assets/chevron-right.png";
import chevronsRight from "../../assets/chevrons-right.png";

const Pagination = () => {
  return (
    <div className={styles.pagination}>
      <div>
        <img src={chevronsLeft} alt="chevrons left" />
      </div>
      <div>
        <img src={chevronLeft} alt="chevron left" />
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
