import React from "react";
import { useEffect, useState } from "react";

const Vehiculos = () => {
  const [nombreVehículo, setNombreVehículo] = useState ('')

  useEffect(() => {
    console.log(
      "Hola, soy un useEffect que se ejecuta solo una vez cuando la página se renderiza porque tiene el array de dependencias vacío"
    );
  }, []);

  return (
    <form className="flex flex-col">
      <h2>Formulario de creación de vehículos</h2>
      <input
        onChange={(e) => {setNombreVehículo("nombre: ", e.target.value)}}
        type="text"
        placeholder="Nombre del Vehículo"
      ></input>
      <input
        onChange={(e) => {console.log("marca: ", e.target.value);}}
        type="text"
        placeholder="Marca del Vehículo"
      ></input>
      <input type="number" placeholder="Modelo del Vehículo"></input>
      <button className="bg-indigo-500 text-white">Enviar Datos</button>
    </form>
  );
};

export default Vehiculos;
