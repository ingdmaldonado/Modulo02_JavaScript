
window.onload = ()=>{

const idDni = document.getElementById("idDni")
const idBtnFind = document.getElementById("idBtnFind");


/* Ejercicio N° 1*/

console.log('Ejercicio N° 1 - LLamada a la funcion. Se envia un solo vector')
mostrarAlumnos(cohorte01)

console.log('Ejercicio N° 1 - LLamada a la funcion. Para mas de un vector')
for (let i = 1; i < 5; i++) {
  mostrarAlumnos(eval(`cohorte0${i}` ))
  
}

/* Ejercicio N° 2 - Spread Operator*/

console.log('Ejercicio N°2 - Aplicando Spread Operator')
const vector = [...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04]
mostrarVectorSpreadOp(vector)  

/* Ejercicio N° 3 - FILTER*/

console.log('Ejercicio N°3 - Aplicando FILTER')
determinaCondicionAlumno(vector)  

/* Ejercicio N° 4 - SORT*/

console.log('Ejercicio N°4 - Aplicando SORT')
ordenarVector(vector)

/* Ejercicio N° 5 - FIND*/

idBtnFind.onclick = ()=>{
  const valorDni = idDni.value;
  buscarUnAlumno(vector, valorDni)
}

/* Ejercicio N°6 - REDUCE */

contarAprobados(vector)
}