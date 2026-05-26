/*
    Ejercicio Nro. 03:
    Realizar un programa que permita ingresar los totales que una persona pagó por sus servicios en su hogar.
    El primer valor representará los gastos de energía (luz eléctrica), el segundo valor representará los gastos en comunicación (conectividad a internet), el tercer valor representará los gastos ocasionados por el servicio de agua potable. Se estima que para el siguiente mes estos tres valores incrementarán en un 12,5%, 7% y 3% respectivamente. El programa debe calcular el gasto futuro a pagar.
*/

{
    let gastosEnergia = 0;
    gastosEnergia = Number(prompt(`Ingrese el importe a Pagar de la Boleta de Energia Eléctrica:`));

    let gastosComunicacion = 0;
    gastosComunicacion = Number(prompt(`Ingrese el importe a Pagar de la Boleta de Comunicación:`));

    let gastosAguaPotable = 0;
    gastosAguaPotable = Number(prompt(`Ingrese el importe a Pagar de la Boleta de Agua Potable:`));

    let incrementoEnergia = (gastosEnergia*12.5)/100;
    let incrementoComunicacion = (gastosComunicacion*7)/100;
    let incrementoAguaPotable = (gastosAguaPotable*3)/100;

    let proximoMesEnergia = gastosEnergia + incrementoEnergia;
    let proximoMesComunicacion = gastosComunicacion + incrementoComunicacion;
    let proximoMesAguaPotable = gastosAguaPotable + incrementoAguaPotable;

    console.log(`Boletas Pagadas: // Energía: $${gastosEnergia} | Comunicación: $${gastosComunicacion} | Agua Potable: $${gastosAguaPotable}`);
    console.log(`Próximo Mes con Aumentos: // Energía (12,5% de Aumento): $${proximoMesEnergia} | Comunicación (7% de Aumento): $${proximoMesComunicacion} | Agua Potable: (3% de Aumento): $${proximoMesAguaPotable}`);
}