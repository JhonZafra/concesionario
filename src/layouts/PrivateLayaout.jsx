import Sidebar from "components/Sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

const PrivateLayaout = ({ children }) => {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <main className="flex w-full bg-blue-400 overflow-y-scroll">
      {children}
      <Outlet />
      </main>
    </div>
  );
};

export default PrivateLayaout;
