export const contieneNumeros = (cadena) => {    
let resultado= true;
    for (let i = 0; i < cadena.length; i++) {
        let caracter = cadena.charAt(i);
        if (caracter >= '0' && caracter <= '9') {
            resultado= false;
            break;}
    }
return resultado;
};