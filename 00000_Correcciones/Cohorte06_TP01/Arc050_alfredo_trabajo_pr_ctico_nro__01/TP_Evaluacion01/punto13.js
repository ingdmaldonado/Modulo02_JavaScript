/*Ejercicio Nro. 13: Estructuras Condicionales (if/else)
El programa Marcatón, realizado en Catamarca junto al Banco Nación, ofrece descuentos en distintos
rubros comerciales.
Tabla de descuentos:
Rubro Descuento Tope máximo
Vestimenta 20% $80.000
Perfumería 20% $80.000
Librería 30% $90.000
Electrodomésticos 15% $70.000
Calzado 20% $80.000
El programa debe:
1. Solicitar el rubro del comercio.
2. Solicitar el importe de la compra.
3. Calcular el descuento correspondiente.
4. Verificar si el descuento supera el tope del rubro. Si lo supera, aplicar solo el tope.
5. Mostrar:
- rubro
- importe de la compra
- descuento aplicado
- importe final a pagar. */


{
    let rubro = 0; 
    rubro = Number(prompt(`Indique el Rubro (1 - Vestimenta, 2 - Perfumeria, 3 - Libreria, 4 - Electro, 5 - Calzado)`));

    let importeCompra = 0;
    importeCompra = Number(prompt(`Ingrese el Importe Compra`));

    let topMaxVestimenta=80000;
    let topMaxPerfumeria=80000;
    let  topMaxLibreria=90000;
    let topMaxElectro=70000;
    let topMaxCalzado=80000;

    let nombreRubro=``;
    let descuento = 0;


    switch(rubro)
    {
        case 1:
            {
                console.log(`Ud. Eligio vestimenta` );
                descuento= (importeCompra*20)/100;
                descuento = descuento > topMaxVestimenta ? topMaxVestimenta:descuento;
           
                break;

            }
        case 2:
            {
                 console.log(`Ud. Eligio perfumeria` );
                descuento= (importeCompra*20)/100;
                descuento = descuento > topMaxPerfumeria ? topMaxPerfumeria:descuento;

                break;               
            }
        case 3:
            {
                console.log(`Ud. Eligio libreria` );
                descuento= (importeCompra*30)/100;
                descuento = descuento > topMaxLibreria ? topMaxLibreria:descuento;
                break;
            }
        case 4:
            {
                console.log(`Ud. Eligio Electrodomestico` );
                descuento= (importeCompra*15)/100;
                descuento = descuento > topMaxElectro ? topMaxElectro:descuento;
                break;
            }
        case 5:
            {
                console.log(`Ud. Eligio Calzado` );
                descuento= (importeCompra*20)/100;
                descuento = descuento > topMaxCalzado ? topMaxCalzado:descuento;
                break;
            }
        default:
            {
                console.log(`Ud. Eligio opcion invalida` );
                descuento= 0;
                break;
            }
    }

 

        let totalAPagar = 0; 

        totalAPagar = importeCompra - descuento;        

        console.log(`Importe Compra: ${importeCompra} Descuento: ${descuento} Total a Pagar: ${totalAPagar}`);


}
