export const cantidadVocales = (cadenaDeTexto) => {
    let cantidadVocales = 0;
 for (let i = 0; i < cadenaDeTexto.length; i++) {
 let caracter = cadenaDeTexto.charAt (i).toUpperCase();
 if (caracter === "A" || caracter === "E" || caracter === "I" || caracter === "O" || caracter === "U") {
    cantidadVocales = cantidadVocales + 1;
}
}
return cantidadVocales; 
}; 