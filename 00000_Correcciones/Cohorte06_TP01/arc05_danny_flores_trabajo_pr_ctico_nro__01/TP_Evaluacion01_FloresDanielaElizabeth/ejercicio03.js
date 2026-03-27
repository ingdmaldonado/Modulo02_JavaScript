/* TP - EJERCICIO NRO. 03
   Realizar un programa que permita ingresar los totales que una persona pagó por sus servicios en su hogar.
   El primer valor representará los gastos de energía (luz eléctrica), el segundo valor representará los gastos en
   comunicación (conectividad a internet), el tercer valor representará los gastos ocasionados por el servicio de agua
   potable. Se estima que para el siguiente mes estos tres valores incrementarán en un 12,5%, 7% y 3%
   respectivamente. El programa debe calcular el gasto futuro a pagar.
*/

{
    let gastoEnergia      = 0;
    let gastoComunicacion = 0;
    let gastoAgua         = 0;

    gastoEnergia      = Number(prompt(`Ingrese el gasto actual de Energía (luz eléctrica)`));
    gastoComunicacion = Number(prompt(`Ingrese el gasto actual de Comunicación (internet)`));
    gastoAgua         = Number(prompt(`Ingrese el gasto actual de Agua Potable`));

    let gastoEnergiaProximo      = 0;
    let gastoComunicacionProximo = 0;
    let gastoAguaProximo         = 0;

    gastoEnergiaProximo      = gastoEnergia      + (gastoEnergia      * 12.5) / 100;
    gastoComunicacionProximo = gastoComunicacion + (gastoComunicacion * 7) / 100;
    gastoAguaProximo         = gastoAgua         + (gastoAgua         * 3) / 100;

    let totalActual  = gastoEnergia      + gastoComunicacion      + gastoAgua;
    let totalProximo = gastoEnergiaProximo + gastoComunicacionProximo + gastoAguaProximo;

    console.log(`--- Gastos Actuales ---`);
    console.log(`Energía: ${gastoEnergia}`);
    console.log(`Comunicación: ${gastoComunicacion}`);
    console.log(`Agua: ${gastoAgua}`);
    console.log(`Total Actual: ${totalActual}`);

    console.log(`--- Gastos Próximo Mes ---`);
    console.log(`Energía  (+12.5%): ${gastoEnergiaProximo}`);
    console.log(`Comunicación (+7%): ${gastoComunicacionProximo}`);
    console.log(`Agua      (+3%): ${gastoAguaProximo}`);
    console.log(`Total Próximo Mes: ${totalProximo}`);
}
