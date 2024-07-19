
let GlobalData =
{
    temaActualGlobal: 0,

    listadoDeTemas:[
        {
            temaID:0,
            temaDescriptor:"Introducción al PROTOCOLO HTTP / HTTPs",
            temaRuta:"./tema00_introduccion_http/tema00_introduccion_protocolo_http.html"
        },
        {
            temaID:1,
            temaDescriptor:"",
            temaRuta:"./tema02_capturando_eventos/tema02_capturando_eventos.html"
        },
        {
            temaID:2,
            temaDescriptor:"Etiquetas HTML INPUT",
            temaRuta:"./tema01_html_javascript/tema01_etiquetas_input.html"
        },
         
    ]
}


document.onreadystatechange = function()
{
    console.log(document.readyState);
}

window.onload = function()
{
    const idBtnMostrarTema = document.querySelector("#idBtnMostrarTema");
    const selPrincipalDeTemas = document.querySelector("#selPrincipalDeTemas");
    const contenedorPrincipal = document.querySelector("#contenedorPrincipal");

    idBtnMostrarTema.addEventListener("click", async(e)=>
        {
            let temaElegido = Number(selPrincipalDeTemas.value);
            GlobalData.temaActualGlobal = temaElegido;
            console.log(GlobalData.listadoDeTemas);
            await mostrarVista(contenedorPrincipal,GlobalData.listadoDeTemas[temaElegido].temaRuta);
        })

    console.log(idBtnMostrarTema);

}


   
async function mostrarVista(Contenedor,url) 
{

    console.log(Contenedor);

    try {
        const response = await fetch(url);
        const html = await response.text();

        console.log(html);

        Contenedor.innerHTML = html;
      //  document.getElementById('contenido').innerHTML = html;
    } catch (error) {
        console.error('Error al cargar la vista:', error);
    }
}