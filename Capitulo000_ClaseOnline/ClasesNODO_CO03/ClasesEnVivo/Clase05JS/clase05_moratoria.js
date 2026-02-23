

/*

    capital + interes = deudaTotal

	0 al 30 => 100% condonacion interes
	31 al 60 => 80% condonación de interes
	60 a 90 => 60% ...
	90 a 120 => 40%
	90 a 150 => 20%
*/
{
    /* capital, interes, diaDeOperatoria */
    
    let capital = 0;
    let interes = 0;
    let interesFinal = 0;
    let diaDeOperatoria = 0;

    let totalDeDeudaSinMoratoria = 0;
    let totalDeDeudaConMoratoria = 0;

    

    capital = Number(prompt("Por favor ingrese el capital"));
    interes = Number(prompt("Por favor ingrese el interes"));
    diaDeOperatoria = Number(prompt("Ingrese el dia en el que realizara el pago"));

    totalDeDeudaSinMoratoria = capital + interes;

   // console.log(capital,interes,diaDeOperatoria);

    if((diaDeOperatoria >= 0) && (diaDeOperatoria <= 30))
    {
        interesFinal = 0; // condonacion del 100%
    }

    if((diaDeOperatoria >= 31) && (diaDeOperatoria <= 60))
    {
        interesFinal = interes - (interes * 80)/100;
    }

    if((diaDeOperatoria >= 61) && (diaDeOperatoria <= 90))
    {
        interesFinal = interes - (interes * 60)/100;
    }

    if((diaDeOperatoria >= 91) && (diaDeOperatoria <= 120))
    {
        interesFinal = interes - (interes * 40)/100;
    }

    if((diaDeOperatoria >= 121) && (diaDeOperatoria <= 150))
    {
        interesFinal = interes - (interes * 20)/100;
    }
    else
    {
        interesFinal = interes; // no vas a tener ninguna reducción
    }

    totalDeDeudaConMoratoria = capital + interesFinal;

    console.log(`Total Deuda:= ${totalDeDeudaSinMoratoria} y con Beneficios ${totalDeDeudaConMoratoria}`);

}