let diaCompra = prompt("Ingrese el día de la compra: 1-Viernes, 2-Sábado o 3-Domingo:");

let importeCompra = Number(prompt("Ingrese el importe de la compra:"));

console.log(`Día de la compra: ${diaCompra}`);

console.log(`Importe de la compra: ${importeCompra}`);

let reintegro = 0;

if (diaCompra === "1")
    
   {
    reintegro = (importeCompra * 50) / 100;
    if (reintegro > 80000) 
        reintegro = 80000;
       
    }
else 
    if (diaCompra === "2")
    {
        reintegro = (importeCompra * 50) / 100;
        if (reintegro > 80000) 
        {
            reintegro = 80000;
        }
    }
else 
    if (diaCompra === "3")
    {
        reintegro = (importeCompra * 50) / 100;
        if (reintegro > 80000) 
        {
            reintegro = 80000;
        }
    }
else 
    {
        console.log(`No se aplica el beneficio del programa One Shot Plus.`);
    }
    

console.log(`Reintegro obtenido: ${reintegro}`);
    
    let importeFinal = importeCompra - reintegro;
    console.log(`Importe final a pagar por el cliente: ${importeFinal}`);
