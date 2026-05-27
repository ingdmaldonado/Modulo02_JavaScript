/*Definir una arrow function que reciba como parámetro una cadena de texto y determine si la misma
contiene al menos tres espacios en blanco.
La función debe recorrer la cadena carácter por carácter utilizando un ciclo for.
Durante el recorrido, deberá contar la cantidad de espacios que se encuentren.
En el momento en que se detecte el tercer espacio en blanco, la función debe interrumpir inmediatamente el
ciclo mediante la instrucción break y devolver el valor lógico true.
Si al finalizar el recorrido completo no se encontraron tres espacios, la función debe devolver false.
Nota: Debe devolver un boolean (true ó false).*/


//Verificar si hay al menos 3 espacios en blanco//
export const tieneTresEspacios = (texto) => {
    
    let contadorEspacios = 0;

    // Recorremos el texto carácter por carácter
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === " ") {
            contadorEspacios++;
            
            // Si ya encontramos 3 espacios, salimos inmediatamente
            if (contadorEspacios >= 3) {
                return true;
            }
        }
    }
    
    // Si termina el recorrido y no llegam a 3//
    return false;
};