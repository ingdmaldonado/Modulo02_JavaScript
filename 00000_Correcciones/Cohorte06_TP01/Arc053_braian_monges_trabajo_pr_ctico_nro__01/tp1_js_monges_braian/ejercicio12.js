/*Ejercicio Nro. 12*/

{
    let diaDeCompra = "";
    let importeDeCompra = 0;
    let reintegro = 0;
    let topeReintegro = 80000;
    let importeFinal = 0;

    diaDeCompra = prompt(`ingrese el dia de la compra`);
    importeDeCompra = Number(prompt(`ingrese el importe de la compra`));

    if(diaDeCompra == "viernes" || diaDeCompra == "sabado" || diaDeCompra == "domingo")
    {
        reintegro = (importeDeCompra * 50) / 100;

        if(reintegro > topeReintegro)
        {
            reintegro = topeReintegro;
        }

        importeFinal = importeDeCompra - reintegro;
    }
    else
    {
        console.log(`no corresponde beneficio`);
        reintegro = 0;
        importeFinal = importeDeCompra;
    }

    console.log(`dia de compra: ${diaDeCompra}`);
    console.log(`importe de compra: ${importeDeCompra}`);
    console.log(`reintegro obtenido: ${reintegro}`);
    console.log(`importe final pagado: ${importeFinal}`);
}