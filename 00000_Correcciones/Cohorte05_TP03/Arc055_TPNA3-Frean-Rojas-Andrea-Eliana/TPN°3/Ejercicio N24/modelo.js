/*Definir una arrow function que reciba como parámetro una cadena de texto y determine si la misma
contiene al menos tres espacios en blanco.
La función debe recorrer la cadena carácter por carácter utilizando un ciclo for.
Durante el recorrido, deberá contar la cantidad de espacios que se encuentren.
En el momento en que se detecte el tercer espacio en blanco, la función debe interrumpir inmediatamente el
ciclo mediante la instrucción break y devolver el valor lógico true.
Si al finalizar el recorrido completo no se encontraron tres espacios, la función debe devolver false.
Nota: Debe devolver un boolean (true ó false).*/

export const cantidadEspaciosEnBlancos=(cadenaTexto)=>{ // Exporta la arrow function.
    let contador=0;
    let salida=false;
    // Recorre la cadena carácter por carácter.
    for(let i=0; i<cadenaTexto.length; i++){
        let caracter=cadenaTexto[i];
        // Verifica si el carácter es un espacio en blanco.
        if(caracter===' '){
            contador++;
            // Si ya encontramos 3 espacios, cambia la salida a true y corta el ciclo.
            if(contador===3){
                salida=true;
                break;
            }
        }
    }
    return salida;  // Devuelve true si la cadena tiene al menos 3 espacios; si no, false
};