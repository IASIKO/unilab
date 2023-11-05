import React, { useState } from "react";
import styles from "../css/pages/Form.module.css";
import filter from "../assets/filter.png";
import { DUMMY_DATA } from "../DummyData";
import Table from "../components/Table";
import FilterMenu from "../components/FilterMenu";
import Pagination from "../components/Pagination";

const Form = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

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
      <Pagination
        currentPage={currentPage}
        total={DUMMY_DATA.length}
        limit={7}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
};

export default Form;
