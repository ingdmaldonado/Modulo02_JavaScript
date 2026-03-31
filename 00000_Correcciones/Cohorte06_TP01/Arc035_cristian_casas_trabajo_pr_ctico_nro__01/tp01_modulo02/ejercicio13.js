/*
Ejercicio Nro. 13: Estructuras Condicionales (if/else)

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
 - importe final a pagar.
 */

// Variables
let rubroComercio=prompt(`Ingrese el rubro del comercio: Vestimenta, Perfumeria, etc...`);
let importeCompra=Number(prompt(`Ingresar importe de compra: `));
let descuento=0;
let importeFinal=0;

{
    // Calcular descuento
    if(rubroComercio="Vestimenta"){
        descuento=importeCompra*0.20;
        if(descuento>80000){
            descuento=80000;
        }
    }else if(rubroComercio="Perfumeria"){
        descuento=importeCompra*0.20;
        if(descuento>80000){
            descuento=80000;
        }
    }else if(rubroComercio="Libreria"){
        descuento=importeCompra*0.30;
        if(descuento>90000){
            descuento=90000;
        }
    }else if(rubroComercio="Calzado"){
        descuento=importeCompra*0.20;
        if(descuento>80000){
            descuento=80000;
        }
    }else if(rubroComercio="Electrodomesticos"){
        descuento=importeCompra*0.15;
        if(descuento>70000){
            descuento=70000;
        }    
    }
    else{
        console.log(`Rubro no válido.`);
    }
}

console.log(`Rubro: ${rubroComercio}`);
console.log(`Importe de la compra: $${importeCompra}`);
console.log(`Descuento aplicado: $${descuento}`);
console.log(`Importe final a pagar: $${importeCompra-descuento}`);