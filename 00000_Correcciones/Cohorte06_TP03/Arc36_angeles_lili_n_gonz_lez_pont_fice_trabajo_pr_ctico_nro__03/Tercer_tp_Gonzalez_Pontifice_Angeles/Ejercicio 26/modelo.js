
// Ejercicio 26: Calcular dosis recomendada de insulina//
export const calcularDosisInsulina = (glucosa, peso, tipoDiabetes) => {
    
    let dosis = 0;

    if (tipoDiabetes === "1") {
        // Tipo 1: 50% del peso + 50% de glucosa solo si > 180//
        dosis = peso * 0.5;
        
        if (glucosa > 180) {
            dosis += glucosa * 0.5;
        }
        
    } else if (tipoDiabetes === "2") {
        // Tipo 2: 20% del peso + 50% de glucosa solo si > 1800000//
        dosis = peso * 0.2;
        
        if (glucosa > 180) {
            dosis += glucosa * 0.5;
        }
        
    } else {
        return "Error: Tipo de diabetes no válido";
    }

    return dosis;
};