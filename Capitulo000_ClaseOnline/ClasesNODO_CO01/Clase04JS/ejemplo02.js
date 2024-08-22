
/* 

    Si la variable cantidad es mayor o igual a 10, vamos a mostrar un
    mensaje que diga que Ud. llego al TOPE MÁXIMO DE PUNTAJE.




*/

    let puntajeLeido = 0;

    puntajeLeido = Number(prompt("Ingrese el puntaje obtenido"));

    let resultadoMensaje = "";

    if ((puntajeLeido >=0) && (puntajeLeido <= 10))
    {
        resultadoMensaje = `puntaje valido`;
    }
    else
    {
        resultadoMensaje = `puntaje invalido`;
    }

    console.log(resultadoMensaje);

    /* este ejemplo sería con un operador ternario */


    let resultadoMensaje2 = "";
    resultadoMensaje2 = puntajeLeido >=0 && puntajeLeido <=10 ? 'puntaje valido':'puntaje invalido';


