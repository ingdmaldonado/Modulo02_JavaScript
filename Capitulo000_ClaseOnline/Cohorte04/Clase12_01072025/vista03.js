

window.onload = function()
{
    console.log(`this aplication is running`);

    const idNumero1 = document.querySelector("#idNumero1");
    const idNumero2 = document.querySelector("#idNumero2");
    const idBtnSuma = document.querySelector("#idBtnSuma");
    const idResultado = document.querySelector("#idResultado");

    console.log(idNumero1);
    console.log(idNumero2);
    console.log(idBtnSuma);
    console.log(idResultado);

    // delegando el onclick del boton en una función. funcion anonima
    idBtnSuma.onclick = function()
    {
        console.log(`me estan haciendo click`);

        let n1 = Number(idNumero1.value);
        let n2 = Number(idNumero2.value);

        let resultado = n1 + n2;

        console.log(`Num 1 ${n1} Num 2 ${n2} resultado: ${resultado}`);

        /* cuando yo quiero escribir en una
        etiqueta de salida. (NO SON INPUT)
        tengo una propiedad común a todas
        que me permite escribir texto o una
        cadena de texto 
        
        <etiqueta> textContent aqui </etiqueta>
        
        */

        idResultado.textContent = `Num 1 ${n1} Num 2 ${n2} resultado suma: ${resultado}`;

    }



}