

/* Esta función devolverá un Vector Gigante
con objetos literales generados al azar */

const generarVectorGigante = ()=>
    {
        let vectorGrande = [];
        for(let i = 0; i < 10000;i++)
        {
            let datoPersona =
            {
                id:i,
                nombre:`NOMBRE DE LA PERSONA ${i}`,
                domicilio: `DOMICILIO DE LA PERSONA ${i}`
            }
            vectorGrande.push(datoPersona);
        }
        return vectorGrande;
    }

/* esta función recorre el vector gigante y va agregando
las filas en el cuerpo de la tabla */

const fnCompletarTabla = (vector,idCuerpoDeTabla,idCantidadFilas)=>
    {
        vector.forEach((element,indice) =>
            {
                let filaTabla = document.createElement("tr");

                let celda1 = document.createElement("td");
                celda1.textContent = element.id;

                let celda2 = document.createElement("td");
                celda2.textContent = element.nombre;

                let celda3 = document.createElement("td");
                celda3.textContent = element.domicilio;

                filaTabla.appendChild(celda1);
                filaTabla.appendChild(celda2);
                filaTabla.appendChild(celda3);

                /* este pequeño bloque lo que permite es que se agregue
                de forma asíncrona */
                setTimeout(()=>{

                    idCuerpoDeTabla.appendChild(filaTabla);
                    idCantidadFilas.innerHTML = indice;

                },1)


            })

    }


const fnMensajeCadaDosSegundos = ()=>
    {
        let contador = 1;

        const IntervadoDeMensajes = setInterval(()=>{

            if(contador <= 10)
            {
                console.log(`mensaje cada 2 segundos ${contador}`);
            }
            else
            {
                clearInterval(IntervadoDeMensajes);
            }

            contador = contador + 1;

        },2000)
    }



    const fnMensajeCadaTresSegundos = ()=>
        {
            let contador = 1;
    
            const IntervadoDeMensajes = setInterval(()=>{
    
                if(contador <= 10)
                {
                    console.log(`mensaje cada 3 segundos ${contador}`);
                }
                else
                {
                    clearInterval(IntervadoDeMensajes);
                }
    
                contador = contador + 1;
    
            },3000)
        }

window.addEventListener("load",()=>
    {
        console.log("andando");

        /* bloque que me permite calcular el cuadrado */
        const idResultadoCuadrado = document.querySelector("#idResultadoCuadrado");
        const idNumero = document.querySelector("#idNumero");
        const idBtnCuadrado = document.querySelector("#idBtnCuadrado");

        /* bloque del cuerpo de la tabla */
        const idCantidadFilas = document.querySelector("#idCantidadFilas");
        const idCuerpoDeTabla = document.querySelector("#idCuerpoDeTabla");

        /* lanzo un proceso pesado */
        const VectorGigante = generarVectorGigante();

        //console.log(VectorGigante);

    
        // llamo a la función que completa el cuerpo de la tabla //
        fnCompletarTabla(VectorGigante,idCuerpoDeTabla,idCantidadFilas);

        fnMensajeCadaDosSegundos();

        fnMensajeCadaTresSegundos();

        // evento click del boton calcular el cuadrado //
        idBtnCuadrado.addEventListener("click",()=>{

            let numeroIngresado = Number(idNumero.value);

            let resultado = numeroIngresado * numeroIngresado;

            idResultadoCuadrado.textContent = `Resultado: ${resultado}`;

        })
    })