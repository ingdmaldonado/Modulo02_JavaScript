

window.onload = ()=>{

  const idCaptura = document.querySelector("#idCaptura");

  const todos = document.querySelectorAll("input");

  console.log(todos);

  idCaptura.onclick = ()=>{

    todos.forEach(elemento => {

      elemento.addEventListener("change",(e)=>{
        console.log(e.target.value);
      });

    });
    
  };


};