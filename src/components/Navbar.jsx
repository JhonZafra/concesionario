import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-red-400">
      <ul className="flex w-full justify-between my-3 ">
        <li>Logo</li>
        <li>Navegacion 1</li>
        <li>Navegacion 2</li>
        <li className="px-3">Navegacion 3 </li>
        <Link to="/login">
        <button className='bg-indigo-500 p-2 text-white rounded-lg shadow-md hover:bg-indigo-700'>
            Iniciar Sesión
        </button>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
