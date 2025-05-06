
window.addEventListener("load",()=>
    {
    
        const mensaje = document.getElementById("mensaje");
        const btn = document.getElementById("btnGuardar");

        btn.addEventListener("click", () => {
        mensaje.style.display = "block";

        setTimeout(() => 
            {
                mensaje.style.display = "none";
            }, 3000);
        });
});


