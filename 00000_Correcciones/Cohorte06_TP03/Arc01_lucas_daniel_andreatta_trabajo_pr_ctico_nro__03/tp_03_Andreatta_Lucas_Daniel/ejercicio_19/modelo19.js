

export const fnCalculoPrecioVenta = (importeCompra, margen)=>{
    
    return (importeCompra + ((importeCompra*margen)/100));
};