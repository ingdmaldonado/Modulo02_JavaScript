/*Ejercicio Nro. 17:
Una Frigorífico posee una cinta transportadora y clasificadora de huevos para consumo humano. La cinta
no tan solo los transporta sino también los clasifica según su peso. es decir, al final de la cinta existe una balanza
electrónica de alta precisión que evalúa su peso y los clasifica.
a) XL, súper grandes: peso ≥ 73 gramos.
b) L, grandes: peso ≥ 63 gramos y < 73 gramos.
c) M, medianos: peso ≥ 53 gramos y < 63 gramos.
Nota: considere como descartados aquellos que no estén dentro del rango de valores aceptables.
Determinar lo siguiente:
1) Cantidad total de Huevos (Todas las categorías)
2) Cantidad total de Huevos XL
3) Cantidad total de Huevos L
4) Cantidad total de Huevos M
5) Cantidad total de Huevos descartados
6) Determinar el % de Huevos XL sobre el Total
7) Determinar el % de Huevos L sobre el Total
8) Determinar el % de Huevos M sobre el Total
*/

{
  let cantidadTotalHuevos = 0;
  let cantidadHuevosXl = 0;
  let cantidadHuevosL = 0;
  let cantidadHuevosM = 0;
  let totalHuevosDescartados = 0;
  let pesoHuevo = 0;
  let porcentajeHuevosXl = 0;
  let porcentajeHuevosL = 0;
  let porcentajeHuevosM = 0;

  let continua = `S`;
  while (continua === `S` || continua === `s`) {
    pesoHuevo = Number(prompt(`Ingrese el peso del huevo a clasificar`));

    if (pesoHuevo >= 73) {
      cantidadHuevosXl = cantidadHuevosXl + 1;
      cantidadTotalHuevos = cantidadTotalHuevos + 1;
    }
    else if ((pesoHuevo >= 63) && (pesoHuevo < 73)) {
      cantidadHuevosL = cantidadHuevosL + 1;
      cantidadTotalHuevos = cantidadTotalHuevos + 1;
    }
    else if ((pesoHuevo >= 53) && (pesoHuevo < 63)) {
      cantidadHuevosM = cantidadHuevosM + 1;
      cantidadTotalHuevos = cantidadTotalHuevos + 1;
    }
    else {
      console.log(`Huevo descartado`);
      cantidadTotalHuevos = cantidadTotalHuevos + 1;
    }

    continua = prompt(`Desea ingresar el peso de otro huevo? S/N`);
  }
  totalHuevosDescartados = cantidadTotalHuevos - (cantidadHuevosXl + cantidadHuevosL + cantidadHuevosM);
  porcentajeHuevosXl = (cantidadHuevosXl / cantidadTotalHuevos) * 100;
  porcentajeHuevosL = (cantidadHuevosL / cantidadTotalHuevos) * 100;
  porcentajeHuevosM = (cantidadHuevosM / cantidadTotalHuevos) * 100;
  console.log(`Cantidad total de Huevos: ${cantidadTotalHuevos}`);
  console.log(`Cantidad total de Huevos XL: ${cantidadHuevosXl}`);
  console.log(`Cantidad total de Huevos L: ${cantidadHuevosL}`);
  console.log(`Cantidad total de Huevos M: ${cantidadHuevosM}`);
  console.log(`Cantidad total de Huevos descartados: ${totalHuevosDescartados}`);
  console.log(`porcentaje de Huevos XL sobre el Total: ${porcentajeHuevosXl}`);
  console.log(`porcentaje de Huevos L sobre el Total: ${porcentajeHuevosL}`);
  console.log(`porcentaje de Huevos M sobre el Total: ${porcentajeHuevosM}`);
}