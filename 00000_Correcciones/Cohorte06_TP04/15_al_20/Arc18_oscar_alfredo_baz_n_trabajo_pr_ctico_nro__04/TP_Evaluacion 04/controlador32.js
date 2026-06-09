import { cohorte01, cohorte02, cohorte03, cohorte04, fnMuestraEstudiantes, fnUnificarAlumnos, fnAlumnosAprobados, fnAlumnosDesaprobados, fnOrdenarAlumnosNotaMayor, fnBuscarAluDNI, fnContarAprobConIf, fnContarAprobOperadorTernario } from "./modelo32.js";


const botonMostrar = document.getElementById(`idBotonMostrar`);

const botonUnificar = document.getElementById(`idBotonUnificar`);

const botonFiltrar = document.getElementById(`idBotonFiltrar`);

const botonOrdenar = document.getElementById(`idBotonOrdenar`);

const inputDNI = document.getElementById(`idDNI`);
const botonBuscar = document.getElementById(`idBotonBuscar`);

const botonContador = document.getElementById(`idBotonContarAprob`);


//PUNTO N° 1//

botonMostrar.onclick = () => {

console.log(`Alumnos de la corte 01`);

fnMuestraEstudiantes(cohorte01);


console.log(`Alumnos de la corte 02`);

fnMuestraEstudiantes(cohorte02);


console.log(`Alumnos de la corte 03`);

fnMuestraEstudiantes(cohorte03);    


console.log(`Alumnos de la corte 04`);

fnMuestraEstudiantes(cohorte04);

}

//*PUNTO N° 2*//

botonUnificar.onclick = () => {

    console.log(`------------------------------Aqui estarian todos los alumnos de las cuatro cortes.------------------------------`);

    fnMuestraEstudiantes(fnUnificarAlumnos);

}
 

//*PUNTO N° 3*//

botonFiltrar.onclick = () => {

    console.log(`------------------------------Aqui estarian los alumnos aprobados.------------------------------`);

    fnMuestraEstudiantes(fnAlumnosAprobados(fnUnificarAlumnos));

    console.log(`------------------------------Aqui estarian los alumnos desaprobados.------------------------------`);

    fnMuestraEstudiantes(fnAlumnosDesaprobados(fnUnificarAlumnos));

}



//*PUNTO N° 4*//

botonOrdenar.onclick = ()=>{

console.log(`------Aqui mostrare los alumnos ordenados de nota menor a nota meyot------`);

fnMuestraEstudiantes(fnOrdenarAlumnosNotaMayor(fnUnificarAlumnos));

}

//*PUNTO N° 5*//

botonBuscar.onclick = () => {

    const dniABuscar = inputDNI.value;

    const alumnoLocalizado = fnBuscarAluDNI(dniABuscar);
     
    if (alumnoLocalizado) {

        console.log(`El alumno fue localizado exitosamente:`)
        console.log(alumnoLocalizado);
    }
    else {
        console.log(`No se encontro alumno con el DNI: ${dniABuscar}`);
    }

}

//*PUNTO N° 6*//

botonContador.onclick = () =>{

    console.log(`Aqui estamos contado con IF, la cantidad de aprobados`);
    console.log (fnContarAprobConIf(fnUnificarAlumnos));


    console.log (`Aqui estamso contando con un operador ternario, la cantidad de aprobados.`);

    console.log(fnContarAprobOperadorTernario(fnUnificarAlumnos));

}