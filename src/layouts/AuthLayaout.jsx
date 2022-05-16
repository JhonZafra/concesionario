import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayaout = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 py-50 px-4">
      Layout autentificacion
      <div className="flex w-full">
      { children }
      <Outlet />
      </div>
    </div>
  );
};

export default AuthLayaout;
