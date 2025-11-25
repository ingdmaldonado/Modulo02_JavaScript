import{calcularSobreTasa}from "./modulo01.js"
 
/*Ärea del Programa Principla*/

{
    let resultado =calcularSobreTasa(3,72000000);
    let resultado1 =calcularSobreTasa(1,72000000);
    let resultado2 =calcularSobreTasa(5,72000000);
    


   console.log(`El Gobierno Nacional desea aplicar un impuesto (Sobre Tasa)`);
   console.log(`SOBRE TASA AL:3 POR MIL`,resultado);
   console.log(`SOBRE TASA AL:1 POR MIL`,resultado1);
   console.log(`SOBRE TASA AL:5 POR MIL`,resultado2);
   
}