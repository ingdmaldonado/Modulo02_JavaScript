

const fnCalcularIVA = (tipoArticulo,importeBase)=>
    {
        if(tipoArticulo === 1)
        {
            return (importeBase * 21)/100;
        }
        if(tipoArticulo === 2)
        {
            return (importeBase * 27)/100;
        }
        if(tipoArticulo === 3)
        {
            return (importeBase * 10.5)/100;
        }
        if(tipoArticulo === 4)
        {
            return (importeBase * 5)/100;
        }
        if(tipoArticulo === 5)
        {
            return 0;
        }
        return 0;
    }


window.addEventListener("load",()=>{

    const idImporteBaseFactura = document.querySelector("#idImporteBaseFactura");
    const idSelectorTipoArticulo = document.querySelector("#idSelectorTipoArticulo");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idImporteBase = document.querySelector("#idImporteBase");
    const idImporteIVA = document.querySelector("#idImporteIVA");
    const idImporteFinal = document.querySelector("#idImporteFinal");

    console.log(idImporteBaseFactura);
    console.log(idSelectorTipoArticulo);
    console.log(idBtnCalcular);
    console.log(idImporteBase);
    console.log(idImporteIVA);
    console.log(idImporteFinal);

    let importeBase = 0;
    let tipoArticulo = 0;

    let importeIVA = 0;
    let importeFinal = 0;

    idBtnCalcular.addEventListener("click",()=>
        {

            importeBase = Number(idImporteBaseFactura.value);
            tipoArticulo = Number(idSelectorTipoArticulo.value);

            importeIVA = fnCalcularIVA(tipoArticulo,importeBase);

            importeFinal = importeBase + importeIVA;

            console.log(importeBase);
            console.log(importeIVA);
            console.log(importeFinal);

            idImporteBase.textContent = `Importe Base ${importeBase.toFixed(2).toLocaleString("ES-es")}`;
            idImporteIVA.textContent = `Importe IVA ${importeIVA.toFixed(2).toLocaleString("ES-es")}`;
            idImporteFinal.textContent = `Importe Final ${importeFinal.toFixed(2).toLocaleString("ES-es")}`;


        })

})