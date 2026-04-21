
{
    let contDesaprobados = 0;
    let contAprobados = 0;
    let contBuenos = 0;
    let contExcelentes = 0;
    let contErrores = 0;
    let nota = 0;
    let continuar = "si"


    while(continuar === "si" || continuar === "SI")
    {
        nota = Number(prompt(`coloque la nota de los trabajos practicos`))

        if(nota < 0 || nota > 10)
        {
            contErrores++;
        }
        else if((nota >= 0) && (nota <= 4))
        {
            contDesaprobados++;
        }
        else if((nota >= 4) && (nota <= 7))
        {
            contAprobados++;
        }
        else((nota >= 7) && (nota <= 10))
        {
            contExcelentes++;
        }
        
        continuar = prompt(`desea continuar? si/no`)
    }

    console.log(`los trabajos aprobados son: ${contAprobados}`)
    console.log(`los trabajos muy buenos son: ${contBuenos}`)
    console.log(`los trabajos excelentes son: ${contExcelentes}`)
    console.log(`los trabajos desaprobados son: ${contDesaprobados}`)
    console.log(`los trabajos de nota invalida son: ${contErrores}`)

}