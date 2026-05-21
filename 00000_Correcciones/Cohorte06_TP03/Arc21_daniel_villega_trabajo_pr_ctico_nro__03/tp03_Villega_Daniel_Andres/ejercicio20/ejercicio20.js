/*Ejercicio Nro. 20:Diplomatura Universitaria en Desarrollo Web
Full Stack con JavaScript
Módulo: JavaScript
Realizar una arrow function que reciba como parámetro las 3 notas que obtuvo un alumno en los
distintos trabajos prácticos de una materia y que a partir de esas notas obtenga el promedio de las mismas
Nota: Debe devolver un número*/




import { fnPromedioDeTres , fnGuardarEstado , fnRecuperarEstado} from "./module20.js";

window.onload = () => {

    
    const estadoAplicacion = {

        nota1:0,
        nota2:0,
        nota3:0,
    };

    


    const idNumero1=document.querySelector("#idNumero1");
    const idNumero2=document.querySelector("#idNumero2");
    const idNumero3=document.querySelector("#idNumero3");

    const idBtnAceptar=document.querySelector("#idBtnAceptar");
    
    const idBtnGuardar=document.querySelector("#idBtnGuardar");
    const idBtnRecuperar=document.querySelector("#idBtnRecuperar");

    const idResultado=document.querySelector("#idResultado");


    fnRecuperarEstado();

   

    idNumero1.oninput = ()=>{

        estadoAplicacion.numero1 = Number (idNumero1.value);
        fnGuardarEstado(estadoAplicacion);
        console.log (estadoAplicacion);
    };

    idNumero2.oninput = () => {

        estadoAplicacion.numero2 = Number (idNumero2.value);
        fnGuardarEstado(estadoAplicacion);
        console.log (estadoAplicacion);
    };

    idNumero3.oninput =() => {

        estadoAplicacion.numero3 = Number (idNumero3.value);
        fnGuardarEstado(estadoAplicacion);
        console.log(estadoAplicacion);
    };


idBtnAceptar.onclick = () => {

        let nota1 = Number(idNumero1.value);
        let nota2 = Number(idNumero2.value);
        let nota3 = Number(idNumero3.value);

        //let resultado = fnPromedioDeTres (nota1,nota2,nota3);//
        let resultado = fnPromedioDeTres (estadoAplicacion.numero1,estadoAplicacion.numero2,estadoAplicacion.numero3);

        //console.log(nota1,nota2,nota3,resultado);//
        console.log(nota1,nota2,nota3,resultado);

        //idResultado.textContent=`nota ingresad ${nota1}, ${nota2}, ${nota3}, resultado ${resultado} `;//
        idResultado.textContent=`nota ingresad ${estadoAplicacion.numero1}, ${estadoAplicacion.numero2}, ${estadoAplicacion.numero3}, resultado ${resultado } `;
    };


        idBtnGuardar.onclick = () => {

            console.log(estadoAplicacion);

            let estadoJSON= JSON.stringify(estadoAplicacion);

            localStorage.setItem("estadoApp",estadoJSON);
        };

        idBtnRecuperar.onclick = () => {

            fnRecuperarEstado();

          
        };

}
