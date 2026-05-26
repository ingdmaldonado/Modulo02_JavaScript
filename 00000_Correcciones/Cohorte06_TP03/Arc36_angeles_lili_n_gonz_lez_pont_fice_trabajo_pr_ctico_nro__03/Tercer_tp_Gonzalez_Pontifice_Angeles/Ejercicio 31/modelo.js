
// Ejercicio 31//
export const noTieneNumeros = (texto) => {
    
    for (let i = 0; i < texto.length; i++) {
        let caracter = texto[i];
        
        if (caracter >= '0' && caracter <= '9') {
            return false;
        }
    }
    
    return true;
};