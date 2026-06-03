// EJERCICIO 29

export const fnContarEses = (texto) => {
    let textoBuscar = texto;
    let arrayTexto = Array.from(textoBuscar);
    let cantLetras = textoBuscar.length;

    let contS = 0;
    arrayTexto.forEach((letra) =>{
        if (letra.toLowerCase() === 's'){
            contS ++;
        }
    })
if (contS > 1){

return true; } else {
    return false;
}

}