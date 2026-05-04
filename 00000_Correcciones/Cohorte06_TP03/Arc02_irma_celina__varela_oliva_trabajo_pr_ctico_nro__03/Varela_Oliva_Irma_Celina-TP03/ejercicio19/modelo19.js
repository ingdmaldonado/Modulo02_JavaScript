export const fnCalculoPrecioVenta = (importeCompra, margen)=>{

    let auxiliar = 0;
    auxiliar = importeCompra + (importeCompra * margen)/100;
    return auxiliar;


};