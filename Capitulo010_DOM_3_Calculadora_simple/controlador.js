

/* este es el evento principal. digamos que determina cuando 
la página esta completamente cargada */
window.onload = function() 
{
    // mensaje por consola
    console.log("La pagina esta cargada"); 

    /* creo una variable y lo vinculo al elemento HTML cuyo 
    id es el que le pasamos entre comillas */
    let idTxtValor1 = document.getElementById("idTxtValor1");

    /* creo una variable y lo vinculo al elemento HTML cuyo 
    id es el que le pasamos entre comillas */
    let idTxtValor2 = document.getElementById("idTxtValor2");

    let idBtnSumar = document.getElementById("idBtnSumar");

    let idBtnRestar = document.getElementById("idBtnRestar");

    let idResultadoSuma = document.getElementById("idResultadoSuma");

    let idResultadoResta = document.getElementById("idResultadoResta");

    // VALORES NULOS //

    /* aqui aprovecho de crear una variable 
    y apuntar a algo que no existe en el DOM */

    let variableQueDevolveraNULL = document.getElementById("cajaTextoINEXISTENTE"); 

    console.log(idTxtValor1);
    console.log(idTxtValor2);
    console.log(variableQueDevolveraNULL);
    console.log(idBtnSumar);
    console.log(idBtnRestar);
    console.log(idResultadoSuma);
    console.log(idResultadoResta);
    
    idBtnSumar.onclick = function()
    {

        /* obtengo los valores que tienen 
        los input en el documento HTML */

        /* debo convertir los valores introducidos a NUMBER */
        let numero1 = Number(idTxtValor1.value);
        let numero2 = Number(idTxtValor2.value);

        /* creo otra variable que se llame resultadoSuma
        donde realizaré las operación de suma entre
        las variables numero1 y numero2.
        */
        let resultadoSuma = numero1 + numero2;

        /* muestro por consola los 
        valores por separado y
        también el del resultado de la Suma */

        console.log(numero1);
        console.log(numero2);
        console.log(resultadoSuma);

        /* modifico el DOM, específicamente la etiqueta
        que contendrá la suma y donde mostraré
        el resultado de la Suma */

        idResultadoSuma.textContent = `La Suma es igual a ${resultadoSuma}`;
       
    }

    idBtnRestar.onclick = function()
    {
         /* obtengo los valores que tienen 
        los input en el documento HTML */

        let numero1 = Number(idTxtValor1.value);
        let numero2 = Number(idTxtValor2.value);

        /* realizo la operación de resta */
        let resultadoResta = numero1 - numero2;

        /* muestro los resultados */
        console.log(numero1);
        console.log(numero2);
        console.log(resultadoResta);
 
        /* modifico el DOM, específicamente la etiqueta
        idResultadoResta para actualizarle el mensaje
        */
       
        idResultadoResta.textContent = `La Diferencia es igual a ${resultadoResta}`;

    }   

}