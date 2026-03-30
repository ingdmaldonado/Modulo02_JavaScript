/*Un comercio que vende bolsas de alimentos para mascotas trabaja y comercializa únicamente con tres
grandes marcas de alimentos para perros lo que le permite trabajar con descuentos muy interesantes para sus
clientes. Las marcas con las que trabaja son:*/

{
let codigoDeProducto = 0;
codigoDeProducto = Number(prompt(`1 dogui x 21 Kg - 2 tiernitos x 21 Kg - 3 Dog Pro x 21Kg`));

let cantidadDeBolsas = 0;
cantidadDeBolsas = Number(prompt(`Ingrese la cantidad de bolsas`));

let precioUnitario = 0;
//condiciones
switch(codigoDeProducto)
{
    //dogui 21kg
    case 1: if(cantidadDeBolsas >=11) 
        { precioUnitario = 34000;}
    else if (cantidadDeBolsas >=5)
        { precioUnitario = 36000;}
    else 
        {precioUnitario = 38000;}
         console.log("Dogui 21kg");
        break;

    
    //tiernitos 21 kg 
    case 2: if(cantidadDeBolsas >= 11) 
        {precioUnitario=27000;}
    else if (cantidadDeBolsas >=5)
        {precioUnitario=29000;}
    else 
        {precioUnitario = 31000;}
        console.log("tiernito 21kg");
        break;

    
    //dog pro 
    case 3: if( cantidadDeBolsas >= 11) 
        { precioUnitario = 42000;}
    else if (cantidadDeBolsas <=10) 
        { precioUnitario =44000;}
    else {precioUnitario = 46000} 
        console.log("DogPro 21kg");
        break;


    default:{
        console.log(`ud eligio un codigo incorrecto`);
        break; }

  

}
  let totalAPagar=0;
    totalAPagar = cantidadDeBolsas * precioUnitario;
    console.log(`El monto total a pagar es ${totalAPagar}`);
 
}