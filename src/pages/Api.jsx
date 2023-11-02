import React, { useEffect, useState } from "react";
import ApiContent from "../components/ApiContent";

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
    <>
      <ApiContent apiData={apiData} />
    </>
  );
};

export default Api;
