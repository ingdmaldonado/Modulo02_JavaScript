// CONTROLADOR.JS - TRABAJO PRACTICO NRO 04
// Aca importo las funciones y datos del modelo y manejo los eventos del DOM
// En este TP tengo que usar addEventListener en vez de onclick
// controlar los import, evitar error 
import {
    cohorte01,
    cohorte02,
    cohorte03,
    cohorte04,
    mostrarAlumnos,
    unificarCohortes,
    obtenerAprobados,
    obtenerDesaprobados,
    ordenarPorNota,
    buscarPorDni,
    contarAprobadosConIf,
    contarAprobadosConTernario,
    generarTablaAlumnos
} from './modelo.js';


// Variable global para guardar el vector unificado
// La voy a usar en varios puntos del ejercicio
let todosLosAlumnos = [];


// Espero a que cargue la pagina
window.onload = () => {
    console.log("Pagina cargada - TP 04");
    
    //  PUNTO 1 
    // Mostrar alumnos de cada cohorte con forEach
    let btnPunto1 = document.getElementById("btnPunto1");
    
    btnPunto1.addEventListener("click", () => {
        console.log("=== PUNTO 1: Mostrar alumnos con forEach ===");
        
        let resultado = "";
        
        // Llamo a la funcion para cada cohorte
        resultado = resultado + "<h3>Cohorte 01:</h3>";
        resultado = resultado + mostrarAlumnos(cohorte01, "Cohorte 01");
        
        resultado = resultado + "<h3>Cohorte 02:</h3>";
        resultado = resultado + mostrarAlumnos(cohorte02, "Cohorte 02");
        
        resultado = resultado + "<h3>Cohorte 03:</h3>";
        resultado = resultado + mostrarAlumnos(cohorte03, "Cohorte 03");
        
        resultado = resultado + "<h3>Cohorte 04:</h3>";
        resultado = resultado + mostrarAlumnos(cohorte04, "Cohorte 04");
        
        document.getElementById("resultadoPunto1").innerHTML = resultado;
    });
    
    
    //  PUNTO 2 
    // Unificar cohortes con spread operator
    let btnPunto2 = document.getElementById("btnPunto2");
    
    btnPunto2.addEventListener("click", () => {
        console.log("=== PUNTO 2: Unificar cohortes con spread operator ===");
        
        // Guardo el resultado en la variable global para usarla despues
        todosLosAlumnos = unificarCohortes();
        
        // Muestro la cantidad y la tabla
        let resultado = `<p>Se unificaron ${todosLosAlumnos.length} alumnos en total</p>`;
        resultado = resultado + generarTablaAlumnos(todosLosAlumnos);
        
        document.getElementById("resultadoPunto2").innerHTML = resultado;
        
        // Habilito los botones que necesitan el vector unificado
        document.getElementById("btnPunto3").disabled = false;
        document.getElementById("btnPunto4").disabled = false;
        document.getElementById("btnPunto5").disabled = false;
        document.getElementById("btnPunto6").disabled = false;
    });
    
    
    // PUNTO 3 
    // Filtrar aprobados y desaprobados
    let btnPunto3 = document.getElementById("btnPunto3");
    
    btnPunto3.addEventListener("click", () => {
        console.log("=== PUNTO 3: Filtrar aprobados y desaprobados ===");
        
        // Verifico que primero se haya unificado
        if (todosLosAlumnos.length === 0) {
            document.getElementById("resultadoPunto3").innerHTML = 
                "<p>Error: Primero debe unificar las cohortes (Punto 2)</p>";
            return;
        }
        
        // Obtengo los aprobados (nota > 5) y desaprobados (nota <= 5)
        let alumnosAprobados = obtenerAprobados(todosLosAlumnos);
        let alumnosDesaprobados = obtenerDesaprobados(todosLosAlumnos);
        
        console.log("Aprobados:", alumnosAprobados);
        console.log("Desaprobados:", alumnosDesaprobados);
        
        let resultado = "";
        resultado = resultado + `<h3>Alumnos Aprobados (nota > 5): ${alumnosAprobados.length}</h3>`;
        resultado = resultado + generarTablaAlumnos(alumnosAprobados);
        
        resultado = resultado + `<h3>Alumnos Desaprobados (nota <= 5): ${alumnosDesaprobados.length}</h3>`;
        resultado = resultado + generarTablaAlumnos(alumnosDesaprobados);
        
        document.getElementById("resultadoPunto3").innerHTML = resultado;
    });
    
    
    //  PUNTO 4 
    // Ordenar por nota de menor a mayor
    let btnPunto4 = document.getElementById("btnPunto4");
    
    btnPunto4.addEventListener("click", () => {
        console.log("=== PUNTO 4: Ordenar por nota con sort ===");
        
        if (todosLosAlumnos.length === 0) {
            document.getElementById("resultadoPunto4").innerHTML = 
                "<p>Error: Primero debe unificar las cohortes (Punto 2)</p>";
            return;
        }
        
        let alumnosOrdenados = ordenarPorNota(todosLosAlumnos);
        
        console.log("Alumnos ordenados por nota:", alumnosOrdenados);
        
        let resultado = "<h3>Alumnos ordenados por nota (de menor a mayor):</h3>";
        resultado = resultado + generarTablaAlumnos(alumnosOrdenados);
        
        document.getElementById("resultadoPunto4").innerHTML = resultado;
    });
    
    
    //  PUNTO 5 
    // Buscar alumno por DNI con find
    let btnPunto5 = document.getElementById("btnPunto5");
    
    btnPunto5.addEventListener("click", () => {
        console.log("=== PUNTO 5: Buscar por DNI con find ===");
        
        if (todosLosAlumnos.length === 0) {
            document.getElementById("resultadoPunto5").innerHTML = 
                "<p>Error: Primero debe unificar las cohortes (Punto 2)</p>";
            return;
        }
        
        // Capturo el DNI del input
        let dniBuscado = document.getElementById("inputDni").value.trim();
        
        if (dniBuscado === "") {
            document.getElementById("resultadoPunto5").innerHTML = 
                "<p>Error: Ingrese un DNI para buscar</p>";
            return;
        }
        
        let alumnoEncontrado = buscarPorDni(todosLosAlumnos, dniBuscado);
        
        let resultado = "";
        if (alumnoEncontrado === undefined) {
            resultado = `<p>No se encontro ningun alumno con DNI: ${dniBuscado}</p>`;
            console.log("Alumno no encontrado");
        } else {
            resultado = `<h3>Alumno encontrado:</h3>`;
            resultado = resultado + `<p><strong>DNI:</strong> ${alumnoEncontrado.dni}</p>`;
            resultado = resultado + `<p><strong>Nombre:</strong> ${alumnoEncontrado.nombre}</p>`;
            resultado = resultado + `<p><strong>Apellido:</strong> ${alumnoEncontrado.apellido}</p>`;
            resultado = resultado + `<p><strong>Nota Final:</strong> ${alumnoEncontrado.nota_final}</p>`;
            console.log("Alumno encontrado:", alumnoEncontrado);
        }
        
        document.getElementById("resultadoPunto5").innerHTML = resultado;
    });
    
    
    //  PUNTO 6
    // Contar aprobados con reduce (dos formas)
    let btnPunto6 = document.getElementById("btnPunto6");
    
    btnPunto6.addEventListener("click", () => {
        console.log("=== PUNTO 6: Contar aprobados con reduce ===");
        
        if (todosLosAlumnos.length === 0) {
            document.getElementById("resultadoPunto6").innerHTML = 
                "<p>Error: Primero debe unificar las cohortes (Punto 2)</p>";
            return;
        }
        
        // Cuento con las dos formas
        let cantidadConIf = contarAprobadosConIf(todosLosAlumnos);
        let cantidadConTernario = contarAprobadosConTernario(todosLosAlumnos);
        
        console.log("Cantidad aprobados (con if):", cantidadConIf);
        console.log("Cantidad aprobados (con ternario):", cantidadConTernario);
        
        let resultado = "<h3>Conteo de alumnos aprobados (nota > 5):</h3>";
        resultado = resultado + `<p><strong>Usando if/else:</strong> ${cantidadConIf} alumnos aprobados</p>`;
        resultado = resultado + `<p><strong>Usando operador ternario:</strong> ${cantidadConTernario} alumnos aprobados</p>`;
        resultado = resultado + `<p><em>Ambos metodos dan el mismo resultado, solo cambia la forma de implementarlo, </em></p>`;
        
        document.getElementById("resultadoPunto6").innerHTML = resultado;
    });
    
};
