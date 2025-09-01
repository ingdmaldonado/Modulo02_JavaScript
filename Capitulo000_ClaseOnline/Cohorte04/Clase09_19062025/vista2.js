
/* momento1 => definición de la función 

    function
    el nombre de la funcion
    el parametro de entrada cerrado entre ()
    return 

*/

function calcularDescuentoAporteJubilatorio(sueldoBruto)
{
    // tiene que devolver el 11% del sueldo bruto
    let auxiliarDescuento = (sueldoBruto * 11)/100;

    return auxiliarDescuento;

}



{
    console.log(`la aplicación esta corriendo`);

    let sueldoBrutoAntonella = 1500000;

    let sueldoBrutoGuillermo = 2750000;

    let sueldoBrutoMario = 2000000;
    
    // invocacion 1 //
    let descuento1 = calcularDescuentoAporteJubilatorio(sueldoBrutoAntonella);
    console.log(descuento1);

    // invocacion 2 //
    let descuento2 = calcularDescuentoAporteJubilatorio(sueldoBrutoGuillermo);
    console.log(descuento2);

    // invocacion 3 //
    let descuento3 = calcularDescuentoAporteJubilatorio(sueldoBrutoMario);
    console.log(descuento3);

    // invocacion 4 //
    let descuento4 = calcularDescuentoAporteJubilatorio(12500000);
    console.log(descuento4);
    
    // invocacion 5 //
    let descuento5 = calcularDescuentoAporteJubilatorio(sueldoBrutoAntonella + sueldoBrutoGuillermo);
    console.log(descuento5);

}