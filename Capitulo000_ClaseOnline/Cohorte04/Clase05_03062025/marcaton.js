
/* 
¡LA NOTICIA QUE TODOS ESPERÁBAMOS... LLEGÓ!
👉🏻 VUELVEN LOS BENEFICIOS EXCLUSIVOS PARA LOS COMERCIOS DE CATAMARCA, ¡RENOVADOS Y MEJOR QUE NUNCA!

👉 Comercios de todos los rubros (que cumplan con los requisitos y estén debidamente encuadrados) podrán ofrecer estos increíbles beneficios a sus clientes:

📌 ALIMENTOS
✅ 30% de descuento en un solo pago
📆 Todos los días
💳 Tope de reintegro mensual: $60.000 por cliente

📌 CONSTRUCCIÓN Y HOGAR
✅ 20% de descuento + 6 cuotas sin interés
📆 Lunes, martes y miércoles
💳 Tope de reintegro mensual: $120.000 por cliente

📌 VESTIMENTA Y OTROS RUBROS
✅ 20% de descuento + 6 cuotas sin interés
📆 Lunes, martes y miércoles
💳 Tope de reintegro mensual: $80.000 por cliente

📌 GASTRONOMÍA Y COMIDAS AL PASO
✅ 20% de descuento en un solo pago
📆 Todos los días
💳 Tope de reintegro mensual: $20.000 por cliente

📌 PRODUCTOS REGIONALES Y ARTESANÍAS
✅ 20% de descuento + 6 cuotas sin interés
📆 Todos los días
💳 Tope de reintegro mensual: $40.000 por cliente

📌 PERFUMERÍAS
✅ 20% de descuento + 6 cuotas sin interés
📆 Jueves y viernes
💳 Tope de reintegro mensual: $80.000 por cliente

📌 HOTELES Y HOSTERÍAS
✅ 20% de descuento + 6 cuotas sin interés
📆 Todos los días
💳 Tope de reintegro mensual: $80.000 por cliente
*/

/* ENTRADAS => PROCESO => SALIDA */

/* 
    tipoRubro => 1,2,3,4,5,6,7 (ASUME un conjunto de valores finito)

    dia => (conjunto de valores finitos)
        1 => LUNES
        2 => MARTES
        ...
        7 => DOMINGO

    precio de un producto ?. 
*/

{
    console.log(`aplicacion esta corriendo`);

    let tipoRubro = 0;
    let dia = 0;

    tipoRubro = Number(prompt(`Ing. Rubro (1 - ALIMENTOS 2 - CONSTRUCCIÓN)`));
    dia = Number(prompt(`Ing. el dia (1 - Lunes, 2 - Martes ...)`));

    /* matematica => analisis de funciones  
    
        función que me permite calcular el precio y el descuento
        de una compra EN FUNCIÓN DE tipo de rubro y el dia.
    
        y = f(x)

        descuento = f(tipoRubro,dia) 

    */

    let topeReintegro = 0;
    let porcentajeDeDescuento = 0;

    switch(tipoRubro)
    {
        case 1:// ALIMENTOS => el dia no condiciona el descuento
            {
                porcentajeDeDescuento = 30;
                topeReintegro = 60000;
                break;
            }
        case 2:// CONSTRUCCION => LUNES, MARTES Y MIERCOLES
            {
                if((dia === 1) || (dia === 2) || (dia === 3))
                {
                    porcentajeDeDescuento = 20;
                    topeReintegro = 120000;
                }
                break;
            }
        default:// ERROR
            {
                console.log(`Ingreso un Rubro que no existe`);
                break;
            }
    }

    // el usuario ingresa el importe de la compra a pagar //
    let importeCompra = 0;
    importeCompra = Number(prompt(`Sr. Ingrese su Importe de Compra`));

    // calculamos el descuento //
    let descuentoDefinitivo = 0;  // aqui estara el descuento a aplicar sobre el importe de la compra
    
    /*
        este descuento es un descuento porcentual pero TOPEADO.

        descuento ?. => (importeCompra * porcentaje/100)

        si descuento > tope => uso el tope
        sino descuento tal como lo calcule 

    */

    descuentoDefinitivo = 
            ((importeCompra * porcentajeDeDescuento)/100) > topeReintegro ? // calculo el descuento y me fijo si me paso del tope ?
            topeReintegro: // si se pasa del tope utiliza el tope
            ((importeCompra * porcentajeDeDescuento)/100); // utiliza el descuento


    let totalNetoAPagar = importeCompra - descuentoDefinitivo;
    console.log(`rubro: ${tipoRubro} dia: ${dia} => porcentaje ${porcentajeDeDescuento} y ${topeReintegro} descuento: ${descuentoDefinitivo} total a pagar ${totalNetoAPagar}`);


}