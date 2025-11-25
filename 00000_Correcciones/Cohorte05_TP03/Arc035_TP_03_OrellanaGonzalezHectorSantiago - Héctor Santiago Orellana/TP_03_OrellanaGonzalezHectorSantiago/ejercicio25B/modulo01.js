/*Ejercicio Nro. 25:
Definir una arrow function que reciba como parámetro una cadena de texto y determine si la misma no contiene ningún dígito numérico (del 0 al 9).
La función debe recorrer la cadena carácter por carácter utilizando un ciclo for. Durante el recorrido, analizar cada carácter y comprobar si se encuentra dentro del rango de los números '0' a '9'.
Si se detecta algún número, se debe interrumpir inmediatamente el bucle con break y devolver el valor lógico false, ya que la cadena deja de cumplir la condición “no contiene números”.
En caso de recorrer la cadena completa sin encontrar ningún número, la función deberá devolver true.
Nota: Debe devolver un boolean (true ó false).*/


/*declaración y definición de la arrow fuction*/
export const fncodenaDeCaracteres=(texto) =>
    
{
    let cantidadDeCaracteres=0;/*definicion y declaracion de las variables*/
    

    for(let i=0;i<texto.length;i++) /*iteraccion cona la cadena*/

   
     {
        let caracter=texto[i];/* aqui extraigo el caracter de la interacción*/
        

                cantidadDeCaracteres++ /*cuento la cantidad de caracteres que se van ingresando*/
            {
                if ((caracter>=`0`)&&(caracter<=`9`))/*aqui pregunto que caracter ingresado cumple con la condición*/
                {
                    return false; /* empleo de variable boolean para derminar la condicion de rechazo o aceptación*/
                } 
                else 
                {
                   return true ; /* empleo de variable boolean para derminar la condicion de rechazo o aceptación*/
                }       

          
         }
              
       
     }   
    
        return cantidadDeCaracteres; /* retorno del valor de la arrow fuction*/
   
    
};

   

       
