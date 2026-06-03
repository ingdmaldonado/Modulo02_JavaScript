// EJERCICIO 30

export const fnContarEspacios = (texto) => {
    let textoBuscar = texto;
    let arrayTexto = Array.from(textoBuscar);
    let cantLetras = textoBuscar.length;

    let contEspacios = 0;
    arrayTexto.forEach((letra) =>{
        if (letra.toLowerCase() === ' '){
            contEspacios ++;
        }
    })
if (contEspacios > 2){
    return true; 
    } else {
    return false;
    }

}