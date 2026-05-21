
export const calcularMargen = (importeCompra, margen) => {

    return importeCompra + (importeCompra*margen)/100;
}



export const calcularPromedio = (nota1,nota2,nota3) => {

    return (nota1 + nota2 + nota3)/3;
    
}

export const devolucionDeExamen = (nota) => {

    if(nota <= 4){
        return `desaprobado`
    }
    else if((nota > 4) && (nota <= 7)){
        return `aprobado`
    }
    else if((nota > 7) && (nota <= 9)){
        return `muy bueno`
    }
    else{
        return `excelente`
    }
        
}

export const calcularSobreTasa = (tipoDeBebida, importeCompra) => {

    if(tipoDeBebida === "plastico") return (importeCompra*5)/1000;
    if(tipoDeBebida === "retornable") return (importeCompra*1)/1000;
    if(tipoDeBebida === "azucaradasPlastico") return (importeCompra*7)/1000;
    if(tipoDeBebida === "azucaradasRetornables") return (importeCompra*2)/1000;
    if(tipoDeBebida === "bebidasEnergeticas") return (importeCompra*15)/1000;
    if(tipoDeBebida === "bebidaNoClasificada") return (importeCompra*1)/1000;
}

export const tasaDeSubsuelo = (importeBase) => {

    return (importeBase*3)/100;

}


export const servicioAgua = (importeBase) => {

    return (importeBase*1.2)/100;
}

export const dosisInsulina  = (nivelGlucosa,peso,tipoDiabetes) => {

    let dosis = 0;

    if(tipoDiabetes === 1){
        if(nivelGlucosa > 180)
        {
            dosis = (peso*50)/100 + (nivelGlucosa*50)/100;
        }
    }
    if(tipoDiabetes === 2){
        if(nivelGlucosa > 180)
        {
            dosis = (peso*20)/100 + (nivelGlucosa*50)/100;
        }
    }
    return dosis;
}


export const contadorVocales = (texto) => {
    let contador = 0;

    for(let i = 0; i < texto.length; i++){
        let letra = texto[i]

        if(
            letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u" || letra === "A" || letra === "E" || letra === "I" || letra === "O" || letra === "U"
        ) 
        {
            contador++
        }
    }
    return contador;
}


export const contadorConsonantes = (texto) => {
    let contador = 0;

    for(let i = 0; i < texto.length; i++){
        let letra = texto[i]
        if(
            (letra >= "a" && letra <= "z") || (letra >= "A" && letra <= "Z" )
        )
        if (
            letra != "a" && letra != "e" && letra != "i" && letra != "o" && letra != "u" && letra != "A" && letra != "E" && letra != "I" && letra != "O" && letra != "O"
        )
        {
            contador++;
        }
    }
    return contador;
}



export const letrasS = (palabra) => {

    let contador = 0;

    for(let i = 0; i < palabra.length; i++){
        if(
            palabra[i] === "s" || palabra[i] === "S"
        )
        {
            contador++;
        }
        if(contador >= 2){
            return true;
        }
    }
    return false;
}



export const tresEspacios = (cadena) => {

    let contador = 0;

    for(let i = 0; i < cadena.length; i++) {

        if(cadena[i] === " "){
            contador++;
        }
        if(contador === 3){
            break;
        }
    }
    return contador >= 3;
}

export const calcularImporteAgua = (metrosCubicos) => {

    let importe = 0;

    if (metrosCubicos <= 50){
        importe = 50 * 350;
    }
    else if(metrosCubicos <= 70){
        importe = (50 * 350) + ((metrosCubicos - 50)* 555.20);
    }
    else{
        importe = (50 * 350) + (20 * 555.20) + ((metrosCubicos - 70)* 1552.20)
    }

    return importe;
}

export const sinNumero = (cadena) => {
    let contieneNumero = false;

    for(let i = 0; i < cadena.length; i++){

        let caracter = cadena[i];

        if(caracter >= "0" && caracter <= "9"){
            contieneNumero = true;
            break;
        }
    }

    return !contieneNumero;
}