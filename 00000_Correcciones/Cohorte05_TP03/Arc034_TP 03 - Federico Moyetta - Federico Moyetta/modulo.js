
export const precioDeVenta = (precioCosto, margen) => {
    let calculo = (precioCosto * margen / 100);
    let precioFinal = precioCosto + calculo;
    return precioFinal;
}

export const promedioDeTres = (nota1, nota2, nota3) => {
    return (nota1 + nota2 + nota3) / 3;
}

export const resultadoAprueba = (notaPromedio) => {
    let resultadoApruebaSN = ("");
    if ((notaPromedio >= 0) && (notaPromedio <= 4)) {
        resultadoApruebaSN = ("DESAPROBADO");
    }
    if ((notaPromedio > 4) && (notaPromedio <= 7)) {
        resultadoApruebaSN = ("APROBADO");
    }
    if ((notaPromedio > 7) && (notaPromedio <= 9)) {
        resultadoApruebaSN = ("MUY BUENO");
    }
    if ((notaPromedio > 9) && (notaPromedio <= 10)) {
        resultadoApruebaSN = ("EXCELENTE");
    }
    if ((notaPromedio < 0) || (notaPromedio > 10)) {
        console.log(`Usted ingresó una Nota fuera del rango aceptable (Entre 0 y 10)`);
    }

    return resultadoApruebaSN;
}

export const sobreTasa = (tipoBebida, importe) => {
    let impuesto = 0;
    switch (tipoBebida) {
        case 1: {
            impuesto = (5 / 1000);
            break;
        }
        case 2: {
            impuesto = (1 / 1000);
            break;
        }
        case 3: {
            impuesto = (7 / 1000);
            break;
        }
        case 4: {
            impuesto = (2 / 1000);
            break;
        }
        case 5: {
            impuesto = (15 / 1000);
            break;
        }
        case 6: {
            impuesto = (1 / 1000);
            break;
        }
    }
    let impuestoAgregado = importe * impuesto;
    return impuestoAgregado;
}

export const calcularImporteAgua = (consumo) => {
    let importeFactura = 0;
    const MINIMO = 50;
    const TARIFA1 = 350;
    const TARIFA2 = 555.20;
    const TARIFA3 = 1552.20;

    if (consumo <= 50) {
        importeFactura = (MINIMO * TARIFA1);
    }
    if ((consumo > 50) && (consumo <= 70)) {
        importeFactura = ((MINIMO * TARIFA1) + ((consumo - 50) * TARIFA2));
    }
    if (consumo > 70) {
        importeFactura = ((MINIMO * TARIFA1) + (20 * TARIFA2) + ((consumo - 70)) * TARIFA3);
    }

    return importeFactura;
}

export const calculoTasaSubsuelo = (importeBaseSub) => {
    let tasaSubsuelo = 0;
    tasaSubsuelo = importeBaseSub * (3 / 100);
    return tasaSubsuelo;
}

export const calculoFiscalizacionEnre = (importeBaseEnre) => {
    let tasaEnre = 0;
    tasaEnre = importeBaseEnre * (1.2 / 100);
    return tasaEnre;
}

export const calculoDosisInsulina = (nivelGlucosa, pesoCorporal, tipoDiabetes) => {
    let dosisInsulina = 0;
    switch (tipoDiabetes) {
        case 1: {
            nivelGlucosa >= 180 ? dosisInsulina = ((pesoCorporal * 0.5) + (nivelGlucosa * 0.5)) : 0;
            break;
        }
        case 2: {
            nivelGlucosa >= 180 ? dosisInsulina = ((pesoCorporal * 0.2) + (nivelGlucosa * 0.5)) : 0;
            break;
        }
        default: {
            console.log(`Usted ha ingresado un Tipo de Diabetes incorrecto (Debe ser 1 ó 2)`);
            break;
        }
    }
    return dosisInsulina;
}

export const contarVocales = (texto1) => {
    let contadorVocales = 0;
    for (let i = 0; i < texto1.length; i++) {
        let vocal = texto1[i];
        if ((vocal === `A`) || (vocal === `a`) || (vocal === `E`) || (vocal === `e`) || (vocal === `I`) || (vocal === `i`) || (vocal === `O`) || (vocal === `o`) || (vocal === `U`) || (vocal === `u`)) {
            contadorVocales++;
        }
    }
    return contadorVocales;
}

export const contarConsonantes = (texto2) => {
    let contadorConsonantes = 0;
    for (let i = 0; i < texto2.length; i++) {
        let consonante = texto2[i];
        if ((consonante === `A`) || (consonante === `a`) || (consonante === `E`) || (consonante === `e`) || (consonante === `I`) || (consonante === `i`) || (consonante === `O`) || (consonante === `o`) || (consonante === `U`) || (consonante === `u`)) {
            contadorConsonantes = contadorConsonantes;
        }
        else {
            contadorConsonantes++;
        }
    }
    return contadorConsonantes;
}

export const buscaS = (texto3) => {
    let contadorS = 0;
    for (let i = 0; i < texto3.length; i++) {
        let letraS = texto3[i];
        if ((letraS === `S`) || (letraS === `s`)) {
            contadorS++;
            if (contadorS === 2) {
                return true                
            }
        }
    }
    return false;
}

export const buscaEspacios = (texto4) => {
    let contadorEspacio = 0;
    for (let i = 0; i < texto4.length; i++) {
        let espacioTxt = texto4[i];
        if (espacioTxt === ` `) {
            contadorEspacio++;
            if (contadorEspacio === 3) {
                return true;               
            }
        }
    }
    return false;
}

export const buscaNumeros = (texto5) => {

    for (let i = 0; i < texto5.length; i++) {
        let caracter = texto5[i];
        if ((caracter >= '0') && (caracter <= '9')) {
            return false;
        }
    }
    return true;
}
