
/* 

dada tres cadenas. hay que
determinar que todo el proceso
sea válido. para ello.

la cadena 1 debe comenzar con una vocal=>BANDERA1

la cadena 2 debe contener al menos 3 letras "R" =>BANDERA2

la cadena 3 debe tener al menos 1 letra "A" y
ninguna letra "B". => BANDERA3

*/

{
   

    let cadena1 = "RTENCION COMO ESTAS";
  
    let primerCaracter = cadena1.charAt(0);

    /******* aqui hice la logica de la bandera 1 */

    let bandera1 = false;

    console.log(primerCaracter);

    if((primerCaracter === "A") || (primerCaracter === "E") ||(primerCaracter === "I") || (primerCaracter === "O") || (primerCaracter === "U"))
    {
        bandera1 = true;
    }

    console.log(bandera1);

    /******* aqui hacemos la logica de la bandera 2 */
    let cadena2 = "TKSLKS RTRLSLSLSLSRRRRRRR";

    let bandera2 = false;

    let contadorDeR = 0;
    for(let i = 0; i < cadena2.length;i++)
    {
        caracter = cadena2.charAt(i);

        console.log(caracter);

        if(caracter === "R")
        {
            contadorDeR = contadorDeR + 1;
            if(contadorDeR === 3)
            {
                bandera2 = true;
            }
        }
    }

    console.log(contadorDeR);


    /* primer caracter debe ser una vocal */

    if((bandera1)&&(bandera2))
    {
        console.log("se cumple la condición del enunciado")
    }



}