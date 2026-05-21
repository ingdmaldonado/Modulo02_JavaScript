export const calcularDosisInsulina = (peso, nivelGlucosa, diabetesTipo) => {
    let dosisInsulina = 0;
    if(nivelGlucosa > 180)
        dosisInsulina += nivelGlucosa/2;
    dosisInsulina += diabetesTipo === 1 ? peso/2 : peso/5;
    return dosisInsulina;
}