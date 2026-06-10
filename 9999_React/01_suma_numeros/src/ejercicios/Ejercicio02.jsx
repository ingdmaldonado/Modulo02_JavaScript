import {useState} from "react";

const Ejercicio02 = ()=>{

   const [contador,setContador] = useState(0);
  
  const fnAumentar = ()=>{

    setContador(contador + 1);

  };

  const fnDescontar = ()=>{

    setContador(contador - 1);

  };

  return (<>
    <h1 onClick={fnAumentar}>Incrementar</h1>
    <h1 onClick={fnDescontar}>Decrementar</h1>
    <h1>{contador}</h1>
  </>);

};

export default Ejercicio02;