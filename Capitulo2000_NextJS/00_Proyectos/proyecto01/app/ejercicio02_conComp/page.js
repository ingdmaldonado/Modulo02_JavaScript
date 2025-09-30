"use client";

import { useState } from "react";

import Boton from "@/componentes/Boton";

const fnClickenBoton1 = () => {
  alert("Estoy haciendo click en el boton 1");
};

const fnClickEnBoton2 = () => {
  alert("Estoy haciendo click en el boton 2");
};

export default function Page() {
  return (
    <main>
      <h1>Ejercicio Nro. 02 - Taller 3 - con Botones de Componentes</h1>
      <Boton texto="Boton 1" fnClick={fnClickenBoton1} />
      <br></br>
      <Boton texto="Boton 2" fnClick={fnClickEnBoton2} />
    </main>
  );
}
