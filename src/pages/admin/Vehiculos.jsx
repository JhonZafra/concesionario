import React from "react";
import { useEffect, useState } from "react";

// realizar un formulario que le puda al usuario su edad y muestre un mensaje
// que diga si el usuario es mayor de edad o no

const Vehiculos = () => {
  const [mostrarTabla, setMostrarTabla] = useState(false);
  const [textoBoton, settextoBoton] = useState("Crear nuevo vehículo");

  useEffect(() => {
    if (mostrarTabla) {
      settextoBoton("Crear Nuevo Vehículo");
    } else {
      settextoBoton("Mostrar todos los vehículos");
    }
  }, [mostrarTabla]);

  return (
    <div className="flex h-full w-full flex-col items-center">
      <div className="flex flex-col">
        <h2 className="text-3xl font-extrabold">
          Pagina de administración de vehículos
        </h2>
        <button
          onClick={() => {
            setMostrarTabla(!mostrarTabla);
          }}
          className="text-white bg-indigo-500 p-5 rounded-full m-12 w-max self-center">
          {textoBoton}
        </button>
      </div>
      {mostrarTabla ? <TablaVehiculos /> : <FormularioCreacionVehiculos />}
    </div>
  );
};

const TablaVehiculos = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre del vehículo</th>
          <th>Marca del vehículo</th>
          <th>Modelo del vehículo</th>
        </tr>
      </thead>
        <tbody>
          <tr>
            <td>Corolla</td>
            <td>Toyota</td>
            <td>2014</td>
          </tr>
          <tr>
            <td>Corolla</td>
            <td>Toyota</td>
            <td>2014</td>
          </tr>
          <tr>
            <td>Corolla</td>
            <td>Toyota</td>
            <td>2014</td>
          </tr>
        </tbody>

    </table>
  );
};

const FormularioCreacionVehiculos = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-extrabold text-gray-800">
        Crear Nuevo Vehículo
      </h2>
      <form className="grid grid-cols-2">
        <input
          className="bg-grey-50 border border-gray-600 p-2 rounded-lg m-2"
          type="text"
        />
        <input
          className="bg-grey-50 border border-gray-600 p-2 rounded-lg m-2"
          type="text"
        />
        <input
          className="bg-grey-50 border border-gray-600 p-2 rounded-lg m-2"
          type="text"
        />
        <input
          className="bg-grey-50 border border-gray-600 p-2 rounded-lg m-2"
          type="text"
        />
        <button className="col-span-2 bg-green-600 p-2 rounded-full hover:bg-green-600 text-white">
          Guardar Vehículo
        </button>
      </form>
    </div>
  );
};

export default Vehiculos;
