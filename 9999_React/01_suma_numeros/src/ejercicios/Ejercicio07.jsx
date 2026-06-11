import { useState } from "react";

const jugadores = [{jugadorid:1,nombre:"MESSI LIONEL ANDRES"},{jugadorid:2,nombre:"RIQUELME JUAN ROMAN"},{jugadorid:3,nombre:"PAREDES EZEQUIEL"}];

const Ejercicio07 = ()=>{

  return (<>
    <h1>Listado dinámico de jugadores</h1>
    <select onChange={(e)=>{console.log(e.target.value)}}>
      {jugadores.map(jugador => <option key={jugador.jugadorid} value={jugador.jugadorid}>{jugador.nombre}</option>)}
    </select>
  </>);
};

export default Ejercicio07;