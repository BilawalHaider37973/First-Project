import "./Home.css";
import React from "react";
import { Sidebar } from "./Sidebar";
import { Feeds } from "./Feeds";
import { Widgets } from "./Widgets";
export const Home = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        {/* <Feeds />
        <Widgets /> */}
      </div>
    </>
  );
};
