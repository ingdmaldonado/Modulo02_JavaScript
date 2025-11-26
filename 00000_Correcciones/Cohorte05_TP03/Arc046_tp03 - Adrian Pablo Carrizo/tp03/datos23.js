// Datos para el ejercicio 23
export const verificaciones = [];

export const validarPalabra = (palabra) => {
    return palabra !== null && palabra !== undefined && palabra.trim() !== "";
};

export const agregarVerificacion = (nuevaVerificacion) => {
    verificaciones.push(nuevaVerificacion);
    return verificaciones;
};