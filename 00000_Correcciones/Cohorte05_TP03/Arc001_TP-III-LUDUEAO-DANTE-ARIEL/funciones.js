/**Ejercicio Nro. 13*/
const calculoDePorcentajeDeGanancia = (idImporteCompra, porcentajeDeGanancia) =>{
    return idImporteCompra+(idImporteCompra*porcentajeDeGanancia)/100
}
/**Ejercicio Nro. 14*/
const calculoPromedioNota = (idnotaUno, idnotaDos, idnotaTres) =>{
    return (idnotaUno+idnotaDos+idnotaTres)/3
}

/**Ejercicio Nro. 15*/
const calculoCondicionAlumno = (promedioNota) =>{
    if (promedioNota <= 4){return 'Desaprobado'}
    if (promedioNota > 4 && promedioNota <= 7){return 'Aprobado'}
    if (promedioNota > 7 && promedioNota <= 9){return 'Muy Bueno'}
    if (promedioNota === 10){return 'Excelente'}
}

/**Ejercicio Nro. 16*/
const calculoSobreTasa = (importeBebida, porcentajeTasa) =>{
    return (importeBebida*porcentajeTasa).toFixed(2)
}

/**Ejercicio Nro. 17*/
const calcularImporteAgua = (metrosCubicos) =>{
    if (metrosCubicos<=50){
        return 17500
    }
    if (metrosCubicos > 51 && metrosCubicos <= 70){
        return 17500+((metrosCubicos-50)*555.20)
    }    
    if (metrosCubicos > 70){
        return 17500+11104+((metrosCubicos-70)*1552.20)
    }    
}

/**Ejercicio Nro. 18*/
const calcularTasaSubsuelo = (importeBase) =>{
    return (importeBase*0.03).toFixed(2)
}

/**Ejercicio Nro. 19*/
const calcularTasaFiscalizcion = (importeImpuesto) =>{
    return (importeImpuesto*0.012).toFixed(2)
}

/**Ejercicio Nro. 20*/
const calcularCantidadInsulina = (nivelGlucosa, pesoCorporal, tipoDiabetes) => {
    if (tipoDiabetes === 1){
        if (nivelGlucosa > 180){
            return nivelGlucosa*0.50+pesoCorporal*0.50
        }else{
            return (nivelGlucosa+pesoCorporal*0.50)
        }
    }else{
        if (nivelGlucosa > 180){
            return nivelGlucosa*0.50+pesoCorporal*0.20
        }else{
            return nivelGlucosa+pesoCorporal*0.20
        }        
    }
}

/**Ejercicio Nro. 21*/
const determinaCantVocales = (idCadenaTextoUno) =>{
    let cantVocales = 0
    for (let i = 0; i < idCadenaTextoUno.length; i++) {
        if (idCadenaTextoUno.charAt(i) !== " "){
            if(idCadenaTextoUno.charAt(i).toUpperCase()==='A' || idCadenaTextoUno.charAt(i).toUpperCase()==='E' || idCadenaTextoUno.charAt(i).toUpperCase()==='I' || idCadenaTextoUno.charAt(i).toUpperCase()==='O' || idCadenaTextoUno.charAt(i).toUpperCase()==='U'){
                cantVocales++
            }
        }
                
    }
    return cantVocales
}

/**Ejercicio Nro. 22*/
const determinaCantConsonantes = (idCadenaTextoDos) => {
    let cantConsonantes = 0
    for (let i = 0; i < idCadenaTextoDos.length; i++) {
        if (idCadenaTextoDos.charAt(i) !== " "){
            if(idCadenaTextoDos.charAt(i).toUpperCase() !=='A' && idCadenaTextoDos.charAt(i).toUpperCase() !=='E' && idCadenaTextoDos.charAt(i).toUpperCase() !=='I' && idCadenaTextoDos.charAt(i).toUpperCase() !=='O' && idCadenaTextoDos.charAt(i).toUpperCase()!=='U'){
                cantConsonantes++
            }
        }
                
    }
    return cantConsonantes    
}

/**Ejercicio Nro. 23*/
const determinaCantS = (idCadenaTextoTres) =>{
    let existeS = false
    let cantS = 0
    for (let i = 0; i < idCadenaTextoTres.length; i++) {
        if (idCadenaTextoTres.charAt(i) !== " "){
            if(idCadenaTextoTres.charAt(i).toUpperCase() ==='S'){
                cantS++
                if (cantS >=2){
                    existeS = true
                }
            }
        }            
    }
    return existeS
}

/**Ejercicio Nro. 24*/
const determinaCantEspacios = (idCadenaTextoCuatro) =>{
    let cantEspacios = 0
    let existeEspacio = false
    for (let i = 0; i < idCadenaTextoCuatro.length; i++) {
        if (idCadenaTextoCuatro.charAt(i) === " "){
            cantEspacios++
            if (cantEspacios >=3){
                existeEspacio = true
                break
            }
        }            
    }
    return existeEspacio
}

/**Ejercicio Nro. 25*/
const determinaNumeros = (idCadenaTextoCinco) =>{
    let existeNumeros = false
    for (let i = 0; i < idCadenaTextoCinco.length; i++) {
        if (idCadenaTextoCinco.charAt(i) !== " "){
            if (/\d/.test(idCadenaTextoCinco.charAt(i))){
                existeNumeros = true
                break
            }
        }            
    }
    return existeNumeros
}
