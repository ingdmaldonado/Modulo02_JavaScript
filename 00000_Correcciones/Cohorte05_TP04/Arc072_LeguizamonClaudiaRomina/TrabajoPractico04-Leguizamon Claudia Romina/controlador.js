import {cohorte01} from "./modelo.js";
import {cohorte02} from "./modelo.js";
import {cohorte03} from "./modelo.js";
import {cohorte04} from "./modelo.js";
import {fnNombreyApellido} from "./modelo.js";
import {fnEncuentraDNI} from "./modelo.js";
import {fnFiltraAprobados} from "./modelo.js";
import {fnFiltraDesaprobados} from "./modelo.js";
import {fnContadorAlumnosAprobados} from "./modelo.js";
import {fnContadorAlumnosAprobadosot} from "./modelo.js";
import {fnvectorTotal} from "./modelo.js";
import {fnvectorOrdenado} from "./modelo.js"

window.onload=()=>
{
const idBtnAceptar = document.querySelector("#idBtnAceptar");
const idDNI = document.querySelector("#idDNI");
const idBtEncuentra = document.querySelector("#idBtEncuentra");
const idBtFiltra = document.querySelector("#idBtFiltra");
const idBtnreduceie = document.querySelector("#idBtnreduceie");
const idBtnreduceot= document.querySelector("#idBtnreduceot");
const idBtnUnifica=document.querySelector("#idBtnUnifica");
const idBtnOrdena=document.querySelector("#idBtnOrdena");


const vectorTotaldeAlumnos= fnvectorTotal;

 idBtnAceptar.onclick = ()=>
    {
        fnNombreyApellido(cohorte01);
        fnNombreyApellido(cohorte02);
        fnNombreyApellido(cohorte03);
        fnNombreyApellido(cohorte04);
    }

idBtnUnifica.onclick=()=>
    {

      console.log(vectorTotaldeAlumnos);

    };

idBtEncuentra.onclick=()=>
    {   
       
        const documento=Number(idDNI.value);
        fnEncuentraDNI (vectorTotaldeAlumnos,documento);

    };

  idBtFiltra.onclick=()=>
    {   
        fnFiltraAprobados(vectorTotaldeAlumnos);
        fnFiltraDesaprobados (vectorTotaldeAlumnos);
        
    };  

   idBtnOrdena.onclick=()=>
    {
        fnvectorOrdenado(vectorTotaldeAlumnos);
     
    } ;
  idBtnreduceie.onclick=()=>
    {
        fnContadorAlumnosAprobados (vectorTotaldeAlumnos);
     
    }  
    idBtnreduceot.onclick=()=>
    {
        fnContadorAlumnosAprobadosot (vectorTotaldeAlumnos);
    }

};
