/* Ejercicio Nro. 19:
Realizar una arrow function que reciba dos parámetros de entrada. El parámetro 1 será el importe de compra de un producto, el segundo será el margen de ganancia que se aplicará sobre ese producto, la función debe retornar el precio de venta que será igual a aplicarle el % de margen de ganancia. La función debe retornar el precio de venta (sin impuestos).
Nota: Debe devolver un número  */

import {fnCalculoPrecioVenta} from "./modelo19.js"

window.onload = ()=>{

    console.log (`la aplicacion corriendo`);

    const estadoAplicacion = {
        importeCompra: 0,
        margen: 0,
    };

    
    const IdImporteCompra = document.querySelector ("#IdImporteCompra");
    const IdMargen= document.querySelector ("#IdMargen");
    const idBtnCalcular= document.querySelector ("#idBtnCalcular");
    const idResultado= document.querySelector ("#idResultado");
    const IdBtnGuardar= document.querySelector ("#IdBtnGuardar");
    const IdBtnRecuperar= document.querySelector ("#IdBtnRecuperar");

    IdImporteCompra.oninput = ()=>{
        estadoAplicacion.importeCompra= Number (IdImporteCompra.value);
        console.log (estadoAplicacion);
    }
    IdMargen.oninput = ()=>{
        estadoAplicacion.margen= Number (IdMargen.value);
        console.log(estadoAplicacion);
    }
    
    idBtnCalcular.onclick = ()=>{

    let resultado= fnCalculoPrecioVenta (estadoAplicacion.importeCompra, estadoAplicacion.margen);
        
    console.log (`El importe de Compra es de $ ${resultado.toFixed(2)}`);
        
    
    idResultado.textContent = (`Importe de la compra $ ${estadoAplicacion.importeCompra} - Margen ${estadoAplicacion.margen}% - Total $ ${resultado.toFixed(2)}`); 
        };

    
    IdBtnGuardar.onclick= ()=>{
            
        console.log(estadoAplicacion);
        
        let estadoJSON= JSON.stringify(estadoAplicacion);
        console.log (estadoJSON);
       
        localStorage.setItem("estadoApp", estadoJSON);

        };

        
        IdBtnRecuperar.onclick= ()=>{
         
            let datoRecuperado= localStorage.getItem("estadoApp");
            
            if(datoRecuperado)
            {
                let estadoObjeto= JSON.parse (datoRecuperado);
                console.log( datoRecuperado);
                console.log( estadoObjeto);
            }
            
            console.log(`Dato Recuperado`, datoRecuperado);

        };


    };
   