import { calculoDeDosisInsulina } from "./modelo.js";

window.onload=()=>{
    console.log(`El programa esta corriendo...`);
    // declaro las variables y ingreso sus valores. Se verifica que se ingreso bien los valores de las variables.
    let peso=Number(prompt(`Ingrese el Peso Corporal en Kg:`));
    while(isNaN(peso)|| peso<=0){
        peso=Number(prompt(`Error. Vuelva a ingresar su peso corporal:`));
    }
    let nivelDeGlucosa= Number(prompt(`Ingrese su Nivel de Glucosa en Sangre:`));
    while(isNaN(nivelDeGlucosa)|| nivelDeGlucosa<=0){
        nivelDeGlucosa=Number(prompt(`Error. Vuelva a ingresar su nivel de glucosa en sangre:`));
    }
    let tipoDeDiabetes=Number(prompt(`Ingrese el tipo de diabetes que tiene (Tipo 1 o Tipo 2):`));
    while(isNaN(tipoDeDiabetes)|| tipoDeDiabetes<1 || tipoDeDiabetes>2){
        tipoDeDiabetes=Number(prompt(`Error.Ingrese el tipo de diabetes que tiene (Tipo  1 o 2):`));
    }
    let dosisInsulina=calculoDeDosisInsulina(peso, tipoDeDiabetes, nivelDeGlucosa); // se pasa los parametros a la funcion.
    // muetra los resultados de las variables.
    console.log(`PESO CORPORAL (Kg): ${peso}`);
    console.log(`NIVEL DE GLUCOSA EN SANGRE: ${nivelDeGlucosa}`);
    console.log(`TIPO DE DIABETES: ${tipoDeDiabetes}`);
    console.log(`DOSIS DE INSULINA RECOMENDADA: ${dosisInsulina}`);
};