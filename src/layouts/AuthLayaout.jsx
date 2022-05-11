import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayaout = ({ children }) => {
  return (
    <div className="bg-green-600">
      Layout autentificacion
      { children }
      <Outlet />
    </div>
  );
};

export default AuthLayaout;
