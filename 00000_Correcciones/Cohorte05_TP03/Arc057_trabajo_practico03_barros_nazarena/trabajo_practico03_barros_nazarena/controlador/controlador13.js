
/*
Ejercicio Nro. 13:
Realizar una arrow function que reciba dos parámetros de entrada. 
El parámetro 1 será el importe de compra de un producto, el segundo será el margen de ganancia que se aplicará sobre ese producto, la función
debe retornar el precio de venta que será igual a aplicarle el % de margen de ganancia. La función debe retornar
el precio de venta (sin impuestos).
Nota: Debe devolver un número.
*/

// Valores de ejemplo simulando una carga del usuario
const costoEjemplo = 1500;
const gananciaEjemplo = 30;

const precioFinal = calcularPrecio(costoEjemplo, gananciaEjemplo);

console.log("Costo base:", costoEjemplo);
console.log("Ganancia (%):", gananciaEjemplo);
console.log("Precio final del artículo: $" + precioFinal.toFixed(2));