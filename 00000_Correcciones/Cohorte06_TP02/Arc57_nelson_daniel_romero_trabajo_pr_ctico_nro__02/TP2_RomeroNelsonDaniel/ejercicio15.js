let continuar = "s";
let nota = 0;
let ingresosErroneos = 0;
let totalIngresosErroneos = 0;
let trabajosDesaprobados = 0;
let trabajosAprobados = 0;
let trabajosMuyBuenos = 0;
let trabajosExcelentes = 0;


while(continuar == "s" || continuar == "S"){

    nota = Number(prompt("Ingrese un nota para evaluar"));

    ingresosErroneos = 0;
    while(nota < 0 || nota > 10)
    {
        ingresosErroneos++;
        nota = Number(prompt(`Nota inválida. Errores de ingreso: ${ingresosErroneos}`));12
    }
    totalIngresosErroneos += ingresosErroneos;

    if(nota >= 0 && nota <=4)
    {
        trabajosDesaprobados++;
    }
    if(nota > 4 && nota <= 7)
    {
        trabajosAprobados++;
    }
    if(nota > 7 && nota < 10)
    {
        trabajosMuyBuenos++;
    }
    if(nota == 10)
    {
        trabajosExcelentes++;
    }

    continuar = prompt("¿Desea continuar cargando notas? S/N");
}

console.log("Cantidad de trabajos desaprobados", trabajosDesaprobados);
console.log("Cantidad de trabajos aprobados:", trabajosAprobados);
console.log("Cantidad de trabajos muy buenos:", trabajosMuyBuenos);
console.log("Cantidad de trabajos excelentes", trabajosExcelentes);
console.log("----------------------------------------------------");
console.log("Total de ingresos erróneos", totalIngresosErroneos);