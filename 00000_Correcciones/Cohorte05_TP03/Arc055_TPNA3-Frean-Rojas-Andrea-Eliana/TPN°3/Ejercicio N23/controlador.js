// importa la funcion contieneLetrasS del archivo modelo.js
import { contieneLetrasS } from "./modelo.js";

window.onload=()=>{
    console.log(`El programa esta corriendo...`);
    let frase=prompt(`Ingrese la palabra: `);
    let contieneS=contieneLetrasS(frase);
    console.log(`La Palabra es:${frase}`);
    console.log(contieneS);
};