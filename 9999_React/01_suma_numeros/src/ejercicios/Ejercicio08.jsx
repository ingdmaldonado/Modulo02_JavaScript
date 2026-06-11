import { useState } from "react";

const paises = [
  { paisId: 1, nombre: "ARGENTINA" },
  { paisId: 2, nombre: "BRASIL" },
  { paisId: 3, nombre: "URUGUAY" },
];

const jugadores = [
    { jugadorId: 1, nombre: "Lionel Messi",       paisId: 1 },
    { jugadorId: 2, nombre: "Ángel Di María",      paisId: 1 },
    { jugadorId: 3, nombre: "Julián Álvarez",      paisId: 1 },
    { jugadorId: 4, nombre: "Neymar Jr",           paisId: 2 },
    { jugadorId: 5, nombre: "Vinicius Jr",         paisId: 2 },
    { jugadorId: 6, nombre: "Rodrygo",             paisId: 2 },
    { jugadorId: 7, nombre: "Luis Suárez",         paisId: 3 },
    { jugadorId: 8, nombre: "Darwin Núñez",        paisId: 3 },
    { jugadorId: 9, nombre: "Federico Valverde",   paisId: 3 }
];

const Ejercicio08 = () => {

  const [PaisElegido,setPaisElegido] = useState(0);

  const [JugadoresElegidos,setJugadoresElegidos] = useState(0);

  return (
    <>
      <h1>Elija el Pais</h1>
      <select onChange={(e)=>{setPaisElegido(Number(e.target.value))}}>
        {paises.map(({paisId,nombre}) =><option key={paisId} value={paisId}>{nombre}</option>)}
      </select>
      <h1>Pais Seleccionado: {PaisElegido}</h1>
    
    <h2>TABLA DINAMICA</h2>
    <table border={"2px"}>
      <thead>
        <tr>
          <th>
            PAIS ID
          </th>
          <th>
            JUGADOR ID
          </th>
          <th>
            JUGADOR NOMBRE
          </th>
        </tr>
      </thead>
      <tbody>        
        {jugadores.filter(({jugadorId,nombre,paisId})=>paisId === PaisElegido).map(({jugadorId,nombre,paisId})=>{return <tr key={jugadorId}><td>{paisId}</td><td>{jugadorId}</td><td>{nombre}</td></tr>})}
      </tbody>
    </table>
    </>
  );
};

export default Ejercicio08;
