
window.onload = () => {

    
    const btnCalcular = document.querySelector("#calcular");
    const btnLimpiar = document.querySelector("#limpiar");

    btnCalcular.onclick = () => {

        const nota1 = document.querySelector("#nota1");
        const nota2 = document.querySelector("#nota2");
        const nota3 = document.querySelector("#nota3");
        const MostrarPromedio = document.querySelector("#promedio");

        let n1 = Number(nota1.value);
        let n2 = Number(nota2.value);
        let n3 = Number(nota3.value);
        let promedio = CalcularPromedio(n1, n2, n3);        
        MostrarPromedio.innerHTML = `El promedio del alumno es: ${promedio.toFixed(2)}`;

    }

const CalcularPromedio = (n1, n2, n3) =>  (n1 + n2 + n3) / 3;
    
    btnLimpiar.onclick = () => {

        const nota1 = document.querySelector("#nota1");
        const nota2 = document.querySelector("#nota2");
        const nota3 = document.querySelector("#nota3");
        const MostrarPromedio = document.querySelector("#promedio");

        nota1.value = "";
        nota2.value = "";
        nota3.value = "";
        MostrarPromedio.innerHTML = "";

    }

}

