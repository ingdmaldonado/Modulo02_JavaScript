{
 /*Realizar un programa que permita introducir un valor (X) y determinar si el mismo es PAR ó IMPAR*/
let introducirNumero = 0;
 introducirNumero = Number(prompt("Ingrese un número."));
            
if(introducirNumero % 2 === 0){
console.log(`El número ${introducirNumero} es par.`);}
else{
console.log(`El número ${introducirNumero} es impar.`);}
}
    
// CÁLCULO DE DESCUENTO (tope máximo 45.000)// 
let totalCompra = Number(prompt("Ingrese el total de la compra:"));
let descuento = (totalCompra * 35)/100 >= 45000 ? 45000 : (totalCompra * 35)/100;
 console.log(`El descuento calculado es: ${descuento}`);
 console.log(`El total a pagar con descuento es: ${totalCompra - descuento}`);