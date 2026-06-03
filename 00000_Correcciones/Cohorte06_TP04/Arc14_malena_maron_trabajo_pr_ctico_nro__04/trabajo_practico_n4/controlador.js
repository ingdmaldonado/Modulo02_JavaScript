import { cohorte01,cohorte02,cohorte03,cohorte04 } from "./modulo.js";

window.onload = () => {

  

    const idCohortes= document.querySelector("#idCohortes");
    const idSpred=document.querySelector("#idSpred");
    const idFilter=document.querySelector("#idFilter");
    const idFilter2=document.querySelector("#idFilter2");
    const idSortnotas=document.querySelector("#idSortnotas");
    const idFind=document.querySelector("#idFind");
    const idTotalalumnos=document.querySelector("#idTotalalumnos");
    const idresultado1=document.querySelector("#idresultado1");
   
    

    console.log(idCohortes,idSpred,idFilter,idSortnotas,idFind,idTotalalumnos);

    let unificado=[...cohorte01,...cohorte02,...cohorte03,...cohorte04];

 


    let cohortes = ["Selecione", "Cohorte 01", "Cohorte 02", "Cohorte 03", "Cohorte 04"];

    cohortes.forEach((cohorte) => {

    let opcion = document.createElement("option");

    opcion.textContent = cohorte;
    opcion.value = cohorte;

    idCohortes.appendChild(opcion)

    console.log(cohortes)
    

    });

    idCohortes.onchange = () => {

    idresultado1.innerHTML = "";

    if (idCohortes.value === "Cohorte 01") {

        cohorte01.forEach((alumno) => {
            idresultado1.innerHTML += ` <div>${alumno.apellido} ${alumno.nombre}</div>`;
        });

    }
    else if (idCohortes.value === "Cohorte 02") {

        cohorte02.forEach((alumno) => {
            idresultado1.innerHTML += ` <div>${alumno.apellido} ${alumno.nombre}</div>`;
        });

    }
    else if (idCohortes.value === "Cohorte 03") {

        cohorte03.forEach((alumno) => {
            idresultado1.innerHTML += ` <div>${alumno.apellido} ${alumno.nombre}</div>`;
        });

    }
    else if (idCohortes.value === "Cohorte 04") {

        cohorte04.forEach((alumno) => {
            idresultado1.innerHTML += ` <div>${alumno.apellido} ${alumno.nombre}</div>`;
        });

    }

};



idSpred.onclick=()=>{
   
    idresultado1.innerHTML="";
    unificado.forEach((alumno)=>{
    idresultado1.innerHTML+=`<div>${alumno.nombre} ${alumno.apellido}</div>`
    
   

})
}

idFilter.onclick = () => {

    idresultado1.innerHTML = "";

    unificado.forEach((alumno) => {

        if (alumno.nota_final > 5) {

            idresultado1.innerHTML += `<div> Aprobado: ${alumno.apellido} ${alumno.nombre} - Nota: ${alumno.nota_final}</div>`;
        
    }})
  

};
idFilter2.onclick=()=>{
    idresultado1.innerHTML="";
    unificado.forEach((alumno)=>{
        if(alumno.nota_final <=5){
            idresultado1.innerHTML+=`<div> Desaprobado: ${alumno.apellido} ${alumno.nombre} -Nota: ${alumno.nota_final}</div>`
        }
    })
};


idSortnotas.onclick = () => {

    idresultado1.innerHTML = "";

    unificado.sort((a, b) => {
        return a.nota_final - b.nota_final;
    });

    unificado.forEach((alumno) => {

        idresultado1.innerHTML += ` <div> ${alumno.apellido} ${alumno.nombre} - Nota: ${alumno.nota_final} </div> `;

    });

};
idFind.onclick=()=>{
    idresultado1.innerHTML="";
    unificado.forEach((alumno)=>{
        idresultado1.innerHTML+=`<div> N° de DNI ${alumno.dni} ${alumno.apellido} ${alumno.nombre}</div>`    

    }
)};
idTotalalumnos.onclick=()=>{
    idresultado1.innerHTML="";
    let cantidadDAprobados= unificado.reduce((contador,alumno)=>{
        return alumno.nota_final > 5 ?contador+1:contador;

     },0);
    
        idresultado1.innerHTML+=`<div> Total alumnos aprobados: ${cantidadDAprobados}`
    


}
}