import { vehiculos } from "./modelo.js";

/* particularidades de las arrow function */

    const fnCuadrado = (numero) => 
        {
            return numero * numero;
        }

    /* se pueden obviar los () de los parametros y
        también se pueden obviar las {} llaves del cuerpo
        y se puede obviar la palabra return
    */

    const fnCuadrado2 = numero => numero * numero;

    


/* esta funcion recibe como parametro
dos elementos, uno es el idSelector y 
otro es el vector 

    idSelector => idSelectorDinamico
    vector => vehiculos

*/

const fnCompletarSelectorDinamico = (idSelector,vector)=>
    {
        //console.log(idSelector);
        //console.log(vector);

        vector.forEach((element)=>
            {
                console.log(element);

                let opcionDinamica = document.createElement("option");
                opcionDinamica.value = `${element.vehiculoId}`;
                opcionDinamica.textContent = `${element.vehiculoNombre}`;

                idSelector.appendChild(opcionDinamica);


            })
    }

/* Esta funcion recibe como parametro el 
vector de vehiculos, el id y recorre los
elementos, con la funcionalidad find y
cuando encuentra, la arrow function devuelve true

al devolver true => el metodo find devuelve
todo el element
*/

const fnBuscarVehiculoPorId = (vector,id) =>
    {
        let vehiculoDevuelto = vector.find(element => element.vehiculoId === id);

        return (vehiculoDevuelto);

    }

const fnCompletarImagenes = (vehiculo,contenedorImagenes) =>
    {

       // console.log(vehiculo);
       // console.log(vehiculo.vehiculoImagenes);

       /* voy a recorrer las imagenes aplicando
       una funcion de transformación (arrow function)
       tomara un elemento y lo convertira en una imagen.
       todo esto, lo hara para todas las imagenes */

       contenedorImagenes.innerHTML = "";

       let imagenesCreadas = vehiculo.vehiculoImagenes.map((element)=>
        {
            // por cada elemento creara una imagen
            let imagenDinamica = document.createElement("img");
           
            imagenDinamica.width = 200;
            imagenDinamica.height = 200;
            imagenDinamica.src = element; // a donde esta la imagen
            imagenDinamica.loading = 'lazy'; // cargarlas de forma asincrona

            return (imagenDinamica);

        })

        // contenedorImagenes

        imagenesCreadas.forEach(element => 
            {
                contenedorImagenes.appendChild(element);
            })
        

    }


window.addEventListener("load", () => {

    console.log("running");
   // console.log(vehiculos);

    // Referencias a elementos del DOM
    const idSelectorDinamico = document.querySelector("#idSelectorDinamico");
    const idImagenes = document.querySelector("#idImagenes");
    const idTelefono = document.querySelector("#idTelefono");
    const idEmail = document.querySelector("#idEmail");
    const idBtnRegistrarme = document.querySelector("#idBtnRegistrarme");
    const idPopupBackground = document.querySelector("#popupBackground");
    const idRegistracion = document.querySelector("#idRegistracion");
    const idCheckboxInteresado = document.querySelector("#idEstoyInteresado");
    const idBtnCerrar = document.querySelector("#idBtnCerrar");
    const idBtnVerRegistrados = document.querySelector("#idBtnVerRegistrados");
    const idCuerpoDeTabla = document.querySelector("#idCuerpoDeTabla");
    const idBtnBlanquearCookies = document.querySelector("#idBtnBlanquearCookies");

    fnCompletarSelectorDinamico(idSelectorDinamico,vehiculos);

    /* VAMOS A COMENZAR A MANEJAR LOS EVENTOS */

    idSelectorDinamico.addEventListener("change",()=>
        {
            // aqui obtengo el id que devuelve el selector //
            let vehiculoId = Number(idSelectorDinamico.value);
           // console.log(vehiculoId);

            // aqui busco en el array de vehiculos por el id que eligio en el paso anterior //
            const vehiculoElegido = fnBuscarVehiculoPorId(vehiculos,vehiculoId);

            console.log(vehiculoElegido);

            /* aqui lo que estoy haciendo es 
            tomar el vehiculo encontrado en el paso
            anterior y pasarle a la funcion que
            se encargara de recorrer las imagenes
            y dibujarlas en el contenedor de imagenes.
            para eso
                1ro) hace vector.map()
                2do) recorrer ese vector incrustandolas en el contenedor
            */

            fnCompletarImagenes(vehiculoElegido,idImagenes);

           // console.log(vehiculoElegido.vehiculoImagenes);

        })


});
