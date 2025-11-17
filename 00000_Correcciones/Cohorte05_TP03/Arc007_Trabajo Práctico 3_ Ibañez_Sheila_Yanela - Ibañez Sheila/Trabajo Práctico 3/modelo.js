// ----------------------------------- Ejercicio 13: --------------------------------------------
export const calcularPrecioVenta = (importeCompra, margenGanancia) => {
    return importeCompra + ((importeCompra * margenGanancia)/100);
};

// Validaciones 
export const validarDatos = (importeCompra, margenGanancia) => {
    if(isNaN(importeCompra) || isNaN(margenGanancia)){
        return { valido: false, mensaje: 'Por favor ingrese valores numéricos válidos' };
    }
    
    if (importeCompra <= 0 || margenGanancia <= 0){
        return { valido: false, mensaje: 'Los valores deben ser positivos' };
    }
    
    return { valido: true };
};


//-------------------------------------Ejercicio 14 : -----------------------------------------------
export const calcularPromedio = (nota1, nota2, nota3) =>{
    return (nota1+nota2+nota3)/3;
};

//validaciones:
export const validarNotas = (nota1, nota2, nota3) =>{
    if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3)){
        return { valido: false, mensaje: 'Por favor ingrese valores numéricos válidos' };
    };
    if (nota1 < 0 || nota2 < 0 || nota3 < 0){
        return { valido: false, mensaje: 'Las notas no pueden ser negativas' };
    };

    return { valido: true };
};


//-------------------------------------Ejercicio 15 : -----------------------------------------------

export const calificarNota =  (notaPromedio) =>{
    if(notaPromedio <= 4){
        return "Desaprobado";
    }else if (notaPromedio>4 && notaPromedio<= 7){
        return "Aprobado";
    }else if (notaPromedio> 7 && notaPromedio<10){
        return "Muy Bueno";
    }else if(notaPromedio === 10){
        return "Excelente";
    }
};

//validacion
export const validarNotaPromedio = (notaPromedio) =>{
    if(isNaN(notaPromedio)){
        return { valido: false, mensaje: 'Por favor, ingrese un numero valido'}
    }
    if(notaPromedio< 0 || notaPromedio>10 ){
        return {valido: false, mensaje: 'La nota debe estar entre 0 y 10 '};
    }

    return { valido : true};
};


//-------------------------------------Ejercicio 16 : -----------------------------------------------
export const calcularSobreTasa = (importeBase, tipoBebida) => {
    let tasaPorMil = 0;
    
    switch(tipoBebida) {
        case "1": // Agua en envases plásticos
            tasaPorMil = 5;
            break;
        case "2": // Agua en envases retornables
            tasaPorMil = 1;
            break;
        case "3": // Gaseosas azucaradas en envases plásticos
            tasaPorMil = 7;
            break;
        case "4": // Gaseosas azucaradas en envases retornables
            tasaPorMil = 2;
            break;
        case "5": // Bebidas energéticas
            tasaPorMil = 15;
            break;
        case "6": // Otras bebidas
            tasaPorMil = 1;
            break;
        default:
            tasaPorMil = 1;
    }
    
    // Calcular la sobretasa 
    return importeBase * (tasaPorMil / 1000);
};

// Validación :
export const validarDatosImpuesto = (importeBase, tipoBebida) => {
    if(isNaN(importeBase)){
        return { valido: false, mensaje: 'Por favor ingrese un importe válido' };
    }
    
    if (importeBase <= 0){
        return { valido: false, mensaje: 'El importe debe ser mayor a 0' };
    }
    
    if (!tipoBebida || tipoBebida === ""){
        return { valido: false, mensaje: 'Por favor seleccione un tipo de bebida' };
    }
    
    return { valido: true };
};

//-------------------------------------Ejercicio 17 : -----------------------------------------------
export const calcularImporteAgua = (metrosCubicos) => {
    // Tarifas por bloque
    const TARIFA_BLOQUE_1 = 350.00;      // Primeros 50 m³
    const TARIFA_BLOQUE_2 = 555.20;      // De 51 a 70 m³
    const TARIFA_BLOQUE_3 = 1552.20;     // Más de 70 m³
    
    const LIMITE_BLOQUE_1 = 50;
    const LIMITE_BLOQUE_2 = 70;
    
    let importeTotal = 0;
    
    // Si consume menos de 50 m³, igual paga el mínimo (50 m³)
    if (metrosCubicos <= LIMITE_BLOQUE_1) {
        importeTotal = LIMITE_BLOQUE_1 * TARIFA_BLOQUE_1;
    }
    // Si consume entre 51 y 70 m³
    else if (metrosCubicos > LIMITE_BLOQUE_1 && metrosCubicos <= LIMITE_BLOQUE_2) {
        // Primeros 50 m³
        importeTotal = LIMITE_BLOQUE_1 * TARIFA_BLOQUE_1;
        // Los m³ que excedan de 50
        let excedente = metrosCubicos - LIMITE_BLOQUE_1;
        importeTotal += excedente * TARIFA_BLOQUE_2;
    }
    // Si consume más de 70 m³
    else {
        // Primeros 50 m³
        importeTotal = LIMITE_BLOQUE_1 * TARIFA_BLOQUE_1;
        // Siguientes 20 m³ (de 51 a 70)
        importeTotal += 20 * TARIFA_BLOQUE_2;
        // Los m³ que excedan de 70
        let excedente = metrosCubicos - LIMITE_BLOQUE_2;
        importeTotal += excedente * TARIFA_BLOQUE_3;
    }
    
    return importeTotal;
};

// Validación
export const validarMetrosCubicos = (metros) => {
    if(isNaN(metros)){
        return { valido: false, mensaje: 'Por favor ingrese un valor numérico válido' };
    }
    
    if (metros < 0){
        return { valido: false, mensaje: 'Los metros cúbicos no pueden ser negativos' };
    }
    
    return { valido: true };
};

//-------------------------------------Ejercicio 18 : -----------------------------------------------

export const calcularTasaSubsuelo = (importeBase) =>{
    return importeBase * 0.03;
};

//validacion:
export const validarImporteBaseFiscalizacion = (importeBase) => {
    if(isNaN(importeBase)){
        return { valido: false, mensaje: 'Por favor ingrese un importe valido'};
    };
    if(importeBase<=0){
        return { valido: false, mensaje: 'El importe debe ser mayor a 0 '};
    };

    return {valido: true};
};

//-------------------------------------Ejercicio 19 : -----------------------------------------------

export const calcularTasaFiscalizacion = (importeTasaFiscalizacion) =>{
    return importeTasaFiscalizacion * ((importeTasaFiscalizacion * 1,2 )/100);
};

//-------------------------------------Ejercicio 20 : -----------------------------------------------
export const calcularDosisInsulina = (nivelGlucosa, pesoCorporal, tipoDiabetes) => {
    let dosisInsulina = 0;
    
    if (tipoDiabetes === "tipo1") {
        // Tipo 1: 50% del peso
        dosisInsulina = pesoCorporal * 0.5;
        
        // + 50% de la glucosa solo si es mayor a 180
        if (nivelGlucosa > 180) {
            dosisInsulina += nivelGlucosa * 0.5;
        }
    } 
    else if (tipoDiabetes === "tipo2") {
        // Tipo 2: 20% del peso
        dosisInsulina = pesoCorporal * 0.2;
        
        // + 50% de la glucosa solo si es mayor a 180
        if (nivelGlucosa > 180) {
            dosisInsulina += nivelGlucosa * 0.5;
        }
    }
    
    return dosisInsulina;
};

// Validacion
export const validarDatosInsulina = (nivelGlucosa, pesoCorporal, tipoDiabetes) => {
    if(isNaN(nivelGlucosa) || isNaN(pesoCorporal)){
        return { valido: false, mensaje: 'Por favor ingrese valores numéricos válidos' };
    }
    
    if (nivelGlucosa <= 0 || pesoCorporal <= 0){
        return { valido: false, mensaje: 'Los valores deben ser mayores a 0' };
    }
    
    if (!tipoDiabetes || tipoDiabetes === ""){
        return { valido: false, mensaje: 'Por favor seleccione el tipo de diabetes' };
    }
    
    return { valido: true };
};

//-------------------------------------Ejercicio 21 : -----------------------------------------------


export const contarVocales = (cadena) => {
    let contadorVocales = 0;
    
    // Recorrer cada carácter de la cadena
    for (let i = 0; i < cadena.length; i++) {
        const caracter = cadena[i];
        
        // Verificar si el carácter es una vocal (mayúscula o minúscula)
        if (caracter === 'a' || caracter === 'A' ||
            caracter === 'e' || caracter === 'E' ||
            caracter === 'i' || caracter === 'I' ||
            caracter === 'o' || caracter === 'O' ||
            caracter === 'u' || caracter === 'U') {
            contadorVocales++;
        }
    }
    
    return contadorVocales;
};

// Validación 
export const validarTexto = (texto) => {
    if (!texto || texto.trim() === "") {
        return { valido: false, mensaje: 'Por favor ingrese un texto' };
    }
    
    return { valido: true };
};

//-------------------------------------Ejercicio 22 : -----------------------------------------------

export const contarConsonantes = (cadena) => {
    let contadorConsonantes = 0;
    
    // Recorrer cada carácter de la cadena
    for (let i = 0; i < cadena.length; i++) {
        const caracter = cadena[i];
        
        // Verificar si es una letra (mayúscula o minúscula)
        const esLetra = (caracter >= 'a' && caracter <= 'z') || (caracter >= 'A' && caracter <= 'Z');
        
        // Verificar si NO es vocal
        const esVocal = (caracter === 'a' || caracter === 'A' ||
                        caracter === 'e' || caracter === 'E' ||
                        caracter === 'i' || caracter === 'I' ||
                        caracter === 'o' || caracter === 'O' ||
                        caracter === 'u' || caracter === 'U');
        
        // Si es letra pero NO es vocal, entonces es consonante
        if (esLetra && !esVocal) {
            contadorConsonantes++;
        }
    }
    
    return contadorConsonantes;
};


//-------------------------------------Ejercicio 23 : -----------------------------------------------

export const tieneDosLetrasS = (palabra) => {
    let contadorS = 0;
    
    // Recorrer cada carácter de la palabra
    for (let i = 0; i < palabra.length; i++) {
        const caracter = palabra[i];
        
        // Verificar si es la letra 's' o 'S'
        if (caracter === 's' || caracter === 'S') {
            contadorS++;
            
            // Si ya encontramos 2, podemos retornar true inmediatamente
            if (contadorS >= 2) {
                return true;
            }
        }
    }
    
    // Si terminamos el ciclo y no llegamos a 2, retornamos false
    return false;
};

//-------------------------------------Ejercicio 24 : -----------------------------------------------


export const tieneTresEspacios = (cadena) => {
    let contadorEspacios = 0;
    
    // Recorrer cada carácter de la cadena
    for (let i = 0; i < cadena.length; i++) {
        const caracter = cadena[i];
        
        // Verificar si es un espacio en blanco
        if (caracter === ' ') {
            contadorEspacios++;
            
            // Si ya encontramos 3 espacios, interrumpimos con break
            if (contadorEspacios === 3) {
                return true;
            }
        }
    }
    
    // Si terminamos el ciclo y no llegamos a 3 espacios, retornamos false
    return false;
};


//-------------------------------------Ejercicio 25 : -----------------------------------------------

export const noContieneNumeros = (cadena) => {
    // Recorrer la cadena
    for (let i = 0; i < cadena.length; i++) {
        const caracter = cadena[i];
        
        // Verificar si el carácter es un dígito (0-9)
        if (caracter >= '0' && caracter <= '9') {
            // Si encontramos un número retornamos false
            return false;
        }
    }
    
    // Si terminamos el ciclo sin encontrar números, retornamos true
    return true;
};

