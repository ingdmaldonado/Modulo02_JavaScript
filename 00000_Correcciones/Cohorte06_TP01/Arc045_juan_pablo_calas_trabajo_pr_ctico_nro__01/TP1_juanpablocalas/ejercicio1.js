/*
Ejercicio Nro. 01:
Realizar un programa que permita el Ingreso de 2 (dos números) (A y B) utilizando variables y realice las siguientes operaciones.
- Muestre la suma de ambos (A + B)
- Muestre la resta (A – B)
- Muestre el Producto de ambos (A * B)
- Muestre el Cociente entre ambos (A / B)
Nota: En este último caso, verificar que sucede cuando B es igual a cero. Que sucede con el programa
*/
{

    let VariableA = 0;
    let VariableB = 0;
    let ValorSuma = 0;
    let ValorResta = 0;
    let ValorProducto = 0;
    let ValorCociente = 0;

    VariableA = Number(prompt(`Ingrese Datos Variable A`));
    console.log(`El valor de la Variable A es: ${VariableA}`);
    
    VariableB = Number(prompt(`Ingrese Datos Variable B`));
    console.log(`El valor de la Variable B es: ${VariableB}`);

    ValorSuma = VariableA + VariableB;
    console.log(`El valor de la SUMA de las Variables A y Variable B es: ${ValorSuma}`);

    ValorResta = VariableA - VariableB;
    console.log(`El valor de la RESTA de las Variables A y Variable B es: ${ValorResta}`);

    ValorProducto = VariableA * VariableB;
    console.log(`El valor del PRODUCTO entre las Variables A y Variable B es: ${ValorProducto}`);

    if(VariableB !== 0)
        {
            ValorCociente = VariableA / VariableB;
            console.log(`El valor del COCIENTE entre las Variables A y Variable B es: ${ValorCociente}`);
        }
    else
        {
            console.log(`Cuando el Valor de la Variable es 0 No se puede efectuar Cociente`);
        }    
}