/*Ejercicio Nro. 03:
Realizar un programa que permita ingresar los totales que una persona pagó por sus servicios en su hogar.
El primer valor representará los gastos de energía (luz eléctrica), el segundo valor representará los gastos en
comunicación (conectividad a internet), el tercer valor representará los gastos ocasionados por el servicio de agua
potable. Se estima que para el siguiente mes estos tres valores incrementarán en un 12,5%, 7% y 3%
respectivamente. El programa debe calcular el gasto futuro a pagar.
*/

{
    let  gastoEnergia = 0;
    let gastoConectividad = 0;
    let gastoaguaPotable = 0;

    gastoEnergia = Number(prompt(`Ingrese el gasto de luz electrica`));

    gastoConectividad = Number(prompt(`ingrese el gasto de internet`));

    gastoaguaPotable = Number(prompt(`ingrese el gasto de agua potable`));

    //gasto actual
    console.log(`Gasto de Energia ${gastoEnergia}`);
    console.log(`Gasto de Conectividad ${gastoConectividad}`);
    console.log(`Gasto de Agua Potable ${gastoaguaPotable}`);


    let aumentoEnergia = (gastoEnergia * 12.5) / 100;
    let aumentoConectividad = (gastoConectividad * 7) / 100;
    let aumentoAguaPotable = (gastoaguaPotable * 3) / 100;


    console.log(`El incremento de la energia es: ${gastoEnergia},el incremento de la conectividad : ${gastoConectividad},el incremento de aguaPotable ${aumentoAguaPotable}`);


    let totalEnergia = gastoEnergia + aumentoEnergia;
    let totalConectividad = gastoConectividad + aumentoConectividad;
    let totalAguaPotable = gastoaguaPotable + aumentoAguaPotable;

    console.log(`El total de energia a pagar en el futuro es:${totalEnergia}, El total de conectivida a futuro pagar en el futuro es:${totalConectividad}, El total de agua potable a  pagar en el futuro es:${totalAguaPotable}`);

}