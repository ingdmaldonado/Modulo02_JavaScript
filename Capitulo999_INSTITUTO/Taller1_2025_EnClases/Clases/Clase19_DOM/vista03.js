

window.onload = ()=>{

    console.log("aplicacion cargada");

    /* creo constantes que apuntan
    a los input o elementos que quiero
    capturar */

    const idNumero1 = document.querySelector("#idNumero1");
    const idNumero2 = document.querySelector("#idNumero2");
    const idBtnSumar = document.querySelector("#idBtnSumar");

    console.log(idNumero1);
    console.log(idNumero2);
    console.log(idBtnSumar);

    /* Delegación de EVENTOS 
    
    1 evento => delegado en una función
    
    */

    idBtnSumar.onclick = ()=>{

        let valor1 = Number(idNumero1.value);

        let valor2 = Number(idNumero2.value);

        let valor3 = 8500;

        let resultadoSuma = valor1 + valor2;

        console.log(valor1,valor2,valor3);

        console.log(`La Suma es igual a ${resultadoSuma}`);

    };

};