{
    let rubro = "";
    let descuento = 0;
    let totalAPagar = 0; 
    let rubroComencio = prompt("Ingrese el rubro(1->Vest, 2->Perf, 3->libre, 4->Electro, 5->Calzado):");
    let importeCompra = parseFloat(prompt("Ingrese el importe de la compra:"));

    if(rubroComencio === "1" || rubroComencio === "2" || rubroComencio === "5"){
        
        if(rubroComencio === "1"){
            rubro = "Vestimenta";
        }        else if(rubroComencio === "2"){
            rubro = "Perfumería";
        }        else if(rubroComencio === "5"){
            rubro = "Calzado";
        }


        descuento = importeCompra * 0.20;

        if (descuento > 80000) {
           totalAPagar = importeCompra - 80000;      
           descuento = 80000;
        } else {
           totalAPagar = importeCompra - descuento;      
        }
    } 
    else if(rubroComencio === "3" ){
        rubro= "librería";
        descuento = importeCompra * 0.30;
        if (descuento > 90000) {
           totalAPagar = importeCompra - 90000;
           descuento = 90000;      
        } else {
           totalAPagar = importeCompra - descuento;      
        }
    }
    else if(rubroComencio === "4" ){
        rubro = "Eletrodomésticos";
        descuento = importeCompra * 0.15;
        if (descuento > 70000) {
           totalAPagar = importeCompra - 70000;
           descuento = 70000;      
        } else {
           totalAPagar = importeCompra - descuento;      
        }   
    }
    else {
        totalAPagar = importeCompra;
    }

    console.log(`Rubro: ${rubro}`);          
    console.log(`Importe de la compra: ${importeCompra}`);
    console.log(`Descuento obtenido: ${descuento}`);
    console.log(`Total final a pagar: ${totalAPagar}`);

}