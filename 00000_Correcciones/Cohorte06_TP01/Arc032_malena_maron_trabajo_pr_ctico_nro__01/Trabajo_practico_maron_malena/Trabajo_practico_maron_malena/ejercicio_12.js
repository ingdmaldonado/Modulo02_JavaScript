/*Ejercicio Nro. 12: Estructuras Condicionales (if/else) 
 
El programa One Shot Plus fue un beneficio implementado en la provincia de Catamarca en 
conjunto con el Banco Nación para incentivar el consumo en comercios locales. 
El beneficio consistía en: 
 50% de reintegro sobre el monto de la compra 
 tope máximo de reintegro: $80.000 
 válido para compras realizadas los días viernes, sábado y domingo 
El programa debe: 
1. Solicitar al usuario: 
 el día de la compra 
 el importe de la compra
2. Verificar si la compra fue realizada un viernes, sábado o domingo. 
 Si no fue uno de esos días, no se aplica el beneficio. 
3. Si corresponde el beneficio: 
 calcular el 50% del importe de la compra 
 verificar si el reintegro supera el tope de $80.000 
 si lo supera, aplicar solamente el tope 
4. Mostrar: 
 día de la compra 
 importe de la compra 
 reintegro obtenido 
 importe final pagado por el cliente.*/
{
    let descuento=0;
    let importeDeCompra=0;
    let dia=0;
    let final=0;
   
    
    importeDeCompra=Number(prompt`Ingresar el monto de la compra`);
    dia= Number(prompt`Ingrese el día si corresponde (5: Viernes)(6: Sábado)(7:Domingo)`);
   


    
            
           if(dia ===5 || dia ===6  || dia ===7) {
            descuento=  (importeDeCompra* 50)/100;
            descuento= importeDeCompra > 80000 ? 80000:descuento;
        }

            
           else {
            descuento=0;
           
            console.log(`El dia no corresponde, no obtiene el beceficio`);
        }
 
    
    final= importeDeCompra - descuento;
    console.log(`Importe de la compra ${importeDeCompra}`);
    console.log(`El descuento es de: ${descuento}`);
    console.log(`El dia de la compra corresponde  ${dia}`);
    console.log(`El total a pagar es de : ${final}`);




}