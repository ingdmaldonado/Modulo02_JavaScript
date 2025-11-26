import {precioDeVenta,promedioDeTres,clasificarNota,calcularSobreTasa,calcularImporteAgua,tasaSubsuelo,tasaFiscalizacion,dosisInsulina,contarVocales,contarConsonantes,contieneDosS,contieneTresEspacios,sinNumeros} from "./modelo.js";

const mostrar = (msg) => {
    document.getElementById("resultado").textContent = msg;
};

window.ej13 = () => {
    const a = Number(costo13.value);
    const b = Number(margen13.value);
    mostrar(precioDeVenta(a, b));
};

window.ej14 = () => {
    mostrar(promedioDeTres(Number(n1.value), Number(n2.value), Number(n3.value)));
};

window.ej15 = () => {
    mostrar(clasificarNota(Number(nota.value)));
};

window.ej16 = () => {
    mostrar(calcularSobreTasa(Number(importe16.value), Number(tipo16.value)));
};

window.ej17 = () => {
    mostrar(calcularImporteAgua(Number(m3.value)));
};

window.ej18 = () => {
    mostrar(tasaSubsuelo(Number(importe18.value)));
};

window.ej19 = () => {
    mostrar(tasaFiscalizacion(Number(importe19.value)));
};

window.ej20 = () => {
    mostrar(dosisInsulina(Number(glucosa20.value), Number(peso20.value), Number(tipo20.value)));
};

window.ej21 = () => {
    mostrar(contarVocales(cad21.value));
};

window.ej22 = () => {
    mostrar(contarConsonantes(cad22.value));
};

window.ej23 = () => {
    mostrar(contieneDosS(cad23.value));
};

window.ej24 = () => {
    mostrar(contieneTresEspacios(cad24.value));
};

window.ej25 = () => {
    mostrar(sinNumeros(cad25.value));
};
