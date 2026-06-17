
function CalcularCostoFinal(Capital,PagaEnvio,PagaIva)
{

    let CostoEnvio = 0;
    let CostoIva = 0;

    if(isNaN(Capital))
    {
        alert("El parametro Capital debe ser un numero");
        return 0;
    }

    if(typeof(PagaEnvio)!== Boolean)
    {
        alert("el parametro PagaEnvio debe ser booleano");
        return 0;
    }

    if (typeof(PagaIva) !== Boolean)
    {
        alert("el parametro PagaIva debe ser booleano");
        return 0;
    }

    if (PagaEnvio)
    {
        CostoEnvio = Capital * 10/100;
    }
    if (PagaIva)
    {
        CostoIva = Capital *21/100;
    }

    return (Capital + CostoEnvio + CostoIva);

}


window.onload = function()
{
    let idtxtValorDeclarado = document.getElementById("idtxtValorDeclarado");

    let idchkPagaEnvio = document.getElementById("idchkPagaEnvio");

    let idchkPagaIva = document.getElementById("idchkPagaIva");

    let btnCalcularCostoFinal = document.getElementById("btnCalcularCostoFinal");

    console.log(idtxtValorDeclarado,idchkPagaEnvio,idchkPagaIva);

    btnCalcularCostoFinal.onclick = function()
    {

        let ValorDeclarado = Number(idtxtValorDeclarado.value);

        console.log(ValorDeclarado);

        let R = CalcularCostoFinal(ValorDeclarado,idchkPagaEnvio.checked,idchkPagaIva.checked);

        let R2 = CalcularCostoFinal("MAMA",5,undefined);

     


    }


}