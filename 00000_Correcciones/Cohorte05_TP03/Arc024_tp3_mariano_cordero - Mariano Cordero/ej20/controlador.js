import { dosisInsulina } from "./modelo.js";

window.onload = () => {

    console.log(`Calculo de insulina`);

    let nivelDeGlucosa = 0;
    let pesoCorporal = 0;
    let tipoDeDiabetes = 0;

    nivelDeGlucosa = Number(prompt(`Ingrese el nivel de glucosa`));
    pesoCorporal = Number(prompt(`Ingrese el peso corporal`));
    tipoDeDiabetes = Number(prompt(`Ingrese el tipo de diabetes`));

    if (nivelDeGlucosa < 180) {

        console.log(`Usted no esta catalogado para utilizar Insulina`);

    } else {

        let calculoPaciente = dosisInsulina(nivelDeGlucosa, pesoCorporal, tipoDeDiabetes);

        console.log(` Su dosis de Insulina recomendada es: ${calculoPaciente}`);
    };
};


