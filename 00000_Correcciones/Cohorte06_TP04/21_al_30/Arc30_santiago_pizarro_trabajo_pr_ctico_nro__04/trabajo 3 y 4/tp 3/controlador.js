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

const estadoAplicacion = {
    importeCompra: 0,
    margenGanancia: 0,
    nota1: 0,
    nota2: 0,
    nota3: 0,
    importeBebida: 0,
    tipoBebida: 1,
    metrosCubicos: 0,
    glucosa: 0,
    pesoCorporal: 0,
    tipoDiabetes: 1,
    cadena2728: '',
    palabra29: '',
    cadena30: '',
    cadena31: ''
};

const mostrarResultado = (id, texto) => {
    const el = document.getElementById(id);
    if (el) {
        el.textContent = texto;
        el.classList.remove('resultado-vacio');
        el.classList.add('resultado-activo');
    }
};

const formatearPesos = (numero) =>
    `$ ${numero.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const STORAGE_KEY = 'tp03_estado';

const guardarEstado = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(estadoAplicacion));
    alert('El estado se guardó en el navegador correctamente.');
};

const recuperarEstado = () => {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
        alert(' No hay ningún estado guardado todavía.');
        return;
    }
    const estadoGuardado = JSON.parse(data);
    Object.assign(estadoAplicacion, estadoGuardado);
    sincronizarInputs();
    alert('Estado recuperado correctamente.');
};

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

const initEj232425 = () => {
    const inpMetros = document.getElementById('inp-metros');
    const btn = document.getElementById('btn-calcular-23-25');

    inpMetros.addEventListener('input', () => {
        estadoAplicacion.metrosCubicos = parseFloat(inpMetros.value) || 0;
    });

    btn.addEventListener('click', () => {
        const importeBase = calcularImporteAgua(estadoAplicacion.metrosCubicos);
        const tasaSubsuelo = calcularTasaSubsuelo(importeBase);
        const tasaENRE = calcularTasaENRE(importeBase);
        const total = importeBase + tasaSubsuelo + tasaENRE;

        mostrarResultado('out-23', `Importe Base (Ej.23): ${formatearPesos(importeBase)}`);
        mostrarResultado('out-24', `Tasa Subsuelo 3% (Ej.24): ${formatearPesos(tasaSubsuelo)}`);
        mostrarResultado('out-25', `Tasa ENRE 1,2% (Ej.25): ${formatearPesos(tasaENRE)}`);
        mostrarResultado('out-total-agua', `TOTAL FACTURA: ${formatearPesos(total)}`);
    });
};

const initEj26 = () => {
    const inpGlucosa = document.getElementById('inp-glucosa');
    const inpPeso = document.getElementById('inp-peso');
    const selTipo = document.getElementById('sel-tipo-diabetes');
    const btn = document.getElementById('btn-calcular-26');

    inpGlucosa.addEventListener('input', () => {
        estadoAplicacion.glucosa = parseFloat(inpGlucosa.value) || 0;
    });
    inpPeso.addEventListener('input', () => {
        estadoAplicacion.pesoCorporal = parseFloat(inpPeso.value) || 0;
    });
    selTipo.addEventListener('change', () => {
        estadoAplicacion.tipoDiabetes = Number(selTipo.value);
    });

    btn.addEventListener('click', () => {
        const dosis = calcularDosisInsulina(
            estadoAplicacion.glucosa,
            estadoAplicacion.pesoCorporal,
            estadoAplicacion.tipoDiabetes
        );
        mostrarResultado('out-26', `Dosis recomendada: ${dosis.toFixed(2)} unidades de insulina`);
    });
};

const initEj2728 = () => {
    const inpCadena = document.getElementById('inp-cadena-2728');
    const btn = document.getElementById('btn-calcular-27-28');

    inpCadena.addEventListener('input', () => {
        estadoAplicacion.cadena2728 = inpCadena.value;
    });

    btn.addEventListener('click', () => {
        const vocales = contarVocales(estadoAplicacion.cadena2728);
        const consonantes = contarConsonantes(estadoAplicacion.cadena2728);
        mostrarResultado('out-27', `Vocales (Ej.27): ${vocales}`);
        mostrarResultado('out-28', `Consonantes (Ej.28): ${consonantes}`);
    });
};

const initEj29 = () => {
    const inpPalabra = document.getElementById('inp-palabra-29');
    const btn = document.getElementById('btn-calcular-29');

    inpPalabra.addEventListener('input', () => {
        estadoAplicacion.palabra29 = inpPalabra.value;
    });

    btn.addEventListener('click', () => {
        const resultado = tieneDosSLetras(estadoAplicacion.palabra29);
        mostrarResultado('out-29', resultado ? ' Verdadero — Contiene al menos 2 letras "s"' : 'Falso — No contiene 2 letras "s"');
    });
};

const initEj30 = () => {
    const inpCadena = document.getElementById('inp-cadena-30');
    const btn = document.getElementById('btn-calcular-30');

    inpCadena.addEventListener('input', () => {
        estadoAplicacion.cadena30 = inpCadena.value;
    });

    btn.addEventListener('click', () => {
        const resultado = tieneTresEspacios(estadoAplicacion.cadena30);
        mostrarResultado('out-30', resultado ? 'Verdadero — Contiene al menos 3 espacios' : 'Falso — Tiene menos de 3 espacios');
    });
};

const initEj31 = () => {
    const inpCadena = document.getElementById('inp-cadena-31');
    const btn = document.getElementById('btn-calcular-31');

    inpCadena.addEventListener('input', () => {
        estadoAplicacion.cadena31 = inpCadena.value;
    });

    btn.addEventListener('click', () => {
        const resultado = sinDigitos(estadoAplicacion.cadena31);
        mostrarResultado('out-31', resultado ? 'Verdadero — La cadena NO contiene dígitos' : 'Falso — La cadena contiene al menos un dígito');
    });
};

const initStorageButtons = () => {
    document.getElementById('btn-guardar').addEventListener('click', guardarEstado);
    document.getElementById('btn-recuperar').addEventListener('click', recuperarEstado);
};

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