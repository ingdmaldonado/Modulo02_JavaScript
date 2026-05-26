///Realizar una arrow function que reciba como parámetro una nota promedio y que según la nota recibida como parámetro devuelva un texto que diga los siguientes mensajes. • Si la nota <= 4 debe devolver “Desaprobado” • Si la nota > 4 y nota <= 7 debe devolver “Aprobado” • Si la nota >7 y nota <=9 debe devolver “Muy Bueno” • Si la nota = 10 debe devolver “Excelente”//
import {fnAnalizarNota} from "./modelo.js";

    window.onload = ()=>{
        const estadoAplicacion = {
    
            nota:0,
        }; 
    
         const idNumero = document. querySelector ("#idNumero");
         const idAceptar = document.querySelector ("#idBtnAceptar");
    
         const idBtnGuardar = document.querySelector("#idBtnGuardar");
    
         const idBtnRecuperar = document.querySelector("#idBtnRecuperar"); 
    
         const idResultado = document.querySelector ("#idResultado");
    
        idNumero.oninput = ()=> {
    
            estadoAplicacion.nota= Number ( idNumero.value);
            console.log(estadoAplicacion);
    
        }; 
    
        idBtnAceptar. onclick = ()=>{
        console.log(fnAnalizarNota)
    
    let resultado = fnAnalizarNota (estadoAplicacion.nota);
    console.log(resultado); 
    
    idResultado.textContent= 
    `Nota ingresada ${estadoAplicacion.nota} resultado: ${resultado}`;
    };
    idBtnGuardar.onclick = ()=>{
        //convertimos a JSON el estado de la aplicación //

let datosJSON= JSON.stringify(estadoAplicacion);

console.log (datosJSON)

      //guardar esos datos en el localStorage//
      localStorage.setItem ("datosAPP",)

    }

//recuperé del localstorage los datos en formato JSON//
    idBtnRecuperar.onclick=()=>{
        let datosJSON = localStorage. getItem ("datosAPP");

// convertir los datos JSON a objeto javaScript//. 
let datosObjeto= JSON.parse(datosJSON);
//aqui lo muestro//
console.log(datosJSON);
console.log (datosObjeto);
// completar los datos del formulario// 
idNumero.value = datosObjeto.Nota; 
    }
 };