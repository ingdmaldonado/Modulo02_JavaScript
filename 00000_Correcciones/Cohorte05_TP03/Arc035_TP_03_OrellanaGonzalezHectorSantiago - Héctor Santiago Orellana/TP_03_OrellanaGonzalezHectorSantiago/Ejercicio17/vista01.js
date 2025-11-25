import{fncalculoFacturacionDeAgua}from "./modulo01.js"



{
    console.log(`"AGUAS DE CATAMARCA ECSAPEM ESQUEMA DE FACTURACIÓN`);
    let resultado= fncalculoFacturacionDeAgua(20);
    console.log (`factura tipo1 ${resultado} ` );

    let resultad1= fncalculoFacturacionDeAgua(51);
    console.log(`factura tipo2 ${resultad1}`);

     let resultad2= fncalculoFacturacionDeAgua(70);
    console.log(`factura tipo3 ${resultad2}`);
   


}