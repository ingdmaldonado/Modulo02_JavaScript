
/*

TOP 5 PARA ENSEÑAR EN CURSOS (vanilla + React)
🔁 forEach() – lo más básico, para practicar lógica y comprensión

🎨 map() – el más usado en React para renderizar listas

🎯 filter() – súper útil para búsquedas y condiciones

🔍 find() – muy usado en lógica para traer un solo dato (por ejemplo, find(user => user.id === x))

➕ reduce() – esencial en casos de sumas, acumuladores o transformaciones complejas

*/


const fnCuadrado = (numero)=>
    {
        return numero * numero;
    }

const fnCubo = numero => numero * numero * numero;

const fnLLamadora = (fn,numero)=>
{
    return fn(numero);
}


window.addEventListener("load",()=>
    {
        console.log("running");

        /* Funciones CallBack */

        let resultado1 = fnLLamadora(fnCuadrado,2);

        let resultado2 = fnLLamadora(fnCubo,2);

        let resultado3 = fnLLamadora((x)=>{return x*x + 2},2);

        let resultado4 = fnLLamadora(importe => importe * 20/100,100);

        console.log(resultado1);
        console.log(resultado2);
        console.log(resultado3);
        console.log(resultado4);

        /* Declaro un Vector con los nombres de los alumnos */

        const vectorDeAlumnos = ["ROXANA0","GUSTAVO","CARLOS","RAMON","JORGE"];

        /* Recorrido tradicional con ciclo for */
        for(let i = 0;i < vectorDeAlumnos.length;i++)
        {
            let nombreDeAlumno = vectorDeAlumnos[i];

            console.log(`El alumno es ${nombreDeAlumno} y se encuentra en la posición ${i}`);

        }

        console.log("-----------------------------------");

        /* Recorrido con forEach */

        vectorDeAlumnos.forEach((element,indice)=>
            {
                console.log(`El alumno es ${element} y se encuentra en la posicion ${indice}`)

            })


        /* Recorrido y calculo de promedio utilizando forEach */

        const notasDeAlumnos = [10,9,7,8,7,6,4,8,9];

        console.log(`Largo del Vector: ${notasDeAlumnos.length}`);

        let sumaTotal = 0;
        let cantidadNotas = 0;
        let promedioNotas = 0;
        notasDeAlumnos.forEach((element,indice)=>
            {
                sumaTotal = sumaTotal + element;
                cantidadNotas = cantidadNotas + 1;
            })

        promedioNotas = cantidadNotas > 0 ? sumaTotal / cantidadNotas:0;

        console.log(`Cantidad de notas ${cantidadNotas} y suma total ${sumaTotal} y el promedio ${promedioNotas}`);

        /* Recorrido y Busqueda de Valores específicos */

        let existeAlgunDesaprobado = false;

        notasDeAlumnos.forEach((element,indice)=>
            {
               existeAlgunDesaprobado = element < 4 ? true:false;
            })

        console.log(`Existió algún desaprobado ${existeAlgunDesaprobado}`);


        /* Spread Operator */

        const ingresosAcumuladosEnero2025 = [1850.50,1920.55,2000,4500,7500];

        const ingresosAcumuladosFebrero2025 = ingresosAcumuladosEnero2025;

        console.log(ingresosAcumuladosEnero2025);

        console.log(ingresosAcumuladosFebrero2025);

        /* a Febrero, le voy a agregar manualmente datos */

            ingresosAcumuladosFebrero2025.push(6700,7000,7200);

            console.log(ingresosAcumuladosEnero2025);

            console.log(ingresosAcumuladosFebrero2025);

        /* Spread Operator => operador de expansión */

            const copiaIndependiente = [...ingresosAcumuladosEnero2025];

            copiaIndependiente.push(9000,9500);

            console.log(ingresosAcumuladosEnero2025);
            console.log(copiaIndependiente);

        
        /* OBJETOS LITERALES (atributos y valores) // pares (clave/valor) */

    
        const alumno1 = {dni:28282441,apellido:"LOPEZ",nombre:"FERNANDO",cp:4710,localidad:"BELEN"};
        const alumno2 = {dni:28282442,apellido:"MALDONADO",nombre:"ENRIQUE DANIEL",cp:4710,localidad:"BELEN"};
        const alumno3 = {dni:28282443,apellido:"BARROS",nombre:"RAMON ATILIO",cp:4728,localidad:"MUTQUIN"};
        const alumno4 = {dni:28282444,apellido:"FERREYRA",nombre:"MIGUEL ANGEL",cp:4726,localidad:"ANCASTI"};
        const alumno5 = {dni:28282445,apellido:"ARIZA",nombre:"JORGE EDUARDO",cp:4723,localidad:"LOS ALTOS"};
        const alumno6 = {dni:28282446,apellido:"CASTRO",nombre:"MARTIN",cp:4712,localidad:"HUALFIN"};
        const alumno7 = {dni:28282447,apellido:"MORENO",nombre:"ROBERTO CARLOS",cp:4704,localidad:"SANTA ROSA"};
        const alumno8 = {dni:28282448,apellido:"SALGADO",nombre:"JUAN PABLO",cp:4714,localidad:"RECREO"};
        const alumno9 = {dni:28282449,apellido:"ROJAS",nombre:"GABRIEL",cp:4726,localidad:"ANCASTI"};
        const alumno10 = {dni:28282450,apellido:"TOLOSA",nombre:"JULIO CESAR",cp:4702,localidad:"FRAY MAMERTO ESQUIU"};
        const alumno11 = {dni:28282451,apellido:"VILLAGRA",nombre:"NICOLAS",cp:4701,localidad:"VALLE VIEJO"};
        const alumno12 = {dni:28282452,apellido:"SOSA",nombre:"HERNAN",cp:4704,localidad:"SANTA ROSA"};
        const alumno13 = {dni:28282453,apellido:"CARRIZO",nombre:"LUCAS",cp:4710,localidad:"BELEN"};
        const alumno14 = {dni:28282454,apellido:"LUNA",nombre:"EMILIANO",cp:4707,localidad:"POMAN"};
        const alumno15 = {dni:28282455,apellido:"AGUIRRE",nombre:"SEBASTIAN",cp:4723,localidad:"LOS ALTOS"};
        const alumno16 = {dni:28282456,apellido:"CAMPOS",nombre:"VICTOR",cp:4718,localidad:"TINOGASTA"};
        const alumno17 = {dni:28282457,apellido:"REYNOSO",nombre:"DARIO",cp:4718,localidad:"TINOGASTA"};
        const alumno18 = {dni:28282458,apellido:"SUAREZ",nombre:"DIEGO",cp:4714,localidad:"RECREO"};
        const alumno19 = {dni:28282459,apellido:"MORALES",nombre:"FABIAN",cp:4720,localidad:"SANTA MARIA"};
        const alumno20 = {dni:28282460,apellido:"DIAZ",nombre:"RICARDO",cp:4709,localidad:"ANDALGALA"};


        const alumnosNodo = [alumno1, alumno2, alumno3, alumno4, alumno5,alumno6, alumno7, alumno8, alumno9, alumno10,alumno11, alumno12, alumno13, alumno14, alumno15,alumno16, alumno17, alumno18, alumno19, alumno20];

        console.log(alumnosNodo);

        /* Recorrer y mostrar los datos de cada alumno */

        alumnosNodo.forEach(alumno => {
            console.log(`${alumno.apellido}, ${alumno.nombre} - DNI: ${alumno.dni}`);
          });
          

        /* Recorrer y mostrar los alumnos que vivan en BELEN unicamente */

        alumnosNodo.forEach(alumno => {
            if (alumno.localidad === "BELEN") {
              console.log(`${alumno.nombre} vive en BELEN`);
            }
          });


          


    })