
"use client";

import { useState } from "react";

const fnClickEnBoton1 =()=>
  {
    alert("Es nuestro primer ejercicio. Soy Daniel");
  };

const fnClickEnBoton2 =()=>
  {
    alert("Somos Taller 3 - Tecnicatura Sup. en Desarrollo de Software 3");
  };

export default function Page()
{
    return (
      <main>
        <h1>Ejercicio Nro. 02 - Taller 3</h1>
        <br></br>
        <button onClick={fnClickEnBoton1}>Quien Soy ?.</button>
        <br></br>
        <button onClick={fnClickEnBoton2}>Quienes Somos ?.</button>
      </main>
    );    
}