
import {carreras,inscriptos} from "./datos.js"

/* aqui lo que hice es hacer
una funcion que me sirva
para validar todos los campos
donde el usuario tenga que ingresar
texto */

const fnValidarTexto = (texto)=>
{
    if(texto === "")
    {
        return false;
    }
    else
    {
        return true;
    }

}

window.onload = ()=>
    {

        const idApellidoNombre = document.querySelector("#idApellidoNombre");
        const idDni = document.querySelector("#idDni");
        const idCarrera = document.querySelector("#idCarrera");
        const idHorario = document.querySelector("#idHorario");
        const idBtnAceptar = document.querySelector("#idBtnAceptar");

        console.log(idApellidoNombre,idDni,idCarrera,idHorario,idBtnAceptar);

        /* (01) Completar el Selector Dinamico - MAP
        porque convierto las carreras en opciones */

        const opciones = carreras.map(carrera => {

            let opcionDinamica = document.createElement("option");

            opcionDinamica.value = carrera.carreraId;
            opcionDinamica.textContent = carrera.nombre;

            return opcionDinamica;
            
        });

        console.log(opciones);

        /* (02) - Recorro las opciones generadas por map
        y las incrusto en el contenedor */

        opciones.forEach(opcion=>{

            idCarrera.appendChild(opcion);

        })

        /* delegación de eventos. 
        onclick => existira una función que 
        se encargara de responder al click */

        idBtnAceptar.onclick = ()=>{

            let apellidoYNombre = idApellidoNombre.value;

            let dni = Number(idDni.value);

            let carreraElegida = Number(idCarrera.value);

            let horario = Number(idHorario.value);

            let AlumnoInscripto;

            if(fnValidarTexto(apellidoYNombre))
            {
                console.log(apellidoYNombre);
                console.log(dni);
                console.log(carreraElegida);
                console.log(horario);

                AlumnoInscripto = {apellidoYNombre,dni,carreraElegida,horario};

                inscriptos.push(AlumnoInscripto);

                console.log(AlumnoInscripto);

                console.log(inscriptos);

            }
            else
            {
                alert("por favor complete los datos");
            }


       

            /* */

        }

    }