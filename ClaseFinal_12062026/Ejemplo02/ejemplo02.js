

const fnTipoHooksDeReact = (valorInicio) => {

  const Acumulador = {valor:valorInicio};

  const suscriptores = [];

  const setAcumulador = (nuevoValor) => {

      Acumulador.valor = nuevoValor;
      notificarCambios();

  };

  const agregarSuscriptor = (contenedor) =>{

    suscriptores.push(contenedor);
  }

  const notificarCambios = ()=>{

    suscriptores.forEach(sus => sus.textContent = Acumulador.valor);

  };

  return [Acumulador,setAcumulador,agregarSuscriptor];

};



window.onload = ()=>{
   
  const [Acumulador,setAcumulador,agregarSuscriptor] = fnTipoHooksDeReact(15);

  const idIncrementar = document.querySelector("#idIncrementar");
  const idDecrementar = document.querySelector("#idDecrementar");

  // estos son los suscriptores declarados //
  const idContenedor1 = document.querySelector("#idContenedor1");
  const idContenedor2 = document.querySelector("#idContenedor2");
  const idContenedor3 = document.querySelector("#idContenedor3");
  const idContenedor4 = document.querySelector("#idContenedor4");

  /* los agrego a los suscriptores al listado de objetos 
  que tengo que notificar  
  */

  agregarSuscriptor(idContenedor1);
  agregarSuscriptor(idContenedor2);
  agregarSuscriptor(idContenedor3);
  agregarSuscriptor(idContenedor4);

  idIncrementar.onclick = ()=>{

    setAcumulador(Acumulador.valor + 1);
    console.log(Acumulador);

  };

  idDecrementar.onclick = ()=>{

    setAcumulador(Acumulador.valor - 1);
    console.log(Acumulador);
  };

};