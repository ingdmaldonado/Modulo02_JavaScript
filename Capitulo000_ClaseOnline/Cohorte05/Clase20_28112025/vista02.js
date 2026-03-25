
const Personas = [];

window.onload = ()=>{

    const idApellido = document.querySelector("#idApellido");
    const idDni = document.querySelector("#idDni");
    const idBtnAceptar = document.querySelector("#idBtnAceptar");

    console.log(idApellido,idDni,idBtnAceptar);

    idBtnAceptar.onclick = ()=>{

        const apellido = idApellido.value;
        const dni = Number(idDni.value);

        const persona = {apellido,dni}

       // console.log(apellido,dni);

       console.log(persona);

       // Personas es un Vector => coleccion de Personas //
       Personas.push(persona);

       console.log(Personas);

    };

}