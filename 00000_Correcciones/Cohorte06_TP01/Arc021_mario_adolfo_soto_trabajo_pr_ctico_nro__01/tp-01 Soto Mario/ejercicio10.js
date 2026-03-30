/*Un comercio aplica descuentos sobre el importe de compra según forma de pago:
1) Efectivo → 10% descuento
2) Débito → 5% descuento
3) Crédito → Sin descuento
Calcular el descuento y Mostrar total final. Utilizar estructura switch
 */
{
let importeDeCompra =0 ;
importeDeCompra = Number(prompt(`ingrese el importe de compra`));
let formaDePago = 0;
formaDePago =Number(prompt(`ingrese forma de pago 1 - efectivo 2 - debito 3 credito `));
descuento = 0;
switch(formaDePago)
{
    //efectivo
    case 1:{ console.log(`Ud eligio efectivo`);
            descuento = (importeDeCompra*10)/100;
             break;

            

    }
    //debito
    case 2: {console.log(`Ud eligio debito`);
            descuento = (importeDeCompra*5)/100;
             break;


    }
    //credito
    case 3: {console.log(`Ud eligio credito`);
         break;

            
    }
    default: { console.log(`Ud ingreso un valor incorrecto, ingrese nuevamente`)
         break;

    }


}
let totalApagar =importeDeCompra - descuento ;
console.log(`el importe a pagar es ${totalApagar}`);
}