let huevoEvaluado = 0;
let huevosXL = 0;
let huevosL = 0;
let huevosM = 0;
let huevosDescartados = 0;
let totalHuevos = 0;
let continuar = "s";

while (continuar === "s" || continuar === "S")
{
    huevoEvaluado = Number(prompt("Ingrese peso del huevo"));
    continuar = prompt ("¿Evaluar otro huevo? S/N");
    if (huevoEvaluado >= 73)
    {
        huevosXL++;
        continue;
    }
    if (huevoEvaluado >= 63)
    {
        huevosL++;
        continue;
    }
    if (huevoEvaluado >= 53)
    {
        huevosM++;
        continue;
    }
    huevosDescartados++
    break;
}

totalHuevos = huevosDescartados + huevosM + huevosL + huevosXL;

console.log("Cantidad total de huevos:", totalHuevos);
console.log("Cantidad de huevos XL:", huevosXL);
console.log("Cantidad de huevos L:", huevosL);
console.log("Cantidad de huevos M:", huevosM);
console.log("Cantidad de huevos descartados:", huevosDescartados);
console.log("Porcentaje de huevos XL:", (huevosXL * 100 / totalHuevos), "%");
console.log("Porcentaje de huevos L:", (huevosL * 100 / totalHuevos), "%");
console.log("Porcentaje de huevos M:", (huevosM * 100 / totalHuevos), "%");