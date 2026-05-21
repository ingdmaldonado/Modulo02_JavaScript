import { fnCuantaNrosCadena, fnGuardarEstado, fnRecuperarEstado } from "./modelo.js";

window.onload = ()=>{
    
    const EstadoAplicacion = {CadenaCaract:''}
    const IdCadenaDeCaracteres = document.querySelector("#IdCadenaDeCaracteres")
    const idAnalizaNrosCadena = document.querySelector("#idAnalizaNrosCadena")
    const IdCadenaNumeros = document.querySelector("#IdCadenaNumeros")
    const idBtnGuardar = document.querySelector("#idBtnGuardar");
    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");

    IdCadenaDeCaracteres.oninput =()=>{
        EstadoAplicacion.CadenaCaract = IdCadenaDeCaracteres.value;

    };


    idAnalizaNrosCadena.onclick = ()=>{
        let CadenaConNros = fnCuantaNrosCadena(EstadoAplicacion.CadenaCaract);
        if(CadenaConNros === true){
            IdCadenaNumeros.textContent = `El Texto NO contiene ningun Número`;
        }
        else{
            IdCadenaNumeros.textContent = `El Texto CONTIENE Números`;            
        }

    };

    idBtnGuardar.onclick = ()=>{

        fnGuardarEstado(EstadoAplicacion);

        /* (1) convertir a JSON */
        let estadoJSON = JSON.stringify(EstadoAplicacion);
        console.log(estadoJSON);

        localStorage.setItem("estadoApp",estadoJSON);
    };

    /* click del boton recuperar */
    idBtnRecuperar.onclick = ()=>{
        let DatosRecuperados = fnRecuperarEstado(EstadoAplicacion);   
        console.log(DatosRecuperados)    

        IdCadenaDeCaracteres.value = DatosRecuperados.CadenaCaract;
        EstadoAplicacion.CadenaCaract = IdCadenaDeCaracteres.value;

     
    };      

};