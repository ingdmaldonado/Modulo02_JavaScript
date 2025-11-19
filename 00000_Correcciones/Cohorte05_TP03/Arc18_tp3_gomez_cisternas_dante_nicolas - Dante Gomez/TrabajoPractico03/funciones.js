// Ejercicio 13

export const precioDeVenta = (precioCosto,margen) =>{

        let calculo = (precioCosto * margen)/100;
        
        let precioFinal = precioCosto + calculo;

        return precioFinal;
}

// Ejercicio 14

export const promedioDeNotas = (nota1,nota2,nota3)=>{

    return (nota1 + nota2 + nota3)/3;

}

// Ejercicio 15

export const notaATexto = (nota) => {
    
    const n = Number(nota);
    if (Number.isNaN(n)) return "Nota inválida";

    if (n === 10) return "Excelente";

    if (n > 7 && n < 10) return "Muy Bueno";

    if (n > 4 && n <= 7) return "Aprobado";

    if (n <= 4) return "Desaprobado";

    return "Nota fuera de rango";
}

// Ejercicio nro 16

export const calcularSobreTasa = (importeBase, tipoBebida) => {
    let tasa = 0;

    switch (tipoBebida){
        case 1: tasa = 0.005;
        break;
        case 2: tasa = 0.001;
        break;
        case 3: tasa = 0.007;
        break;
        case 4: tasa = 0.002;
        break;
        case 5: tasa = 0.015;
        break;
        default: tasa = 0.001;
    }
    return importeBase * tasa;

}

// Ejercicio nro 17

export const calcularImporteAgua = (consumo) => {
    const bloque1 = 50;
    const bloque2 = 20;
    const tarifa1 = 350;
    const tarifa2 = 555.2;
    const tarifa3 = 1552.2;
  
    let total = 0;
    if (consumo <= bloque1) {
      total = bloque1 * tarifa1;
    } 
    else if (consumo <= bloque1 + bloque2) {
      total = bloque1 * tarifa1 + (consumo - bloque1) * tarifa2;
    } 
    else {
      total = bloque1 * tarifa1 + bloque2 * tarifa2 + (consumo - bloque1 - bloque2) * tarifa3;
    }
    return total;
}

// Ejercicio nro 18 

export const calcularTasaDeSubsuelo = (importeBase) => {
    return importeBase * 0.03;
}

// Ejercicio nro 19 

export const calcularTasaFiscalizacionENRE = (importeBase) => {
    return importeBase * 0.012;
}

// Ejercicio nro 20

export const calcularDosisInsulina = (nivelGlucosa, pesoCorporal, tipoDiabetes) => {
    let dosis = 0;
    
    if (tipoDiabetes === 1) {
        // Tipo 1: 50% del peso + 50% de la glucosa (solo si glucosa > 180)
        dosis = pesoCorporal * 0.5;
        if (nivelGlucosa > 180) {
            dosis += nivelGlucosa * 0.5;
        }
    } else if (tipoDiabetes === 2) {
        // Tipo 2: 20% del peso + 50% de la glucosa (solo si glucosa > 180)
        dosis = pesoCorporal * 0.2;
        if (nivelGlucosa > 180) {
            dosis += nivelGlucosa * 0.5;
        }
    }
    
    return dosis;
}

// Ejercicio nro 21

export const contarVocales = (cadena) => {
    let contador = 0;
    
    for (let i = 0; i < cadena.length; i++) {
        let caracter = cadena[i];
        
        if (caracter === 'a' || caracter === 'A' ||
            caracter === 'e' || caracter === 'E' ||
            caracter === 'i' || caracter === 'I' ||
            caracter === 'o' || caracter === 'O' ||
            caracter === 'u' || caracter === 'U') {
            contador++;
        }
    }
    
    return contador;
}

// Ejercicio nro 22

export const contarConsonantes = (cadena) => {
    let contador = 0;
    
    for (let i = 0; i < cadena.length; i++) {
        let caracter = cadena[i];
        
        // para verificar si es una letra
        let esLetra = (caracter >= 'a' && caracter <= 'z') || 
                      (caracter >= 'A' && caracter <= 'Z');
        
        // para verificar si NO es una vocal
        let esVocal = caracter === 'a' || caracter === 'A' ||
                      caracter === 'e' || caracter === 'E' ||
                      caracter === 'i' || caracter === 'I' ||
                      caracter === 'o' || caracter === 'O' ||
                      caracter === 'u' || caracter === 'U';
        
        // Si es letra y no es vocal, es una consonante
        if (esLetra && !esVocal) {
            contador++;
        }
    }
    
    return contador;
}

// Ejercicio nro 23

export const contieneDosS = (palabra) => {
    let contador = 0;
    
    for (let i = 0; i < palabra.length; i++) {
        let caracter = palabra[i];
        
        if (caracter === 's' || caracter === 'S') {
            contador++;
        }
    }
    
    return contador >= 2;
}

// Ejercicio nro 24

export const contieneTresEspacios = (cadena) => {
    let contador = 0;
    
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === ' ') {
            contador++;
            if (contador === 3) {
                break;
            }
        }
    }
    
    return contador >= 3;
}

// Ejercicio nro 25

export const noContieneDigitos = (cadena) => {
    let tieneDigito = false;
    
    for (let i = 0; i < cadena.length; i++) {
        let caracter = cadena[i];
        
        if (caracter >= '0' && caracter <= '9') {
            tieneDigito = true;
            break;
        }
    }
    
    return !tieneDigito;
}