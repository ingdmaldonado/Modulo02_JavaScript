import { cohorte01, cohorte02, cohorte03, cohorte04,
    notas, cohorteXtipos,
    unificarCohortes,ordenarPorNotas,buscarPorDni,contarAprobadosConIf,contarAprobadosConTernario
} from './modelos.js';

const btnSpreadOperator = document.querySelector("#btnSpreadOperator");
const selectCohorteForEach = document.querySelector("#selectCohorte");
const selectCohorteFilter = document.querySelector("#selectCohorteFilter");
const btnSort = document.querySelector("#btnSort");
const btnFind = document.querySelector("#btnFind");
const btnIf = document.querySelector("#btnIf");
const btnTernario = document.querySelector("#btnTernario");
const idResultado1 = document.querySelector("#idResultado1");
const idResultado2 = document.querySelector("#idResultado2");
const idResultado3 = document.querySelector("#idResultado3");
const idResultado4 = document.querySelector("#idResultado4");
const idResultado5 = document.querySelector("#idResultado5");
const idResultado6 = document.querySelector("#idResultado6");
const idResultado7 = document.querySelector("#idResultado7");




window.onload = () => {



    btnSpreadOperator.onclick = () => {
        const total = unificarCohortes(cohorte01, cohorte02, cohorte03, cohorte04);
        console.log("Todos unificados:",total);
        idResultado5.textContent = `Total de alumnos: ${total.length}`;
    };

   selectCohorteFilter.onchange = () => {
    const tipo = Number(selectCohorteFilter.value);
    
    if (tipo === 0) {
        idResultado7.innerText = "Cohorte seleccionada: No definido";
        return;
    }

    const titulo = tipo === 1 ? "Alumnos Aprobados:\n" : "Alumnos Desaprobados:\n";
    idResultado7.innerText = titulo;
    
    idResultado7.innerText += notas(tipo);
};

   selectCohorteForEach.onchange = () => {
    const tipo = Number(selectCohorte.value);
    
    idResultado6.innerText = "Cohorte seleccionada:\n"; 
    
    idResultado6.innerText += cohorteXtipos(tipo); 
};
   



    btnSort.onclick = () => {
        const todos = unificarCohortes(cohorte01, cohorte02, cohorte03, cohorte04);
        const ordenados = ordenarPorNotas(todos);

        console.log("--- Alumnos ordenados por nota ---");
        console.log(ordenados);
        idResultado4.innerText = `Alumnos por nota:\n${ordenados.map(alumno => `- ${alumno.nombre} ${alumno.apellido}: ${alumno.nota_final}`).join("\n")}`;
    };  

    btnFind.onclick = () => {
    
        const todos = unificarCohortes(cohorte01, cohorte02, cohorte03, cohorte04);

        const dniBuscado = inputDni.value;

        const alumnoEncontrado = buscarPorDni(todos, dniBuscado);

        console.log(`Buscando DNI: ${dniBuscado}`);
        if (alumnoEncontrado) {
        console.log("Alumno encontrado:",alumnoEncontrado);
        idResultado3.textContent = `Alumno encontrado: ${alumnoEncontrado.nombre} ${alumnoEncontrado.apellido}-Nota final: ${alumnoEncontrado.nota_final}`;
        } else {
            console.log("No se encontró ningún alumno con ese DNI.");
            idResultado3.textContent = `No se encontró ningún alumno con el DNI: ${dniBuscado}`;
        }
    };
    btnIf.onclick = () => {
        
        const todos = unificarCohortes(cohorte01, cohorte02, cohorte03, cohorte04);
        
        const cantidadAprobados = contarAprobadosConIf(todos);

        console.log("Cantidad de alumnos aprobados:", cantidadAprobados);
        idResultado1.textContent = `Cantidad de alumnos aprobados: ${cantidadAprobados}`;
    };

    btnTernario.onclick = () => {
        
        const todos = unificarCohortes(cohorte01, cohorte02, cohorte03, cohorte04);

        const cantidadAprobados = contarAprobadosConTernario(todos);
        console.log("Cantidad de alumnos aprobados:", cantidadAprobados);
        idResultado2.textContent = `Cantidad de alumnos aprobados: ${cantidadAprobados}`;
    };

}