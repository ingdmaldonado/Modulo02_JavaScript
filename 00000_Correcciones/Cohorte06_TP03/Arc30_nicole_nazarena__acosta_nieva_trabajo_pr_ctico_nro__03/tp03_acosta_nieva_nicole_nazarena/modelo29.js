export const cantidadS = (palabra) => {
    let contadorS = 0;
    for (let i = 0; i < palabra.length; i++) {
        let caracter = palabra.charAt(i).toUpperCase();
        if (caracter === "S") {
            contadorS = contadorS + 1;
        }
    }
    if (contadorS >= 2) {
        resultado = `verdadero`;
    } else {
        resultado = `falso`;
    }
    return contadorS 
};

