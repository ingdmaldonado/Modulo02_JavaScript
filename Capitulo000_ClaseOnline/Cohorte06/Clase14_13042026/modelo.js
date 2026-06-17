
// le anteponemos la palabra export //

/* Momento 1 =>  Definición de la Función */

export const fnCalculoPrecioVenta = (importeCompra,margen)=>{

    let auxiliar = 0;
    auxiliar = importeCompra + (importeCompra * margen)/100;
    return auxiliar;

};

// la exportación por defecto se puede hacer una por modulo //