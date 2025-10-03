
"use client";

import { useState } from "react";


export default function Page() 
{

  const [num1,setNum1] = useState(0);
  const [num2,setNum2] = useState(0);
 
  const fnCambioValor1 = (e) => 
    {
        setNum1(Number(e.target.value));      
        
    }

  const fnCambioValor2 = (e) =>
  {
      setNum2(Number(e.target.value));
      
  }

  return (
    <main>
      <div>
      
        <label>Ingrese Numero 1</label>
        <br></br>
        <input type="number" value={num1} onChange={fnCambioValor1} ></input>
        <br></br>
        <label>Ingrese Numero 2</label>
        <br></br>
        <input type="number" value={num2} onChange={fnCambioValor2}></input>

      </div>
      <div>
        Numero Ingresado 1 {num1} - Numero Ingresado 2 {num2} - Suma = {num1 + num2}
      </div>

    </main>
  )
};
