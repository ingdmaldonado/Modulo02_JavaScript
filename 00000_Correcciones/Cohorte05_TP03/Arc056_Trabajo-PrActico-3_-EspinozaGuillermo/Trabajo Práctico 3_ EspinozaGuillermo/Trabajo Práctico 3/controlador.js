import { calcularPrecioVenta, 
    calcularPromedio, 
    calificarNota, 
    validarDatos, 
    validarNotaPromedio, 
    validarNotas,
    calcularSobreTasa,
    validarDatosImpuesto,
    calcularImporteAgua,
    validarMetrosCubicos,
    calcularTasaSubsuelo,
    validarImporteBaseFiscalizacion,
    calcularTasaFiscalizacion,
    validarDatosInsulina,
    calcularDosisInsulina,
    contarVocales,
    validarTexto,
    contarConsonantes,
    tieneDosLetrasS,
    tieneTresEspacios,
    noContieneNumeros
    } from './modelo.js';

//-----------------------------------------PUNTO 13 ----------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const inputImporteCompra = document.getElementById('importeCompra');
    const inputMargenGanancia = document.getElementById('margenGanancia');
    const btnCalcularGanancia = document.getElementById('btnCalcularGanancia');
    const ResultadoPrecioVenta = document.getElementById('resultadoPrecioVenta');

    btnCalcularGanancia.addEventListener('click', () => {
        const importeCompra = parseFloat(inputImporteCompra.value);
        const margenGanancia = parseFloat(inputMargenGanancia.value);

        // Validar usando el modelo
        const validacionComprayGanancia = validarDatos(importeCompra, margenGanancia);
        if (!validacionComprayGanancia.valido) {
            ResultadoPrecioVenta.innerHTML = `<p style="color: red;">${validacionComprayGanancia.mensaje}</p>`;
            return;
        }

        // Calcular usando el modelo
        const precioVenta = calcularPrecioVenta(importeCompra, margenGanancia);
        
        // Mostrar resultado (esto SÍ debe estar en el controlador)
        ResultadoPrecioVenta.innerHTML = `<p style="color: green; font-size: 1.2em;"><strong>Precio de venta:</strong> $${precioVenta.toFixed(2)}</p>`;
    });
//-----------------------------------------PUNTO 14 ----------------------------------------

    const inputNota1 = document.getElementById('nota1');
    const inputNota2 = document.getElementById('nota2');
    const inputNota3 = document.getElementById('nota3');
    const btnCalcularPromedios = document.getElementById('btnCalcularPromedio');
    const resultadoPromedio = document.getElementById('resultadoPromedio');

    btnCalcularPromedios.addEventListener('click', ()=>{
        const nota1 = parseFloat(inputNota1.value);
        const nota2 = parseFloat(inputNota2.value);
        const nota3 = parseFloat(inputNota3.value);

        //validar notas
        const validacionNotas = validarNotas (nota1, nota2, nota3);
        if(!validacionNotas.valido){
            resultadoPromedio.innerHTML = `<p style="color: red;">${validacionNotas.mensaje}</p>`;
            return;
        };

        //calcular promedio:
        const promedioNotas = calcularPromedio(nota1, nota2, nota3);

        //mostrar resultados:
        resultadoPromedio.innerHTML = `<p style="color: blue; font-size: 1.2em;"><strong>Promedio:</strong> ${promedioNotas.toFixed(2)}</p>`;
    });

//-----------------------------------------PUNTO 15 ----------------------------------------

    const inputNotaPromedio = document.getElementById('notaPromedio');
    const btnCalificarNota = document.getElementById('btnCalificacion');
    const resultadoCalificacion = document.getElementById('clasificacionPromedio');

    btnCalificarNota.addEventListener('click', () =>{
        const notaPromedio = parseFloat(inputNotaPromedio.value);

        //validar nota
        const validacionNotaPromedio = validarNotaPromedio (notaPromedio);
        if(!validacionNotaPromedio.valido){
            resultadoCalificacion.innerHTML = `<p style="color: red;">${validacionNotaPromedio.mensaje}</p>`;
            return;
        };

        //obtener la calificacion:
        const clasificacionPromedio = calificarNota (notaPromedio);

        // Definir color según calificación
        let color = 'black';
        if (clasificacionPromedio === 'Desaprobado') color = 'red';
        else if (clasificacionPromedio === 'Aprobado') color = 'orange';
        else if (clasificacionPromedio=== 'Muy Bueno') color = 'blue';
        else if (clasificacionPromedio === 'Excelente') color = 'green';

        resultadoCalificacion.innerHTML = `<p style="color: ${color}; font-size: 1.2em;"><strong>Calificación:</strong> ${clasificacionPromedio}</p>`;
    });

//-----------------------------------------PUNTO 16 ----------------------------------------
    const inputImporteBase = document.getElementById('importeBase');
    const selectTipoBebida = document.getElementById('tipoBebida');
    const btnCalcularImpuesto = document.getElementById('btnCalcularImpuesto');
    const resultadoImpuesto = document.getElementById('resultadoImpuesto');

    btnCalcularImpuesto.addEventListener('click', () => {
        const importeBase = parseFloat(inputImporteBase.value);
        const tipoBebida = selectTipoBebida.value;

        // Validar datos
        const validacionImpuesto = validarDatosImpuesto(importeBase, tipoBebida);
        if (!validacionImpuesto.valido) {
            resultadoImpuesto.innerHTML = `<p style="color: red;">${validacionImpuesto.mensaje}</p>`;
            return;
        }

        // Calcular sobretasa
        const sobreTasa = calcularSobreTasa(importeBase, tipoBebida);
        const importeTotalImpuesto = importeBase + sobreTasa;
        
        // Mostrar resultado
        resultadoImpuesto.innerHTML = `
            <p><strong>Importe base:</strong> $${importeBase.toFixed(2)}</p>
            <p style="color: orange;"><strong>Sobretasa (impuesto):</strong> $${sobreTasa.toFixed(2)}</p>
            <p style="color: green; font-size: 1.2em;"><strong>Importe total:</strong> $${importeTotalImpuesto.toFixed(2)}</p>
        `;
    });

//-----------------------------------------PUNTO 17 ----------------------------------------
    const inputMetrosCubicos = document.getElementById('metrosCubicos');
    const btnCalcularAgua = document.getElementById('btnCalcularAgua');
    const resultadoAgua = document.getElementById('resultadoAgua');

    btnCalcularAgua.addEventListener('click', () => {
        const metrosCubicos = parseFloat(inputMetrosCubicos.value);

        // Validar datos
        const validacionMetrosCubicos = validarMetrosCubicos(metrosCubicos);
        if (!validacionMetrosCubicos.valido) {
            resultadoAgua.innerHTML = `<p style="color: red;">${validacionMetrosCubicos.mensaje}</p>`;
            return;
        }

        // Calcular importe
        const importeTotalAgua = calcularImporteAgua(metrosCubicos);
        
        // Determinar mensaje según consumo
        let mensaje = '';
        let color = 'green';
        
        if (metrosCubicos <= 50) {
            mensaje = '(Consumo mínimo: se facturan 50 m³)';
            color = 'blue';
        } else if (metrosCubicos <= 70) {
            mensaje = '(Consumo moderado)';
            color = 'orange';
        } else {
            mensaje = '(Consumo excesivo - Bloque de castigo)';
            color = 'red';
        }
        
        // Mostrar resultado
        resultadoAgua.innerHTML = `
            <p><strong>Consumo:</strong> ${metrosCubicos.toFixed(2)} m³</p>
            <p style="color: ${color}; font-size: 1.2em;"><strong>Importe a pagar:</strong> $${importeTotalAgua.toFixed(2)}</p>
            <p style="color: gray; font-size: 0.9em;">${mensaje}</p>
        `;
    });


//-----------------------------------------PUNTO 18 ----------------------------------------

    const inputImporteBaseSubsuelo = document.getElementById('importeBaseSubsuelo');
    const btnCalcularSubsuelo = document.getElementById('btnCalcularTasaSubsuelo');
    const resultadoSubsuelo = document.getElementById('resultadoTasaSubsuelo');
    
    btnCalcularSubsuelo.addEventListener('click', () =>{
        const importeBaseSubsuelo = parseFloat(inputImporteBaseSubsuelo.value);

        //validar:
        const validacionImporteBaseSubsuelo = validarImporteBaseFiscalizacion(importeBaseSubsuelo);
        if(!validacionImporteBaseSubsuelo.valido){
            resultadoSubsuelo.innerHTML = `<p style="color: red;">${validacionImporteBaseSubsuelo.mensaje}</p>`;
            return;
        };

        //calcular tasa subsuelo
        const tasaSubsuelo = calcularTasaSubsuelo (importeBaseSubsuelo);
        const importeTotalBaseSubsuelo = importeBaseSubsuelo + tasaSubsuelo;

        //mostrar:
        resultadoSubsuelo.innerHTML = `
            <p><strong>Importe base:</strong> $${importeBaseSubsuelo.toFixed(2)}</p>
            <p style="color: orange;"><strong>Tasa de Subsuelo (3%):</strong> $${tasaSubsuelo.toFixed(2)}</p>
            <p style="color: green; font-size: 1.2em;"><strong>Importe total:</strong> $${importeTotalBaseSubsuelo.toFixed(2)}</p>`;

    });

//-----------------------------------------PUNTO 19 ----------------------------------------

    const inputImporteBaseENRE = document.getElementById('importeTasaFiscalizacion');
    const btnCalcularENRE = document.getElementById('btnCalcularTasaFiscaliacion');
    const resultadoENRE = document.getElementById('resultadoTasaFiscalizacion');

    btnCalcularENRE.addEventListener('click', () =>{
        const importeBaseENRE = parseFloat (inputImporteBaseENRE.value);

        //validar 
        const validacionImporteBaseENRE = validarImporteBaseFiscalizacion (importeBaseENRE);
        if(!validacionImporteBaseENRE.valido){
            resultadoENRE.innerHTML = `<p style="color: red;">${validacion.mensaje}</p>`;
            return;
        };
        
        //calcular tasa:
        const tasaENRE = calcularTasaFiscalizacion(importeBaseENRE);
        const importeTotalENRE = importeBaseENRE + tasaENRE;

        //mostrar:
        resultadoENRE.innerHTML =  `<p><strong>Importe base:</strong> $${importeBaseENRE.toFixed(2)}</p>
            <p style="color: orange;"><strong>Tasa ENRE (1.2%):</strong> $${tasaENRE.toFixed(2)}</p>
            <p style="color: green; font-size: 1.2em;"><strong>Importe total:</strong> $${importeTotalENRE.toFixed(2)}</p>`;
    });

//-----------------------------------------PUNTO 20 ----------------------------------------

    const inputNivelGlucosa = document.getElementById('nivelGlucosa');
    const inputPesoCorporal = document.getElementById('pesoCorporal');
    const selectTipoDiabetes = document.getElementById('tipoDiabetes');
    const btnCalcularInsulina = document.getElementById('btnCalcularInsulina');
    const resultadoInsulina = document.getElementById('resultadoInsulina');

    btnCalcularInsulina.addEventListener('click', () => {
        const nivelGlucosa = parseFloat(inputNivelGlucosa.value);
        const pesoCorporal = parseFloat(inputPesoCorporal.value);
        const tipoDiabetes = selectTipoDiabetes.value;

        // Validar datos
        const validacionInsulina = validarDatosInsulina(nivelGlucosa, pesoCorporal, tipoDiabetes);
        if (!validacionInsulina.valido) {
            resultadoInsulina.innerHTML = `<p style="color: red;">${validacionInsulina.mensaje}</p>`;
            return;
        }

        // Calcular dosis de insulina
        const dosisInsulina = calcularDosisInsulina(nivelGlucosa, pesoCorporal, tipoDiabetes);
        
        // Determinar nivel de glucosa
        let nivelGlucosaTexto = '';
        let colorGlucosa = 'green';
        
        if (nivelGlucosa < 70) {
            nivelGlucosaTexto = 'Hipoglucemia (bajo)';
            colorGlucosa = 'blue';
        } else if (nivelGlucosa >= 70 && nivelGlucosa <= 180) {
            nivelGlucosaTexto = 'Normal';
            colorGlucosa = 'green';
        } else {
            nivelGlucosaTexto = 'Hiperglucemia (alto)';
            colorGlucosa = 'red';
        }
        
        const tipoDiabetesTexto = tipoDiabetes === "tipo1" ? "Tipo 1" : "Tipo 2";
        
        // Mostrar resultado
        resultadoInsulina.innerHTML = `
            <p><strong>Glucosa:</strong> ${nivelGlucosa.toFixed(1)} mg/dL 
            <span style="color: ${colorGlucosa};">(${nivelGlucosaTexto})</span>
            </p>
            <p><strong>Peso:</strong> ${pesoCorporal.toFixed(1)} kg</p>
            <p><strong>Diabetes:</strong> ${tipoDiabetesTexto}</p>
            <p style="color: blue; font-size: 1.3em; margin-top: 15px;">
                <strong>Dosis recomendada:</strong> ${dosisInsulina.toFixed(2)} unidades
            </p>
        `;
    });


//-----------------------------------------PUNTO 21 ----------------------------------------

    const inputTextoVocales = document.getElementById('textoVocales');
    const btnContarVocales = document.getElementById('btnContarVocales');
    const resultadoVocales = document.getElementById('resultadoVocales');

    btnContarVocales.addEventListener('click', () => {
        const texto = inputTextoVocales.value;

        // Validar datos
        const validacionTexto = validarTexto(texto);
        if (!validacionTexto.valido) {
            resultadoVocales.innerHTML = `<p style="color: red;">${validacionTexto.mensaje}</p>`;
            return;
        }

        // Contar vocales
        const cantidadVocales = contarVocales(texto);
        
        // Mostrar resultado
        resultadoVocales.innerHTML = `
            <p><strong>Texto ingresado:</strong> "${texto}"</p>
            <p><strong>Total de caracteres:</strong> ${texto.length}</p>
            <p style="color: green; font-size: 1.2em;">
                <strong>Cantidad de vocales:</strong> ${cantidadVocales}
            </p>`;
    });


//-----------------------------------------PUNTO 22 ----------------------------------------

    const inputTextoConsonantes = document.getElementById('textoConsonantes');
    const btnContarConsonantes = document.getElementById('btnContarConsonantes');
    const resultadoConsonantes = document.getElementById('resultadoConsonantes');

    btnContarConsonantes.addEventListener('click', () => {
        const texto = inputTextoConsonantes.value;

        // Validar datos (reutilizo la validación del punto 21)
        const validacionTexto2 = validarTexto(texto);
        if (!validacionTexto2.valido) {
            resultadoConsonantes.innerHTML = `<p style="color: red;">${validacionTexto2.mensaje}</p>`;
            return;
        }

        // Contar consonantes
        const cantidadConsonantes = contarConsonantes(texto);
        
        // Mostrar resultado
        resultadoConsonantes.innerHTML = `
            <p> <strong>Consonantes:</strong> ${cantidadConsonantes} </p> `;
    });

//-----------------------------------------PUNTO 23 ----------------------------------------

    const inputPalabraS = document.getElementById('palabraS');
    const btnVerificarS = document.getElementById('btnVerificarS');
    const resultadoS = document.getElementById('resultadoS');

    btnVerificarS.addEventListener('click', () => {
        const palabra = inputPalabraS.value;

        // Validar datos
        const validacionTexto3 = validarTexto(palabra);
        if (!validacionTexto3.valido) {
            resultadoS.innerHTML = `<p style="color: red;">${validacionTexto3.mensaje}</p>`;
            return;
        }

        // Verificar si tiene al menos dos letras S
        const tieneDosSs = tieneDosLetrasS(palabra);
        
        
        // Mostrar resultado
        if (tieneDosSs) {
            resultadoS.innerHTML = `
                <p><strong>Palabra ingresada:</strong> "${palabra}"</p>
                <p style="color: green; font-size: 1.2em;">
                    <strong>✓ SÍ contiene al menos dos letras "S"</strong>
                </p>
            `;
        } else {
            resultadoS.innerHTML = `
                <p><strong>Palabra ingresada:</strong> "${palabra}"</p>
                <p style="color: red; font-size: 1.2em;">
                    <strong>✗ NO contiene al menos dos letras "S"</strong>
                </p>
            `;
        }
    });


//-----------------------------------------PUNTO 24 ----------------------------------------

    const inputTextoEspacios = document.getElementById('textoEspacios');
    const btnVerificarEspacios = document.getElementById('btnVerificarEspacios');
    const resultadoEspacios = document.getElementById('resultadoEspacios');

    btnVerificarEspacios.addEventListener('click', () => {
        const textoEspacio = inputTextoEspacios.value;

        // Validar datos
        const validacionTexto4 = validarTexto(textoEspacio);
        if (!validacionTexto4.valido) {
            resultadoEspacios.innerHTML = `<p style="color: red;">${validacionTexto4.mensaje}</p>`;
            return;
        }

        // Verificar si tiene al menos tres espacios
        const tieneTresEsp = tieneTresEspacios(textoEspacio);
        
        // Mostrar resultado
        if (tieneTresEsp) {
            resultadoEspacios.innerHTML = `
                <p><strong>Texto ingresado:</strong> "${textoEspacio}"</p>
                <p style="color: green; font-size: 1.2em;">
                    <strong>✓ SÍ contiene al menos tres espacios</strong>
                </p>
            `;
        } else {
            resultadoEspacios.innerHTML = `
                <p><strong>Texto ingresado:</strong> "${textoEspacio}"</p>
                <p style="color: red; font-size: 1.2em;">
                    <strong>✗ NO contiene al menos tres espacios</strong>
                </p>
            `;
        }
    });

//-----------------------------------------PUNTO 25 ----------------------------------------

    const inputTextoNumeros = document.getElementById('textoNumeros');
    const btnVerificarNumeros = document.getElementById('btnVerificarNumeros');
    const resultadoNumeros = document.getElementById('resultadoNumeros');

    btnVerificarNumeros.addEventListener('click', () => {
        const textoNumeros = inputTextoNumeros.value;

        // Validar datos
        const validacionTexto5 = validarTexto(textoNumeros);
        if (!validacionTexto5.valido) {
            resultadoNumeros.innerHTML = `<p style="color: red;">${validacionTexto5.mensaje}</p>`;
            return;
        }

        // Verificar si NO contiene números
        const noTieneNumeros = noContieneNumeros(textoNumeros);
        
        // Mostrar resultado
        if (noTieneNumeros) {
            resultadoNumeros.innerHTML = `
                <p><strong>Texto ingresado:</strong> "${textoNumeros}"</p>
                <p style="color: green; font-size: 1.2em;">
                    <strong>✓ NO contiene dígitos numéricos</strong>
                </p>
                <p style="color: gray; font-size: 0.9em;">El texto es válido (solo letras y símbolos)</p>
            `;
        } else {
            resultadoNumeros.innerHTML = `
                <p><strong>Texto ingresado:</strong> "${textoNumeros}"</p>
                <p style="color: red; font-size: 1.2em;">
                    <strong>✗ SÍ contiene dígitos numéricos</strong>
                </p>
                <p style="color: gray; font-size: 0.9em;">Se encontró al menos un número (0-9)</p>
            `;
        }
    });


});