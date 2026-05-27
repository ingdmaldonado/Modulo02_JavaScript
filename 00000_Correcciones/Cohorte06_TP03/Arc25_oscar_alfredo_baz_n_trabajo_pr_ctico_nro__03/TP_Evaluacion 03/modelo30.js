/* Ejercicio Nro. 30:
Definir una arrow function que reciba como parámetro una cadena de texto y determine si la misma contiene al menos tres espacios en blanco.
La función debe recorrer la cadena carácter por carácter utilizando un ciclo for.
Durante el recorrido, deberá contar la cantidad de espacios que se encuentren.
En el momento en que se detecte el tercer espacio en blanco, la función debe interrumpir inmediatamente el ciclo mediante la instrucción break y devolver el valor lógico true.
Si al finalizar el recorrido completo no se encontraron tres espacios, la función debe devolver false.
Nota: Debe devolver un boolean (true ó false).*/

export const fnVerificarEspBlanco = (cadenaTexto) => {

    let contadorEspacios = 0;

    for (let i = 0; i < cadenaTexto.length; i++){

        let caracterActual = cadenaTexto.charAt (i);

        console.log(caracterActual);


        if (caracterActual === " "){

            contadorEspacios = contadorEspacios + 1;

            console.log(`Cantidad de espacios encontrados en el texto: ${contadorEspacios}`);
            

            if (contadorEspacios === 3){

                break;

            }
        }
}
if (contadorEspacios === 3){

    return true;    

}
else {
    return false;       
}
}