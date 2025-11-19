/*Definir una arrow function que reciba como parámetro una cadena de texto y determine si la misma
contiene al menos tres espacios en blanco.
La función debe recorrer la cadena carácter por carácter utilizando un ciclo for.
Durante el recorrido, deberá contar la cantidad de espacios que se encuentren.
En el momento en que se detecte el tercer espacio en blanco, la función debe interrumpir inmediatamente el
ciclo mediante la instrucción break y devolver el valor lógico true.
Si al finalizar el recorrido completo no se encontraron tres espacios, la función debe devolver false.

Nota: Debe devolver un boolean (true ó false). */

export const fnAnalizarEspacios = (texto)=>{

    let contadorDeEspacios = 0; 

    let salida = false;

    for(let i = 0; i < texto.length;i++)
    {
        let caracter = texto[i]; 
 
        if(caracter === ' ')
        {
            contadorDeEspacios = contadorDeEspacios + 1;

            if(contadorDeEspacios === 3) //si contadorDeEspacios no es igual a 3 no entra al break y vuelve a contar. Una vez sea igual a 3 ENTRA AL BREAK
            {
               salida = true; //Ahora la salida en vez de falsa va a ser verdadera y..
               break; //aqui va a romper el contador de espacios
            }
        }
        console.log(`caracter ${i} - ${caracter}`);
    };
    
    
    console.log(`La cadena ingresada tiene ${contadorDeEspacios}`);
    console.log(salida);//Como podemos ver por consola la primera cadena/string nos devuelve o muestra TRUE ya que escapa cumpliendo las condiciones de la igualdad, mientra que la segunda FALSE

    return salida; //retorna el valor booleano, que es lo que nos pide el ejercicio(Siempre return al final de la funcion)

};