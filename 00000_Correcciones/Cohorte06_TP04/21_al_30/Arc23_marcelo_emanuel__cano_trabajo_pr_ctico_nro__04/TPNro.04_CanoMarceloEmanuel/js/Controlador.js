import { fnMostrarAlumnos,fnUnificarAlumnos,fnAprabados,fnDesaprobados,fnOrdenarAlumnos,fnBuscarXDNI,fnContarAprobadosA,fnContarAprobadosB } from "./Modelo.js";

const cohorte01 = [
  { dni: "12345678", nombre: "Juan", apellido: "Pérez", nota_final: 8 },
  { dni: "23456789", nombre: "Ana", apellido: "Gómez", nota_final: 6 },
  { dni: "34567890", nombre: "Carlos", apellido: "López", nota_final: 5 },
  { dni: "45678901", nombre: "María", apellido: "Martínez", nota_final: 7 },
];
const cohorte02 = [
  { dni: "56789012", nombre: "Sofía", apellido: "Ramírez", nota_final: 9 },
  { dni: "67890123", nombre: "Luis", apellido: "Fernández", nota_final: 4 },
  { dni: "78901234", nombre: "Elena", apellido: "Torres", nota_final: 5 },
];
const cohorte03 = [
  { dni: "89012345", nombre: "Pedro", apellido: "Álvarez", nota_final: 10 },
  { dni: "90123456", nombre: "Clara", apellido: "Méndez", nota_final: 3 },
  { dni: "12345679", nombre: "Jorge", apellido: "Salinas", nota_final: 6 },
  { dni: "23456780", nombre: "Andrea", apellido: "Cruz", nota_final: 2 },
  { dni: "34567891", nombre: "Sergio", apellido: "Paredes", nota_final: 8 },
];

const cohorte04 = [
  { dni: "45678902", nombre: "Lucía", apellido: "Ortiz", nota_final: 7 },
  { dni: "56789013", nombre: "Miguel", apellido: "Vega", nota_final: 4 },
  { dni: "67890124", nombre: "Raquel", apellido: "Silva", nota_final: 9 },
  { dni: "78901235", nombre: "Hugo", apellido: "Moreno", nota_final: 5 },
  { dni: "89012346", nombre: "Natalia", apellido: "Quinteros", nota_final: 6 },
  { dni: "90123457", nombre: "Diego", apellido: "Arce", nota_final: 3 },
];


window.onload = () => {
   
   const btnMostraXCohorte = document.querySelector("#PorCohorte");
   const btnMostarTodosJuntos = document.querySelector("#todosAlumno");
   const btnMostrarAprobados = document.querySelector("#alumnosAprobados");
   const btnMostrarDesaprobados = document.querySelector("#alumnosDesaprobados");
   const btnalumnosOrdenados = document.querySelector("#alumnosOrdenados");
   const btnbuscarAlumno = document.querySelector("#buscarAlumno");
   const input_DNI = document.querySelector("#dni");
   const btncantidadAprobados = document.querySelector("#cantidadAprobados");
   const btncantidadAprobados_b = document.querySelector("#cantidadAprobados_b");

   
   let todosLosAlumnos = fnUnificarAlumnos(cohorte01,cohorte02,cohorte03,cohorte04);


    btnMostraXCohorte.onclick = () =>{
        console.clear();
        console.log("--------- Primera Cohorte ---------");
        fnMostrarAlumnos(cohorte01);
        console.log("--------- Segunda Cohorte ---------");
        fnMostrarAlumnos(cohorte02);
        console.log("--------- Tercera Cohorte ---------");
        fnMostrarAlumnos(cohorte03);
        console.log("--------- Cuarta Cohorte ---------");
        fnMostrarAlumnos(cohorte04);
    }

    btnMostarTodosJuntos.onclick = () =>{
        console.clear();
        console.log("--------- Todas las Cohortes ---------");        
        fnMostrarAlumnos(todosLosAlumnos);
    } 

    btnMostrarAprobados.onclick = () => {
      console.clear();
      console.log("---------- Alumnos Aprobados ----------");
      let todosAprobados = fnAprabados(todosLosAlumnos);
      fnMostrarAlumnos(todosAprobados);
    }

    btnMostrarDesaprobados.onclick = () => {
      console.clear();
      console.log("---------- Alumnos Desaprobados ----------");
      let todosDesaprobados = fnDesaprobados(todosLosAlumnos);
      fnMostrarAlumnos(todosDesaprobados);
    } 

    btnalumnosOrdenados.onclick = () => {
       console.clear();
       console.log("---------- Alumnos Ordenado Por Nota ----------");
       let todosOrdendos = fnOrdenarAlumnos(todosLosAlumnos)
       fnMostrarAlumnos(todosOrdendos);
    }
    
    btnbuscarAlumno.onclick = () => {
      const _dni = input_DNI.value;
      console.clear();
      console.log(`---------- Alumno Buscado -> dni: ${_dni} ----------`);
      let alumnoBuscado = fnBuscarXDNI(todosLosAlumnos,_dni);
      console.log(`Alumno: ${alumnoBuscado.apellido}, ${alumnoBuscado.nombre} dni: ${alumnoBuscado.dni}`);
    }

    btncantidadAprobados.onclick = () => {
      console.clear();
      console.log("---------- Cantidad de Alumnos Aprobados ----------");
      let cantidadAlumnosAprobado = fnContarAprobadosA(todosLosAlumnos);
      console.log(`Cantidad Alumnos Aprobados: ${cantidadAlumnosAprobado}`);
    }

    btncantidadAprobados_b.onclick = () =>{
      console.clear();
      console.log("---------- Cantidad de Alumnos Aprobados (opcion b)  ----------");
      let cantidadAlumnosAprobado = fnContarAprobadosB(todosLosAlumnos);
      console.log(`Cantidad Alumnos Aprobados: ${cantidadAlumnosAprobado}`);

    }

}