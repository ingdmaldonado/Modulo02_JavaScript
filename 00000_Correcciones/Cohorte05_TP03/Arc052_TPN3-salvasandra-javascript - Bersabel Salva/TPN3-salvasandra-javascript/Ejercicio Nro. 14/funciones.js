/* /Ejercicio Nro. 13:
Realizar una arrow function que reciba dos parámetros de entrada. El parámetro 1 será el importe de compra de un producto, el segundo será el margen de ganancia que se aplicará sobre ese producto, la función debe retornar el precio de venta que será igual a aplicarle el % de margen de ganancia. La función debe retornar el precio de venta (sin impuestos).
Nota: Debe devolver un número
*/
export const precioDeVenta = (precioCosto, margen) => {
    // Aquí calculo el % de ganancia
    let calculo = (precioCosto * margen) / 100;
    // Aquí al precio final le sumo el % de ganancia
    let precioFinal = precioCosto + calculo;
    // Retornamos el valor
    return precioFinal;
  };
  
/* Ejercicio Nro. 14:
Realizar una arrow function que reciba como parámetro las 3 notas que obtuvo un alumno en los distintos trabajos prácticos de una materia y que a partir de esas notas obtenga el promedio de las mismas
Nota: Debe devolver un número*/

export const promedioDeTres = (nota1, nota2, nota3) => {
    return (nota1 + nota2 + nota3) / 3;
  };