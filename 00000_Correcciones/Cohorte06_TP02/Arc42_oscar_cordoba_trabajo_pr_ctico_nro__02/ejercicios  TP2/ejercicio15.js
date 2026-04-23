{


let aprobados =0;
let desaprobados=0;
let muyBuenos = 0;
let excelentes=0;
let errores=0;
let continua =`S`;
let nota =0;


while((continua===`S`) || (continua ===`s`))
{ 
nota=Number(prompt(`Ingrese la nota`));  

if( nota >=0 && nota <=4 )
{
   desaprobados=desaprobados +1;
  /*console.log(`Desaprobado`);*/
 
}

if(nota > 4 && nota <= 7)
{
   aprobados=aprobados +1;
 /* console.log(`Aprobado`);*/
}

if ( nota >7 && nota < 10 )
{
 muyBuenos= muyBuenos+1;
  /*console.log(`Muy Bueno`);*/
}

if ( nota === 10 )
{
 excelentes=excelentes+1
  /*console.log(`Excelente`);*/
 }

if( nota <0 || nota >10 )
{
  console.log(`Error .Ingrese valores entre  0 y 10`);
  errores= errores +1;
  /*console.log(`La cantidad de errores son: ${errores}`)*/
}


continua=prompt(`Desea continuar? (S/N)`);



}
console.log(`La cantidad de Desaprobados son: ${desaprobados}`)
console.log(`La cantidad de Aprobados son: ${aprobados}`)
console.log(`La cantidad de Muy Buenos son: ${muyBuenos}`)
console.log(`La cantidad de Excelentes son: ${excelentes}`)
console.log(`La cantidad de errores son: ${errores}`)

}