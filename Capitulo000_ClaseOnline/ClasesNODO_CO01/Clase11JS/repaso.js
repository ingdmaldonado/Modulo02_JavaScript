
const fnCuadrado = numero => numero * numero;

const fnCubo = numero => numero * numero * numero;

const fnLLamadora = (parametroFuncion,valor)=>
{
    let resultado = parametroFuncion(2);
    console.log(resultado);
}


window.addEventListener("load",()=>{

    console.log("funcionando");

    const Vector1 = [2,7,6,-1,-4,15];

    const Vector2 = Vector1.map(element=>{

        if(element > 0)
        {
            return element;
        }

    });


    const Vector3 = Vector1.filter((element)=>{
        if(element > 0)
        {
            return true;
        }
    })

    const Vector4 = Vector1.filter(element => element > 0);
    


    console.log(Vector1);
    console.log(Vector2);

    console.log(Vector3);
    console.log(Vector4);


    fnLLamadora(fnCuadrado,2);

    fnLLamadora(fnCubo,2);

    fnLLamadora(numero=> numero * numero * numero * numero);
        


})