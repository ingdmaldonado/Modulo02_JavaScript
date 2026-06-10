import { useState } from "react";

const paises = [{id:1,nombre:"ARGENTINA"},{id:2,nombre:"BRASIL"}];


const Ejercicio06 = ()=>{

  const [recordar,setRecordar] = useState(0);
  
  return (<>
    <h1>Este es un selector estático</h1>
    <select>
      <option value={1}>URUGUAY</option>
      <option value={2}>CHILE</option>      
    </select>
    <h2>Este es un selector Dinámico</h2>    
    <select>
      {paises.map(pais => <option>{pais.nombre}</option>)}
    </select>
  </>);   
};

export default Ejercicio06;