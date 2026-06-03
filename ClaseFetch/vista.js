
/* funcion que toma un usuario y lo convierte
en una vista. y además vincula 
la vista con el modelo. respetando la idea
del patron viewModel <=> modelo vista en castellano */

export const fnUsuarioView = (usuario) => {

  /* hago destructuring de usuario */
  const {id,name,username} = usuario;

  /* creo los elementos que mi vista necesita */
  const contenedor = document.createElement("div");

  /* Inmediatamente mapeo el contenedor con el dato del modelo 
  agrego atributos que puedan ser necesarios para identificar
  selecciones, para identificar el ingreso de datos. etc. */
  const usuarioView = {contenedor,usuario,seleccionado:false};

  /* Creo los elementos visuales html que serán parte del contenedor */
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");
  const h3 = document.createElement("h3");
  
  /* genero el botón que me permitirá cuando
  se presione en el. mostrar datos del usuario */
  const boton = document.createElement("button");
  boton.textContent = "Presioname";
  boton.onclick = ()=>
    {
      console.log(usuario);
    };

  /* genero un checkbox que me permitirá elegirlo. y 
  al seleccionar agrego atributos que me permitan 
  identificarlo despúes sobre el total */
  
  const chElegir = document.createElement("input");
  chElegir.type = "checkbox";

  // le agrego comportamiento al checkbox y marco como elegido o no //
  chElegir.onchange = ()=>{
    usuarioView.seleccionado = chElegir.checked;
  }

  h1.textContent = id;
  h2.textContent = name;
  h3.textContent = username;

  contenedor.appendChild(h1);
  contenedor.appendChild(h2);
  contenedor.appendChild(h3);
  contenedor.appendChild(boton);
  contenedor.appendChild(chElegir);

  return usuarioView;
  
};

/* función que toma a todos los usuarios y genera
para cada uno de ellos. un vector que tiene
  modelo = usuario
  vista = vista que se inyecta en el DOM 
*/

export const fnUsuariosViews = (usuarios) =>{

  const usuariosViews = usuarios.map(usuario => fnUsuarioView(usuario));

  return usuariosViews;

};

/* Funcion que se encarga de recibir las vistas y las Renderiza
en el destino. (parte del DOM) donde sea necesario incluir
esos datos */

export const fnRenderUsuarios = (Views,destino) =>{

    destino.innerHTML = "";
    Views.forEach(({contenedor})=>{   
      destino.appendChild(contenedor);
    });

};