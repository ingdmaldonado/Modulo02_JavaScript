/*

Ejercicio Nro. 13: Estructuras Condicionales (if/else) 
El programa Marcatón, realizado en Catamarca junto al Banco Nación, ofrece descuentos en distintos 
rubros comerciales. 
Tabla de descuentos: 
 
Rubro                Descuento      Tope máximo 
Vestimenta           20%            $80.000 
Perfumería           20%            $80.000 
Librería                 30%            $90.000 
Electrodomésticos   15%            $70.000 
Calzado               20%            $80.000 
El programa debe: 
 
1. Solicitar el rubro del comercio. 
2. Solicitar el importe de la compra. 
3. Calcular el descuento correspondiente. 
4. Verificar si el descuento supera el tope del rubro. Si lo supera, aplicar solo el tope. 
 
5. Mostrar: 
    - rubro 
    - importe de la compra 
    - descuento aplicado 
    - importe final a pagar. 

*/

{

    let rubro = 0;
    let nombreRubro = "";
    let importeCompra = 0;
    let descuento = 0;
    let totalAPagar = 0;
    let esRubroCorrecto = true;

    rubro = Number(prompt(`Ingrese el rubro:  1 = Vestimenta, 2 = Perfurmeria, 3 = Libreria, 4 = Electrodomesticos, 5 = Calzado `));
    importeCompra = Number(prompt(`Ingrese importe de compra`));

    switch(rubro)
    {
        // vestimenta
        case 1:{
            nombreRubro = "VESTIMENTA";
            descuento = (importeCompra*20)/100;
            descuento = descuento > 80000 ? 80000:descuento;
            break;
        }
        // perfurmeria
        case 2:{
            nombreRubro = "PERFUMERÍA";
            descuento = (importeCompra*20)/100;
            descuento = descuento > 80000 ? 80000:descuento;
            break;
        }
        // libreria
        case 3:{
            nombreRubro = "LIBRERÍA";
            descuento = (importeCompra*30)/100;
            descuento = descuento > 90000 ? 90000:descuento;
            break;
        }
        // electrodomesticos
        case 4:{
            nombreRubro = "ELECTRODOMÉSTICOS";
            descuento = (importeCompra*15)/100;
            descuento = descuento > 70000 ? 70000:descuento;
            break;
        }
        // calzado
        case 5:{
            nombreRubro = "CALZADO";
            descuento = (importeCompra*20)/100;
            descuento = descuento > 80000 ? 80000:descuento;
            break;
        }
        default:{
            esRubroCorrecto = false
            break;
        }
    }


    if (esRubroCorrecto) {

        totalAPagar = importeCompra - descuento;

        console.log(`Rubro:"${nombreRubro}", Importe de la compra $${importeCompra}, Descuento Aplicado $${descuento}, Importe final a pagar: $${totalAPagar}`);

    }else{

        console.log(`ERROR, Ingreso un rubro incorrecto`);
    }

}