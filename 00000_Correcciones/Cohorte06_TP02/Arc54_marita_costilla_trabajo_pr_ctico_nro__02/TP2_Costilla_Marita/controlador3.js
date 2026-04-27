{

    //Amarok V6 - 65.000.000
    //TAOS - 56.000.000
    //Polo Nuevo - 47.000.000

    let vehiculo = 0;
    let dineroDisponible=0;
    let financiacion = 0;
    let finalPagar=0;

    vehiculo= Number(prompt(`Seleccione el Vehiculo de interes: 1- Amarok V6 , 2- TAOS, 3- Polo Nuevo`));
    const precio =  tipoDePrecio(vehiculo); //un poco inutil pero para que mostrara el precio antes de preguntar cuando tiene disponible para la compra
    dineroDisponible=Number(prompt(`Ingrese la cantidad de dinero disponible para la compra`));
    console.log(`DINERO DISPONIBLE: ${dineroDisponible}`)
    const posibilidad =posibilidadFinanciacion(precio, dineroDisponible);

    if (posibilidad===1)
    {
        financiacion=Number(prompt(`ELIGA LA FINANCIACION QUE DESEA: 12 cuotas- 9.9% Anual, 24 coutas-22% Anual, 36 cuotas-33% Anual `));
        finalPagar= calcularFinanciacion(precio,financiacion, dineroDisponible);
    } 

    console.log(`TOTAL A PAGAR POR MES : ${finalPagar}`)



}

function tipoDePrecio(vehiculo)
{
    switch(vehiculo)
    {
        case 1:
        {
            console.log(`VEHICULO: Amarok V6 - 65.000.000 `)
            return 65000000
            break;
        }
        case 2:
        {
            console.log(`VEHICULO: TAOS - 56.000.000 `)
            return 55000000   
            break;
        }
        case 3:
        {
            console.log(`VEHICULO: Polo Nuevo - 47.000.000`)
            return 47000000
            break;
            
        }
    }

}

function posibilidadFinanciacion(precio, dineroDisponible)
{
    if (dineroDisponible>((30*precio)/100) && dineroDisponible<precio)
    {
        console.log(`DINERO DISPONIBLE- Puede ralizar la compra`)
        return 1
    }else
    {
        console.log(`No puede realizar la compra`)
        return 2
    }
}

function calcularFinanciacion(precio, cuotas, dinero)
{
    let tasa=0;
    let restoPagar=0;
    let interes =0;
    let total=0;

    switch(cuotas)
    {
        case 12:
        {
            tasa= 9.9/100;
            break;
        }
        case 24:
        {
            tasa= 22/100;
            break;
        }
        case 36:
        {
            tasa= 33/100;
            break;
        }
    }

    restoPagar= precio-dinero;
    interes= restoPagar*tasa;
    total= (restoPagar + interes)/12;


    console.log(`Resto a pagar: ${restoPagar}`);
    console.log(`Interes de acuerdo a la financiacion: de ${cuotas} cuotas: ${interes}`);

    return total;
}