export const FnPrecioDeVenta = (importeCompra,margen)=>{

    let calculos = 0 ;
    calculos = importeCompra + (importeCompra*margen)/100;
    return calculos;
    

};
