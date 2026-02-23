

window.onload = ()=>{

    const idTarjeta = document.querySelector("#idTarjeta");
    const idContado = document.querySelector("#idContado");
    const idBtnConfirmar = document.querySelector("#idBtnConfirmar");

    idBtnConfirmar.onclick = ()=>{

        let pagaConTarjeta = idTarjeta.checked;
        let pagaDecontado = idContado.checked;

        console.log(pagaConTarjeta);
        console.log(pagaDecontado);

    };


}