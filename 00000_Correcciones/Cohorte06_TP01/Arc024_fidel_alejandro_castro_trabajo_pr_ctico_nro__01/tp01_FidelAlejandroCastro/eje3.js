{
    let gastosEnergia = Number(prompt("Ingrese total de gasto en energía: "));
    let gastosComunicacion = Number(prompt("Ingrese total de gasto en Internet: "));
    let gastosAguaPotable = Number(prompt("Ingrese total de gastos en Agua Potable: "));
    let gastosTotal = gastosEnergia + gastosComunicacion + gastosAguaPotable;

    console.log(`----- Gastos Actuales -----`);
    console.log(`Energía: $${gastosEnergia}`);
    console.log(`Internet: $${gastosComunicacion}`);
    console.log(`Agua Potable: $${gastosAguaPotable}`);
    console.log(`Total Final: $${gastosTotal}`);

    let aumentoEnergia = 12.5/100;
    let aumentoComunicacion = 7/100;
    let aumentoAguaPotable = 3/100;

    let cantAumentoEnergia = gastosEnergia * aumentoEnergia;
    let cantAumentoComunic = gastosComunicacion * aumentoComunicacion;
    let cantAumentoAgua = gastosAguaPotable * aumentoAguaPotable;
    let aumentoTotal = cantAumentoEnergia + cantAumentoComunic + cantAumentoAgua;

    console.log(`----- Aumentos previstos -----`);
    console.log(`Energía: ${aumentoEnergia * 100}% | Total: $${cantAumentoEnergia}`);
    console.log(`Internet: ${Math.trunc(aumentoComunicacion*100)}% | Total: $${cantAumentoComunic}`);
    console.log(`Agua Potable: ${aumentoAguaPotable*100}% | Total: $${cantAumentoAgua}`);
    console.log(`Total Final: $${aumentoTotal}`);

    console.log(`----- Gasto Futuro Total -----`);
    console.log(`en Energía: $${gastosEnergia+cantAumentoEnergia}`);
    console.log(`en Internet: $${gastosComunicacion+cantAumentoComunic}`);
    console.log(`en Agua Potable: $${gastosAguaPotable+cantAumentoAgua}`);
    console.log(`Total Final: $${aumentoTotal + gastosTotal}`);
}