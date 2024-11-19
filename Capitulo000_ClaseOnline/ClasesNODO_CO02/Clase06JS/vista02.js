
/* analizar un mensaje o cadena de texto
y contabilizar la cantidad de vocales
que tiene la cadena */

{
    console.log("funcionando");

    let mensajeDeTexto = "hola";

    console.log(mensajeDeTexto);

    /* mostrando los caracteres de forma individual de la cadena */

    /*
    console.log(mensajeDeTexto.charAt(0));
    console.log(mensajeDeTexto.charAt(1));
    console.log(mensajeDeTexto.charAt(2));
    console.log(mensajeDeTexto.charAt(3));
    */

    // aqui estoy mostrando el largo de la cadena
    console.log(mensajeDeTexto.length);

    // aqui estoy creando dos variables contadoras ante del ciclo iterativo
    let contadorDeVocales = 0;
    let contadorDeNOVocales = 0;

    /* aqui estoy realizando un ciclo iterativo con for. recorriendo
    el largo de la cadena */

    for(let iterador = 0; iterador < mensajeDeTexto.length;iterador++)
    {
        /* voy a medida que recorro, sacando el caracter
        que se encuentra en la ubicacion iterador */
        let caracter = mensajeDeTexto.charAt(iterador);

        /* una vez que saque el caracter. 
        determino si es una vocal */
        if((caracter === 'a') || (caracter === 'e') || (caracter === 'i') || (caracter === 'o') || (caracter === 'u'))
        {
            // si es una vocal cuento
            contadorDeVocales++;
        }
        else
        {
            // cuento una NO VOCAL
            contadorDeNOVocales++;
        }
        /* mostrando los caracteres que voy sacando en el recorrido
        de la cadena */
        console.log(caracter);
    }

    /* ATENCION !!!. AL FINALIZAR EL RECORRIDO
    LO QUE HAGO ES ANALIZAR LOS DOS CONTADORES
    PARA DETERMINAR SI HAY MAS VOCALES QUE CONSONANTES
    */

    if(contadorDeVocales > contadorDeNOVocales)
    {
        console.log(`La frase tiene más vocales que consonantes`);
    }
    else
    {
        if(contadorDeVocales < contadorDeNOVocales)
        {
            console.log(`La frase tiene más consonantes que vocales`);
        }
        else
        {
            console.log(`la frase tiene la misma cantidad de vocales que consonantes`);
        }
    }
}