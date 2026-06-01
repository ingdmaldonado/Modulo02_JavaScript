
/* 
  Ejemplo 01:  de Clousure. Explicación y código
  de que es Clousure en js puro 
*/

  function fnPrincipal ()
  {
    let contador = 0;

    function incrementar()
    {
        contador = contador + 1;
        console.log(contador);
    }

    return incrementar;
  }

  const contador1 = fnPrincipal();

  contador1();
  contador1();
  contador1();
  contador1();

/* Ejemplo 02. Ejemplo del como construir un hook
de React para guardar el estado de una variable y
acceder a esa variable mediante una función */


function estadoContador(valorInicial)
{
    let contador = valorInicial;

    function setContador(nuevoValor)
    {
      contador = nuevoValor;       
      console.log(contador);     
    }

    return [contador,setContador];
}

let [contador,setContador] = estadoContador(5);

setContador(15);
setContador(contador + 1);
setContador(contador + 2);



/*
est1({nombreVariable:"contadorGoles",valor:5});

est1({nombreVariable:"contadorPartidos",valor:2});

est1({nombreVariable:"contadorGoles",valor:0});

est1({nombreVariable:"contadorGoles",valor:17});

est1({nombreVariable:"contadorPartidos",valor:9});
*/










