

/* 
    delegación del evento onload
    a traves de una función
*/

window.onload = function()
{
    /* aqui en la primera parte voy a capturar, ó mejor
    dicho vicularme a los elementos HTML por medio del DOM
    y lo hago por medio de su identificador o atributo id */

    const idNumero1 = document.getElementById("idNumero1");
    console.log(idNumero1);

    const idNumero2 = document.getElementById("idNumero2");
    console.log(idNumero2);

    const idBtnSuma = document.getElementById("idBtnSuma");
    console.log(idBtnSuma);

    const idResultadoSuma = document.getElementById("idResultadoSuma");
    console.log(idResultadoSuma);

    // delegando en una función el evento click del boton suma //
    idBtnSuma.onclick = function()
    {
        let valorNumero1 = idNumero1.value;
        let valorNumero2 = idNumero2.value;
        let suma = 0;

        if(!isNaN(valorNumero1)) // si el numero1 es correcto
        {
            if(!isNaN(valorNumero2)) // si el numero2 es correcto
            {
                console.log("ambos numeros son correctos");

                suma = Number(valorNumero1) + Number(valorNumero2);

                console.log(suma);

                idResultadoSuma.textContent = `El Resultado de la Suma es: ${suma}`;


            }
            else
            {
                console.log("el numero 2 es incorrecto");
            }
        }
        else
        {
            console.log("el numero 1 es incorrecto");
        }


        console.log(valorNumero1,valorNumero2);


    }

    console.log("la aplicación esta cargada y corriendo");

}