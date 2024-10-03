


const fnGenerarVector1 = (cantidad)=>
    {
        let vec1 = [];
        for(let i = 1;i <= cantidad;i = i+2)
        {   
            vec1.push(`elemento ${i}`);
        }
        return vec1;
    }

    

const fnGenerarVector2 = (cantidad)=>
    {
        let vec2 = [];
        for(let i = 2;i <= cantidad;i = i+2)
        {   
            vec2.push(`elemento ${i}`);
        }
        return vec2;
    }




const dibujarTabla = (Vector, cuerpoDeTabla) => {
    let indice = 0; // Empezamos desde el primer elemento del vector

    const intervalo = setInterval(() => {
        if (indice < Vector.length) {
            // Crear la fila
            let filaTabla = document.createElement("tr");

            let celda = document.createElement("td");
            celda.textContent = Vector[indice]; // El dato de la fila proviene del vector

            // Agregar la celda a la fila
            filaTabla.appendChild(celda);

            // Agregar la fila al cuerpo de la tabla
            cuerpoDeTabla.appendChild(filaTabla);

            indice++; // Incrementamos el índice para pasar al siguiente elemento
        } else {
            clearInterval(intervalo); // Detenemos el intervalo cuando terminamos de agregar todas las filas
        }
    }, 1000); // Cada 1 segundo
};
    

window.addEventListener("load",()=>
    {
        const idNumero = document.querySelector("#idNumero");
        const idBtnCuadrado = document.querySelector("#idBtnCuadrado");
        const idResultado = document.querySelector("#idResultado");

        idBtnCuadrado.addEventListener("click",()=>
            {

                let numero = Number(idNumero.value);

                idResultado.textContent = numero * numero;

            }

        )



        const idBtnDibujarTabla1 = document.querySelector("#idBtnDibujarTabla1");
        const idBtnDibujarTabla2 = document.querySelector("#idBtnDibujarTabla2");

        const idCuerpoTabla1 = document.querySelector("#idCuerpoTabla1");
        const idCuerpoTabla2 = document.querySelector("#idCuerpoTabla2");

        setTimeout(()=>{
            console.log("arrancamos");

            const Vector1 = fnGenerarVector1(50);

            const Vector2 = fnGenerarVector2(50);

            console.log(Vector1);
            console.log(Vector2);

            dibujarTabla(Vector1,idCuerpoTabla1)

            dibujarTabla(Vector2,idCuerpoTabla2)
    

        },2000)





    })