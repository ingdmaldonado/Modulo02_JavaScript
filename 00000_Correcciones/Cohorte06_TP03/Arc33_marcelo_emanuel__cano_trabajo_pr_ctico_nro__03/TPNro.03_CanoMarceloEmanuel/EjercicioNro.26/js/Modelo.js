export function calcularDosisInsulina(sangre,peso,tipo) {

        let dosis = 0;

        if (tipo === "Tipo1") {
              dosis = sangre > 180 ? (peso * 0.5) + (sangre * 0.5) : peso * 0.5;
        }       

        if (tipo === "Tipo2" ) {
                dosis = sangre > 180 ? (peso * 0.2) + (sangre * 0.5) : peso * 0.2;
        }      

        return dosis;
}