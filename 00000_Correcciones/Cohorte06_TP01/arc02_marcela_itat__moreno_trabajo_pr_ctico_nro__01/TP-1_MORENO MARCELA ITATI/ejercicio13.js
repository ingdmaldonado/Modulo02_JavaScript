{

let rubro = 0;
let importeDeCompra = 0;
let rubroValido = true;
let descuento = 0;
let importeTotal = 0;


//1. Solicitar el rubro del comercio.

rubro = Number (prompt(`Ingrese el rubro: 1 - Vestimenta --- 2 - Perfumería --- 3 - Lebreria --- 4 - Electrodomestico --- 5 - Calzado`));

console.log(rubro);

//2. Solicitar el importe de la compra.

importeDeCompra = Number (prompt(`Ingrese el importe total de la compra`));

console.log(importeDeCompra);

//3. Calcular el descuento correspondiente.
//4. Verificar si el descuento supera el tope del rubro. Si lo supera, aplicar solo el tope

switch (rubro)
{
    case 1 : {
        
        console.log(`Rubro Vestimenta - 20%`);
        descuento = ( importeDeCompra * 20 ) / 100;
        console.log(descuento);
        break;

    }

    case 2 : {

        console.log(`Rubro Perfumería - 20%`);
        descuento = ( importeDeCompra * 20 ) / 100;
        console.log(descuento);
        break;

    }

    case 3 : {

        console.log(`Rubro Librería - 30%`);
        descuento = ( importeDeCompra * 30 ) / 100;
        console.log(descuento);
        break;

    }

    case 4 : {

        console.log(`Rubro Electrodomésticos - 15%`);
        descuento = ( importeDeCompra * 15 ) / 100;
        console.log(descuento);
        break;

    }

    case 5 : {

        console.log(`Rubro Calzado - 20%`);
        descuento = ( importeDeCompra * 20 ) / 100;
        console.log(descuento);
        break;

    }

    default : {

        console.log(`Rubro Invalido, intentelo nuevamente`);
        rubroValido = false;
        break;

    }
}

if(rubroValido = 1){
    console.log (`El usuario ingreso un rubro correcto`);
    descuento = descuento > 80000 ? 80000: descuento;
    console.log(`El descuento es de:  $`, descuento);
}
    else {
        if(rubroValido = 2){
        console.log (`El usuario ingreso un rubro correcto`);
        descuento = descuento > 80000 ? 80000: descuento;
        console.log(`El descuento es de:  $`, descuento);   
        } 
        
        else {
            if(rubroValido = 3){
                console.log (`El usuario ingreso un rubro correcto`);
                descuento = descuento > 90000 ? 90000: descuento;
                console.log(`El descuento es de:  $`, descuento);
            } 
            
            else{
                if(rubroValido = 4){
                    console.log (`El usuario ingreso un rubro correcto`);
                    descuento = descuento > 70000 ? 70000: descuento;
                    console.log(`El descuento es de:  $`, descuento);
                    } 

                else {
                    if(rubroValido = 5){
                        console.log (`El usuario ingreso un rubro correcto`);
                        descuento = descuento > 80000 ? 80000: descuento;
                        console.log(`El descuento es de:  $`, descuento);
                    }

                    else {
                        console.log(`El usuario ingreso un rubro incorrecto`);

                    }
                }
            }
        }
    }   

/*Mostrar:
 - rubro
 - importe de la compra
 - descuento aplicado
 - importe final a pagar*/
 
importeTotal = importeDeCompra - descuento;


console.log(`Importe de compra: ${importeDeCompra} y Descuento aplicado: ${descuento}`)
console.log(`El importe total a pagar es de:`, importeTotal);



}