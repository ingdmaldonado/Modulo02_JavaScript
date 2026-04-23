{
    let continua = `SI`

    let notaIngresada;

    let cantidadErrores = 0;

    let contadorDesaprobados = 0;
    let contadorAprobados = 0;
    let contadorMuyBuenos = 0;
    let contadorExcelentes = 0;

    while(continua === `SI` || continua === `si`)
    {
        notaIngresada = Number(prompt(`Ingrese la nota del alumno`))

        if((notaIngresada < 0) || (notaIngresada > 10))
        {
            cantidadErrores++
            console.log(`Nota Equivocada`)
        }
        else if((notaIngresada >= 0) && (notaIngresada <= 4))
        {
            contadorDesaprobados++ 
            console.log(`Desaprobado`)
        }
        else if((notaIngresada > 4) && (notaIngresada <= 7))
        {
            contadorAprobados++
            console.log(`aprobado`)
        }
        else if((notaIngresada > 7 && notaIngresada < 10))
        {
            contadorMuyBuenos++
            console.log(`muy bueno`)
        }
        else
        {
            contadorExcelentes++
            console.log(`excelente`)
        }

        continua = prompt(`Desea continuar cargando notas? si/no`)
    }

    console.log(contadorDesaprobados)
    console.log(contadorAprobados)
    console.log(contadorMuyBuenos)
    console.log(contadorExcelentes)
    console.log(`Se equivoco ${cantidadErrores} veces`)
    
    
    
    




}