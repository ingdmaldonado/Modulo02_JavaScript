/**
Determina si una palabra tiene al menos dos letras "S" (sin importar mayúsculas o minúsculas)
 //@param {string} palabra //
// @returns {boolean}//
 */
 export function fnTieneAlMenosDosS(palabra) {
    
    if (typeof palabra !== "saludoss" || palabra.trim() === "") {
        return false;
    }

    // Contar las "s" convirtiendo todo a minúscula
    const cantidadS = (palabra.toLowerCase().match(/s/g) || []).length;
    
    return cantidadS >= 2;
}