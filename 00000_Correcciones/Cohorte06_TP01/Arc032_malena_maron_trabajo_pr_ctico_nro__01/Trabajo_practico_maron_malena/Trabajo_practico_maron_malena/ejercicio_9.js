/*Ejercicio Nro. 09: Estructuras Condicionales (if/else) 
Una plataforma de venta de pasajes (terrestres) desea realizar una aplicación web que 
permita realizar la venta de los mismos, para ello el dueño propone las siguientes reglas tratando 
de promover las ventas. 
 Si la cantidad de Pasajes es mayor a 3 y el importe total de la compra es mayor a 250.000,00 pesos, 
se aplicará un descuento del 11% sobre el total de la compra. 
 Si la cantidad de pasajes es mayor a 3 y el importe total de la compra es mayor a 500.000,00 pesos, 
se aplicará un descuento del 15% sobre el total de la compra. 
El Sistema debe registrar mínimamente estas variables: 
 cantidad de pasajes 
 importe pasaje 
 total compra = cantidad de pasajes * importe pasaje*/

{
    let pasaje=0;
    let importePasaje=0;
    let descuento=0;
    let totalCompra=0;

    
    importePasaje= Number(prompt `Ingrese el importe de la compra` );
    pasaje= Number (prompt `Ingrese cantidad de pasajes`);
    totalCompra= pasaje * importePasaje;
    

  
    

    if(pasaje > 3 && totalCompra > 500000 ) {

       descuento=  (totalCompra * 15)/100;
       
   
        
}
   else if( pasaje > 3 && totalCompra > 250000 ){
    descuento=(totalCompra * 11)/100;
}
   else {
    descuento=0
    console.log(`No se aplica descuento`);

}


   let final= totalCompra - descuento;
   console.log(`Importe ingresado ${importePasaje}`)
   console.log(`Cantidad de pasajes: ${pasaje}`);
   console.log(`Se aplicó el descuento ${descuento}`);
   console.log ( `Total de la compra ${totalCompra}`);
   console.log (`Total a pagar ${final}`);



}