/*

Ejercicio Nro. 13: Estructuras Condicionales (if/else)
El programa Marcatón, realizado en Catamarca junto al Banco Nación, ofrece descuentos en distintos rubros comerciales.
Tabla de descuentos:
Rubro           Descuento Tope máximo

Vestimenta          20%     $80.000
Perfumería          20%     $80.000
Librería            30%     $90.000
Electrodomésticos   15%     $70.000
Calzado             20%     $80.000

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
    let CodigoRubro = 0;
    let ImporteDeCompra = 0;
    let DescuentoAplicado = 0;
    let MontoDescuento = 0;
    let MontoTopeCorresponde = 0;
    let TotalAPagar = 0;

    let PorDescVest = 20;
    let PorDescPer = 20;
    let PorDescLib = 30;
    let PorDescElec = 15;
    let PorDescCalz = 20;

    let TopeVest = 80000;
    let TopePer = 80000;
    let TopeLib = 90000;
    let TopeElec = 70000;
    let TopeCalz = 80000;

    let CodigoCorrecto = true;

    CodigoRubro = Number(prompt(`Por Favor ingrese CODIGO del Rubro: 1-> VESTIMENTA // 2-> PERFUMERIA // 3->LIBRERIA // 4-> ELECTRODOMESTICOS // 5-> CALZADO `));
    
    ImporteDeCompra = Number(prompt(`Por Favor ingrese el MONTO de la compra`));
    console.log(`El IMPORTE de Compra ingresado es: ${ImporteDeCompra}`);

    if(ImporteDeCompra > 0)
    {
        switch(CodigoRubro)
            {
                case 1: //VESTIMENTA
                    DescuentoAplicado = PorDescVest;
                    MontoDescuento = ImporteDeCompra * (PorDescVest / 100);
                    MontoTopeCorresponde = TopeVest;
                    console.log(`El codigo de RUBRO ingresado es: ${CodigoRubro} - VESTIMENTA`);
                    break;
                case 2: //PERFUMERIA
                    DescuentoAplicado = PorDescPer;
                    MontoDescuento = ImporteDeCompra * (PorDescPer / 100);
                    MontoTopeCorresponde = TopePer;
                    console.log(`El codigo de RUBRO ingresado es: ${CodigoRubro} - PERFUMERIA`);
                    break;
                case 3: //LIBRERIA
                    DescuentoAplicado = PorDescLib;
                    MontoDescuento = ImporteDeCompra * (PorDescLib / 100);
                    MontoTopeCorresponde = TopeLib;
                    console.log(`El codigo de RUBRO ingresado es: ${CodigoRubro} - LIBRERIA`);
                    break;
                case 4: //ELECTRO
                    DescuentoAplicado = PorDescElec;
                    MontoDescuento = ImporteDeCompra * (PorDescElec / 100);
                    MontoTopeCorresponde = TopeElec;
                    console.log(`El codigo de RUBRO ingresado es: ${CodigoRubro} - ELECTRO`);
                    break;
                case 5: //CALZADO
                    DescuentoAplicado = PorDescCalz;
                    MontoDescuento = ImporteDeCompra * (PorDescCalz / 100);
                    MontoTopeCorresponde = TopeCalz;
                    console.log(`El codigo de RUBRO ingresado es: ${CodigoRubro} - CALZADO`);
                    break;
                default:
                    CodigoCorrecto = false;
                    break;                
                
            }        
    }
    else
    {
        CodigoCorrecto = false;
    }
    
    if(CodigoCorrecto === true)
    {
        MontoDescuento = MontoDescuento > MontoTopeCorresponde ? MontoTopeCorresponde:MontoDescuento;
        TotalAPagar = ImporteDeCompra - MontoDescuento;
        console.log(`El Monto de Compra es $ ${ImporteDeCompra} // El Porc. de Descuento Aplicado es ${DescuentoAplicado} % //El Monto total de DESCUENTO es ${MontoDescuento} ---> TOTAL A PAGAR ${TotalAPagar}`);
//        console.log(`Ingreso el Rubro ${CodigoRubro}`)
    }
    else
    {
        
        console.log(`Ingreso Un RUBRO INCORRECTO o PRECIO DE COMPRA MENOR o IGUAL a 0 - Reingrese Datos`)
    }
}