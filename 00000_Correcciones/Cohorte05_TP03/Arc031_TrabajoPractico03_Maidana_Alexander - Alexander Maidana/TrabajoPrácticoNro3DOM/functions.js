/* Formato de moneda argentina para salida que involucren importes */
export const formatoARS = Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' });


/*********  Ejercicio Nro.13 **********/
export const calcularPrecioVenta = (importeProducto, margenGanancia) => {
    return importeProducto / (1 - (margenGanancia / 100));
};

/************ Ejercicio Nro.14 ************/

export const calcularPromedioNotas = (nota1, nota2, nota3) => {
    return (nota1 + nota2 + nota3) / 3;
};

/*************  Ejercicio Nro.15 *************/

export const clasificarNotaPromedio = (notaPromedio) => {
    let clasificacion;
    if (notaPromedio <= 4) {
        clasificacion = 'Desaprobado';
    } else if (notaPromedio > 4 && notaPromedio <= 7) {
        clasificacion = 'Aprobado';
    } else if (notaPromedio > 7 && notaPromedio < 10) {
        clasificacion = 'Muy Bueno';
    } else {
        clasificacion = 'Excelente';
    }
    return clasificacion;
};

/***************** Ejercicio Nro. 16 ***************/

export const calcularSobreTasa = (importeBebida, tipoBebida) => {
    let tasa = 0;
    switch (tipoBebida) {
        case 1: // Agua en envases plásticos
            tasa = 0.005; // 5‰ (cinco por mil)
            break;
        case 2: // Agua en envases retornables
            tasa = 0.001; // 1‰ (uno por mil)
            break;
        case 3: // Gaseosa azucarada plástica
            tasa = 0.007; // 7‰ (siete por mil)
            break;
        case 4: // Gaseosa azucarada retornable
            tasa = 0.002; // 2‰ (dos por mil)
            break;
        case 5: // Bebida energética
            tasa = 0.015; // 15‰ (quince por mil)
            break;
        case 6: // Otra bebida
            tasa = 0.001; // 1‰ (uno por mil)
            break;
    }
    return importeBebida * tasa;
};

/******************* Ejercicio Nro. 17 ********************/

export const calcularImporteAgua = (metrosCubicos) => {
    let importeAPagar = 0;
    if (metrosCubicos <= 50) {
        importeAPagar = 50 * 350.00;
    } else if (metrosCubicos > 50 && metrosCubicos <= 70) {
        importeAPagar = (50 * 350.00) + ((metrosCubicos - 50) * 555.20);
    } else {
        importeAPagar = (50 * 350.00) + (20 * 555.20) + ((metrosCubicos - 70) * 1552.20);
    }
    return importeAPagar;
};

/********************* Ejercicio Nro. 18 *******************/

export const calcularTasaSubsuelo = (importeFactura) => {
    return importeFactura * 0.3;
};

/******************* Ejericio Nro.19 ********************/

export const calcularTasaFiscalizacion = (importeFactura) => {
    return importeFactura * 0.12;
};

/************************ Ejercicio Nro. 20 **********************/

export const calcularDosisInsulina = (pesoCorporal, nivelGlucosa, tipoDiavetes) => {
    let dosisInsulina;
    if (tipoDiavetes === 1) {
        if (nivelGlucosa > 180)
            dosisInsulina = (pesoCorporal * 0.50) + (nivelGlucosa * 0.50);
        else
            dosisInsulina = pesoCorporal * 0.50;
    }
    if (tipoDiavetes === 2) {
        if (nivelGlucosa > 180)
            dosisInsulina = (pesoCorporal * 0.20) + (nivelGlucosa * 0.50);
        else
            dosisInsulina = pesoCorporal * 0.20;
    }
    return dosisInsulina;
};

/******************** Ejercicio nro 21 ***********************/
export const contarVocales = (cadena) => {
    let cantidadVocales = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] >= 'A' && cadena[i] <= 'z') {
            if (cadena[i] <= 'Z' || cadena[i] >= 'a') {
                if (
                    cadena[i] === 'a' ||
                    cadena[i] === 'e' ||
                    cadena[i] === 'i' ||
                    cadena[i] === 'o' ||
                    cadena[i] === 'u' ||
                    cadena[i] === 'A' ||
                    cadena[i] === 'E' ||
                    cadena[i] === 'I' ||
                    cadena[i] === 'O' ||
                    cadena[i] === 'u'
                ) {
                    cantidadVocales++;
                }
            }
        }
    }
    return cantidadVocales;
};

/********************** Ejercicio Nro. 22 *********************/

/* Como pide el enunciado, cualquier carácteres que no se vocal se considera
una consonante */
export const contarConsonantes = (cadena) => {
    let cantidadConsonantes = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (
            cadena[i] !== 'a' &&
            cadena[i] !== 'e' &&
            cadena[i] !== 'i' &&
            cadena[i] !== 'o' &&
            cadena[i] !== 'u' &&
            cadena[i] !== 'A' &&
            cadena[i] !== 'E' &&
            cadena[i] !== 'I' &&
            cadena[i] !== 'O' &&
            cadena[i] !== 'U'
        ) {
            cantidadConsonantes++;
        }
    }
    return cantidadConsonantes;
};

/************************** Ejercicio Nro. 23 **************************/

export const determinarLetrasS = (cadena) => {
    let contieneDosS = false;
    let contadorS = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === 's' || cadena[i] === 'S') {
            contadorS++;
        }
        // Si el contador de letras s llega a dos, se le asigna el tamaño de la cadena a i para que salga del bucle for
        if (contadorS >= 2) {
            contieneDosS = true;
            i = cadena.length;
        }
    }
    return contieneDosS;
};

/********************** Ejercicio Nro. 24 ************************/

export const determinarEspaciosEnBlanco = (cadena) => {
    let tresEspacios = false;
    let espacios = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === ' ') {
            espacios++;
        }
        // Si el contador de espacios en blancos llega a tres, saldrá del bucle for con la instrucción break
        if (espacios >= 3) {
            tresEspacios = true;
            break;
        }
    }
    return tresEspacios;
};

/*********************** Ejercicio Nro. 25 *******************************/

export const determinarSiNoContieneNumero = (cadena) => {
    let noContieneNumero = true;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] >= '0' && cadena[i] <= '9') {
            noContieneNumero = false;
            break;
        }
    }
    return noContieneNumero;
};


/* Valida que no se deje el input vacio */
export const validarEntradaVacia = (input) => {
    let entradaVacia = false;
    /* El método .trim() borra los caracteres vacios antes y despues de un string,
    así si se ingresan solo espacios cuenta como input vacio */
    if (input.value.trim() === "") {
        entradaVacia = true;
    }
    return entradaVacia;
}

/* validación para entradas numéricas, valida si es un número y si está dentro 
del rango especificado  */
export const esNumeroValido = (valorInput, minimo, maximo) => {
    let entradaValida = true;
    valorInput = Number(valorInput);

    if (isNaN(valorInput)) {
        entradaValida = false;
    } else {
        if (valorInput < minimo) {
                entradaValida = false;
        }

        if (maximo !== null) {
            if (valorInput > maximo) {
                entradaValida = false;
            }
        }
    }
    return entradaValida;
}

/***********************************************
************** PROCEDIMIENTOS ******************
************************************************/

/* Muestra el contenedor de los resultados */
export const mostrarResultados = (id) => {
    const contenedorResultado = document.querySelector(id)
    contenedorResultado.classList.remove('hidden');
    contenedorResultado.classList.add('flex');
}

/* oculta los textos de resultado para los ejercicios del 21 al 25 */
export const ocultarTextosResultado = () => {
    const textosResultado = document.querySelectorAll('.texto-resultado');
    for (const elemento of textosResultado) {
        elemento.classList.add('hidden');
    }
};

/* Muestra el mensaje de error  */
export const mostrarErrorInput = (input, mensajeError) => {
    const textoMensajeError = input.nextElementSibling;
    textoMensajeError.textContent = mensajeError;
    textoMensajeError.classList.remove('hidden');
}

/* Oculta dl mensaje de error */
export const ocultarErrorInput = (input) => {
    const textoMensajeError = input.nextElementSibling;
    textoMensajeError.classList.add('hidden');
}

/* Muestra el texto del resltado */
export const mostrarTextoResultado = (id, mensaje) => {
    const elementoResultado = document.querySelector(id);
    elementoResultado.textContent = mensaje;
    elementoResultado.classList.remove('hidden');
}