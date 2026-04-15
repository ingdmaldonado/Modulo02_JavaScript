/*Realizar un programa que permita el Ingreso de 2 (dos números) (A y B) utilizando variables y realice las
siguientes operaciones.
- Muestre la suma de ambos (A + B)
- Muestre la resta (A – B)
- Muestre el Producto de ambos (A * B)
- Muestre el Cociente entre ambos (A / B)*/
{
let A = 0; 
    A = Number(prompt('Ingrese el valor de A'));

let B = 0;
    B = Number(prompt('Ingrese el valor de B'));

    let suma = (A + B);
         
    let resta = (A-B);
          
    let producto = (A*B);
           

if (B !== 0)
{
    let division = (A/B);
        console.log ('La division', A/B);       
} 
else
{
    console.log ('La Division no es Posible');
}   
    console.log (`La suma es ${suma}, la resta es ${resta}, producto es ${producto}.-`) 

}
