
{

    /* Ejercicios 32,33 y 34 y 35 */

    let mensajeDeTexto = ""; // declaro una variable string y la inicializo

    mensajeDeTexto = prompt("Ingrese una cadena de texto");

    let caracterLeido = ''; // declaro una variable string que me permitira almacenar los caracteres uno a uno
    
    /* declare e inicialicé los contadores */
    let contadorDeLetrasA = 0;
    let contadorDeLetrasE = 0;
    let contadorDeLetrasI = 0;
    let contadorDeLetrasO = 0;
    let contadorDeLetrasU = 0;

    /* declare e inicialicé el contador total */
    let contadorDeVocales = 0;

    /* utilizando el metodo charAt para mostrar
    un caracter específico de una cadena */

    console.log(mensajeDeTexto.charAt(0)); // muestro el que se encuentra en la posición 0
    console.log(mensajeDeTexto.charAt(1)); // en la posicion 1
    console.log(mensajeDeTexto.charAt(2)); // en la posición 2

    // aqui utilizo el metodo lenght que ingles significa largo = longitud
    console.log(`El largo de la cadena es ${mensajeDeTexto.length}`);

    // es hacer una estructura repetitiva que recorra la cadena //
    for(let j = 0;j < mensajeDeTexto.length;j++)
    {

        /* Recorrido ó algunos le dice iteración */
        caracterLeido = mensajeDeTexto.charAt(j); // aqui voy sacando caracter a caracter

        /* si el caracter leido en el paso anterior es una a minuscula o mayuscula */
        if((caracterLeido === 'a') || (caracterLeido === 'A'))
        {
            contadorDeLetrasA++; // incremento en 1 el contador de letras a 
        }

        /* si el caracter leido en el paso anterior es una e minuscula o mayuscula */
        if((caracterLeido === 'e') || (caracterLeido === 'E'))
        {
            contadorDeLetrasE++; // incremento en 1 el contador de letras a 
        }

        /* si el caracter leido en el paso anterior es una i minuscula o mayuscula */
        if((caracterLeido === 'i') || (caracterLeido === 'I'))
        {
            contadorDeLetrasI++; // incremento en 1 el contador de letras a 
        }

         /* si el caracter leido en el paso anterior es una i minuscula o mayuscula */
         if((caracterLeido === 'o') || (caracterLeido === 'O'))
        {
            contadorDeLetrasO++; // incremento en 1 el contador de letras a 
        }

        /* si el caracter leido en el paso anterior es una i minuscula o mayuscula */
        if((caracterLeido === 'u') || (caracterLeido === 'U'))
        {
            contadorDeLetrasU++; // incremento en 1 el contador de letras a 
        }



        console.log(`El Caracter que se encuentra en la posición ${j} es igual a ${caracterLeido}`);
    }


    console.log(`La cantidad de vocales a es igual a ${contadorDeLetrasA}`);
    console.log(`La cantidad de vocales a es igual e ${contadorDeLetrasE}`);
    console.log(`La cantidad de vocales a es igual i ${contadorDeLetrasI}`);
    console.log(`La cantidad de vocales a es igual o ${contadorDeLetrasO}`);
    console.log(`La cantidad de vocales a es igual u ${contadorDeLetrasU}`);

    contadorDeVocales = contadorDeLetrasA + contadorDeLetrasE + contadorDeLetrasI + contadorDeLetrasO + contadorDeLetrasU;

    console.log(`la cantidad total de VOCALES es igual a ${contadorDeVocales}`);

    if(contadorDeLetrasA > contadorDeLetrasE)
    {
        console.log(`las vocales A = ${contadorDeLetrasA} aparecieron mas veces que las vocales E = ${contadorDeLetrasE}`);
    }
    else
    {
        if(contadorDeLetrasA < contadorDeLetrasE)
        {
            console.log(`las vocales A = ${contadorDeLetrasA} aparecieron menos veces que las vocales E = ${contadorDeLetrasE}`);
        }
        else
        {
            console.log(`las vocales A = ${contadorDeLetrasA} aparecieron igual de veces que las vocales E = ${contadorDeLetrasE}`);
        }
    }


    console.log(mensajeDeTexto);


}