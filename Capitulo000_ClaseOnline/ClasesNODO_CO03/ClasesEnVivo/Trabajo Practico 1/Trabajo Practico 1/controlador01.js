

/* Realizar un programa que permita el Ingreso de 2 (dos números) (A y B) utilizando variables y realice las
siguientes operaciones.
- Muestre la suma de ambos (A + B)
- Muestre la resta (A – B)
- Muestre el Producto de ambos (A * B)
- Muestre el Cociente entre ambos (A / B) 
*/

{
    let a = 0;
    let b  = 0;
    
    let suma = 0;
    let resta = 0;
    let producto = 0;
    let division = 0;
    
    a = Number(prompt("Por favor ingrese el primer valor"));
    
    console.log("El primer valor ingresado por el usuario",a);
    
    b = Number(prompt("Por favor ingrese el segundo valor"));
    
    console.log("El segundo valor ingreado por el usuario",b);
    
    console.log("Primer Valor Ingresado",a,"Segundo Valor Ingresado",b);
    
    
    suma = a + b;
    resta = a - b;
    producto = a*b;
    division = a/b;
    
    console.log("La suma de los valores ingresados es",suma);
    console.log("La resta de los valores ingresados es",resta);
    console.log("El producto de los valores ingresados es",producto);
    console.log("La division de los valores ingresados es",division);
    
    console.log(`La suma es ${suma}, La resta es ${resta}, El producto es ${producto}, La division es ${division}`);
}
