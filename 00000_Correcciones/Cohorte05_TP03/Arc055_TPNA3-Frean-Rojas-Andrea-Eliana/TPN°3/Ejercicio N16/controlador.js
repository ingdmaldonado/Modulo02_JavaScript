// importamos la funcion calcularSobreTasa desde modelo.js
import { calcularSobreTasa } from "./modelo.js";

window.onload=()=>{
    console.log(`El programa esta corriendo...`);
    // le mostramos las opciones a elegir.
    console.log(`1) Bebidas Agua en envases plásticos`);
    console.log(`2) Bebidas Agua en envases retornables`);
    console.log(`3) Bebidas Gaseosas Azucaradas en envases plásticos`);
    console.log(`4) Bebidas Gaseosas Azucaradas en envases retornables`);
    console.log(`5) Bebidas Energéticas`);
    // declaramos las variables y su ingreso. Tambien se verifica que se ingresen correctamente.
    let tipoBebida=Number(prompt(`Ingrese la opcion de la bebida que desea:`));
    while(isNaN(tipoBebida)|| tipoBebida<=0){
        tipoBebida=Number(prompt(`ERRROR, la opcion es invalida.Vuelva a ingresar otra opcion de la bebida que desea:`));
    }
    let importe=Number(prompt(`Ingrese el Importe Base que desea agregar:`));
    while(isNaN(importe)|| importe<=0){
        importe=Number(prompt(`ERRROR, el importe es invalido.Vuelva a ingresar:`));
    }
    //se ingresan los parametros de la funcion. 
    let resultado=calcularSobreTasa(tipoBebida, importe);
    // se muetras lo calculado y las variables.
    console.log(`La Bebida que a elegido es: ${tipoBebida}`);
    console.log(`El importe base de esa bebida es: ${importe}`);
    console.log(`La sobre tasa es de:${resultado}`);
};