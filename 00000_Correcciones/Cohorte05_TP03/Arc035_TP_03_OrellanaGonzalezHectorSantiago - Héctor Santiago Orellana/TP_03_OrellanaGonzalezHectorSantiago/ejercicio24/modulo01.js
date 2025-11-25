/*Ejercicio Nro. 24:
Definir una arrow function que reciba como parámetro una cadena de texto y determine si la misma contiene al menos tres espacios en blanco.
La función debe recorrer la cadena carácter por carácter utilizando un ciclo for.
Durante el recorrido, deberá contar la cantidad de espacios que se encuentren.
En el momento en que se detecte el tercer espacio en blanco, la función debe interrumpir inmediatamente el ciclo mediante la instrucción break y devolver el valor lógico true.
Si al finalizar el recorrido completo no se encontraron tres espacios, la función debe devolver false.
Nota: Debe devolver un boolean (true ó false).*/

export const fncantidadEspacio=(texto) =>
    
{
        
    let cantadorEspacio =0; /* declaración y definicion de la Variable*/
    
    for(let i=0;i<texto.length;i++) /*iteraccion cona la cadena*/
   
     {
        let caracter=texto[i];/* aqui extraigo el caracter de la interacción*/
        /*bloque que me permite definir las consonantes*/
       
        if((caracter.toUpperCase()===" ")) /* condicional del caracter asignado en la cadena*/
        
       {
         cantadorEspacio++ /* contador de espacios incrementando en 1*/
        
         if(cantadorEspacio===3) /*aqui estableco la condición de salidad*/
         {
            return true; /* aqui se cumple la condicion de salida y retorno un valor true*/
         }

       }

       console.log(`la cadena ingresada tiene cantidad de espacio ${cantadorEspacio} `);             
        
       
     }   
    
        return cantadorEspacio /* retorno del valor de la arrow fuction*/
   
    
};

   

       
