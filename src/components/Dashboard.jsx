import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardIndex from "./DashboardIndex";
import Orders from "./Orders";

const Dashboard = () => {
  return (
    <div>
      <nav>Dashboard Nav</nav>
      <Routes>
        <Route path="/" element={<DashboardIndex />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="*" element={<Dashboard404 />}></Route>
      </Routes>
    </div>
  );
};

const Dashboard404 = () => {
  return (
    <div>
      <h2>Dashboard 404</h2>
    </div>
  );
};

export default Dashboard;
