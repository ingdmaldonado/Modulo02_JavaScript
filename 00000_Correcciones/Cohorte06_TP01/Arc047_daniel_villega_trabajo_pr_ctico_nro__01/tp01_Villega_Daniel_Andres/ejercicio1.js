/*Ejercicio Nro. 01:
Realizar un programa que permita el Ingreso de 2 (dos números) (A y B) utilizando variables y realice las
siguientes operaciones.
- Muestre la suma de ambos (A + B)
- Muestre la resta (A – B)
- Muestre el Producto de ambos (A * B)
- Muestre el Cociente entre ambos (A / B)
Nota: En este último caso, verificar que sucede cuando B es igual a cero. Que sucede con el programa*/

{
    let a = 0 ;

    a = Number(prompt(`ingresar un numero`));

    let b = 0;

    b = Number(prompt(`ingresar un numero`));

     suma = (a+b);

     resta = (a-b);

    producto = (a*b);

    if (b !== 0 )
    {
         division = (a/b);

        console.log (`la division es posible`);
    }
    else
        {
            console.log (`la divicion no es posible`);
        }

    console.log (`la suma es ${suma} la resta es ${resta} el producto es ${producto} la division es ${division}`);

}
