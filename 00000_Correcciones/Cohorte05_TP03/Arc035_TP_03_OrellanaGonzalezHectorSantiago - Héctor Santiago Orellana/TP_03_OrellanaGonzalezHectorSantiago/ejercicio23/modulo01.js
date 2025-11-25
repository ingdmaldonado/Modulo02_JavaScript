/*Ejercicio Nro. 23:
Definir una arrow function que reciba una palabra y determine si contiene al menos dos letras “s” (mayúsculas o minúsculas).
La función debe recorrer la palabra con un ciclo for, utilizando un contador o una bandera booleana.
Debe devolver true si se cumplen las dos apariciones y false en caso contrario.*/

/*declaración y definición de la arrow fuction*/
export const fncontidadS=(texto) =>
    
{
        
    let cantidadS =0; /* declaración y definicion de la Variable*/
    
    for(let i=0;i<texto.length;i++) /*iteraccion cona la cadena*/
   
     {
        let caracter=texto[i];/* aqui extraigo el caracter de la interacción*/
        /*bloque que me permite definir las consonantes*/
        

        if((caracter.toUpperCase()===`S`)) /* condicional del caracter asignado en la cadena*/
       
        {      
           
            cantidadS++; /*contador*/
                        
        }
        else
    
         {
            console.log(`Caracteres diferentes a "S"`) /*muestro por pantalla caracteres diferentes a "S"*/

         } 
       
     }   
    
        return cantidadS /* retorno del valor de la arrow fuction*/
   
    
};

   

       
