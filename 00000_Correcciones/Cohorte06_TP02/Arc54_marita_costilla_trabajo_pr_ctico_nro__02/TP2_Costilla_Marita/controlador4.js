{
    let clasificar=`S`
    let peso= 0;
    let totalHuevos=0;
    let huevosXl=0;
    let huevosL=0;
    let huevosM=0;
    let huevosDescartados=0;
    let porcientoHuevosXl=0;
    let porcientoHuevosL=0;
    let porcientoHuevosM=0;

    while(clasificar===`S` || clasificar===`s`)
    {
        peso= Number(prompt(`Ingrese el peso del huevo`));
        console.log(peso);

        if (peso>=73)
        {  
             huevosXl++;
             totalHuevos++;
        }else{
            if (peso>=63 && peso<73)
            {
                huevosL++;
                totalHuevos++
            }else
            {
                if(peso>=53 && peso<63)
                {
                    huevosM++
                    totalHuevos++
                 }else
                {
                    huevosDescartados++
                }
            }
        }
        clasificar=prompt(`Desea seguir clasificando los huevos S/N`);


    }

    console.log(`Cantidad TOTAL de huevos: ${totalHuevos}`);
    console.log(`Cantidad total de huevos XL ${huevosXl}`);
    console.log(`Cantidad total de huevos L ${huevosL}`);
    console.log(`Cantidad total de huevos M ${huevosM}`);
    console.log(`cantidad total de huevos DESCARTADO ${huevosDescartados}`);

    porcientoHuevosXl=(huevosXl/totalHuevos)*100;
    porcientoHuevosL=(huevosL/totalHuevos)*100;
    porcientoHuevosM=(huevosM/totalHuevos)*100 ;  
    
    console.log( `% de huevos XL:${porcientoHuevosXl} `);
    console.log( `% de huevos L: ${porcientoHuevosL}`);
    console.log( `% de huevos M: ${porcientoHuevosM}`);
}

