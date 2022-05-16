import React from "react";
import { useEffect, useState } from "react";


// realizar un formulario que le puda al usuario su edad y muestre un mensaje
// que diga si el usuario es mayor de edad o no

const Vehiculos = () => {
  const [nombreVehículo, setNombreVehículo] = useState("");

  useEffect(() => {
    console.log(
      "Hola, soy un useEffect que se ejecuta solo una vez cuando la página se renderiza porque tiene el array de dependencias vacío"
    );
  }, []);

  useEffect(() => {
    console.log("El valor de la variable es: ", nombreVehículo);
  }, [ nombreVehículo ]);

  const enviarDatosAlBackend = () => {
    console.log("El valor de la variable nombreVehiculo es", nombreVehículo);
    console.log("El valor de la variable marcaVehiculo es", nombreVehículo);
    console.log("El valor de la variable nombreVehiculo es", nombreVehículo);
  };

  return (
    <form className="flex flex-col">
      <h2>Formulario de creación de vehículos</h2>
      <input
        onChange={(e) => {
          setNombreVehículo(e.target.value);
        }}
        type="text"
        placeholder="Nombre del Vehículo"
      ></input>
      <input
        onChange={(e) => {
          console.log(e.target.value);
        }}
        type="text"
        placeholder="Marca del Vehículo"
      ></input>
      <input type="number" placeholder="Modelo del Vehículo"></input>
      <button
        type="button"
        onClick={ enviarDatosAlBackend }
        className="bg-indigo-500 text-white"
      >
        Enviar Datos
      </button>
    </form>
  );
};

export default Vehiculos;
