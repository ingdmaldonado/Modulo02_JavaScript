
const fnHandlerPrincipal = (e)=>{

  console.log(e);
  console.log(e.target);
  console.log(e.target.id);

  const botonClickeado = e.target.id;

  if(botonClickeado === 'idBtn1')
  {
    alert("me hicieron click en el 1");
  }
  
};


window.onload = ()=>{

  const botones = document.querySelectorAll("button");
  console.log(botones);

  botones.forEach(boton =>{

    boton.addEventListener("click",fnHandlerPrincipal);

  });
};