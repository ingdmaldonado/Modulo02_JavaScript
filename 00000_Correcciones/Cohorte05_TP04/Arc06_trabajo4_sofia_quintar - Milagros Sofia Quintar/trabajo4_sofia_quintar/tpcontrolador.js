import {cohorte01,cohorte02,cohorte03,cohorte04,mostrarAlumnos} from "./tpmodulo.js"

window.onload = () => {

    // PUNTO 1
   
const btnAlumCoho = document.querySelector("#btnAlumCoho");
const contenedor = document.querySelector("#contenedorCohortes");
const unirAlum = document.querySelector("#unirAlum");
const btnNotas = document.querySelector("#btnNotas");
const contenedor2 = document.querySelector("#contenedorNotas");
const mayorMenor = document.querySelector("#mayorMenor");
const encontrarDNI = document.querySelector("#encontrarDNI");
const aprobadosTotal = document.querySelector("#aprobadosTotal");
const contenedor3 = document.querySelector("#contenedorAprobados");

const cohortes = [cohorte01,cohorte02,cohorte03,cohorte04];
let indice = 0;

btnAlumCoho.addEventListener("click", () => {

    if (indice < cohortes.length) {

        console.log(`Alumnos del Cohorte ${indice + 1}:`);
        mostrarAlumnos(cohortes[indice]); 

        const divAlum = document.createElement("div");
        const titulo = document.createElement("h3");
        titulo.textContent = `Alumnos del Cohorte ${indice + 1}:`;

        divAlum.appendChild(titulo);

        cohortes[indice].forEach(alumno => {
            const p = document.createElement("p");
            p.textContent = `${alumno.nombre} ${alumno.apellido}`;
            divAlum.appendChild(p);
        });

        contenedor.appendChild(divAlum);

        console.log("-----------------------------");

        indice++;

    } else {
        console.log("Ya se mostraron todos los alumnos.");
    }
});
 
// PUNTO 2 

const cohortesUnificados = [...cohorte01,...cohorte02,...cohorte03,...cohorte04]

 unirAlum.onclick = ()=>{

   console.log("Cohortes unificados",cohortesUnificados);
 
    }

 // PUNTO 3

  btnNotas.addEventListener("click",()=>{

  const alumAprobados = cohortesUnificados.filter(alumno => alumno.nota_final > 5);
  const alumDesaprobados = cohortesUnificados.filter(alumno => alumno.nota_final <= 5);

  console.log("Lista de Alumnos aprobados:",alumAprobados);
  console.log("Lista de Alumnos desaprobados:",alumDesaprobados);

  const divNota = document.createElement("div");

  const notaAprob = document.createElement("h3");
  notaAprob.textContent = "Alumnos aprobados: " + alumAprobados.map(a => a.nombre).join(", ");

  const notaDesaprob = document.createElement("h3");
  notaDesaprob.textContent = "Alumnos desaprobados: " + alumDesaprobados.map(a => a.nombre).join(", ");

  divNota.appendChild(notaAprob);
  divNota.appendChild(notaDesaprob);
  contenedor2.appendChild(divNota);

});

// PUNTO 4

mayorMenor.onclick= ()=>{

    cohortesUnificados.sort((notaA,notaB) => notaB.nota_final - notaA.nota_final);

    console.log(cohortesUnificados);
}

// PUNTO 5

encontrarDNI.onclick= ()=>{

    const DNIEncontrado = cohortesUnificados.find(dni => dni.dni === "56789012")

    console.log(`DNI encontrado:`,DNIEncontrado.dni,`del alumno`,DNIEncontrado.apellido,DNIEncontrado.nombre)
}

// PUNTO 6

aprobadosTotal.addEventListener("click",()=>{
const aprobadosIFELSE = cohortesUnificados.reduce((contador,alumno)=>{
    if(alumno.nota_final > 5)
    {
        contador = contador + 1;
        return contador;
    }
    else
    {
        return contador;
    }
},0);

const cantidadAprobadosTernario = cohortesUnificados.reduce((contador, alumno) => alumno.nota_final > 5 ? contador + 1 : contador,0
);

console.log("Aprobados (IF/ELSE):",aprobadosIFELSE)
console.log("Aprobados (Ternario):", cantidadAprobadosTernario);

})


};






