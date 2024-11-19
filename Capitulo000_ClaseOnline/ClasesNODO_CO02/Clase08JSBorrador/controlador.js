

function fnSumarDosNumeros(x1,x2)
{
    return (x1 + x2);
}

window.onload = function()
{

    console.log("corriendo");

    const idNumero1 = document.querySelector("#idNumero1");
    const idNumero2 = document.querySelector("#idNumero2");
    const idBtnSuma = document.querySelector("#idBtnSuma");
    const idResultado = document.querySelector("#idResultado");

    console.log(idNumero1);
    console.log(idNumero2);
    console.log(idBtnSuma);

    idBtnSuma.onclick = function()
    {
        let numero1Ingresado = Number(idNumero1.value);
        let numero2Ingresado = Number(idNumero2.value);

        console.log(numero1Ingresado,numero2Ingresado);

        let sumaDeDos = 0;
        sumaDeDos = fnSumarDosNumeros(numero1Ingresado,numero2Ingresado);

        idResultado.textContent = sumaDeDos;


        alert("me están haciendo click");
    }

}