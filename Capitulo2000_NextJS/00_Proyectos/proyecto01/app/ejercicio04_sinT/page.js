"use client";

import { useState } from "react";

const paises = [
  { id: 1, nombre: "ARGENTINA" },
  { id: 2, nombre: "BRASIL" },
];

const paisesToOption = () => {
  return paises.map((pais) => <option key={pais.id}>{pais.nombre}</option>);
};

const fnCambioDePais = (e) => {
  let idElegido = Number(e.target.value);

  console.log(`id Pais elegido es: ${idElegido}`);

  let paisElegido = paises.find((pais) => pais.id === idElegido);

  console.log(paisElegido);
};

const paisesToOption2 = () => {
  return paises.map(({ id, nombre }) => (
    <option value={id} key={id}>
      {nombre}
    </option>
  ));
};

export default function Page() {
  const [num1, setNum1] = useState(0);

  return (
    <main>
      <h1>TITULO DE LA APLICACIÓN</h1>

      <h2>Variante 1 - Sin Destructuring y con función aparte</h2>
      <select>{paisesToOption()}</select>

      <br></br>
      <br></br>

      <h2>Variante 2 - Con Destructuring y con función aparte</h2>
      <select onChange={fnCambioDePais}>{paisesToOption2()}</select>

      <br></br>
      <br></br>

      <h2>Variante 3 - Map con recorrido dentro del selector</h2>
      <select
        onChange={(e) => {
          console.log(e.target.value);
          console.log(paises.find((p) => p.id === Number(e.target.value)));
        }}
      >
        {paises.map(({ id, nombre }) => (
          <option value={id} key={id}>
            {nombre}
          </option>
        ))}
      </select>
    </main>
  );
}
