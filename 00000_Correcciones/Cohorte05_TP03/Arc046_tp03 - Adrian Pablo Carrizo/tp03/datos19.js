// Datos para el ejercicio 19
export const datos = [];

export const validarDato = (dato) => {
    return dato !== null && dato !== undefined && dato !== "";
};

export const agregarDato = (nuevoDato) => {
    datos.push(nuevoDato);
    return datos;
};