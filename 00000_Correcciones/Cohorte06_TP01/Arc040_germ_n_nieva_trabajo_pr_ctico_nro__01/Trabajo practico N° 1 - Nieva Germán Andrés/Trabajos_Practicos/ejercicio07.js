/*
Ejercicio Nro. 07: Estructuras Condicionales (if/else)

Un comercio que vende bolsas de alimentos para mascotas trabaja y comercializa
unicamente con tres grandes marcas de alimentos para perros, lo que le permite
trabajar con descuentos muy interesantes para sus clientes. Las marcas con las
que trabaja son:

+--------+--------------------+---------------+----------------------+---------------+
| Codigo | Descripcion        | x unidad      | cantidad >= 5 y <=10 | cantidad >=11 |
+--------+--------------------+---------------+----------------------+---------------+
| 1      | Dogui x 21 kil     | $ 38.000,00   | $ 36.000,00          | $ 34.000,00   |
| 2      | Tiernitos x 21 kil | $ 31.000,00   | $ 29.000,00          | $ 27.000,00   |
| 3      | Dogpro x 21 kil    | $ 46.000,00   | $ 44.000,00          | $ 42.000,00   |
+--------+--------------------+---------------+----------------------+---------------+

Realice un programa en JavaScript que permita ingresar el codigo del producto y
la cantidad de bolsas a comprar, y que solo determine el importe total a pagar.
*/
let codigo= Number(prompt("ingrese el codigo del producto: 1. Dogui x 21 kil, 2. Tiernitos x 21 kil, 3. Dogpro x 21 kil"));
let cantidad= Number(prompt("ingrese la cantidad de bolsas a comprar:"));
let marca="";
let total=0;
switch (codigo){
    case 1:
        marca="Dogui";
        if (cantidad >= 5 && cantidad <= 10){
            total= cantidad*36000;
        }
        else if (cantidad >= 11){
            total= cantidad*34000;
        }
        else{
            total= cantidad*38000;
        }
        break;
    case 2:
        marca="Tiernitos";
        if (cantidad >= 5 && cantidad <= 10){
            total= cantidad*29000;
        }
        else if (cantidad >= 11){
            total= cantidad*27000;
        }
        else{
            total= cantidad*31000;
        }
        break;
    case 3:
        marca="Dogpro";
        if (cantidad >= 5 && cantidad <= 10){
            total= cantidad*44000;
        }
        else if (cantidad >= 11){
            total= cantidad*42000;
        }
        else{
            total= cantidad*46000;
        }
        break;
    default:
        total= 0;
        alert("Codigo de producto no valido");
}
console.log(`Usted compro ${cantidad} bolsas de ${marca} con codigo ${codigo}, por haber comprado esta cantidad obtiene un descuento y el total a pagar sera de: $${total}`);