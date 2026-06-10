import { useState } from "react";

const Ejercicio04 = ()=>{

  const [paisElegido,setPaisElegido] = useState(0);

  const paises = [{id:1,nombre:"ARGENTINA",habitantes:45000000},{id:2,nombre:"BRASIL",habitantes:150000000},{id:3,nombre:"URUGUAY",habitantes:3100000}];

  const handleOnChange = (e)=>{

    const valorIngresado = Number(e.target.value);

    setPaisElegido(valorIngresado);

    const pais = paises.find(pais => pais.id === valorIngresado);

    console.log(pais);

  };

  return (<>
    <h3>Seleccione su Pais de destino ?.</h3>
    <select onChange={handleOnChange}>
      <option value={1}>ARGENTINA</option>
      <option value={2}>BRASIL</option>
      <option value={3}>URUGUAY</option>
    </select>
  </>);


};

export default Ejercicio04;


