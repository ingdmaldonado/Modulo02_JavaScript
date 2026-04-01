/* Ejercicio Nro. 13: Estructuras Condicionales (if/else)
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

    let rubro= 0;
    rubro= Number(prompt(`Selecciona el Rubro de Comercio 1- Vestimenta 2-Perfumeria 3-Libreria 4-Electro 5- Calzado`))
    console.log(rubro);

    let importeCompra= 0;
    importeCompra= Number(prompt(`Ingrese el importe de su compra`));
    console.log(importeCompra);

    let descuento= 0;


    switch (rubro)
    {
        case 1: /* Vestimenta*/
            { console.log(`Rubro Vestimenta`)};
            descuento= (importeCompra * 20)/100;
            descuento= descuento > 80000? 80000: descuento;
            break;
        case 2: /* Perfumeria */
            { console.log(`Rubro Perfumeria`)};
            descuento= (importeCompra * 20)/100;
            descuento= descuento > 80000? 80000: descuento;
            break;
        case 3: /* Libreria */
             { console.log(`Rubro Libreria`)};
            descuento= (importeCompra * 30)/100;
            descuento= descuento > 90000? 90000: descuento;
            break;
        case 4:/* Electrodomesticos */
             { console.log(`Rubro Electro`)};
            descuento= (importeCompra * 15)/100;
            descuento= descuento > 70000? 70000: descuento;
            break;
        case 5: /* Calzados */
             { console.log(`Rubro Calzado`)};
            descuento= (importeCompra * 20)/100;
            descuento= descuento > 80000? 80000: descuento;
            break;
        default: 
            {
              console.log(`Por favor elige un Rubro correcto`);
              break;
            }

    }


    let totalAPagar=0;
    
    totalAPagar= importeCompra - descuento;
    console.log(`Importe de la compra es de $ ${importeCompra}, el descuento es de $ ${descuento}. Total a pagar $${totalAPagar};`);

}