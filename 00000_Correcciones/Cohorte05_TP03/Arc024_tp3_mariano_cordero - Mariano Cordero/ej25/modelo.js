/* 
Definir una arrow function que reciba como parámetro una cadena de texto y determine si la misma no 
contiene ningún dígito numérico (del 0 al 9). 
La función debe recorrer la cadena carácter por carácter utilizando un ciclo for. Durante el recorrido, analizar 
cada carácter y comprobar si se encuentra dentro del rango de los números '0' a '9'. 
Si se detecta algún número, se debe interrumpir inmediatamente el bucle con break y devolver el valor 
lógico false, ya que la cadena deja de cumplir la condición “no contiene números”. 
En caso de recorrer la cadena completa sin encontrar ningún número, la función deberá devolver true. 
Nota: Debe devolver un boolean (true ó false).
*/

export const detectorDeNumeros = (texto) =>
{
    let salida = true;

    for(let i = 0; i <texto.length;i++ )
    {
        let caracter = texto[i];// con esta variable recorremos cada posicion del texto

        if( caracter === "0" || caracter === "1" || caracter === "2" || caracter === "3" || caracter === "4" || caracter === "5" || caracter === "6" || caracter === "7" || caracter === "8" || caracter === "9"  )
        {
            console.log("Aqui se detecto un número");
            salida = false;
            break; //Break rompe con el ciclo cortando todo el giro del bucle y haciendo que escape
        }

        console.log(`caracter ${i} - ${caracter}`);
    };

    console.log(salida);

    return salida;
};