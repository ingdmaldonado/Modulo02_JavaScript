import {cohorte01,cohorte02,cohorte03,cohorte04} from "./datos.js";
import {fnRecorrerCohorte} from "./modulo.js";
import { alumnosUnificados } from "./modulo.js";
import { alumnosAprobados } from "./modulo.js";
import { alumnosDesaprobados } from "./modulo.js";
import { menorAmayor } from "./modulo.js";
import { busquedaDNI } from "./modulo.js";
import { contarAprobados } from "./modulo.js";
import { contarAprobados2 } from "./modulo.js";
import { mostrarCohorteDOM } from "./modulo.js";
import { MostrarAlumnosUnificados } from "./modulo.js";
import { MostrarAlumnosAprobados } from "./modulo.js";
import {MostrarAlumnosDesaprobados} from "./modulo.js";
import { AlmunosOrdenados } from "./modulo.js";
import {alumnoDni} from "./modulo.js"
import { contadorAprobados } from "./modulo.js";
import { contadorAprobados2 } from "./modulo.js";





window.onload = () => {

// Muestro en el DOM la cohorte Nro. 1

const idCohortes = document.querySelector ("#idCohortes");
const idbtnMostrarCohorteUno = document.querySelector ("#idbtnMostrarCohorteUno");

idbtnMostrarCohorteUno.addEventListener ("click", () => {

mostrarCohorteDOM (cohorte01, idCohortes);

});


console.log (`Ejercicio Nro. 01`);

fnRecorrerCohorte (cohorte01);
console.log (`=========================================`);
fnRecorrerCohorte (cohorte02);
console.log (`=========================================`);
fnRecorrerCohorte (cohorte03);
console.log (`=========================================`);
fnRecorrerCohorte (cohorte04);

// ********************************************************************************************************

const idTodasLasCohortes = document.querySelector ("#idTodasLasCohortes");
const idbtnAlumnosUnificados = document.querySelector ("#idbtnAlumnosUnificados");

idbtnAlumnosUnificados.addEventListener ("click",()=>{

MostrarAlumnosUnificados (alumnosUnificados,idTodasLasCohortes);

})



console.log (`=========================================`);

console.log (`Ejercicio Nro. 02`);

console.log(alumnosUnificados);


//***********************************************************************************************

console.log (`=========================================`);

console.log (`Ejercicio Nro. 03`);

console.log (`------Alumnos aprobados--------`);

fnRecorrerCohorte (alumnosAprobados); 

const idAlumnosAprobados = document.querySelector("#idAlumnosAprobados");
const idBtnAlumnosAprobados = document.querySelector ("#idBtnAlumnosAprobados");

idBtnAlumnosAprobados.addEventListener ("click", ()=>{

MostrarAlumnosAprobados (alumnosAprobados,idAlumnosAprobados)

});



console.log (`-------Alumnos Desaprobados-----`);
fnRecorrerCohorte (alumnosDesaprobados);

const idAlumnosDesaprobados = document.querySelector("#idAlumnosDesaprobados");
const idBtnAlumnosDesaprobados = document.querySelector ("#idBtnAlumnosDesaprobados");

idBtnAlumnosDesaprobados.addEventListener ("click", ()=>{

MostrarAlumnosDesaprobados (alumnosDesaprobados,idAlumnosDesaprobados)

});
console.log (`=========================================`);


//**************************************************************************************************/

console.log (`Ejercicio Nro. 04`);

const idAlmunosOrdenados = document.querySelector ("#idAlmunosOrdenados");
const idBtnAlumnosOrdenados = document.querySelector ("#idBtnAlumnosOrdenados");

idBtnAlumnosOrdenados.addEventListener ("click", ()=>{

AlmunosOrdenados (alumnosAprobados,idAlmunosOrdenados)
});


console.log (menorAmayor);

/*************************************************************************************************/

console.log (`=========================================`);

console.log (`Ejercicio Nro. 05`);

console.log(busquedaDNI);

const idAlumnoBuscado = document.querySelector ("#idAlumnoBuscado");
const idbtnAlumnoBuscado = document.querySelector ("#idbtnAlumnoBuscado");

idbtnAlumnoBuscado.addEventListener ("click", ()=>{
const dniABuscar = "78901235";
alumnoDni (alumnosUnificados,idAlumnoBuscado,dniABuscar);

});


/************************************************************************************************/
console.log (`=========================================`);

console.log (`Ejercicio Nro. 06 A`);

console.log(contarAprobados);

const ContarAlumnosAprobados = document.querySelector ("#ContarAlumnosAprobados");
const idbtnContarAlumnosAprobados = document.querySelector ("#idbtnContarAlumnosAprobados");

idbtnContarAlumnosAprobados.addEventListener ("click", ()=>{

contadorAprobados (contarAprobados,ContarAlumnosAprobados);
});

/********************************************************************************************/


console.log (`=========================================`);

console.log (`Ejercicio Nro. 06 B`);

console.log(contarAprobados2);

const ContarAlumnosAprobados2 = document.querySelector ("#ContarAlumnosAprobados2");
const idbtnContarAlumnosAprobados2 = document.querySelector ("#idbtnContarAlumnosAprobados2");

idbtnContarAlumnosAprobados2.addEventListener ("click", ()=>{

contadorAprobados (contarAprobados2,ContarAlumnosAprobados2);
});

};


