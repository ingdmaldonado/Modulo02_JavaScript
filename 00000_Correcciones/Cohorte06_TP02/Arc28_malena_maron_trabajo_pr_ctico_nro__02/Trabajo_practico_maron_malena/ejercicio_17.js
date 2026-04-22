/*Una Frigorífico posee una cinta transportadora y clasificadora de huevos para consumo humano. La cinta 
no tan solo los transporta sino también los clasifica según su peso. es decir, al final de la cinta existe una balanza 
electrónica de alta precisión que evalúa su peso y los clasifica. 
a) XL, súper grandes: peso ≥ 73 gramos.  
b) L, grandes: peso ≥ 63 gramos y < 73 gramos.  
c) M, medianos: peso ≥ 53 gramos y < 63 gramos. 
Nota: considere como descartados aquellos que no estén dentro del rango de valores aceptables. 
Determinar lo siguiente: 
1) Cantidad total de Huevos (Todas las categorías) 
2) Cantidad total de Huevos XL 
3) Cantidad total de Huevos L 
4) Cantidad total de Huevos M 
5) Cantidad total de Huevos descartados 
6) Determinar el % de Huevos XL sobre el Total 
7) Determinar el % de Huevos L sobre el Total 
8) Determinar el % de Huevos M sobre el Total*/
{
    
    let cantTotal=0;
    let cantXl=0;
    let cantL=0;
    let cantM=0;
    let cantDescarte=0;
    let continuarCarga=`s`;
    let porXl=0;
    let porcL=0;
    let porM=0;
    let descartePor=0;
    

    while(continuarCarga=== `s`){

        let peso = Number(prompt(`Ingrese el peso correspondiente 1. Súper grandes (Xl) 2. Grandes (L)3. Medianos (M)`));

     if(peso >= 73){
        cantXl ++;
     }
     if(peso >= 65 && peso < 73){
        cantL++;
     }
     if(peso >= 53 && peso < 63){
        cantM++;
     }
     else{
        cantDescarte++;
     }

     continuarCarga=prompt(`Desea seguir cargando? s/n`);
   }
   cantTotal= cantXl+ cantL+ cantM;
   porXl=(cantXl*100)/cantTotal;
   porcL=(cantL*100)/cantTotal;
   porM=(cantM*100)/cantTotal;
   descartePor=(cantDescarte*100)/cantTotal;

   console.log(`La cantidad de huevos Xl es: ${cantXl}`);
   console.log(`La cantidad de huevos L es: ${cantL}`);
   console.log(`La cantidad de huevos M es: ${cantM}`);
   console.log(`El descarte es de ${cantDescarte}`);
   console.log(`La cantidad total es de ${cantTotal}`);
   console.log(`El porcentaje de Xl es de ${porXl}`);
   console.log(`El porcentaje de L es de ${porcL}`);
   console.log(`El porcentaje de M es de ${porM}`);
   console.log(`El porcentaje de Descarte es de ${descartePor}`);
   


}