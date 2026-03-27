{
 let primerNumero = 0; 
 let segundoNumero  = 0;

    primerNumero = Number( prompt(`señor ingrese un numero`));
    segundoNumero = Number(prompt(`señor ingrese el segundo numero`))

    let suma =  primerNumero + segundoNumero;
    let resta =  primerNumero - segundoNumero;
    let division =  primerNumero / segundoNumero;
    let multiplicacion =  primerNumero * segundoNumero;

    let textoFinal = `Suma: ${suma} Resta: ${resta}  Multiplicacion ${multiplicacion} Division: ${division}`

    console.log(textoFinal)
}

// Al ejecutarlo y poner el valor 0 en "B" en consola me aparece un mensaje que dice infinito //
