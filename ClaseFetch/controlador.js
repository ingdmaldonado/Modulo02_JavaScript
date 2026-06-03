import {fnUsuarios} from "./modelo.js";
import {fnUsuarioView,fnUsuariosViews,fnRenderUsuarios} from "./vista.js";

window.onload = ()=>{

  const idBtnUsuarios = document.querySelector("#idBtnUsuarios");
  const idBtnVerSeleccionados = document.querySelector("#idBtnVerSeleccionados");
  const idContenedorPrincipal = document.querySelector("#idContenedorPrincipal");
  const usuariosViews = [];

  console.log(idBtnUsuarios);

  idBtnUsuarios.onclick = async ()=>{
   
    let usuarios = '';

    try {

      usuarios = await fnUsuarios();    
      usuariosViews.length = 0;
      usuariosViews.push(...fnUsuariosViews(usuarios));
      fnRenderUsuarios(usuariosViews,idContenedorPrincipal);

    } catch (error) 
    {
      console.log(error.message);  
    }   

    console.log(usuarios);

  }; 

  idBtnVerSeleccionados.onclick = ()=>{

    console.log(usuariosViews);


  };
};