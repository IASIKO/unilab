import React, { useEffect } from "react";
import Navigation from "../components/header/Navigation";
import { Outlet, useNavigate } from "react-router-dom";
import Landing from "./Landing";

const Root = () => {
  const navigate = useNavigate()
  const userImage = localStorage.getItem("userImage");
  const userName = localStorage.getItem("userName");
  const localStorageFull = userImage && userName;

  useEffect(() => {
    if (!localStorageFull) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
