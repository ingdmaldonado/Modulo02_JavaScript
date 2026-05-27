/*Ejercicio Nro. 29:
Definir una arrow function que reciba una palabra y determine si contiene al menos dos letras “s”
(mayúsculas o minúsculas).
La función debe recorrer la palabra con un ciclo for, utilizando un contador o una bandera booleana.

Debe devolver true si se cumplen las dos apariciones y false en caso contrario.
No puede utilizar métodos como includes() o indexOf().
Nota: Debe devolver un boolean (true ó false). */


export const fnVerificarSS = (palabra) => {

    let contador = 0;

for (let i = 0; i < palabra.length; i++){

    let caracterAVerificar = palabra.charAt(i).toUpperCase();
    
    console.log(caracterAVerificar);

    if (caracterAVerificar === "S"){

        contador = contador + 1;

    }



}
    if (contador >= 2){

        return true;
    }
    else {
        return false;
    }
}
