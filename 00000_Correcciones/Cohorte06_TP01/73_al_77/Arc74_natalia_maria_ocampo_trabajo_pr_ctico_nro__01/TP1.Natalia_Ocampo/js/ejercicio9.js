{
let cantidadPasajes = 0;
let importePasaje = 0;

cantidadPasajes = Number(prompt("¿Cuántos pasajes quieres comprar?"));
importePasaje = Number(prompt("¿Cuál es el importe de cada pasaje?"));

let totalCompra = cantidadPasajes * importePasaje;

if (cantidadPasajes > 3)
   {
     if (totalCompra > 250000 && totalCompra <= 500000)
        {
            totalCompra = totalCompra - (totalCompra * 0.11);
            console.log(`El total a pagar con el descuento del 11% es: ${totalCompra}`);
        }
     else if (totalCompra > 500000)
            {
                totalCompra = totalCompra - (totalCompra * 0.15);
                console.log(`El total a pagar con el descuento del 15% es: ${totalCompra}`);
            } 
         else 
            {  
                 console.log(`El total a pagar es: ${totalCompra}`);
            }    
   }
else 
    {
       console.log(`El total a pagar es: ${totalCompra}`);     
    }     
}