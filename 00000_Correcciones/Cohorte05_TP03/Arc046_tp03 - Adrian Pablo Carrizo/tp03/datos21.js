// Datos para el ejercicio 21
export const conteos = [];

export const validarTexto = (texto) => {
    return texto !== null && texto !== undefined && texto.trim() !== "";
};

export const agregarConteo = (nuevoConteo) => {
    conteos.push(nuevoConteo);
    return conteos;
};
