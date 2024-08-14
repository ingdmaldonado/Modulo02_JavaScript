
window.addEventListener("load",()=>{

    const idCard1 = document.querySelector("#idCard1");
    const idBtnLindo = document.querySelector("#idBtnLindo");

    console.log(idCard1);
    console.log(idBtnLindo);


    console.log("funcionando");

    idCard1.addEventListener("click",()=>{

        alert("me están haciendo click en la tarjeta");
    })

    idBtnLindo.addEventListener("click",()=>{
        alert("me están haciendo click en el botón");
    })

   


})