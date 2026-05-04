
/* 
Ejercicio Nro. 29: 
Definir una arrow function que reciba una palabra y determine si contiene al menos dos letras “s” 
(mayúsculas o minúsculas). 
La función debe recorrer la palabra con un ciclo for, utilizando un contador o una bandera booleana. 
Debe devolver true si se cumplen las dos apariciones y false en caso contrario. 
No puede utilizar métodos como includes() o indexOf(). 
Nota: Debe devolver un boolean (true ó false).
*/

export const fnComprobarLetraS = (cadenaTexto) => {
    
    let cantLetraS = 0;
    
    //console.log(cadenaTexto.length); 

    for (let i = 0; i < cadenaTexto.length; i++) {
        
        //console.log(cadenaTexto[i]); 
        
        if ((cadenaTexto[i]==="s") || (cadenaTexto[i]==="S")) {
            cantLetraS++;
            //console.log(cantLetraS); 
        }
        
    }

    return cantLetraS>=2?true:false;
};
