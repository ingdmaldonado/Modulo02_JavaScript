// Ejercicio N° 3

{

    let energiaElectrica = 0; 

    let internet  = 0;

    let aguaPotable  = 0;


    energiaElectrica = Number( prompt(`ingrese su gasto mensual de energia`));

    internet = Number(prompt(`ingrese su gasto mensual de internet`))

    aguaPotable = Number(prompt(`ingrese su gasto mensual de agua`))

    let incrementoMensualEnergia =  energiaElectrica * 1.125;

    let incrementoMensualInternet =  internet * 1.07;

    let incrementomensualAguaPotable =  aguaPotable * 1.03;

    

        let textoFinal = `costo siguiente mes energia: ${incrementoMensualEnergia} costo siguiente mes internet: ${incrementoMensualInternet} costo siguiente mes de agua ${incrementomensualAguaPotable}`

        console.log(textoFinal)
}
