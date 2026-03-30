{
    let factLuz = Number(prompt("Ingrese su ultima factura de luz"));

    let factInternet = Number(prompt("ingrese ahora su ultima factura de Internet"));

    let factAgua = Number(prompt("Por último ingrese su factura de agua"));

    //porcentajes a futuro

    let incrementoLuz = ((factLuz * 12.5)/ 100) + factLuz;

    let incrementoInternet = ((factInternet * 7)/ 100) + factInternet;

    let incrementoAgua = ((factAgua * 3)/ 100) + factAgua;


    //lo previsto a futuro

    let TotalAFuturo = incrementoAgua + incrementoLuz + incrementoInternet;

    //mostrar por consola los resultados

    console.log(`El valor a pagar a futuro para la factura de la luz es de: ${incrementoLuz.toFixed(2)}`);
    console.log(`El valor a pagar a futuro para la factura de Internet es de: ${incrementoInternet.toFixed(2)}`);
    console.log(`El valor a pagar a futuro para la factura de agua es de: ${incrementoAgua.toFixed(2)}`);
    console.log(`Por último el total a pagar de todo es de: ${TotalAFuturo.toFixed(2)}`);
}