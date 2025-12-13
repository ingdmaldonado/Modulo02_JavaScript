// controlador.js

//Importar las funciones del modelo
import {
    mostrarNombres,
    unificar,
    filtrarAprobados,
    filtrarDesaprobados,
    ordenarPorNotaAsc,
    ordenarPorNotaDesc,
    buscarDni,
    contarAprobadosIf,
    contarAprobadosTernario
} from "./modelo.js";

//Importa los datos de los alumnos
import { cohorte01, cohorte02,cohorte03,cohorte04} from "./alumnos.js";
//agrupo las cohortes
const cohortes = {
  "01": cohorte01,
  "02": cohorte02,
  "03": cohorte03,
  "04": cohorte04
};
window.onload=()=>{

const salida = document.getElementById("salida");
let total = [];


//1- Mostrar por Cohorte - recorro los botones
document.querySelectorAll(".btnCohorte").forEach(btn => {
    btn.onclick= () => {

//opcion 1 con dataset       
//const num = btn.dataset.num; // "01", "02", etc

//opcion 2 con id
const num= btn.id;

const data = cohortes[num];                
salida.textContent = "Cohorte" + num + "\n"+ JSON.stringify(data, null, 2);
console.log("Cohorte" + num);

//Evalua cada opcion del boton y llama a la funcion para mostrar los nombres de cada cohorte
switch (num) {
    case "01":
          mostrarNombres(data);
          break;
    case "02":
          mostrarNombres(data);
         break;      
    case "03":
          mostrarNombres(data);
         break;      
    case "04":
          mostrarNombres(data);
         break;      
    default: 
    console.log("No se enviaron parametros");
}
    
    };
});

//2- Unificar todos los vectores
document.querySelector("#btnUnir").addEventListener("click", () => {
    total = unificar(cohorte01, cohorte02, cohorte03, cohorte04);
    salida.textContent = "Todos los Alumnos: \n" +JSON.stringify(total, null, 2);
    console.log("Todos los Alumnos: \n")
    console.log(total);
});

//3- Alumnos Aprobados y Desaprobados
//Alumnos Aprobados
document.querySelector("#btnAprob").addEventListener("click", () => {
    const aprobados=filtrarAprobados(total);
    salida.textContent = "Alumnos Aprobados:\n" +JSON.stringify(aprobados, null, 2);
    console.log("Alumnos Aprobados: \n")
    console.log(aprobados);
});
//Alumnos Desaprobados
document.querySelector("#btnDesaprob").addEventListener("click", () => {
    const desaprobados=filtrarDesaprobados(total);
    salida.textContent = "Alumnos Desaprobados:\n" + JSON.stringify(desaprobados, null, 2);
    console.log("Alumnos Desaprobados: \n")
    console.log(desaprobados);
});

//4- Ordenar los alumnos por nota 
//Orden Ascendente (de menor a mayor)
document.querySelector("#btnAsc").addEventListener("click", () => {
    const ordenarAsc=ordenarPorNotaAsc(total);
    salida.textContent = "Alumnos Ordenados Ascendente (de menor a mayor):\n" + JSON.stringify(ordenarAsc, null, 2);
    console.log("Alumnos Ordenados Ascendente (de menor a mayor): \n")
    console.log(ordenarAsc);
});
//Orden Descendente (de mayor a menor)
document.querySelector("#btnDesc").addEventListener("click", () => {
     // reverse() - Invierte el orden de los elementos del array podria usar la misma funcion del modelo
    //const ordenarDesc=ordenarPorNota(total).reverse();
    const ordenarDesc=ordenarPorNotaDesc(total);
    salida.textContent = "Alumnos Ordenados Descendente (de mayor a menor):\n" + JSON.stringify(ordenarDesc, null, 2);
    console.log("Alumnos Ordenados Descendente (de mayor a menor): \n")
    console.log(ordenarDesc);
});

//5- Busqueda de alumno por DNI
document.querySelector("#btnBuscarDni").addEventListener("click", () => {
    const dni = document.querySelector("#dniBuscar").value;
    const r = buscarDni(total, dni);
    salida.textContent =  "Alumno Encontrado:\n" + JSON.stringify(r ?? "No encontrado", null, 2);
     console.log("Alumno Encontado: \n")
    console.log(r);
});


//6- Contabilizar la cantidad de alumnos aprobados con nota mayor a 5
//Usando arrow function con IF/ELSE
//Aprobados
document.querySelector("#btnContarAprob").addEventListener("click", () => {
    const c1 = contarAprobadosIf(total);
    const c2 = contarAprobadosTernario(total);
    salida.textContent = "Alumnos Aprobados (IF): " + c1 + "\nAlumnos Aprobados (Ternario): " + c2;
    console.log("Alumnos Aprobados (IF): " + c1 + "\nAlumnos Aprobados (Ternario): " + c2);
});
//Desaprobados
document.querySelector("#btnContarDesap").addEventListener("click", () => {
    const d = total.filter(a => a.nota_final <= 5).length;
    salida.textContent = "Alumnos Desaprobados: " + d;
    console.log("Alumnos Desaprobados: " + d);
});
}