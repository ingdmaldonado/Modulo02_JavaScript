

const Cuadrado = (x)=>{

    return x * x;
}

const fnIndiceMasaCorporal = (pesoEnkg,alturaEnMts)=>
    {
        return pesoEnkg / Cuadrado(alturaEnMts);
    }


const fnAnalisisIMC2 = (imc)=>
    {

        if(imc <= 18.4)
        {
            return 'BAJO PESO';
        }
        if((imc > 18.4) && (imc <= 24.90))
        {
            return 'PESO NORMAL';
        }
    }

const fnAnalisisIMC = (imc)=>{

    if(imc <= 18.4)
    {
        return 'BAJO PESO'
    }
    else
    {
        if((imc > 18.4) && (imc <= 24.9))
        {
            return 'PESO NORMAL'
        }
        else
        {
            if((imc > 24.9) && (imc <= 29.90))
            {
                return 'OBESIDAD GRADO 1';
            }
            else
            {
                if((imc > 29.90) && (imc <= 34.90))
                {
                    return 'OBESIDAD GRADO 2';
                }
                else
                {
                    return 'OBESIDAD MÓRBIDA';
                }
            }
        }
    }

}

const fnValidarDatos = (p,a)=>
    {
        if(p <= 0)
        {
            return 'Debe Ingresar el Peso';
        }
        else
        {
            if(a <= 0)
            {
                return 'Debe Ingresar la Altura';
            }
            else
            {
                return '';
            }
        }

    }

window.addEventListener("load",()=>{

    console.log("application is running");

    const idPeso = document.querySelector("#idPeso");
    const idAltura = document.querySelector("#idAltura");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idResultado = document.querySelector("#idResultado");


    console.log(idPeso);
    console.log(idAltura);
    console.log(idBtnCalcular);

    idBtnCalcular.addEventListener("click",()=>{

        //alert("por aqui vamos a calcular");

        let peso = Number(idPeso.value);
        let altura = Number(idAltura.value);

        let resultadoValidacion = (fnValidarDatos(peso,altura));

        
        if(resultadoValidacion !='')
        {
            alert(resultadoValidacion);
        }

       

        if(resultadoValidacion ==='')
        {
            console.log(peso,altura);

            let IMC = fnIndiceMasaCorporal(peso,altura);
            console.log(IMC);
    
            let AnalisisIMC = fnAnalisisIMC(IMC);
            console.log(AnalisisIMC);
    
            idResultado.innerHTML = `<h1>${AnalisisIMC}</h1>`;
    
        }

       
    })



})