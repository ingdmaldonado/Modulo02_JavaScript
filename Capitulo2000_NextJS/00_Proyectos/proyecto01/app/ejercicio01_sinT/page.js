"use client"; // Necesario porque usamos useState (estado en cliente)
import { useState } from "react";

export default function Page() {
  // Creamos el estado con valor inicial en 0
  const [contador, setContador] = useState(0);

  // Funciones que actualizan el estado
  function sumar() {
    setContador(contador + 1);
  }

  function restar() {
    setContador(contador - 1);
  }

  return (
    <main>
      <h1>Ejercicio 01 — Contador simple (sin Tailwind)</h1>
      <p>Valor actual: {contador}</p>
      <br></br>
      <button onClick={restar}>Restar -1</button>
      <br></br>
      <button onClick={sumar}> Sumar +1</button>
    </main>
  );
}
