
/*
Un banco de plaza local, desea realizar
un simulador de plazos fijos, con la intención
de captar clientes y fomentar el ahorro,
para ello contratará un programador FULL STACK
que permita construir una aplicación web con 
el objetivo de simular las siguientes reglas de negocio

El gerente del Banco nos indica que la aplicación 
debería solicitar que ingrese

	1) El capital a Ingresar
	2) La cantidad de meses en los que realizará el plazo fijo

para Montos de Capital de:
 
 - 500.000 a 1.500.000 la rentabilidad será del 6% mensual
 - 1.500.000 hasta 5.000.000 la rentabilidad será del 7,5% mensual
 - 5.000.000 hasta 25.000.000 la rentabilidad será del 8,5% mensual
 - para valores que superen esa magnitud la tasa mensual será del 9,5%

 */

{
    const tasa1 = 6;
    const tasa2 = 7.5;
    const tasa3 = 8.5;
    const tasa4 = 9.5;

    let capitalADepositar = 0;
    let cantidadDeMeses = 0;

    capitalADepositar = Number(prompt("Ingrese por favor el Capital a Depositar"));

    cantidadDeMeses = Number(prompt("Indique la cantidad de Meses"));

    console.log(capitalADepositar);
    console.log(cantidadDeMeses);

    // Y ADEMAS &&
    // || O ES UNA COSA O ES OTRA

    /*

        A = 20 y C = 30

        ((A === 20) && (C === 30))

    */

    if((capitalADepositar >= 500000) && (capitalADepositar <= 1500000))
    {
        
        console.log("Su capital esta entre 500.000 y 1.500.000");

        let rentabilidad = 0;
        let rentabilidadTotal = 0;
        rentabilidad = (capitalADepositar * tasa1)/100;
        rentabilidadTotal = rentabilidad * cantidadDeMeses;

        let totalDelPlazoFijoFinalizado = capitalADepositar + rentabilidadTotal;

        console.log("1 - El Capital Ingresado es ",capitalADepositar);
        console.log("2 - los Meses a Invertir serán",cantidadDeMeses);
        console.log("3 - la Rentabilidad Mensual",rentabilidad);
        console.log("4 - la Rentabilidad Total sería ",rentabilidadTotal);
        console.log("5 - total Plazo Fijo",totalDelPlazoFijoFinalizado);


    }
    else
    {
        if((capitalADepositar > 1500000) && (capitalADepositar <= 5000000))
        {
            console.log("Su capital esta entre 1.500.000 y 5.000.000");
        }
        else
        {
            if((capitalADepositar > 5000000) && (capitalADepositar <= 25000000))
            {
                console.log("Su capital esta entre 5 millones a 25 millones");
            }
            else
            {
                if(capitalADepositar > 25000000)
                {
                    console.log("Supera los 25 millones y tiene tasa del 9.5%");
                }
                else
                {
                    alert("Estimado Cliente el Banco no acepta plazos fijos de esos montos");
                }    
            } 
        }
    }
    


}