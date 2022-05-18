import React from "react";
import { Link } from "react-router-dom";
import Google from "media/Google.png";
import carDealerLogo from "media/carDealerLogo.jpg"

const Login = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <h2 className="mt-4 mb-4 text-center text-3xl font-extrabold text-gray-900">
        Inicia sesion en tu cuenta
      </h2>
      <img src={ carDealerLogo } alt="Imagen del concesionario" />
      <form className="space-y-6">
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <input
              name="email"
              type="email"
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Correo electrónico"
              required
            />
          </div>
          <div>
            <input
              name="password"
              type="password"
              className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              required
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <label
              htmlFor="recuerdame"
              className="ml-2 block text-sm text-gray-900"
            >
              <input type="checkbox" name="recuerdame" />
              Recuerdame
            </label>
          </div>
          <div className="text-sm font-medium ml-3 text-gray-900' hover:text-indigo-500">
            <Link to="/">Olvidaste tu contraseña</Link>
          </div>
        </div>
        <div>
          <Link to="/admin">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Iniciar Sesion
            </button>
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <span>¿No tienes cuenta?</span>
          <Link to="/registro">
            <span className="font-medium text-indigo-600 hover:text-indigo-500">
              Regístrate
            </span>
          </Link>
        </div>
      </form>
      <div className="max-w-md">
        <button className="mt-10 className=group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          <div className="flex items-center justify-start">
            <img src={Google} alt="Logo Google" className="h-6 w-6" />
            <span className="mx-4">Continúa con Google</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Login;
