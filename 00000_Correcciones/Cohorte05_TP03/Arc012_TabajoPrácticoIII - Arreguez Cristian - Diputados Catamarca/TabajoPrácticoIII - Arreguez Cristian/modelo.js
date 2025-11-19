/* Ejercicio 13 */

const precioDeVenta = (precioCosto, porcentajeGanancia) => {
    return precioCosto+precioCosto*porcentajeGanancia/100
}


/* Ejercicio 14 */

const calculoPromedio = (notaPrimera, notaSegunda, notaTercera) => {
    return (notaPrimera+notaSegunda+notaTercera)/3
}


/* Ejercicio 15 */

const condicionAlumno = (notaPromedio) =>{
    let mensaje = ""
    if (notaPromedio <= 4){mensaje="Desaprobado"}
    if (notaPromedio > 4 && notaPromedio <=7){mensaje="Aprobado"}
    if (notaPromedio > 7 && notaPromedio <=9){mensaje="Muy Bueno"}
    if (notaPromedio === 10){mensaje="Excelente"}
    return mensaje
}


/* Ejercicio 16 */

const impuestoSobreTasa = (importeBase, tipoBebida) => {
    let importeTotal = 0
    let nombreBebida = ''
    switch (tipoBebida) {
        case 1:
            nombreBebida = 'Bebidas Agua en envases plásticos'
            importeTotal = importeBase+importeBase*0.005 
            break
        case 2:
            nombreBebida = 'Bebidas Agua en envases retornables'
            importeTotal = importeBase+importeBase*0.001 
            break            
        case 3:
            nombreBebida = 'Bebidas Gaseosas Azucaradas en envases plásticos'
            importeTotal = importeBase+importeBase*0.007 
            break            
        case 4:
            nombreBebida = 'Bebidas Gaseosas Azucaradas en envases retornables'
            importeTotal = importeBase+importeBase*0.002 
            break            
        case 5:
            nombreBebida = 'Bebidas Energéticas'
            importeTotal = importeBase+importeBase*0.015 
            break   
        case 6:
            nombreBebida = 'Bebidas no clasificada'
            importeTotal = importeBase+importeBase*0.001 
            break                     
        default:
            break
    }
    return {importeTotal, nombreBebida}
}


/* Ejercicio 17 */

const calcularImporteAgua = (metrosCubicos) => {
    if (metrosCubicos <= 50){
        return 50 * 350
    }
    if (metrosCubicos > 50 && metrosCubicos <= 70){
        return (50 * 350) + ((metrosCubicos-50) * 555.20) 
    }
    if (metrosCubicos > 70){
        return (50 * 350) + (20 * 555.20) + ((metrosCubicos-70) * 1552.20)
    }    
}


/* Ejercicio 18 */

const calculoTasaSubsuelo = (montoBase) => {
    return montoBase+montoBase*0.03
}


/* Ejercicio 19 */

const calculoTasaEnre = (valorBase) => {
    return valorBase+valorBase*0.012
}


/* Ejercicio 20 */

const calculoDosisIns = (nivelGlucosa, pesoCorporal, tipoDiabetes) => {
    if (tipoDiabetes === 1){
        if (nivelGlucosa > 180){
            return pesoCorporal*0.50+nivelGlucosa*0.50
        }else{
            return pesoCorporal*0.50+nivelGlucosa
        }
    }
    if (tipoDiabetes === 2){
        if (nivelGlucosa > 180){
            return pesoCorporal*0.20+nivelGlucosa*0.50
        }else{
            return pesoCorporal*0.20+nivelGlucosa
        }
    }
}


/* Ejercicio 21 */

const contarVocales = (cadenaTexto) =>{
    let sumadorVocales = 0
    for (let i = 1; i < cadenaTexto.length; i++){
        if ( cadenaTexto.charAt(i).toUpperCase() === 'A' || cadenaTexto.charAt(i).toUpperCase() === 'E' || cadenaTexto.charAt(i).toUpperCase() === 'I' || cadenaTexto.charAt(i).toUpperCase() === 'O' || cadenaTexto.charAt(i).toUpperCase() === 'U'){
            sumadorVocales++
        }
    }
    return sumadorVocales
}


/* Ejercicio 22 */

const contarConsonantes = (cadenaTextoSegunda) =>{
    let sumadorConsonantes = 0
    for (let i = 1; i < cadenaTextoSegunda.length; i++){
        if (cadenaTextoSegunda.charAt(i) !== " "){
            if ( cadenaTextoSegunda.charAt(i).toUpperCase() !== 'A' && cadenaTextoSegunda.charAt(i).toUpperCase() !== 'E' && cadenaTextoSegunda.charAt(i).toUpperCase() !== 'I' && cadenaTextoSegunda.charAt(i).toUpperCase() !== 'O' && cadenaTextoSegunda.charAt(i).toUpperCase() !== 'U'){
                sumadorConsonantes++
            }
        }
    }
    return sumadorConsonantes
}


/* Ejercicio 23 */

const contarLetrasS = (cadenaTextoTercera) =>{
    let existeS = false
    let sumadorS = 0
    for (let i = 1; i < cadenaTextoTercera.length; i++){
        if (cadenaTextoTercera.charAt(i) !== " "){
            if ( cadenaTextoTercera.charAt(i).toUpperCase() === 'S'){
                sumadorS++
                if (sumadorS >= 2){
                    existeS = true
                }
            }
        }
    }
    return existeS
}


/* Ejercicio 24 */

const contarEspacios = (cadenaTextoCuarta) =>{
    let existeEspacios = false
    let sumadorEspacios = 0
    for (let i = 1; i < cadenaTextoCuarta.length; i++){
        if (cadenaTextoCuarta.charAt(i) === " "){
            sumadorEspacios++
            if (sumadorEspacios >= 3){
                existeEspacios = true
                break
            }
        }
    }
    return existeEspacios
}


/* Ejercicio 25 */

const contarDigitoNumerico = (cadenaTextoQuinta) =>{
    let noContieneNumeros = true
    for (let i = 1; i < cadenaTextoQuinta.length; i++){
        if (cadenaTextoQuinta.charAt(i) !== " "){
            if (/\d/.test(cadenaTextoQuinta.charAt(i))){
                console.log('encontró un número')
                noContieneNumeros = false
                break
            }
        }
    }
    return noContieneNumeros
}