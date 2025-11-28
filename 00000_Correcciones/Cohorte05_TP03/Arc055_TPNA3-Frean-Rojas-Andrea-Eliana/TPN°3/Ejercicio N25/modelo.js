/*Definir una arrow function que reciba como parámetro una cadena de texto y determine si la misma no
contiene ningún dígito numérico (del 0 al 9).
La función debe recorrer la cadena carácter por carácter utilizando un ciclo for. Durante el recorrido, analizar
cada carácter y comprobar si se encuentra dentro del rango de los números '0' a '9'.
Si se detecta algún número, se debe interrumpir inmediatamente el bucle con break y devolver el valor
lógico false, ya que la cadena deja de cumplir la condición “no contiene números”.
En caso de recorrer la cadena completa sin encontrar ningún número, la función deberá devolver true.
Nota: Debe devolver un boolean (true ó false).*/

export const noContieneNumeros=(cadenaTexto)=>{ // Exporta la arrow function.
    let salida=true;
    // Recorre la cadena carácter por carácter.
    for(let i=0; i<cadenaTexto.length; i++){
        let caracter=cadenaTexto[i];
        // Verificamos si el carácter está entre '0' y '9'
        if((caracter>='0')&& (caracter<='9')){
            salida=false; // Si encuentra un número, la salida pasa a false.
            break; // Interrumpe el bucle porque ya no hace falta seguir buscando
        }
    }
    return salida; // Devuelve true si no se encontraron números, o false si sí había
};