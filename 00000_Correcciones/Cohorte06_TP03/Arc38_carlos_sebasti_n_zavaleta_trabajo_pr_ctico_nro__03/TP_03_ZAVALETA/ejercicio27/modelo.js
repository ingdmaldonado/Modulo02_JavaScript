export const fnContarVocales = (texto) => {
    let cantLetras = texto.length;
    let cantMayusculas = 0;
    let cantMinusculas = 0;
    for (let i=0; i < cantLetras; i++ ){
    let mayusculas = "AEIOU";
    let minusculas = "aeiou";
    
        if (mayusculas.includes(texto[i])){
            cantMayusculas++;
        } else if (minusculas.includes(texto[i])){
            cantMinusculas++;
        }
        
        
        
    }
return {cantMin: cantMayusculas, cantMay: cantMinusculas};
}