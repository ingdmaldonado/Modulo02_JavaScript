
const promedioDeTresNotas = (nota1,nota2,nota3) =>{

    return (nota1 + nota2 + nota3)/3;

}

const promedioDeCuatroNotas = (nota1,nota2,nota3,nota4) =>{

    return (nota1 + nota2 + nota3 + nota4)/4;

}

/* Rest Operator para decir que una función
puede recibir múltiples parametros. "n" parametros
*/

const promedio = (...notas)=>{

    /* voy a mostrar esas notas */

    // aqui estoy mostrando todas las notas juntas //
    console.log(...notas);

    /* aqui estoy recorriendo nota x nota y 
    mostrandolas individualmente */
    
    let suma = 0;
    let contador = 0;

    notas.forEach(nota => {

        console.log(nota);

        suma = suma + nota;// acumulador
        contador = contador + 1 // contador

    })

    if(contador > 0)
    {
        return (suma/contador);
    }
    else
    {
        return 0;
    }

}; 


window.onload = ()=>{

    /* Rest Operator */

    let resultado1 = promedioDeTresNotas(7,9,5);
    console.log(resultado1);

    promedio(2,8,7,9,10,7,9);

    let resultado2 = promedio(6,4);
    console.log(`El Promedio es: ${resultado2}`);

    let resultado3 = promedio(7,2,4,8,9,10);
    console.log(`El Promedio es: ${resultado3}`);

    
}