export const fnContarConsonantes = (texto) => {
    let textoMayusculas = texto.toUpperCase();
    let cantLetras = textoMayusculas.length;
    let cantConsonantes = 0;
    for (let i=0; i < cantLetras; i++ ){
    let consonantes = "BCDFGHJKLMNPQRSTVWXYZ";
    
        if (consonantes.includes(texto[i].toUpperCase())){
            cantConsonantes++;
        }     
    }
return cantConsonantes;
}