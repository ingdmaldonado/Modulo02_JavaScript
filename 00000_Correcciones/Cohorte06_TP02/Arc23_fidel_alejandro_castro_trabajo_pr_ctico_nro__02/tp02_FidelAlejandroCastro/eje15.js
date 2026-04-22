{
    let entrada = 1;
    let error = 0;

    while (entrada === 1){
        entrada = Number(prompt(`¿Quiere cargar una Nota? 1. Si | 2. No`));

        if (entrada === 1) {
            let nota = Number(prompt(`Ingrese la nota del estudiante`));
            if (nota >= 0 && nota <=10){
                if (nota >= 0 && nota <= 4){
                    console.log(`Desaprobado`);
                }else if(nota > 4 && nota <= 7){
                    console.log(`Aprobados`);
                }else if (nota > 7 && nota < 10){
                    console.log(`Muy Bueno`);
                }else{
                    console.log(`Excelente`);
                }
            } else{
                error += 1;
                continue;
            }
        }
    }

    console.log (`El usuario se equivocó ${error} veces`);
}