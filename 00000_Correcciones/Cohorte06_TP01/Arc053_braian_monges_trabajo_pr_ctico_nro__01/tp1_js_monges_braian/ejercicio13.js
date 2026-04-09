/*Ejercicio Nro. 13*/

{
    let rubro = "";
    let importeCompra = 0;
    let descuento = 0;
    let porcentaje = 0;
    let tope = 0;
    let importeFinal = 0;

    rubro = prompt(`ingrese rubro: vestimenta, perfumeria, libreria, electrodomesticos o calzado`);
    importeCompra = Number(prompt(`ingrese importe de la compra`));

    if(rubro == "vestimenta")
    {
        porcentaje = 20;
        tope = 80000;
    }
    else if(rubro == "perfumeria")
    {
        porcentaje = 20;
        tope = 80000;
    }
    else if(rubro == "libreria")
    {
        porcentaje = 30;
        tope = 90000;
    }
    else if(rubro == "electrodomesticos")
    {
        porcentaje = 15;
        tope = 70000;
    }
    else if(rubro == "calzado")
    {
        porcentaje = 20;
        tope = 80000;
    }
    else
    {
        console.log(`rubro incorrecto`);
    }

    descuento = (importeCompra * porcentaje) / 100;

    if(descuento > tope)
    {
        descuento = tope;
    }

    importeFinal = importeCompra - descuento;

    console.log(`rubro: ${rubro}`);
    console.log(`importe de la compra: ${importeCompra}`);
    console.log(`descuento aplicado: ${descuento}`);
    console.log(`importe final a pagar: ${importeFinal}`);
}