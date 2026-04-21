

{
    let contSuperGrandes = 0;
    let contGrandes = 0;
    let contMedianos = 0;
    let contTotal = 0;
    let descartados = 0;

    let peso = 0;
    let continuar = "si"

    while(continuar === "si" || continuar === "SI")
    {
        peso = Number(prompt(`coloque el peso del huevo en gramos`))

        if(peso >= 73)
        {
            contSuperGrandes++;
        }
        else if((peso >=63) && (peso < 73))
        {
            contGrandes++;
        }
        else if((peso >= 53) && (peso < 63))
        {
            contMedianos++;
        }
        else
        {
            descartados++;
        }

        contTotal++;

        continuar = prompt(`desea continuar? si/no`)
    }

    let porcentajeXL = (contSuperGrandes*100)/contTotal;
    let porcentajeL = (contGrandes*100)/contTotal;
    let porcentajeM = (contMedianos*100)/contTotal;

    console.log(`El total ingresado de huevos fué de: ${contTotal}
                El total de huevos XL es: ${contSuperGrandes}
                El total de huevos L es: ${contGrandes}
                El total de huevos M es: ${contMedianos}
                El total de huevos descartados es de: ${descartados}`)

    console.log(`El porcentaje de huevos XL es: %${porcentajeXL}
                El porcentaje de huevos L es: %${porcentajeL}
                El porcentaje de huevos M es %${porcentajeM}`)
                
}