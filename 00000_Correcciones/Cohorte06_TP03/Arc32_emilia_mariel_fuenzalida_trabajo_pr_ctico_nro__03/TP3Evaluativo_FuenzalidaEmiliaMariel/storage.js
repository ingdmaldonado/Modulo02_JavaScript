/*Guardar y Recuperar - Local Storage*/
export const fnGuardar = (clave, estadoAplicacion) => {

    localStorage.setItem(clave, JSON.stringify(estadoAplicacion));
};

export const fnRecuperar = clave => {

    let datos = localStorage.getItem(clave);

    if (datos) {

        return JSON.parse(datos);
    }

    return null;
};