
{
    console.log(`la aplicación esta corriendo`);

    // aqui cree una cadena de texto //
    let cadenaDeTexto = `SALUDO aaaa A GUILLERMO PONCE HINCHA DE BOCA`;

    // aqui la mostre por consola //
    console.log(cadenaDeTexto);

    // aqui mostre el largo de la cadena //
    console.log(cadenaDeTexto.length);

    /* guardar en una varialbe el largo de la cadena */

    let largoDeCadena = cadenaDeTexto.length;
    console.log(`el largo de la cadena es ${largoDeCadena}`);

    /* aqui lo que estoy haciendo es sacar caracter x caracter
    en variables distintas */
    let caracter0 = cadenaDeTexto.charAt(0);
    let caracter1 = cadenaDeTexto.charAt(1);
    let caracter2 = cadenaDeTexto.charAt(2);

    // mostrando los caracteres extraidos //
    console.log(`El primer caracter es ${caracter0}`);
    console.log(`El segundo caracter es ${caracter1}`);
    console.log(`El tercer caracter es ${caracter2}`);

    /* voy a mostrar aqui como hacer un ciclo
    repetitivo que me permita recorrer o iterar
    una cadena de texto */

    let cantidadDeLetrasA = 0;

    for(let i = 0;i < cadenaDeTexto.length;i=i+1)
    {
        // aqui estoy extrayendo el caracter de la cadena //
        let caracterExtraido = cadenaDeTexto.charAt(i);

        // cada vez que estoy detectando una letra A la cuento
        if(caracterExtraido === 'A' || caracterExtraido === 'a')
        {
            cantidadDeLetrasA = cantidadDeLetrasA + 1;
        }

        console.log(`iteracion numero ${i} caracter ${caracterExtraido}`);
    }

    // aqui voy a mostrar la cantidad de letras A //

    console.log(`La Cantidad de letras A es ${cantidadDeLetrasA}`)

}