/*Ejercicio Nro. 01:
Realizar un programa que permita el Ingreso de 2 (dos números) (A y B) utilizando variables y realice las
siguientes operaciones.
- Muestre la suma de ambos (A + B)
- Muestre la resta (A – B)
- Muestre el Producto de ambos (A * B)
- Muestre el Cociente entre ambos (A / B)
Nota: En este último caso, verificar que sucede cuando B es igual a cero. Que sucede con el programa*/

{
    let a = 0;
    let b = 0;

    a = Number(prompt(`Por Favor ingrese el primer numero`));
    b = Number(prompt(`Por Favor ingrese el segundo numero`));

    console.log(a);
    console.log(b);

    let suma =  a + b;
    let resta = a - b;
    let multiplicacion = a * b;
    let division = a / b;

    console.log(`El resultado de la suma es: ${suma}`);
    console.log(`El resultado de la resta es: ${resta}`);
    console.log(`El resultado de la multiplicacion es: ${multiplicacion}`);
    


    if(b === 0)
    {
        console.log(`No se puede dividir por cero `);
    }
    else
    {
        division = a/b
        console.log(`El resultado de la divison es: ${division}`);
    }

}
