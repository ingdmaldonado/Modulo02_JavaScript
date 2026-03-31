/*Ejercicio Nro. 13: Estructuras Condicionales (if/else) 
El programa Marcatón, realizado en Catamarca junto al Banco Nación, ofrece descuentos en distintos 
rubros comerciales. 
Tabla de descuentos: 
Rubro                
Vestimenta           
Perfumería           
Librería                
Electrodomésticos   
Calzado               
El programa debe: 
Descuento      Tope máximo 
20%            
20%            
30%            
15%            
20%            
$80.000 
$80.000 
$90.000 
$70.000 
$80.000 
1. Solicitar el rubro del comercio. 
2. Solicitar el importe de la compra. 
3. Calcular el descuento correspondiente. 
4. Verificar si el descuento supera el tope del rubro. Si lo supera, aplicar solo el tope. 
5. Mostrar: - rubro - importe de la compra - descuento aplicado - importe final a pagar.*/
{
    let descuento=0;
    let rubro=0;
    let impoteDeCompra=0;
    let totalPagar=0;
    impoteDeCompra = Number(prompt `Ingrese el importe de la compra`);
    rubro= Number(prompt`Ingrese el rubro (1: Vestimenta)(2: Perfumería)(3: Librería)(4:Electro)(5: Calzados)`);

    switch(rubro){
        case 1:{
            descuento= (impoteDeCompra*20)/100;
            descuento= impoteDeCompra > 80000 ? 80000 : descuento;
        }
        break;
        case 2 :{
            descuento=(impoteDeCompra*20)/100;
            descuento= impoteDeCompra > 80000 ? 80000 : descuento;
        }
        break;
        case 3: {
            descuento=(impoteDeCompra*30)/100
            descuento=impoteDeCompra > 90000 ? 90000: descuento;
        }
        break;
        case 4: {
            descuento=(impoteDeCompra*15)/100;
            descuento=impoteDeCompra>70000? 70000:descuento;
        }
        break;
        case 5:{
            descuento=(impoteDeCompra*20)/100;
            descuento=impoteDeCompra>80000?80000:descuento
        }
        break;
        default:

        console.log(`Rubro incorrecto, ingrese la opción correcta`);
        break;
    }
    
    totalPagar= impoteDeCompra - descuento;
    console.log(`Importe ingresado ${impoteDeCompra}`);
    console.log(`El rubro ingresado es: ${rubro}`);
    console.log(`El descuento aplicado es de: ${descuento}`);
    console.log(`Total a pagar ${totalPagar}`);


}