export const espacios =(cadenaDetextos) => {
    let resultado = 0;
    for (let i = 0; i < cadenaDetextos.length; i++) {
        let caracter = cadenaDetextos.charAt(i);
        if (caracter === " ") {
            resultado = resultado + 1;}
            if (resultado >= 3) {
                break;
            }
        }
            if (resultado >= 3) {
                resultado = true;
            }
            else {resultado = false;
            }
        
    return resultado
};