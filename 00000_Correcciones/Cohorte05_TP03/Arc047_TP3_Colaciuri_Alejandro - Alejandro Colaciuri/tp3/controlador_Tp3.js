import { retornaPrecioVenta, promedioDeTres,evaluacionNotaPromedio, calcularImpuesto, calcularImporteAgua, calcularTasaSubsuelo, calcularTasaEnre, calcularDosisInsulina, contarVocales, contarConsonantes, buscarLetra_S, buscarEspacios, buscarNumeros} from "./funciones.js";


window.onload=()=>
{
    //ej 13
    const idPrecioCosto = document.querySelector("#idPrecioCosto");
    const idGanancia = document.querySelector("#idGanancia");
    const idCalcular = document.querySelector("#idCalcular");
    const idMostrarResultado = document.querySelector("#idMostrarResultado");

    //funcion calcular

    idCalcular.onclick=()=>
    {   
        let costo=Number(idPrecioCosto.value);
        let ganancia=Number(idGanancia.value);
        
        if(costo<=0 || ganancia<1){
            idMostrarResultado.textContent=
            `   Error debe ingresar un numero mayor a 0, y la ganancia no debe ser menor a 1
            `;
        }else{
                let resultado=retornaPrecioVenta(costo,ganancia);
                idMostrarResultado.textContent=`debe vender a : $ ${resultado}`;
            }
    }

    //ejercicio 14
    const idNota1 = document.querySelector("#idNota1");
    const idNota2 = document.querySelector("#idNota2");
    const idNota3 = document.querySelector("#idNota3");
    const idBtnPromedio = document.querySelector("#idBtnPromedio");
    const idMostrarResultado2 = document.querySelector("#idMostrarResultado2");

    idBtnPromedio.onclick =()=>
    {
        if (idNota1.value.trim() === "" || 
        idNota2.value.trim() === "" || 
        idNota3.value.trim() === "") 
            {
                idMostrarResultado2.textContent = "Debe completar los todos campos.";
            }else{
                let nota1=Number(idNota1.value);
                let nota2=Number(idNota2.value);
                let nota3=Number(idNota3.value);
                if(
                    nota1>=0 && nota1<=10 && 
                    nota2>=0 && nota2<=10 && 
                    nota3>=0 && nota3<=10){
                        let resultado = promedioDeTres(nota1,nota2,nota3).toFixed(2);
                        idMostrarResultado2.textContent=`El promedio es: ${resultado}`;
                    }else{
                        idMostrarResultado2.textContent=`ingrese valores validos / del 0 al 10`;
                    }
                }
    }

    //ejercicio 15
    const idNotaPromedio = document.querySelector("#idNotaPromedio");
    const idBtnEvaluarPromedio =document.querySelector("#idBtnEvaluarPromedio");
    const idMostrarResultado3 =document.querySelector("#idMostrarResultado3");

    idBtnEvaluarPromedio.onclick =()=>{
        
        let nota=idNotaPromedio.value;
        let resultado=evaluacionNotaPromedio(nota);
        idMostrarResultado3.textContent=resultado;
    }

    //ejercicio 16
    const idImporteBase = document.querySelector("#idImporteBase");
    const idTipoBebida = document.querySelector("#idTipoBebida");
    const idBtnCalcularIva = document.querySelector("#idBtnCalcularIva");
    const idMostrarResultado4 = document.querySelector("#idMostrarResultado4");

    idBtnCalcularIva.onclick =()=>{
        
        let resultado=0;
        let importe=idImporteBase.value;
        let tipoBebida=Number(idTipoBebida.value);
        resultado=calcularImpuesto(importe,tipoBebida);
        idMostrarResultado4.textContent=resultado;
    }

    //ejercicio 17
    const idConsumoIngresado =document.querySelector("#idConsumoIngresado");
    const idBtnCalcularConsumo = document.querySelector("#idBtnCalcularConsumo");
    const idMostrarResultado5 = document.querySelector("#idMostrarResultado5");

    idBtnCalcularConsumo.onclick=()=>
    {
        let resultado=calcularImporteAgua(idConsumoIngresado.value);

        idMostrarResultado5.textContent=resultado;
    }

    //ejercicio 18
    
    const idImporteFacturaAgua = document.querySelector("#idImporteFacturaAgua");
    const idBtnCalcularTasaSubsuelo =document.querySelector("#idBtnCalcularTasaSubsuelo");
    const idMostrarResultado7 =document.querySelector("#idMostrarResultado7");
    
    idBtnCalcularTasaSubsuelo.onclick=()=>
    {
        let resultado=calcularTasaSubsuelo(idImporteFacturaAgua.value);
        idMostrarResultado7.textContent=resultado;
    }

    //ejercicio 19
    const idImporteAgua2 = document.querySelector("#idImporteAgua2");
    const idBtncalcularTasaEnre = document.querySelector("#idBtncalcularTasaEnre");
    const idMostrarResultado8 = document.querySelector("#idMostrarResultado8");

    idBtncalcularTasaEnre.onclick=()=>
    {
        let importe=idImporteAgua2.value;
        let resultado = calcularTasaEnre(importe);
        
        idMostrarResultado8.textContent=resultado;
    }

    //ejercicio 20
    const idNivelGlucosaIngresado= document.querySelector("#idNivelGlucosaIngresado");
    const idPesoIngresado = document.querySelector("#idPesoIngresado");
    const idTipo1=document.querySelector("#idTipo1");
    const idTipo2=document.querySelector("#idTipo2");
    const idBtncalcularDosisInsulina=document.querySelector("#idBtncalcularDosisInsulina");
    const idMostrarResultado20=document.querySelector("#idMostrarResultado20");

    idBtncalcularDosisInsulina.onclick =()=>
    {
        let glucosa=idNivelGlucosaIngresado.value;
        let peso=idPesoIngresado.value;

        let tipo= idTipo1.checked;
        let resultado = calcularDosisInsulina(glucosa, peso, tipo);
        idMostrarResultado20.textContent=resultado;
    }
    //ejercicio 21

    const idTextoIngresado=document.querySelector("#idTextoIngresado");
    const idBtnContarVocales= document.querySelector("#idBtnContarVocales");
    const idMostrarResultado21=document.querySelector("#idMostrarResultado21");

    idBtnContarVocales.onclick =()=>
    {
        let texto = idTextoIngresado.value;
        let resultado=contarVocales(texto);
        idMostrarResultado21.textContent=resultado;
    }

    //ejercicio 22
    const idTextoIngresado2=document.querySelector("#idTextoIngresado2");
    const idBtnContarConsonantes= document.querySelector("#idBtnContarConsonantes");
    const idMostrarResultado22=document.querySelector("#idMostrarResultado22");

    idBtnContarConsonantes.onclick =()=>
    {
        let texto = idTextoIngresado2.value;
        let resultado=contarConsonantes(texto);
        idMostrarResultado22.textContent=resultado;
        console.log(resultado);
    }

    //ejercicio 23
    const idTextoIngresado3=document.querySelector("#idTextoIngresado3");
    const idBtnBuscarLetra_S= document.querySelector("#idBtnBuscarLetra_S");
    const idMostrarResultado23=document.querySelector("#idMostrarResultado23");

    idBtnBuscarLetra_S.onclick =()=>
    {
        let texto = idTextoIngresado3.value;
        let resultado=buscarLetra_S(texto);
        idMostrarResultado23.textContent=resultado;
    }


    //Ejercicio Nro. 24: 
    const idTextoIngresado4=document.querySelector("#idTextoIngresado4");
    const idBtnBuscarEspacios= document.querySelector("#idBtnBuscarEspacios");
    const idMostrarResultado24=document.querySelector("#idMostrarResultado24");

    idBtnBuscarEspacios.onclick =()=>
    {
        let texto = idTextoIngresado4.value;
        let resultado=buscarEspacios(texto);
        idMostrarResultado24.textContent=resultado;
    }

    //Ejercicio Nro. 25
    const idTextoIngresado5=document.querySelector("#idTextoIngresado5");
    const idBtnBuscarNumeros= document.querySelector("#idBtnBuscarNumeros");
    const idMostrarResultado25=document.querySelector("#idMostrarResultado25");

    idBtnBuscarNumeros.onclick =()=>
    {
        let texto = idTextoIngresado5.value;
        let resultado=buscarNumeros(texto);
        idMostrarResultado25.textContent=resultado;
    }


}