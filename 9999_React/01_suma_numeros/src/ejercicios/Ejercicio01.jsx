import {useState} from "react";

const Ejercicio01 = ()=>{

  const [num1,setNum1] = useState(0);
  const [num2,setNum2] = useState(0);

  const fnClickEnBoton = ()=>{
    console.log("me estan haciendo click");
  };

  return (<div>
      <h1 onClick={fnClickEnBoton}>Hola Primer Proyecto</h1>
  </div>);

};

export default Ejercicio01;



