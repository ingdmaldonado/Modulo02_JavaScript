{
    let continua = `SI`

    let pesoHuevo = 0;

    let cantidadTotalHuevos = 0;
    let cantidadTotalXL = 0;
    let cantidadTotalL = 0;
    let cantidadTotalM = 0;
    let cantidadDescartados = 0;

    let porcentajeXL = 0;
    let porcentajeL = 0;
    let porcentajeM = 0;
    let porcentajeDescartados = 0;

    while(continua === `SI` || continua === `si`)
    {
        pesoHuevo = Number(prompt(`Ingrese el peso del huevo`))

        if((pesoHuevo >= 53) && (pesoHuevo < 63))
        {
            cantidadTotalM++
        }
        if((pesoHuevo >= 63) && (pesoHuevo < 73))
        {
            cantidadTotalL++
        }
        if(pesoHuevo >= 73)
        {
            cantidadTotalXL++
        }
        if(pesoHuevo < 53)
        {
            cantidadDescartados++
        }

        continua = prompt(`Desea continuar = si/no`)
    }

    cantidadTotalHuevos = cantidadTotalM + cantidadTotalL + cantidadTotalXL + cantidadDescartados

    porcentajeXL = (cantidadTotalXL/cantidadTotalHuevos) * 100;
    porcentajeL = (cantidadTotalL/cantidadTotalHuevos) * 100;
    porcentajeM = (cantidadTotalM/cantidadTotalHuevos) * 100;
    porcentajeDescartados = (cantidadDescartados/cantidadTotalHuevos) * 100;

    console.log(`Ingresaron un total de ${cantidadTotalHuevos} Huevos`)
    console.log(`Ingresaron un total de ${cantidadTotalXL} Huevos Super Grandes`)
    console.log(`Ingresaron un total de ${cantidadTotalL} Huevos Grandes`)
    console.log(`Ingresaron un total de ${cantidadTotalM} Huevos Medianos`)
    console.log(`Ingresaron un total de ${cantidadDescartados} Huevos Descartados`)
    console.log(`Porcentaje de Huevos XL sobre el total: % ${porcentajeXL.toFixed(2)}`)
    console.log(`Porcentaje de Huevos L sobre el total: % ${porcentajeL.toFixed(2)}`)
    console.log(`Porcentaje de Huevos M sobre el total: % ${porcentajeM.toFixed(2)}`)
    console.log(`Porcentaje de Huevos Descartados sobre el total: % ${porcentajeDescartados.toFixed(2)}`)

}
