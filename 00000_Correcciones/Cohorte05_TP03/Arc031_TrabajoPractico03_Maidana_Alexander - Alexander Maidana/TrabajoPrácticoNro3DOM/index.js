/**************************
 * Imports de Funciones *
***************************/

import {
    calcularPrecioVenta, calcularPromedioNotas, clasificarNotaPromedio, calcularSobreTasa, 
    calcularImporteAgua, calcularTasaSubsuelo, calcularTasaFiscalizacion, calcularDosisInsulina, 
    contarVocales, contarConsonantes, determinarLetrasS, determinarEspaciosEnBlanco,
    determinarSiNoContieneNumero, validarEntradaVacia, esNumeroValido, mostrarResultados,
    mostrarTextoResultado, mostrarErrorInput, ocultarErrorInput, ocultarTextosResultado
} from "./functions.js";

import { formatoARS } from "./functions.js";


window.onload = () => {

    /********************* Ejercicio Nro 15 **********************/

    const btnCalcularPrecioVenta = document.querySelector('#btn-calcular-precio-venta');
    btnCalcularPrecioVenta.addEventListener('click', () => {

        const inputImporteProducto = document.querySelector('#importe-producto');
        const inputMargenGanancia = document.querySelector('#margen-ganancia');

        /* Ocultar los mensajes de error */
        ocultarErrorInput(inputImporteProducto);
        ocultarErrorInput(inputMargenGanancia);

        let huboError = false;
        let entradaVacia = false;

        /* Valida que el input de importe proudcto no esté vacio */
        if (validarEntradaVacia(inputImporteProducto)) {
            mostrarErrorInput(inputImporteProducto, 'Completar este campo');
            entradaVacia = true;
        } else {
            /* valida que el input de importe producto sea un número dentro del rango */
            if (!esNumeroValido(inputImporteProducto.value, 0.01, null)) {
                mostrarErrorInput(inputImporteProducto, 'El importe deber ser un número mayor a 0');
                huboError = true;
            }
        }

        /* Valida que el input de margen de ganancia no esté vacio */
        if (validarEntradaVacia(inputMargenGanancia)) {
            mostrarErrorInput(inputMargenGanancia, 'Completar este campo');
            entradaVacia = true;
        } else {
            /* Valida que el margen de ganancia sa un número dentro de rango no esté vacio */
            if (!esNumeroValido(inputMargenGanancia.value, 0, 100)) {
                mostrarErrorInput(inputMargenGanancia, 'El margen debe ser un número entre 0 y 100');
                huboError = true;
            }
        }

        /* Si en input no está vacio y no hubo error calcular y mostrar resultado */
        if (!entradaVacia && !huboError) {

            let precioDeVenta = calcularPrecioVenta(
                Number(inputImporteProducto.value),
                Number(inputMargenGanancia.value)
            );

            mostrarTextoResultado('#texto-precio-venta', formatoARS.format(precioDeVenta));
            mostrarResultados('#resultado-precio-venta');
        }
    });

    /********************** Ejercicio Nro 14 **********************/

    const btnCalcularPromedio = document.querySelector('#btn-calcular-promedio');
    btnCalcularPromedio.addEventListener('click', () => {

        const inputPrimeraNota = document.querySelector('#primera-nota');
        const inputSegundaNota = document.querySelector('#segunda-nota');
        const inputTerceraNota = document.querySelector('#tercera-nota');
        
        ocultarErrorInput(inputPrimeraNota);
        ocultarErrorInput(inputSegundaNota);
        ocultarErrorInput(inputTerceraNota);

        const notas = [inputPrimeraNota, inputSegundaNota, inputTerceraNota];

        let entradaVacia = false, huboError = false;

        for (let nota of notas) {
            if (validarEntradaVacia(nota)) {
                mostrarErrorInput(nota, 'Ingresar una nota');
                entradaVacia = true;
            } else {
                if (!esNumeroValido(nota.value, 0, 10)) {
                    mostrarErrorInput(nota, 'La nota debe ser un número entre 0 y 10');
                    huboError = true;
                }
            }
        }

        if (!entradaVacia && !huboError) {

            let promedioNotas = calcularPromedioNotas(
                Number(inputPrimeraNota.value),
                Number(inputSegundaNota.value),
                Number(inputTerceraNota.value)
            )

            mostrarTextoResultado('#texto-promedio-notas', promedioNotas.toFixed(2));
            mostrarResultados('#resultado-promedio-notas');
        }
    });

    /********************** Ejercicio Nro 15 ***********************/
    
    const btnClasificarNota = document.querySelector('#btn-clasificar-nota');
    btnClasificarNota.addEventListener('click', () => {

        const inputNotaPromedio = document.querySelector('#nota-promedio');
        
        ocultarErrorInput(inputNotaPromedio);

        let entradaVacia = false, huboError = false;

        if (validarEntradaVacia(inputNotaPromedio)) {
            mostrarErrorInput(inputNotaPromedio, 'Completar este campo');
            entradaVacia = true;
        } else {
            if (!esNumeroValido(inputNotaPromedio.value, 0, 10)) {
                mostrarErrorInput(inputNotaPromedio, 'La nota promedio de ser un número entre 0 y 10');
                huboError = true;
            }
        }

        if (!entradaVacia && !huboError) {

            let clasificacionNota = clasificarNotaPromedio(Number(inputNotaPromedio.value));

            mostrarTextoResultado('#texto-clasificacion-nota', clasificacionNota);
            mostrarResultados('#clasificacion-nota');
        }

    });

    /******************************** Ejercicio Nro 16  *******************************/
    
    const btnCalcularSobreTasa = document.querySelector('#btn-calcular-sobretasa');
    btnCalcularSobreTasa.addEventListener('click', () => {

        const inputImporteBebida = document.querySelector('#importe-bebida');
        const selectTipoBebida = document.querySelector('#tipo-bebida');

        ocultarErrorInput(inputImporteBebida);

        let entradaVacia = false, huboError = false;

        if (validarEntradaVacia(inputImporteBebida)) {
            mostrarErrorInput(inputImporteBebida, 'Completar este campo');
            entradaVacia = true;
        } else {
            if (!esNumeroValido(inputImporteBebida.value, 0.01, null)) {
                mostrarErrorInput(inputImporteBebida, 'El importe debe ser un número mayor a cero');
                huboError = true;
            }
        }

        if (!entradaVacia && !huboError) {

            let sobreTasa = calcularSobreTasa(
                Number(inputImporteBebida.value),
                Number(selectTipoBebida.value)
            );

            mostrarTextoResultado('#texto-sobretasa', formatoARS.format(sobreTasa));
            mostrarResultados('#resultado-sobretasa');
        }
    });


    /********************** Ejercicio Nro 17 **********************/

    const btnCalcularImporteAgua = document.querySelector('#btn-calcular-importe-agua');
    btnCalcularImporteAgua.addEventListener('click', () => {
        
        const inputMetrosCubicos = document.querySelector('#metros-cubicos');

        ocultarErrorInput(inputMetrosCubicos);

        let entradaVacia = false, huboError = false;

        if (validarEntradaVacia(inputMetrosCubicos)) {
            mostrarErrorInput(inputMetrosCubicos, 'Completar este campo');
            entradaVacia = true;
        } else {
            if (!esNumeroValido(inputMetrosCubicos.value, 0.01, null)) {
                mostrarErrorInput(inputMetrosCubicos, 'Los metros cúbicos deben ser un número mayor a 0');
                huboError = true;
            }
        }

        if (!entradaVacia && !huboError) {

            let importeAgua = calcularImporteAgua(Number(inputMetrosCubicos.value));

            mostrarTextoResultado('#texto-importe-agua', formatoARS.format(importeAgua));
            mostrarResultados('#importe-agua');
        }
    });

    /************************ Ejercicio Nro 18 y 19 *************************/
    
    const btnCalcularTasas = document.querySelector('#btn-calcular-tasas');
    btnCalcularTasas.addEventListener('click', () => {

        const inputImporteFactura = document.querySelector('#importe-factura');

        ocultarErrorInput(inputImporteFactura);

        let entradaVacia = false, huboError = false;

        if (validarEntradaVacia(inputImporteFactura)) {
            mostrarErrorInput(inputImporteFactura, 'Completar este campo');
            entradaVacia = true;
        } else {
            if (!esNumeroValido(inputImporteFactura.value, 0.01, null)) {
                mostrarErrorInput(inputImporteFactura, 'El importe debe ser un número mayor a 0');
                huboError = true;
            }
        }

        if (!entradaVacia && !huboError) {

            let tasaSubsuelo = calcularTasaSubsuelo(Number(inputImporteFactura.value));
            let tasaFiscalizacion = calcularTasaFiscalizacion(Number(inputImporteFactura.value));

            mostrarTextoResultado('#texto-tasa-subsuelo', formatoARS.format(tasaSubsuelo));
            mostrarTextoResultado('#texto-tasa-fiscalizacion', formatoARS.format(tasaFiscalizacion))
            mostrarResultados('#resultado-tasas');
        }
    });

    /******************* Ejercicio Nro 20 ********************/
    
    const btnCalcularDosisInsulina = document.querySelector('#btn-calcular-dosis-insulina');
    btnCalcularDosisInsulina.addEventListener('click', () => {

        const inputPesoCorporal = document.querySelector('#peso-corporal');
        const inputNivelGlucosa = document.querySelector('#nivel-glucosa');
        const radioDiabetesTipo1 = document.querySelector('#diavetes-tipo-1');
        const radioDiabetesTipo2 = document.querySelector('#diavetes-tipo-2');

        ocultarErrorInput(inputPesoCorporal);
        ocultarErrorInput(inputNivelGlucosa);

        let tipoDiabetes;
        if (radioDiabetesTipo1.checked) {
            tipoDiabetes = 1;
        } else if (radioDiabetesTipo2.checked) {
            tipoDiabetes = 2;
        }

        let entradaVacia = false, huboError = false;

        if (validarEntradaVacia(inputPesoCorporal)) {
            mostrarErrorInput(inputPesoCorporal, 'Ingresar el peso corporal');
            entradaVacia = true;
        } else {
            if (!esNumeroValido(inputPesoCorporal.value, 0.001, null)) {
                mostrarErrorInput(inputPesoCorporal, 'El peso corporal debe ser un número mayor a 0');
                huboError = true;
            }
        }

        if (validarEntradaVacia(inputNivelGlucosa)) {
            mostrarErrorInput(inputNivelGlucosa, 'Ingrese en nivel de glucosa');
            entradaVacia = true;
        } else {
            if (!esNumeroValido(inputNivelGlucosa.value, 0.001, null)) {
                mostrarErrorInput(inputNivelGlucosa, 'El nivel de glucosa debe ser un número mayor a 0');
                huboError = true;
            }
        }

        if (!entradaVacia && !huboError) {

            let dosisInsulina = calcularDosisInsulina(
                Number(inputPesoCorporal.value),
                Number(inputNivelGlucosa.value),
                tipoDiabetes
            );

            mostrarTextoResultado('#texto-dosis-insulina', dosisInsulina.toFixed(2));
            mostrarResultados('#dosis-insulina');
        }
    });

    const inputTexto = document.querySelector('#texto');
    let inputVacio = false;

    /* PARA EJERCICIOS DEL 21 AL 25 */
    /* Detectar si se presionó alguno de los botones y hacer visible el contenedor de los resultados */
    const divContenedorBotones = document.querySelector('#contenedor-botones');
    divContenedorBotones.addEventListener('click', (evento) => {

        ocultarErrorInput(inputTexto);

        if (validarEntradaVacia(inputTexto)) {
            mostrarErrorInput(inputTexto, 'Completar este campo');
            inputVacio = true;
        } else {
            if (evento.target.classList.contains('btn-grupo')) {
                mostrarResultados('#resultado-textos');
            }
        }
    });

    if (!inputVacio) {

        /************************** Ejercicio Nro 21 ***************************/

        const btnContarVocales = document.querySelector('#btn-contar-vocales');
        btnContarVocales.addEventListener('click', () => {

            let cantidadVocales = contarVocales(inputTexto.value);

            ocultarTextosResultado();
            mostrarTextoResultado(
                '#texto-cantidad-vocales',
                `Tiene ${cantidadVocales} vocales`
            );
        });

        /************************** Ejercicio Nro 22 ***************************/

        const btnContarConsonantes = document.querySelector('#btn-contar-consonantes');
        btnContarConsonantes.addEventListener('click', () => {

            let cantidadConsonantes = contarConsonantes(inputTexto.value);

            ocultarTextosResultado();
            mostrarTextoResultado(
                '#texto-cantidad-consonantes',
                `Tiene ${cantidadConsonantes} consonantes`
            );
        });

        /************************** Ejercicio Nro 23 ***************************/

        const btnComprobarLetrasS = document.querySelector('#btn-comprobar-letras-s');
        btnComprobarLetrasS.addEventListener('click', () => {

            let contieneTresLetrasS = determinarLetrasS(inputTexto.value);

            ocultarTextosResultado();
            if (contieneTresLetrasS) {
                mostrarTextoResultado(
                    '#texto-resultado-comprobar-letras-s',
                    'Contiene almenos 2 (dos) letras "s"'
                );                
            } else {
                mostrarTextoResultado(
                    '#texto-resultado-comprobar-letras-s',
                    'No contiene almenos 2 (dos) letras "s"'
                );
            }
        });


        /************************** Ejercicio Nro 24 ***************************/

        const btnComprobarEspaciosBlancos = document.querySelector('#btn-comprobar-espacios-blancos');
        btnComprobarEspaciosBlancos.addEventListener('click', () => {

            let tresEspaciosBlancos = determinarEspaciosEnBlanco(inputTexto.value);

            ocultarTextosResultado();
            if (tresEspaciosBlancos) {
                mostrarTextoResultado(
                    '#texto-resultado-espacios-blancos',
                    'Contine almenos 3 (tres) espacios el blanco'
                );
            } else {
                mostrarTextoResultado(
                    '#texto-resultado-espacios-blancos',
                    'No contiene almenos 3 (tres) espacios en blanco'
                );
            }
        });

        /************************** Ejercicio Nro 25 ***************************/

        const btnComprobarContienNumeros = document.querySelector('#btn-comprobar-contiene-numeros');
        btnComprobarContienNumeros.addEventListener('click', () => {

            let NocontieneNumeros = determinarSiNoContieneNumero(inputTexto.value);

            ocultarTextosResultado();
            if (NocontieneNumeros) {
                mostrarTextoResultado(
                    '#texto-resultado-contiene-numeros',
                    'No contiene números del 0 (cero) al 9 (nueve)'
                )
            } else {
                mostrarTextoResultado(
                    '#texto-resultado-contiene-numeros',
                    'Contiene almenos un número del 0 (cero) al 9 (nueve)'
                )
            }
        });
    }
};
