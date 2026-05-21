
import {
    calcularPrecioVenta,
    calcularPromedio,
    obtenerCalificacion,
    calcularSobretasa,
    calcularImporteAgua,
    calcularTasaSubsuelo,
    calcularTasaENRE,
    calcularDosisInsulina,
    contarVocales,
    contarConsonantes,
    tieneDosSLetras,
    tieneTresEspacios,
    sinDigitos
} from './modelo.js';


// ─────────────────────────────────────────────────────────────────
//  ESTADO DE LA APLICACIÓN
// ─────────────────────────────────────────────────────────────────
const estadoAplicacion = {
    // Ejercicio 19
    importeCompra:    0,
    margenGanancia:   0,
    // Ejercicios 20 y 21
    nota1:            0,
    nota2:            0,
    nota3:            0,
    // Ejercicio 22
    importeBebida:    0,
    tipoBebida:       1,
    // Ejercicios 23-25
    metrosCubicos:    0,
    // Ejercicio 26
    glucosa:          0,
    pesoCorporal:     0,
    tipoDiabetes:     1,
    // Ejercicios 27 y 28
    cadena2728:       '',
    // Ejercicio 29
    palabra29:        '',
    // Ejercicio 30
    cadena30:         '',
    // Ejercicio 31
    cadena31:         ''
};


// ─────────────────────────────────────────────────────────────────
//  UTILIDADES
// ─────────────────────────────────────────────────────────────────

// Muestra un texto en el elemento resultado
const mostrarResultado = (id, texto) => {
    const el = document.getElementById(id);
    if (el) {
        el.textContent = texto;
        el.classList.remove('resultado-vacio');
        el.classList.add('resultado-activo');
    }
};

// Formatea número como moneda argentina
const formatearPesos = (numero) =>
    `$ ${numero.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;


// ─────────────────────────────────────────────────────────────────
//  PERSISTENCIA CON localStorage
// ─────────────────────────────────────────────────────────────────
const STORAGE_KEY = 'tp03_estado';

const guardarEstado = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(estadoAplicacion));
    alert('✅ Estado guardado en el navegador correctamente.');
};

const recuperarEstado = () => {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
        alert('⚠️ No hay ningún estado guardado todavía.');
        return;
    }
    const estadoGuardado = JSON.parse(data);
    // Copiar cada propiedad al estado actual
    Object.assign(estadoAplicacion, estadoGuardado);
    // Sincronizar inputs con el estado recuperado
    sincronizarInputs();
    alert('✅ Estado recuperado correctamente.');
};

// Sincroniza todos los inputs del DOM con el estado recuperado
const sincronizarInputs = () => {
    const asignar = (id, valor) => {
        const el = document.getElementById(id);
        if (el) el.value = valor;
    };
    asignar('inp-importe-compra', estadoAplicacion.importeCompra);
    asignar('inp-margen', estadoAplicacion.margenGanancia);
    asignar('inp-nota1', estadoAplicacion.nota1);
    asignar('inp-nota2', estadoAplicacion.nota2);
    asignar('inp-nota3', estadoAplicacion.nota3);
    asignar('inp-importe-bebida', estadoAplicacion.importeBebida);
    asignar('sel-tipo-bebida', estadoAplicacion.tipoBebida);
    asignar('inp-metros', estadoAplicacion.metrosCubicos);
    asignar('inp-glucosa', estadoAplicacion.glucosa);
    asignar('inp-peso', estadoAplicacion.pesoCorporal);
    asignar('sel-tipo-diabetes', estadoAplicacion.tipoDiabetes);
    asignar('inp-cadena-2728', estadoAplicacion.cadena2728);
    asignar('inp-palabra-29', estadoAplicacion.palabra29);
    asignar('inp-cadena-30', estadoAplicacion.cadena30);
    asignar('inp-cadena-31', estadoAplicacion.cadena31);
};


// ─────────────────────────────────────────────────────────────────
//  NAVEGACIÓN POR TABS
// ─────────────────────────────────────────────────────────────────
const initTabs = () => {
    const tabs = document.querySelectorAll('.tab-btn');
    const panels = document.querySelectorAll('.tab-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t   => t.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(tab.dataset.target).classList.add('active');
        });
    });
};


// ─────────────────────────────────────────────────────────────────
//  EJERCICIO 19 – Precio de venta
// ─────────────────────────────────────────────────────────────────
const initEj19 = () => {
    const inpImporte = document.getElementById('inp-importe-compra');
    const inpMargen = document.getElementById('inp-margen');
    const btn = document.getElementById('btn-calcular-19');

    inpImporte.addEventListener('input', () => {
        estadoAplicacion.importeCompra = parseFloat(inpImporte.value) || 0;
    });
    inpMargen.addEventListener('input', () => {
        estadoAplicacion.margenGanancia = parseFloat(inpMargen.value) || 0;
    });

    btn.addEventListener('click', () => {
        const precio = calcularPrecioVenta(
            estadoAplicacion.importeCompra,
            estadoAplicacion.margenGanancia
        );
        mostrarResultado('out-19', `Precio de venta: ${formatearPesos(precio)}`);
    });
};


// ─────────────────────────────────────────────────────────────────
//  EJERCICIOS 20 y 21 – Promedio y Calificación
// ─────────────────────────────────────────────────────────────────
const initEj2021 = () => {
    const inpNota1 = document.getElementById('inp-nota1');
    const inpNota2 = document.getElementById('inp-nota2');
    const inpNota3 = document.getElementById('inp-nota3');
    const btn = document.getElementById('btn-calcular-20-21');

    inpNota1.addEventListener('input', () => {
        estadoAplicacion.nota1 = parseFloat(inpNota1.value) || 0;
    });
    inpNota2.addEventListener('input', () => {
        estadoAplicacion.nota2 = parseFloat(inpNota2.value) || 0;
    });
    inpNota3.addEventListener('input', () => {
        estadoAplicacion.nota3 = parseFloat(inpNota3.value) || 0;
    });

    btn.addEventListener('click', () => {
        const promedio = calcularPromedio(
            estadoAplicacion.nota1,
            estadoAplicacion.nota2,
            estadoAplicacion.nota3
        );
        const calif = obtenerCalificacion(promedio);
        mostrarResultado('out-20', `Promedio: ${promedio.toFixed(2)}`);
        mostrarResultado('out-21', `Calificación: ${calif}`);
    });
};


// ─────────────────────────────────────────────────────────────────
//  EJERCICIO 22 – Sobretasa bebidas
// ─────────────────────────────────────────────────────────────────
const initEj22 = () => {
    const inpImporte = document.getElementById('inp-importe-bebida');
    const selTipo = document.getElementById('sel-tipo-bebida');
    const btn = document.getElementById('btn-calcular-22');

    inpImporte.addEventListener('input', () => {
        estadoAplicacion.importeBebida = parseFloat(inpImporte.value) || 0;
    });
    selTipo.addEventListener('change', () => {
        estadoAplicacion.tipoBebida = Number(selTipo.value);
    });

    btn.addEventListener('click', () => {
        const sobretasa = calcularSobretasa(
            estadoAplicacion.importeBebida,
            estadoAplicacion.tipoBebida
        );
        mostrarResultado('out-22', `Sobretasa: ${formatearPesos(sobretasa)}`);
    });
};


// ─────────────────────────────────────────────────────────────────
//  EJERCICIOS 23, 24 y 25 – Factura Aguas de Catamarca
// ─────────────────────────────────────────────────────────────────
const initEj232425 = ()=> {
    const inpMetros = document.getElementById('inp-metros');
    const btn = document.getElementById('btn-calcular-23-25');

    inpMetros.addEventListener('input', ()=> {
        estadoAplicacion.metrosCubicos = parseFloat(inpMetros.value) || 0;
    });

    btn.addEventListener('click', ()=> {
        const importeBase  = calcularImporteAgua(estadoAplicacion.metrosCubicos);
        const tasaSubsuelo = calcularTasaSubsuelo(importeBase);
        const tasaENRE = calcularTasaENRE(importeBase);
        const total = importeBase + tasaSubsuelo + tasaENRE;

        mostrarResultado('out-23', `Importe Base (Ej.23): ${formatearPesos(importeBase)}`);
        mostrarResultado('out-24', `Tasa Subsuelo 3% (Ej.24): ${formatearPesos(tasaSubsuelo)}`);
        mostrarResultado('out-25', `Tasa ENRE 1,2% (Ej.25): ${formatearPesos(tasaENRE)}`);
        mostrarResultado('out-total-agua', `TOTAL FACTURA: ${formatearPesos(total)}`);
    });
};


// ─────────────────────────────────────────────────────────────────
//  EJERCICIO 26 – Dosis de insulina
// ─────────────────────────────────────────────────────────────────
const initEj26 = ()=> {
    const inpGlucosa = document.getElementById('inp-glucosa');
    const inpPeso    = document.getElementById('inp-peso');
    const selTipo    = document.getElementById('sel-tipo-diabetes');
    const btn        = document.getElementById('btn-calcular-26');

    inpGlucosa.addEventListener('input', ()=> {
        estadoAplicacion.glucosa = parseFloat(inpGlucosa.value) || 0;
    });
    inpPeso.addEventListener('input', ()=> {
        estadoAplicacion.pesoCorporal = parseFloat(inpPeso.value) || 0;
    });
    selTipo.addEventListener('change', ()=> {
        estadoAplicacion.tipoDiabetes = Number(selTipo.value);
    });

    btn.addEventListener('click', ()=> {
        const dosis = calcularDosisInsulina(
            estadoAplicacion.glucosa,
            estadoAplicacion.pesoCorporal,
            estadoAplicacion.tipoDiabetes
        );
        mostrarResultado('out-26',
            `Dosis recomendada: ${dosis.toFixed(2)} unidades de insulina`
        );
    });
};


// ─────────────────────────────────────────────────────────────────
//  EJERCICIOS 27 y 28 – Vocales y Consonantes
// ─────────────────────────────────────────────────────────────────
const initEj2728 = ()=> {
    const inpCadena = document.getElementById('inp-cadena-2728');
    const btn       = document.getElementById('btn-calcular-27-28');

    inpCadena.addEventListener('input', ()=> {
        estadoAplicacion.cadena2728 = inpCadena.value;
    });

    btn.addEventListener('click', ()=> {
        const vocales     = contarVocales(estadoAplicacion.cadena2728);
        const consonantes = contarConsonantes(estadoAplicacion.cadena2728);
        mostrarResultado('out-27', `Vocales (Ej.27): ${vocales}`);
        mostrarResultado('out-28', `Consonantes (Ej.28): ${consonantes}`);
    });
};


// ─────────────────────────────────────────────────────────────────
//  EJERCICIO 29 – ¿Contiene al menos dos letras 's'?
// ─────────────────────────────────────────────────────────────────
const initEj29 = ()=> {
    const inpPalabra = document.getElementById('inp-palabra-29');
    const btn        = document.getElementById('btn-calcular-29');

    inpPalabra.addEventListener('input', ()=> {
        estadoAplicacion.palabra29 = inpPalabra.value;
    });

    btn.addEventListener('click', ()=> {
        const resultado = tieneDosSLetras(estadoAplicacion.palabra29);
        mostrarResultado('out-29',
            resultado
                ? '✅ true — Contiene al menos 2 letras "s"'
                : '❌ false — No contiene 2 letras "s"'
        );
    });
};


// ─────────────────────────────────────────────────────────────────
//  EJERCICIO 30 – ¿Contiene al menos tres espacios?
// ─────────────────────────────────────────────────────────────────
const initEj30 = ()=> {
    const inpCadena = document.getElementById('inp-cadena-30');
    const btn = document.getElementById('btn-calcular-30');

    inpCadena.addEventListener('input', ()=> {
        estadoAplicacion.cadena30 = inpCadena.value;
    });

    btn.addEventListener('click', ()=> {
        const resultado = tieneTresEspacios(estadoAplicacion.cadena30);
        mostrarResultado('out-30',
            resultado
                ? '✅ true — Contiene al menos 3 espacios'
                : '❌ false — Tiene menos de 3 espacios'
        );
    });
};


// ─────────────────────────────────────────────────────────────────
//  EJERCICIO 31 – ¿No contiene ningún dígito numérico?
// ─────────────────────────────────────────────────────────────────
const initEj31 = ()=> {
    const inpCadena = document.getElementById('inp-cadena-31');
    const btn = document.getElementById('btn-calcular-31');

    inpCadena.addEventListener('input', ()=> {
        estadoAplicacion.cadena31 = inpCadena.value;
    });

    btn.addEventListener('click', ()=> {
        const resultado = sinDigitos(estadoAplicacion.cadena31);
        mostrarResultado('out-31',
            resultado
                ? '✅ true — La cadena NO contiene dígitos'
                : '❌ false — La cadena contiene al menos un dígito'
        );
    });
};


// ─────────────────────────────────────────────────────────────────
//  BOTONES GLOBALES – Guardar / Recuperar estado
// ─────────────────────────────────────────────────────────────────
const initStorageButtons = ()=> {
    document.getElementById('btn-guardar').addEventListener('click', guardarEstado);
    document.getElementById('btn-recuperar').addEventListener('click', recuperarEstado);
};


// ─────────────────────────────────────────────────────────────────
//  INICIALIZACIÓN PRINCIPAL
// ─────────────────────────────────────────────────────────────────
initTabs();
initStorageButtons();
initEj19();
initEj2021();
initEj22();
initEj232425();
initEj26();
initEj2728();
initEj29();
initEj30();
initEj31();