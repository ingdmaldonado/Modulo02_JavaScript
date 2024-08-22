
/*
    ESTRUCTURAS REPETITIVAS
*/

    console.log("Soy de BOCA - SOY TRIPLE CAMPEON DEL MUNDO");


    /* CICLO REPETITIVO FOR */

    /* 
        primer parametro es el índice ó iterador
        segundo parametro es la condición de permanencia dentro del ciclo
        tercer parametro es como irá creciendo ó decreciendo el iterador

    */

    let etiquetaDinamica = "";

    for(let iterador = 1; iterador <= 10;iterador = iterador + 1)
    {

        etiquetaDinamica = `<h1> hola soy la etiqueta ${iterador} </h1>`;

        console.log(etiquetaDinamica);
      
    }

    