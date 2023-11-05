import React, { useState } from "react";
import styles from "./FormContent.module.css";
import filter from "../../assets/filter.png";
import { DUMMY_DATA } from "../../DummyData";
import Table from "./Table";
import FilterMenu from "./FilterMenu";
import Pagination from "./Pagination";

const FormContent = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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
      {isFilterOpen && <FilterMenu />}
      <Table data={DUMMY_DATA} />
      <Pagination />
    </>
  );
};

export default FormContent;
