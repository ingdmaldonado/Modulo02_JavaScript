// Datos para el ejercicio 24
export const verificaciones = [];

export const validarTexto = (texto) => {
    return texto !== null && texto !== undefined && texto.trim() !== "";
};

export const agregarVerificacion = (nuevaVerificacion) => {
    verificaciones.push(nuevaVerificacion);
    return verificaciones;
};
