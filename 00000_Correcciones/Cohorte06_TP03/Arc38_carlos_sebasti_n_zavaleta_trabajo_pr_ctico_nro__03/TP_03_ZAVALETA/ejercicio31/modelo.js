// Ejercicio 31
export const fnTieneNumeros = (texto) => {
    let numeros = "0123456789";
    let arrayTexto = Array.from(texto);
    let resultado = false;
    for (let i=0; i < arrayTexto.length; i++ ){
        //console.log(arrayTexto[i]);
        if (numeros.includes(arrayTexto[i])){
            resultado = true;
            //Podría poner return true y no haría falta poner break.
            break;
        }
    }
    return resultado;
}