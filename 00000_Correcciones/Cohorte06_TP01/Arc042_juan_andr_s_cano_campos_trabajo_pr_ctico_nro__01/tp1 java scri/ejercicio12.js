{
 
// Ejercicio 12


let dia = 0
 dia = Number( prompt(`ingrese dia de compra ( dia 1 2 3 4 5 6 7 )`))


 let importeDeCompra = 0;

 importeDeCompra = Number(prompt(`ingrese el importe de la compra `))


 console.log (dia);

 let descuento = 0 ;

 let esDiaValido = true;

 switch(dia)
 {
    case 1:{
        console.log(`dia lunes`);
        descuento = 0 ;
        break;
    }
    case 2:{
         console.log(`dia martes`)
         ;
          descuento = 0 ;
        break;
    }
    case 3:{
         console.log(`dia miercoles`);
          descuento = 0 ;
        break;
    }
    case 4:{
         console.log(`dia jueves`);
          descuento = 0 ;
        break;
    }
    case 5:{
         console.log(`dia viernes`);
          descuento = (importeDeCompra* 50) / 100;
        break;
    }
    case 6:{
         console.log(`dia sabado`);
         descuento = (importeDeCompra* 50) / 100;
        break;
    }
    case 7:{
         console.log(`dia domingo`);
         descuento = (importeDeCompra* 50) / 100;
        break;
    }
    default :{
        console.log ( ` dia invalido ingrese nuevamente`);
        esDiaValido = false;
        break;
    }


 }

 if(
    esDiaValido
 )
 {
    console.log (`ingreso un dia correcto`)

    descuento = descuento > 80000 ? 80000:descuento;

    console.log (` descuento final :`, descuento);

 }
 else{
    console.log ( `ingreso un dia invalido ingrese nuevamente `)
 }
 let totalAPagar = 0;//undefined

 totalAPagar = importeDeCompra - descuento;

 console.log(`El importe a pagar es: ${totalAPagar}; importe: ${importeDeCompra}; descuento: ${descuento}`);

    
}