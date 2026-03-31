

let codigoProducto = Number(prompt("Ingrese código del producto: 1 = Dogui, 2 = Tiernitos, 3 = DogPro"));
console.log(`Código del producto: ${codigoProducto}`);
let cantidadbolsas = Number(prompt("Ingrese la cantidad de bolsas:"));
console.log(`Cantidad de bolsas: ${cantidadbolsas}`);


if (codigoProducto === 1) 
    
    {
  
    // operador ternario
    
    
    let precioProducto = cantidadbolsas > 0 && cantidadbolsas < 5 ? 38000 : cantidadbolsas >= 5 && cantidadbolsas <= 10 ? 36000 : 38000 || cantidadbolsas >= 11 ? 34000 : 38000; 
   
       
    let importeCompra = precioProducto * cantidadbolsas;
    console.log(`El importe total de la compra a pagar es: ${importeCompra}`);
       
}
else 
    
    // operador ternario

    if (codigoProducto === 2) 
    {
    let precioProducto = cantidadbolsas > 0 && cantidadbolsas < 5 ? 31000 : cantidadbolsas >= 5 && cantidadbolsas <= 10 ? 29000 : 31000 || cantidadbolsas >= 11 ? 27000 : 31000;
    
        
    let importeCompra = precioProducto * cantidadbolsas;
    console.log(`El importe total de la compra a pagar es: ${importeCompra}`);
}
else 
    
    // operador ternario

    if (codigoProducto === 3) 
    {
    let precioProducto = cantidadbolsas > 0 && cantidadbolsas < 5 ? 46000 : cantidadbolsas >= 5 && cantidadbolsas <= 10 ? 44000 : 46000 || cantidadbolsas >= 11 ? 42000 : 46000;
    
       
    let importeCompra = precioProducto * cantidadbolsas;
    console.log(`El importe total de la compra a pagar es: ${importeCompra}`);
}
else {
    console.log("Código de producto no válido");
}


