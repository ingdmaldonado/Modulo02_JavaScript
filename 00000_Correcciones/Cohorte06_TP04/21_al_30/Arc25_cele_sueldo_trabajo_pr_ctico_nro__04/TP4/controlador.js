import {
    cohorte01, cohorte02, cohorte03, cohorte04,
    mostrarConsola, juntarTodo, sacarAprobados,
    sacarDesaprobados, ordenarNotas, buscarDni,
    contarAprobadosIf, contarAprobadosTernario
} from './models.js'; // con s

// agarro los elementos del HTML
const cajaResultados = document.getElementById('resultado');
const boton1 = document.getElementById('btnUnificar'); 
const boton2 = document.getElementById('btnAnalisis');  

// --- muestras automaticas de consola al cargar (F12) ---

console.log("alumnos por cada cohorte:");
console.log("cohorte 1:"); mostrarConsola(cohorte01);
console.log("cohorte 2:"); mostrarConsola(cohorte02);
console.log("cohorte 3:"); mostrarConsola(cohorte03);
console.log("cohorte 4:"); mostrarConsola(cohorte04);

const listaCompleta = juntarTodo();
console.log("todos los alumnos juntos:", listaCompleta);


// --- EVENTOS AL HACER CLICK ---

boton1.onclick = () => {
    console.log("tocaste el boton unificar!!"); 
    cajaResultados.innerHTML = ""; 
    
    let ordenados = ordenarNotas(listaCompleta);
    console.log("lista ordenada por nota de menor a mayor:", ordenados);
    
    cajaResultados.innerHTML += "<h2>Alumnos Ordenados por Nota</h2>";
    ordenados.forEach(a => {
        cajaResultados.innerHTML += `<p class="alumnos-lista">Nota: <b>${a.nota_final}</b> - ${a.apellido}, ${a.nombre} (DNI: ${a.dni})</p>`;
    });
};

boton2.onclick = () => {
    console.log("tocaste el boton analisis!!"); 
    cajaResultados.innerHTML = ""; 
    
    // filtros de aprobados y desaprobados
    let aprobados = sacarAprobados(listaCompleta);
    let desaprobados = sacarDesaprobados(listaCompleta);
    
    console.log("filtrado aprobados:", aprobados);
    console.log("filtrado desaprobados:", desaprobados);
    
    // las dos formas de reduce
    let totalIf = contarAprobadosIf(listaCompleta);
    let totalTernario = contarAprobadosTernario(listaCompleta);
    
    console.log("cantidad reduce if: " + totalIf);
    console.log("cantidad reduce ternario: " + totalTernario);
    
    // buscar un dni (uso el de pedro alvarez de prueba)
    let dniBuscado = "89012345"; 
    let encontrado = buscarDni(listaCompleta, dniBuscado);
    console.log("busqueda por dni:", encontrado);
    
    // --- ACA EMPEZAMOS A PINTAR TODO EN EL HTML ---
    cajaResultados.innerHTML += "<h2>Resultados de Analisis</h2>";
    cajaResultados.innerHTML += `<p>Total Aprobados (con reduce): <b>${totalTernario}</b></p>`;
    
    // Listamos los aprobados en pantalla
    cajaResultados.innerHTML += "<h3>Lista de Aprobados:</h3>";
    aprobados.forEach(a => {
        cajaResultados.innerHTML += `<p class="alumnos-lista" style="border-left-color: #5cb85c;">${a.apellido}, ${a.nombre} - Nota: <b>${a.nota_final}</b></p>`;
    });

    // LISTAMOS LOS DESAPROBADOS (LO QUE NOS FALTABA!)
    cajaResultados.innerHTML += "<h3>Lista de Desaprobados:</h3>";
    desaprobados.forEach(a => {
        cajaResultados.innerHTML += `<p class="alumnos-lista" style="border-left-color: #d9534f;">${a.apellido}, ${a.nombre} - Nota: <b>${a.nota_final}</b></p>`;
    });
    
    // Cuadro de busqueda por DNI abajo de todo
    if (encontrado) {
        cajaResultados.innerHTML += `
            <div class="caja-busqueda">
                <b>Se encontro al alumno por DNI:</b><br>
                Nombre: ${encontrado.nombre} ${encontrado.apellido}<br>
                Nota Final: ${encontrado.nota_final}
            </div>`;
    }
};