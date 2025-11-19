/* 
    Definir una arrow function que reciba una palabra y determine si contiene al menos dos letras “s” 
(mayúsculas o minúsculas). 
La función debe recorrer la palabra con un ciclo for, utilizando un contador o una bandera booleana. 
Debe devolver true si se cumplen las dos apariciones y false en caso contrario. 
Diplomatura Universitaria en Desarrollo Web 
Full Stack con JavaScript  
Módulo: JavaScript 
No puede utilizar métodos como includes() o indexOf(). 
Nota: Debe devolver un boolean (true ó false). 
*/

export const extraerS = (palabra) => 
{
    let contadorDeSs = 0;
    let salida = false;

    for(let i = 0; i < palabra.length; i++)
    {
        
        let letra = palabra[i];

        if( letra === "s" || letra ==="S")
        {
            contadorDeSs = contadorDeSs + 1;

            if(contadorDeSs === 2)
            {   
                salida = true;
                break;
            }
        }
    }


    console.log(salida);

    return salida;
}