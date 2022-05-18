import React from "react";
import { useEffect, useState } from "react";

// realizar un formulario que le puda al usuario su edad y muestre un mensaje
// que diga si el usuario es mayor de edad o no

const vehiculosBackend = [
  {
    nombre: "Corolla",
    marca: "Toyota",
    modelo: 2014,
  },
  {
    nombre: "Sandero",
    marca: "Renault",
    modelo: 2015,
  },
  {
    nombre: "Rav4",
    marca: "Toyota",
    modelo: 2019,
  },
  {
    nombre: "Fiesta",
    marca: "Ford",
    modelo: 2017,
  },
  {
    nombre: "Mazda 3",
    marca: "Mazda",
    modelo: 2016,
  },
];

const Vehiculos = () => {
  const [mostrarTabla, setMostrarTabla] = useState(false);
  const [vehiculos, setVehiculos] = useState([]);
  const [textoBoton, settextoBoton] = useState("Crear nuevo vehículo");

  useEffect(() => {
    // obtener lista de vehículos desde el frontend o desde la base de datos
    setVehiculos(vehiculosBackend);
  }, []);

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
          className="text-white bg-indigo-500 p-5 rounded-full m-12 w-max self-center"
        >
          {textoBoton}
        </button>
      </div>
      {mostrarTabla ? (
        <TablaVehiculos listaVehiculos={vehiculos} />
      ) : (
        <FormularioCreacionVehiculos />
      )}
    </div>
  );
};

const TablaVehiculos = ({ listaVehiculos }) => {
  useEffect(() => {
    console.log(
      "Este es el listado de vehículos en el componete tabla",
      listaVehiculos
    );
  }, [listaVehiculos]);
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
        {listaVehiculos.map((vehiculo) => {
          return (
            <tr>
              <td>{vehiculo.nombre}</td>
              <td>{vehiculo.marca}</td>
              <td>{vehiculo.modelo}</td>
            </tr>
          );
        })}
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
