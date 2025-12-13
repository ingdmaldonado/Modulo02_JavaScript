
window.onload = ()=>{

const idDni = document.getElementById("idDni");
const idBtnFind = document.getElementById("idBtnFind");


/*Ejercicio N° 1*/
console.log('Ejercicio 1 - LLamada a la funcion. Envia un solo vector');
mostrarAlumnos(cohorte01);

console.log('Ejercicio  1 - LLamada a la funcion. Envia más de un vector');
for (let i = 1; i < 5; i++) {
  mostrarAlumnos(eval(`cohorte0${i}`))
}

/*Ejercicio N° 2*/
console.log('Ejercicio 2 - Metodo SPREAD OPERATOR');
const vector = [...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04]
mostrarVectorSpreadOp(vector);

/*Ejercicio N° 3*/
console.log('Ejercicio 3 - Metodo FILTER');
determinaCondicionAlumno(vector);  

/*Ejercicio N° 4*/
console.log('Ejercicio 4 - Metodo SORT');
ordenarVector(vector);

/*Ejercicio N° 5*/
console.log('Ejercicio 5 - Metodo FIND');
idBtnFind.onclick = ()=>{
  const numeroDni = idDni.value;
  buscarAlumno(vector, numeroDni);
}

/*Ejercicio N°6*/
console.log('Ejercicio 6 - Metodo REDUCE');
contarAprobados(vector);
}