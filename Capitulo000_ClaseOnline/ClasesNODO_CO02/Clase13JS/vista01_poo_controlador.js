
import {Suma,Cuadrado} from "./vista01_poo_modelo.js";
import {IMC} from "./vista01_IMC_modelo.js";


window.addEventListener("load",()=>{

    console.log("running");

    /* las clases y otras son los objetos
    
    los objetos son INSTANCIAS de la clase

    clases => MOLDES que permite crear objetos.

    estan pensados para construir soluciones integrales.
    que encapsulen y realicen una "ENCAPSULAR"  y "ABSTRACCIÓN" de algun 
    problema en particular.

    1) Constructores de CLASES => experiencia en POO y todos los conceptos

    2) Usuarios de esas CLASES => usufructo de clases construidas por otros
    del equipo y/o por alguna otra empresa.

        React =>
        Node => 
        

    */


    // este momento. se llama instanciar o crear un objeto
    let objetoSuma1 = new Suma(10,15);
    console.log(objetoSuma1.getSuma())

    // aqui esta naciendo otro objeto que llamara suma2
    let objetoSuma2 = new Suma(22,-11);
    console.log(objetoSuma2.getSuma())

    // aqui esta naciendo otro objeto qu3 se llama suma3 
    const objetoSuma3 = new Suma(25,55);
    console.log(objetoSuma3.getSuma());

    // aqui vamos a instanciar un objeto de la clase IMC */

    let objetoIMC1 = new IMC(82,1.70);

    // aqui estoy invocando y mostrando el resultado de invocar el metodo getInd //
    console.log(objetoIMC1.getIndiceMasaCorporal());

    // aqui lo que estoy haciendo es mostrar todo el objeto completo
    console.log(objetoIMC1);

    // aqui lo que estoy haciendo es mostrando un atributo de la clase
    console.log(objetoIMC1.imc);

    // invocar el metodo interno de la clase para mostrar el analisis //

    console.log(objetoIMC1.getAnalisisDelIMC());
    
})