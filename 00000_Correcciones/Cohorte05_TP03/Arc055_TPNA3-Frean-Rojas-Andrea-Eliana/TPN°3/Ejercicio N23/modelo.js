/*Definir una arrow function que reciba una palabra y determine si contiene al menos dos letras “s”
(mayúsculas o minúsculas).
La función debe recorrer la palabra con un ciclo for, utilizando un contador o una bandera booleana.
Debe devolver true si se cumplen las dos apariciones y false en caso contrario.

No puede utilizar métodos como includes() o indexOf().
Nota: Debe devolver un boolean (true ó false).*/

export const contieneLetrasS=(palabra)=>{
    let contador=0;
    for(let i=0; i<palabra.length; i++){
        let caracter=palabra[i].toLowerCase();
        if(caracter==="s"){
            contador++;
        }
        // devuelve true si hay al menos 2 letras s.
        if(contador>=2){
            return true;
        }
    }
    // devuelve false si hay menos de 2 letras s.
    return false;
};