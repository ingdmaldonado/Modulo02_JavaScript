/*
Ejercicio Nro. 15:
Realizar un programa que permita ingresar las notas de los trabajos finales.
0 a 4: desaprobados
>4 a 7: aprobados
>7 a <10: muy buenos
10: excelentes
Contemplar errores (<0 o >10) y contar la cantidad de veces que se equivoca.
Preguntar siempre si desea continuar.
*/
{
    let nota = 0;
    let cantDesaprobados = 0;
    let cantAprobados = 0;
    let cantMuyBuenos = 0;
    let cantExcelentes = 0;
    let cantErrores = 0;
    let continuar = "s";

    while (continuar.toLowerCase() === "s") {
        nota = Number(prompt("Ingrese la nota del trabajo final (0 a 10):"));

        if (nota < 0 || nota > 10) {
            cantErrores++;
            console.log("Error: Nota ingresada incorrecta. Debe ser entre 0 y 10.");
        } else if (nota >= 0 && nota <= 4) {
            cantDesaprobados++;
        } else if (nota > 4 && nota <= 7) {
            cantAprobados++;
        } else if (nota > 7 && nota < 10) {
            cantMuyBuenos++;
        } else if (nota === 10) {
            cantExcelentes++;
        }

        continuar = prompt("¿Desea continuar cargando notas? (s/n)");
    }

    console.log(`--- RESUMEN DE NOTAS ---`);
    console.log(`Trabajos Desaprobados: ${cantDesaprobados}`);
    console.log(`Trabajos Aprobados: ${cantAprobados}`);
    console.log(`Trabajos Muy Buenos: ${cantMuyBuenos}`);
    console.log(`Trabajos Excelentes: ${cantExcelentes}`);
    console.log(`Cantidad de errores al ingresar notas: ${cantErrores}`);
}