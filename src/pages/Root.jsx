import React from "react";
import Navigation from "../components/header/Navigation";
import { Outlet } from "react-router-dom";
import Landing from "./Landing";

const Root = () => {
  const userImage = localStorage.getItem("userImage");
  const userName = localStorage.getItem("userName");
  const localStorageFull = userImage && userName;

  return (
    <>
      {localStorageFull ? (
        <>
          <Navigation />
          <main>
            <Outlet />
          </main>
        </>
      ) : (
        <Landing />
      )}
    </>
  );
};

export default Root;
