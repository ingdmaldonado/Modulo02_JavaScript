
/* 

    banderas ó flags ó variables booleanas = true o false


    SHELL => 15% valor de la compra. si realizaste
    una compra en el mes.

*/

/*

    let sacoPrestamo = true;

    sacoPrestamo = false;

    let clientePagoPorAplicacion = true;

*/

/* vamos a recorrer una cadena de texto. buscando
y tratando de determinar si la cadena de texto
contiene una letra "F" ó "f"
*/

{
    let cadenaDeTexto = `estamos en la clase 10 de JS con banderas o variables booleanas`;

    // mostrando la cadena completa //
    console.log(cadenaDeTexto);

    // mostrar el largo que tiene esa cadena //
    console.log(cadenaDeTexto.length);

    /* mostrando como puedo quedarme con caracteres individuales
     de la cadena */

        let caracter1 = cadenaDeTexto.charAt(0);
        console.log(caracter1);

        let caracter2 = cadenaDeTexto.charAt(1);
        console.log(caracter2);

    /* ciclo repetitivo que me permita 
    recorrer la cadena caracter x caracter  */


    let encontreLetraF = false;

    for(let i = 0; i < cadenaDeTexto.length;i++)
    {
        /* aqui lo que hago es extraer el caracter 
        que se encuentra en la posicion "i" */

        let caracterExtraido = cadenaDeTexto.charAt(i);

        console.log(caracterExtraido);

        if((caracterExtraido === 'F') || (caracterExtraido === 'f'))
        {
            encontreLetraF = true; // esto es una variable booleana que sirve como flags ó bandera
            break;
        }

    }

    /* esto ocurre cuando salimos del ciclo repetitivo */

    if(encontreLetraF)
    { // lado verdadero o lado true
        console.log(`la Cadena si tiene una letra F ó f`);
    }
    else
    {// lado falso o false
        console.log(`la Cadena no tiene la letra F ó f`);
    }





}