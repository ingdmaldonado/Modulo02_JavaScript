import { cohorte01, cohorte02, cohorte03, cohorte04 } from "./datos.js";

import { frRecorrerCohorte } from "./modelo.js";

window.onload = () => {

    const idDNI = document.querySelector("#idDNI");
    const idBtnDNI = document.querySelector("#idBtnDNI");


    console.log("----------------PUNTO 2----------------")
    //Punto 2
    /* Vamos a usar la Unificacion, para ello usamos SpreadOperator:
    es un operador de propagacion, que significa todos los elementos de algo.
    SPREAD OPERATOR sirve tanto para vectores como para objetos 
    */

    const Unificacion = [...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04];

    frRecorrerCohorte(Unificacion);




    console.log("----------------PUNTO 3----------------")
    //Punto 3

    //const Notas = Unificacion.forEach(alumno=>console.log(alumno.nota_final));
    //Primero con forEach voy a mostrar las todas las notas
    console.log(`-----------Aprobados------------`)

    //(Cuerpo de la funcion)      
    const AlumnosAprobados = Unificacion.filter(alumno => alumno.nota_final > 5); //como tiene una sola instruccion me puedo obviar las llaves y el return(return inplicito)

    //mostramos
    frRecorrerCohorte(AlumnosAprobados);

    console.log(`----------Desaprobados-----------`)
    const AlumnosDesaprobados = Unificacion.filter(alumno => alumno.nota_final <= 5);

    frRecorrerCohorte(AlumnosDesaprobados);



    console.log("----------------PUNTO 4----------------")
    //Punto 4

    /*Con sort las voy a ordenar, pero sort por defecto ordena
     por su valor de Unicode, asi que para ordenar de manera logica
      vamos a tener que usar una funcion con una formula*/

    //Como SORT modifica el orden la los vectores es mejor crear una variable especifica para ello


    const Unificacion2 = [...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04];

    //frRecorrerCohorte(Unificacion2);

    const NotasMayorAMenor = Unificacion2.sort((a, b) => {
        if (a.nota_final < b.nota_final) {
            return -1;
        }
        if (a.nota_final > b.nota_final) { //Esta seria una variante de las condiciones para diferenciar digitos de mayor a menor y que nos lo devuelva
            return 1;
        }
        return 0;
    });

    console.log(NotasMayorAMenor);

    console.log(` Verificamos la modificacion del vector con el uso de sort`);
    frRecorrerCohorte(Unificacion2);//verificamos que se modifico

    

    //Punto 5
    /*Vamos a buscar los alumnos con el DNI que comience en 9 */
    idBtnDNI.onclick = () => {

        console.log("----------------PUNTO 5----------------")

        const DniBuscado = idDNI.value;

        console.log(DniBuscado);

        const DniAlumno = Unificacion.find(alumno => alumno.dni === DniBuscado);

        if(DniAlumno)
        {
            console.log(DniAlumno);
        }
        else
        {
            console.log(`El DNI que ingreso es inexistente`);
        }
        
    };



    console.log("----------------PUNTO 6 a).----------------")
    //Condicional if/else
    const ContAlumnosAprobados = Unificacion.reduce((contador, notasFinales) => {

        if (notasFinales.nota_final > 5) {
            contador = contador + 1;
        }
        return contador;

    }, 0);

    console.log(ContAlumnosAprobados);

    //Hacemos un comprobador con filter
    const Comprobador = Unificacion.filter(notasFinales => notasFinales.nota_final > 5);
    console.log(Comprobador);



    console.log("----------------PUNTO 6 b).----------------")
    //Con Operador Ternario
    //Machete vector.reduce(()=>{},0); 

    const ContAlumnosAprobados2 = Unificacion.reduce((contador, notasFinales)=>{ return notasFinales.nota_final > 5 ? contador=contador +1 : contador} ,0);

    //Según investigué, si el operador ternario lleva return, el mismo va detras de la condición

    console.log(ContAlumnosAprobados2);

};