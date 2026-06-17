

window.onload = function()
{

    console.log("esta funcionando");

    let txtNumero1 = document.getElementById("txtNumero1");

    let txtNumero2 = document.getElementById("txtNumero2");

    let idButtonSuma = document.getElementById("idButtonSuma");

    let idButtonDividir = document.getElementById("idButtonDividir");

    let idh3Resultado = document.getElementById("idh3Resultado");
    let idlblResultado = document.getElementById("idlblResultado");
    let iddivResultado = document.getElementById("iddivResultado");

    console.log(txtNumero1);
    console.log(txtNumero2);
    console.log(idButtonSuma);
    console.log(idh3Resultado,idlblResultado,iddivResultado);

    idButtonSuma.onclick = function()
    {
        let Num1 = Number(txtNumero1.value);
        let Num2 = Number(txtNumero2.value);

        let Resultado = Num1 + Num2;

        idh3Resultado.textContent = `El Resultado de la SUMA ES:= ${Resultado}`;

        /*
        idlblResultado.textContent = "El Resultado de la SUMA ES:= " + Resultado;

        iddivResultado.innerHTML = `<h1>El Resultado es ${Resultado} <h1>`
        */

        /*
        let VariosH3 = "";
        for(let i = 0;i <= 100;i++)
        {
            VariosH3 = VariosH3 + `<h1> soy una etiqueta ${i} html dinamica <h1>`;
        }

        iddivResultado.innerHTML = VariosH3;
        console.log(Resultado);    
        */    
    }


    idButtonDividir.onclick = function()
    {
        let Num1 = Number(txtNumero1.value);
        let Num2 = Number(txtNumero2.value);
        let Resultado = 0;

        if (Num2 !== 0)
        {
            Resultado =  Num1 / Num2;
            Resultado.toFixed(2);
        }
        else
        {
            alert("no puedo dividir por cero");
        }

       

        idh3Resultado.textContent = `El Resultado de la SUMA ES:= ${Resultado.toFixed(2)}`;
    }

    /*
    idButtonResta
    idButtonDividir
    */



}