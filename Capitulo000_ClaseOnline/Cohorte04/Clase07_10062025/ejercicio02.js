
/* 
	Realizar un programa en JavaScript que permita ingresar las notas 
    de los trabajos finales de los alumnos de la diplomatura en 
    “Desarrollo Web Full Stack con JavaScript” para ello se establecen 
    las siguientes condiciones.

-	No está establecido la cantidad de trabajos finales que se evaluarán

-	Este será el cuadro con el que se analizará y asignará la clasificación de los mismos.

    o	Si la nota >= 0 y <= 4 serán trabajos desaprobados
    o	Si la nota > 4 y <= 7 serán trabajos aprobados
    o	Si la nota > 7 y <10 serán trabajos muy buenos
    o	Si la nota = 10 serán trabajos excelentes

-	Contemplar que el operador podría ingresar notas incorrectas, 
    es decir podría poner una nota menor a cero o mayor a 10 con lo que 
    sería claramente un error. Contemplar la cantidad de veces que se equivoca.

-	Siempre preguntar si desea continuar cargando notas ¿?.

*/

{

    let continuaCargando = "SI";

    let cantidadDeDesaprobados = 0;
    let cantidadDeAprobados = 0;
    let cantidadDeMuyBuenos = 0;
    let cantidadDeExcelentes = 0;
    let errores = 0;
    let total = 0;

    while(continuaCargando === "SI")
    {
        //console.log(`esto ocurre dentro del ciclo while`);

        let nota = 0; // declaro e inicializo

        nota = Number(prompt(`Ing. Nota`));

        // cantidad de desaprobados //
        cantidadDeDesaprobados = nota >= 0 && nota <= 4 ? cantidadDeDesaprobados + 1: cantidadDeDesaprobados;

        // cantidad de aprobados //
        cantidadDeAprobados = nota > 4 && nota <= 7 ? cantidadDeAprobados + 1: cantidadDeAprobados;

        // cantidad de muy buenos //
        cantidadDeMuyBuenos = nota > 7 && nota <= 9 ? cantidadDeMuyBuenos + 1: cantidadDeMuyBuenos;

        // cantidad de excelentes //
        cantidadDeExcelentes = nota === 10 ? cantidadDeExcelentes + 1:cantidadDeExcelentes;

        // cantidad de errores //
        errores = nota < 0 || nota > 10 ? errores + 1 : errores;

        console.log(`Nota Leida: ${nota} Desaprobados: ${cantidadDeDesaprobados} Aprobados: ${cantidadDeAprobados} Muy Buenos: ${cantidadDeMuyBuenos} y Excelentes: ${cantidadDeExcelentes} errores: ${errores}`);

        continuaCargando = prompt(`Desea continuar ingresando notas ?. (SI/NO)`);
    }

    // aqui a la salida del ciclo lo unico que hago es sumar y obtener el total //
    total = cantidadDeDesaprobados + cantidadDeAprobados +  + cantidadDeMuyBuenos + cantidadDeExcelentes + errores;

    let porcentajeDesaprobados = total !== 0 ? (cantidadDeDesaprobados / total)*100 : 0;
    let porcentajeDeAprobados = total !== 0 ? (cantidadDeAprobados / total)*100:0;

    console.log(`Inf. Estadistica: % Desaprobados : ${porcentajeDesaprobados} y % Aprobados: ${porcentajeDeAprobados}`);

}