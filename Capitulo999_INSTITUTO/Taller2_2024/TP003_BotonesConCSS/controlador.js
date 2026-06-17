
window.onload = function() /* esto se produce al finalizar el renderizado */
{
    /* todo esto se produce una sola vez */

    console.log("la pagina esta cargada y lista para que el usuario trabaje");

    let txtButton1 = document.getElementById("txtButton1");
    let txtButton2 = document.getElementById("txtButton2");
    let txtButton3 = document.getElementById("txtButton3");
    let txtValorIngresado = document.getElementById("txtValorIngresado");

    console.log(txtButton1);
    console.log(txtButton2);
    console.log(txtButton3);
    console.log(txtValorIngresado);

    txtButton1.onclick = function()
    {
        let NumeroIngresado = txtValorIngresado.value;
        let NumeroPOSTA = 0;

        if(isNaN(NumeroIngresado)) /* Si no es un Numero */
        {
            console.log("che, el valor no es un numero");
        }
        else
        {
            NumeroPOSTA = Number(NumeroIngresado);
            let Resultado = NumeroPOSTA + 10;
            console.log(Resultado);
        }
    }

    txtButton2.onclick = function()
    {

    }

    txtButton3.onclick = function()
    {

    }

}