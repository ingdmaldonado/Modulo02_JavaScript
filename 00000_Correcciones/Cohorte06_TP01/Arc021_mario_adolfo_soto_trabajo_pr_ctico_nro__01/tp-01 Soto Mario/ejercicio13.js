/*El programa Marcatón, realizado en Catamarca junto al Banco Nación, ofrece descuentos en distintos
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
    let comercioRubro = 0;
    comercioRubro=Number(prompt(`ingrese el numero de rubro 1-vestimenta 2-perfumeria 3-libreria 4-electrodomesticos 5-calzado`));

    let importeCompra =0;
    importeCompra = Number(prompt(`Ingrese el importe de la compra`));

    descuento = 0;

    switch(comercioRubro) 
    {  
         case 1:{console.log(`vestimenta`);
                descuento = (importeCompra*20)/100;
                if(descuento>80000) ;
                    {descuento = 80000;}
                
                break;
    }
        case 2:{console.log(`perfumeria`);
                descuento = (importeCompra*20)/100;
                if(descuento>80000) ;
                    {descuento = 80000;}
                 break;
        }
        case 3:{console.log(`libreria`);
                descuento = (importeCompra*30)/100;
                if(descuento>90000) ;
                    {descuento = 90000;}
                 break;
        }
        case 4:{console.log(`electrodomestico`);
                descuento = (importeCompra*15)/100;
                if(descuento>70000) ;
                  {descuento = 70000;}
                 break;
        }
        case 5:{console.log(`calzado`);
                descuento = (importeCompra*20)/100;
                if(descuento>80000) ;
                   {descuento = 80000;}
                 break;
        }

    }

    let totalApagar = importeCompra - descuento;
    console.log(`el importe de la compra es ${importeCompra} el importe a pagar es ${totalApagar}, el descuento aplicado es ${descuento}`);

 }