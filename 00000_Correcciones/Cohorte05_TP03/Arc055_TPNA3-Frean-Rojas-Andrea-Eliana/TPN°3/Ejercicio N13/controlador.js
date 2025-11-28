// importamos la funcion calcularPrecioVenta desde modelo.js
import { calcularPrecioVenta } from "./modelo.js";

window.onload=()=>{
    console.log(`la pagina esta corriendo...`);
    // se ingresa los valores pedidos.
    let ingresoImporte=Number(prompt(`Ingrese el importe:`));
    let ingresoMargen=Number(prompt(`Ingrese el margen de ganancia (%):`));
    // si esta mal ingresado los numeros, vuelve a pedir los valores.
    while(isNaN(ingresoImporte)|| isNaN(ingresoMargen)|| ingresoImporte<0 || ingresoMargen<0){
        alert("ERROR, vuelva a ingresar:");
        ingresoImporte=Number(prompt(`Ingrese el importe:`));
        ingresoMargen=Number(prompt(`Ingrese el margen de ganancia (%):`));
    }
    // se ingresa los parametros a la funcion importada.
    let resultado=calcularPrecioVenta(ingresoImporte, ingresoMargen);
    // muestra los resultados.
    console.log("El importe es:", ingresoImporte);
    console.log("El margen de ganancia es:", ingresoMargen, "%");
    console.log("El precio de venta es:", resultado);
};