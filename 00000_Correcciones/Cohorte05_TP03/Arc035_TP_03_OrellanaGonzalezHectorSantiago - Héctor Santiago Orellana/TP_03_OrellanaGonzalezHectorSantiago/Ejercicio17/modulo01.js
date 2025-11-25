/*Ejercicio Nro. 17:
Una empresa de distribución de agua potable "Aguas de Catamarca ECSAPEM" utiliza un esquema de facturación por bloques de consumo, donde el precio por metro cúbico aumenta a medida que el usuario consume más. Este tipo de sistema se aplica con el objetivo de promover el uso responsable del recurso y penalizar el consumo excesivo.
El cálculo del importe base se realiza a partir de los metros cúbicos leídos en el medidor del cliente. Para ello, la empresa define tres bloques de facturación. El primer bloque corresponde a los primeros 50 metros cúbicos, que se facturan a razón de 350 pesos por metro cúbico. El segundo bloque comprende los siguientes 20 metros cúbicos, es decir desde el metro cúbico número 51 hasta el 70, los cuales se facturan a un valor de 555,20 pesos por metro cúbico. Finalmente, todo consumo que supere los 70 metros cúbicos se considera dentro del bloque excedente o de castigo, y se factura a razón de 1.552,20 pesos por metro cúbico.*/

export const fncalculoFacturacionDeAgua=(consumoEnMtrsCubicos)=>{
    
    let facturaTipo1=0;
    let facturaTipo2=0;
    let facturaTipo3=0;

    let calculodeImporteBasDeAgua=0;
    
  
   
    if (consumoEnMtrsCubicos<=50) /*Factura tipo1*/
    {
        calculodeImporteBasDeAgua= 50*350;
        facturaTipo1=  calculodeImporteBasDeAgua;
        
    }

    if((consumoEnMtrsCubicos >=51) && (calculodeImporteBasDeAgua<=70)) /*factura tipo2*/
    {
      calculodeImporteBasDeAgua= 50* 555,20;
      facturaTipo2=  calculodeImporteBasDeAgua;
     

    }

     if (consumoEnMtrsCubicos>=70) /*Factura tipo3*/
    {
        calculodeImporteBasDeAgua= 50*1.552,20;
        facturaTipo3= calculodeImporteBasDeAgua;
        
    }
      
  return calculodeImporteBasDeAgua; 
};
 