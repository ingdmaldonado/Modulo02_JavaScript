
/* AQUI HAREMOS REPASO DE ESTRUCTURAS
REPETITIVAS */

/* El Ciclo For. es ideal cuando 
conozco con anticipación la cantidad
de pasos/iteraciones que hará el programa */

for(let iterador = 0;iterador <= 10;iterador = iterador +1)
{
    console.log(`Desde ${iterador} que les dejaron de regalar penales. los Gallinas no ganas mas`);
}


/* CICLO MIENTRAS = WHILE 
cuando no sabemos con exactitud cuando
desea finalizar el procesamiento del ciclo.

    1) cajera de un supermercado cuando
    ingresa a trabajar a las 8:00 de la mañana.

    cuantas personas atenderá en el dia ?.

    2) como sabe la cantidad de productos
    que compró la persona ?.

    3) una persona que es cajera de un peaje.
    no puede saber cuantos vehiculos van a pasar
    por su caja.

    

*/

let deseaRealizarOtraOperacion = "SI";

while (deseaRealizarOtraOperacion === "SI")
{
    console.log("aqui sigue dentro del cajero");

    deseaRealizarOtraOperacion = prompt("Desea continuar ? (SI/NO)");

}
console.log("aqui ya termine");

