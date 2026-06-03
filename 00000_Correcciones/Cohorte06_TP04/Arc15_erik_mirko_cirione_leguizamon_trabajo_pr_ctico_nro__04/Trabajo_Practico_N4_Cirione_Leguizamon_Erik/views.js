
/*este archivo posee puramente funciones que serviran para crear objetos del DOM*/

export const crearOpcionSelect = (texto) => {
    const opcion = document.createElement('option');
    opcion.value = texto.toLowerCase().replace(" ", "");
    opcion.textContent = texto;
    return opcion; // Devolvemos el objeto del DOM creado
};