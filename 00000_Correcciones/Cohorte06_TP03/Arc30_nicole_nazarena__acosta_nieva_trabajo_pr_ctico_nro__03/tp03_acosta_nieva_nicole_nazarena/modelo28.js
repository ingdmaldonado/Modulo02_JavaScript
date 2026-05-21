export const cantidadConsonantes = (cadenaTexto) => {
    let cantidadConsonantes = 0;
 for (let i = 0; i < cadenaTexto.length; i++) {
 let caracter = cadenaTexto.charAt (i).toUpperCase();
 if ((caracter !== "A" && caracter !== "E" && caracter !== "I" && caracter !== "O" && caracter !== "U")) {
    cantidadConsonantes = cantidadConsonantes + 1;
}
}
return cantidadConsonantes; 
}; 