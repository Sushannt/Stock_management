import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <aside>
        <Sidebar />
      </aside>
      <main className="mt-5">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
