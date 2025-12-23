
import {cohorte01} from "./datos.js";
import {cohorte02} from "./datos.js";
import {cohorte03} from "./datos.js";
import {cohorte04} from "./datos.js";
import {fnRecorrerCohorteSinDestructuring} from "./modelo.js";
import {fnRecorrerCohorteConDestructuring} from "./modelo.js";
import {fnRecorrerCohorteConDestructuringComoParametro} from "./modelo.js";


const cohortes = {
    cohorte01,
    cohorte02,
    cohorte03,
    cohorte04
};

 const todasLasCohortes = [
        ...cohorte01,
        ...cohorte02,
        ...cohorte03,
        ...cohorte04
    ];











// capturar los objetos del HTML para ejecrcicio 1
const btnSin = document.querySelector("#btnSin");
const btnCon = document.querySelector("#btnCon");
const btnConParam = document.querySelector("#btnConParam");

const combo = document.querySelector("#seletCohortes");
const salida = document.querySelector("#salida");
const encabezadoSalida=document.querySelector("#encabezadoSalida");


// console.log(btnSin,btnCon,btnConParam,combo,salida)


//eventos para ejercicio 1
btnSin.addEventListener("click", () => {
    const cohorteSeleccionada = cohortes[combo.value];
    salida.value = fnRecorrerCohorteSinDestructuring(cohorteSeleccionada);
    encabezadoSalida.textContent ="Listado de Alumnos con fnRecorrerCohorteSinDestructuring ";

});


btnCon.addEventListener("click", () => {
    const cohorteSeleccionada = cohortes[combo.value];
    salida.value = fnRecorrerCohorteConDestructuring(cohorteSeleccionada);
     encabezadoSalida.textContent ="Listado de Alumnos con fnRecorrerCohorteConDestructuring ";
});

btnConParam.addEventListener("click", () => {
    const cohorteSeleccionada = cohortes[combo.value];
    salida.value = fnRecorrerCohorteConDestructuringComoParametro(cohorteSeleccionada);
     encabezadoSalida.textContent ="Listado de Alumnos con fnRecorrerCohorteConDestructuringcomoParámetro ";
});







////////////////////////////////////////////////////////



//capturar objetos para ejercicio 2
const btnVectorUnificado = document.querySelector("#btnVectorUnificado");
const salida2 = document.querySelector("#salida2");
//eventos para ejercicio 2
btnVectorUnificado.addEventListener("click", () => {
    //utilizo spread operator en el encabezado
    salida2.value = fnRecorrerCohorteConDestructuringComoParametro([...cohorte01,...cohorte02,...cohorte03,...cohorte04]);
     
});

/////////////////////////////////////////////////////










////////////////////////////////////////////////////////
//importar funciones para ejercicio 3
import {buscarAprobados} from "./modelo.js";
import {buscarDesprobados} from "./modelo.js";


//capturar objetos para ejercicio 3
const btnClasificar = document.querySelector("#btnClasificar");
const salidaAprobados = document.querySelector("#salidaAprobados");
const salidaDesaprobados = document.querySelector("#salidaDesaprobados");

//eventos para ejercicio 3
btnClasificar.addEventListener("click", () => {
   

    const aprobados = buscarAprobados(todasLasCohortes);

    // aca lo convierto porque me daba error al querer mostrar el vector en el textarea
    //  elegio que tiene el id=salidaAprobados
    let aprobadosSTR = "";
    aprobados.forEach(alumno => {
        aprobadosSTR += `Apellido: ${alumno.apellido} - Nombre: ${alumno.nombre} - Nota: ${alumno.nota_final}\n`;
    });

    salidaAprobados.value = aprobadosSTR;



    // igual al anterior, lo recorro y voy concatenando los alumnos para no usar console.log y mostrar en un textarea
    const desaprobados = buscarDesprobados(todasLasCohortes);    
    let desaprobadosSTR = "";
    desaprobados.forEach(alumno => {
        desaprobadosSTR += `Apellido: ${alumno.apellido} - Nombre: ${alumno.nombre} - Nota: ${alumno.nota_final}\n`;
    });

    salidaDesaprobados.value = desaprobadosSTR;
    });



    ////////////////////////////////////////////////
    //importando funciones para ej4
    import {ordenarPorNotaASC} from "./modelo.js"; 
    import {ordenarPorNotaDESC} from "./modelo.js"; 
    // CAPTURAR OBJETOS HTML PARA EJ:4
    

    const btnASC = document.querySelector("#btnASC");
    
    const btnDESC = document.querySelector("#btnDESC");
    const salidaEnOrdenSegunNota = document.querySelector("#salidaEnOrdenSegunNota");
    const encabezadoSalidaEnORendeSegunNota=document.querySelector("#encabezadoSalidaEnORendeSegunNota");
   

    //EVENTOS PARA EJ4
   

    btnASC.addEventListener("click", () => {
  

    const ordenadosASC = ordenarPorNotaASC(todasLasCohortes);

    let salida = "";
    ordenadosASC.forEach(alumno => {
        salida += `Apellido: ${alumno.apellido} - Nombre: ${alumno.nombre} - Nota: ${alumno.nota_final}\n`;
    });

    salidaEnOrdenSegunNota.value = salida;
    encabezadoSalidaEnORendeSegunNota.textContent="Listado ascendente  de alumnos según nota final"
});    





    btnDESC.addEventListener("click", () => {
    const todasLasCohortes = [
        ...cohorte01,
        ...cohorte02,
        ...cohorte03,
        ...cohorte04
    ];

    const ordenadosDESC = ordenarPorNotaDESC(todasLasCohortes);

    let salida = "";
    ordenadosDESC.forEach(alumno => {
        salida += `Apellido: ${alumno.apellido} - Nombre: ${alumno.nombre} - Nota: ${alumno.nota_final}\n`;
    });

    salidaEnOrdenSegunNota.value = salida;
    encabezadoSalidaEnORendeSegunNota.textContent="Listado descendente  de alumnos según nota final"
}); 



 //importando funciones para ej5
    import {buscarPorDni} from "./modelo.js"; 

 // capturando objetos html para ej5   
    const btnBuscarPorDni = document.querySelector("#btnBuscarPorDni");    
    const txtDni = document.querySelector("#txtDni");
    const salidaPorDNI = document.querySelector("#salidaPorDNI");
    


 //eventos para ej5
 btnBuscarPorDni.addEventListener("click", () => {

    

    const dni = txtDni.value.trim(); 
    //validadciones 
    const alumno = buscarPorDni(todasLasCohortes, dni);

    if (alumno) {
        salidaPorDNI.value =
            `Apellido: ${alumno.apellido}\n` +
            `Nombre: ${alumno.nombre}\n` +
            `DNI: ${alumno.dni}\n` +
            `Nota Final: ${alumno.nota_final}`;
    } else {
        salidaPorDNI.value = "No se encontró ningún alumno con ese DNI.";
    }

});







//ejercicio 6
//importando funciones para ej6
import {contarAprobadosUsandoIfElse} from "./modelo.js"; 
import {contarAprobadosUsandoOperadorTernario} from "./modelo.js"; 



// capturar los objetos del HTML para ejecrcicio 6
const btnAprobadosReduceIfElse = document.querySelector("#btnAprobadosReduceIfElse");
const btnAprobadosReduceTErnario = document.querySelector("#btnAprobadosReduceTErnario");
const salidaCantidadAlumnosAprobados = document.querySelector("#salidaCantidadAlumnosAprobados");
const encabezadoSalidaCantidadAlumnosAprobados = document.querySelector("#encabezadoSalidaCantidadAlumnosAprobados");
//eventos para ejercicio 6



btnAprobadosReduceIfElse.addEventListener("click", () => {
   

    const totalAlumnosAprobadosUsandoReduceConIfElse = contarAprobadosUsandoIfElse(todasLasCohortes);    

    salidaCantidadAlumnosAprobados.value =`Aprobados (REduce + IF/ELSE): ${totalAlumnosAprobadosUsandoReduceConIfElse}`
     encabezadoSalidaCantidadAlumnosAprobados.textContent ="Listado de Alumnos aprobados usado Reduce con if/ else";
      
});

btnAprobadosReduceTErnario.addEventListener("click", () => {
   

    const totalAlumnosAprobadosUsandoReduceConIfElse = contarAprobadosUsandoOperadorTernario(todasLasCohortes);    

    salidaCantidadAlumnosAprobados.value =`Aprobados (Reduce + operador ternario): ${totalAlumnosAprobadosUsandoReduceConIfElse}`
     encabezadoSalidaCantidadAlumnosAprobados.textContent ="Listado de Alumnos aprobados usado Reduce con operador ternario";
      
});










   


























window.onload = ()=>{

  

    console.log(`la pagina esta cargada`);  


    //console.log(`Sin Destructuring`); 

    // let resulatadoSinDestructuring = fnRecorrerCohorteSinDestructuring(cohorte01);
    // console.log(resulatadoSinDestructuring); 



     // console.log(`Con Destructuring`); 
   // let resulatadoConDestructuring = fnRecorrerCohorteConDestructuring(cohorte01);

   //  console.log(`Con Destructuring como parámetro`); 
   // let resulatadoConDestructuringComoParametro = fnRecorrerCohorteConDestructuringComoParametro(cohorte01);
   /* cohortes.forEach(item => {
        const option = document.createElement("option");
        option.value = item;
        option.textContent = item;
        combo.appendChild(option);
    });*/
    Object.keys(cohortes).forEach(key => {
    const option = document.createElement("option");
    option.value = key;              // "cohorte01"
    option.textContent = key;        // "cohorte01"
    combo.appendChild(option);
});





};





