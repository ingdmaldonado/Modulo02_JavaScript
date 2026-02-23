

window.onload = ()=>{
    
    const idAceptaMascotas = document.querySelector("#idAceptaMascotas");
    const idTieneDesayuno = document.querySelector("#idTieneDesayuno");
    const idTieneParking = document.querySelector("#idTieneParking");
    const idBtnAceptar = document.querySelector("#idBtnAceptar");
    const idResultado = document.querySelector("#idResultado");

    console.log(idAceptaMascotas);
    console.log(idTieneDesayuno);
    console.log(idTieneParking);

    idBtnAceptar.onclick = ()=>{

        let aceptaMascotas = idAceptaMascotas.checked;
        let tieneDesayuno = idTieneDesayuno.checked;
        let tieneParking = idTieneParking.checked;

        console.log(aceptaMascotas);
        console.log(tieneDesayuno);
        console.log(tieneParking);

    };

};