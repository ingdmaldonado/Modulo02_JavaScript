/*Ejercicio Nro. 19: 
Realizar una arrow function que reciba dos parámetros de entrada. El parámetro 1 será el importe de 
compra de un producto, el segundo será el margen de ganancia que se aplicará sobre ese producto, la función 
debe retornar el precio de venta que será igual a aplicarle el % de margen de ganancia. La función debe retornar 
el precio de venta (sin impuestos). 
Nota: Debe devolver un número*/

import { calcular } from "./modulo.js"

window.onload= ()=>{

    const estadoAplicacion={
        compra:0,
        margen:0,
       
    }

    const compra= (document.querySelector("#idCompra"));
    const margen= (document.querySelector("#idMargen"));
    const btnCalcular= (document.querySelector("#btnCalcular"));
    const resultado= (document.querySelector("#resultado"));
    const btnGuardar =(document.querySelector("#btnGuardar"));
    const btnRecuperar =(document.querySelector("#btnRecuperar"));

    console.log(compra,margen,btnCalcular,resultado);

    compra.oninput = () => {
        estadoAplicacion.compra = Number(compra.value);
        console.log(compra.value);
    };

    margen.oninput = () => {
        estadoAplicacion.margen = Number(margen.value);
        console.log(margen.value);
    };
  
    btnCalcular.onclick = () => {

        let resultadoFinal = calcular(
            estadoAplicacion.compra,
            estadoAplicacion.margen,
        );

        resultado.textContent = `Precio de venta: ${resultadoFinal}`;
    };

   btnGuardar.onclick = ()=>{

        console.log(estadoAplicacion)
        let datos = JSON.stringify(estadoAplicacion)
        console.log(datos)
        localStorage.setItem("datos",datos)
   };

    btnRecuperar.onclick=()=>{
         let datos=localStorage.getItem("datos")
         let datosR= JSON.parse(datos)
         console.log("Recuperado:",datosR);
         resultado.textContent = `Precio de venta ${datosR.compra} `;
   
    };



    

        
    

}

