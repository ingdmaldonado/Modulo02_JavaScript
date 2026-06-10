/*{
    let numeroA=Number(prompt(`Ingrese el primer numero`));
    let numeroB=Number(prompt(`ingrese el segundo numero`));

    let suma=numeroA+numeroB;
    let resta=numeroA-numeroB;
    let multiplicacion=numeroA*numeroB;
    let division=0;
    console.log(`ssuma = ${suma}`);
    console.log(`resta=${resta}`);
    console.log(`multiplicacion=${multiplicacion}`);
    
    if (numeroB===0)
    {
        console.log(`no se puede dividir en 0`)
    }else
    {
        division=numeroA/numeroB;
        console.log(`division=${division}`)
    }

    console
}*/

//Ejercicio 2

/*{
    let importeTotal=0;
    let descuento=0;
    let importeFinal=0;
    importeTotal=Number(prompt(`Ingrese el importe total`));

    descuento=(15*importeTotal)/100;
    importeFinal=importeTotal-descuento;

    console.log(`Importe Total: $${importeTotal}`);
    console.log(`descuento: $${descuento}`);
    console.log(`importe final: $${importeFinal}`);
}*/

//Ejercicio 3
/* 
{
    let gastoEnergia=0;
    let gastoComunicacion=0;
    let gastoAgua=0;
    let aumentoEnergia=0;
    let aumentoComunicacion=0;
    let aumentoAgua=0;

    gastoEnergia=Number(prompt(`ingrese el gasto de energia`));
    gastoComunicacion=Number(prompt(`ingrese el gasto de comunicaciones`));
    gastoAgua=Number(prompt(`ingrese el gasto de servicio de agua`));

    aumentoEnergia=((12.5*gastoEnergia)/100)+gastoEnergia;
    aumentoComunicacion=((7*gastoComunicacion)/100)+gastoComunicacion;
    aumentoAgua=((3*gastoAgua)/100)+gastoAgua;
    
    console.log(`Gastos futuros a pagar: ENERGIA=$${aumentoEnergia}, COMUNICACIONES=$${aumentoComunicacion} AGUA=$${aumentoAgua}`);

}*/

//EJERCICIO 4
/*
{

    let numero=0;
    numero=Number(prompt(`Ingrese un numero`));

    if (numero>0)
    {console.log(`el numero es positivo`);

    }else
    {
        console.log(`el numero es negativo`);
    }

    (numero>0)? console.log(`el numero es positivo`):console.log(`el numero es negativo`)
}
*/

//EJERCICIO 5
/*{
    let valor=0;
    valor=Number(prompt(`Ingrese un valor para determinar si es par o impar` ));
    (valor%2==0)? console.log(`numero par`):console.log(`numero impar`);
}*/

//EJERCICIO 6
/*
{
    let totalCompra=Number(prompt( `ingrese el valor total de la compra`))
    let totalPagar=0;

    const descuento=0.50;
    let descuentoDado=0;

    descuentoDado=totalCompra*descuento;

    if(descuentoDado>80000)
    {
        totalPagar=totalCompra-80000;
        descuentoDado=80000
    }else
    {
        totalPagar=totalCompra-(descuentoDado);
    }
    console.log(`El total de la compra es:${totalCompra}`)
    console.log(`descuenti:${descuentoDado}`)
    console.log(`El total a pagar es ${totalPagar}`)
}*/

/*
//EJERCICIO 7
{
    let codigoProducto=0;
    let cantidadBolsas=0;
    const dogui=38000;
    const tiernitos=31000;
    const dogpro=46000;
    let importeTotal =0;
    let producto=0;
    let precioProducto=0;

    codigoProducto=Number(prompt(`Ingrese el codigo del producto que desea comprar: 1)Dogui x21kil  2)Tiernitos x21kil  3)Dogpro x 21kil`));

    cantidadBolsas=Number(prompt(`Ingrese la cantidad de bolsas a comprar`))

    if(codigoProducto==1)
    {
        importeTotal=dogui*cantidadBolsas;
        producto= 'Dogui x 21kil';
        precioProducto=dogui;
    }else
    {
        if(codigoProducto==2)
        {
            importeTotal=tiernitos*cantidadBolsas;
            producto= 'Tiernitos x 21kil';
            precioProducto=tiernitos

        }else
        {
            importeTotal=dogpro*cantidadBolsas;
            producto= 'Dogpro x 21kil';
            precioProducto=dogpro;
        }
    }

    console.log(`El total a pagar para el producto: ${producto} con precio: ${precioProducto} y cantidad: ${cantidadBolsas} es: $ ${importeTotal}`)


}

*/

/*
//EJERCICIO 8
{
    let edad=0;
    let rango=0;

    edad=Number(prompt(`Ingrese su edad`));

    if(edad>=0 && edad<=12){
        rango=1;
    }
    if(edad>=13 && edad<=17){
        rango=2;
    }
    if(edad>=18 && edad<=64){
        rango=3;
    }
    if(edad>64){
        rango=4
    }
    

    switch(rango)
    {
        case(1):
        {console.log(`es nino`)
            break;
        }
        case(2):
        {console.log(`es adolecente`);
             break;} 
        case(3):
        {console.log(`es adulto`)
            break;}
        case(4):
        {console.log(`es adulto mayor`)
            break;
        } 

    }
}

*/


/*
//EJERCICIO 9

{
    let cantidadPasajes=0;
    let importePasaje=0;
    let totalImporte=0;
    let totalCompra=0;
    let descuento=0;

    cantidadPasajes=Number(prompt(`Imgrese la cantidad de pasajes a comprar`));
    importePasaje=Number(prompt(`Ingrese importe de pasajes`))

    totalCompra=cantidadPasajes*importePasaje

    if(cantidadPasajes>3 && totalCompra>500000) //hacer desde el mayor a menor pq sino se ejecunatn los 2
    {
        descuento=(15*totalCompra)/100;
        totalImporte=totalCompra-descuento;
    }else
    {
        if(cantidadPasajes>3 && totalCompra>250000)
        {
            descuento=(11*totalCompra)/100
            totalImporte=totalCompra-descuento;
        }else
        {
            totalImporte=totalCompra;

        }
    }

    console.log(`Cantidad de pasajes: ${cantidadPasajes},Total Compra:${totalCompra}, Descuento:${descuento} Total Importe: ${totalImporte}`)
}
*/

//EJERCICIO 10
/*
{
    let importeCompra=0;
    let formaPago=0;
    let descuento=0;
    let importeTotal=0;

    importeCompra=Number(prompt(`Imgrese el importe de la compra`));
    formaPago=Number(prompt(`Elija forma de pago:  1)Efectivo  2)Debito  3Credito`));

    switch(formaPago)
    {
        case(1):
        {
            descuento=(10*importeCompra)/100;
            break;
        }
        case(2):
        {
            descuento=(5*importeCompra)/100;
            break;         
        }
        case(3):
        {
            descuento=0;
            break;         
        }
    }
    importeTotal=importeCompra-descuento;
    console.log(`Monto de la compra: $${importeCompra}, monto FINAL: $${importeTotal}`)

} */

    //EJERCICIO 11
/*
{
    const zonaCentro=2500;
    const zonaOeste=3750;
    const zonaNorte=4225;
    const zonaSur=5222.50;
    const zonaEste=4288.50;
    let importeCompra=0;
    let zona=0;
    let importeTotal=0;

    importeCompra=Number(prompt(`Ingrese el importe de la compra`));
    zona=Number(prompt(`Ingrese zona:  1)Centro  2)Oeste  3)Norte  4)Sur  5)Este`));

    switch(zona){
        case (1):
        {
            importeTotal=importeCompra+zonaCentro;
            break;
        }
        case(2):
        {
            importeTotal=importeCompra+zonaOeste;
            break;
        }
        case(3):
        {
            importeTotal=importeCompra+zonaNorte;
            break;
        }
        case(4):
        {
            importeTotal=importeCompra+zonaSur;
            break;
        }
        case(5):
        {
            importeTotal=importeCompra+zonaEste;
            break;
        }   
    }

    console.log(`El total de la compra mas el envio es: $${importeTotal}`)

}*/

//EJERCICIO 12
/*
{
    let diaCompra=0;
    let diaMostrar=0;
    let importeCompra=0;
    let reintegroObtenido=0;
    let importeFinal=0;
    

    diaCompra=Number(prompt(`Ingrese dia de compra 1)Lunes 2)Martes 3)Miercoles 4)Jueves 5)Viernes 6)Sabado 7)Domingo`));
    importeCompra=Number(prompt(`Ingrese el importe de la compra`));

    switch(diaCompra)
    {
        case(1):
        {
            reintegroObtenido=0;
            diaMostrar=`Lunes`;
            break;
        }
        case(2):
        {
            reintegroObtenido=0;
            diaMostrar=`Martes`;
            break;
        }
        case(3):
        {
            reintegroObtenido=0;
            diaMostrar=`Muercoles`;
            break;
        }
        case(4):
        {
            reintegroObtenido=0;
            diaMostrar=`Jueves`;
            break;
        }
        case(5):
        {
            reintegroObtenido=(50*importeCompra)/100;
            diaMostrar=`Viernes`;
            break;
        }
        case(6):
        {
            reintegroObtenido=(50*importeCompra)/100;
            diaMostrar=`Sabado`;
            break;
        }
        case(7):
        {
            reintegroObtenido=(50*importeCompra)/100;
            diaMostrar=`Domingo`;
            break;
        }
    }

    if(reintegroObtenido>80000)
    {
        reintegroObtenido=80000;
    }

    importeFinal=importeCompra-reintegroObtenido;

    console.log(`Dia de compra: ${diaMostrar}, importe de la compra:$${importeCompra}, reintegro obtenido:$${reintegroObtenido}, importe final a pagar:$${importeFinal}`)
}
    */

//EJERCICIO 13

{

  
    let rubroComercio=0;
    let importeCompra=0;
    let descuentoObtenido=0;
    let topeMaximo=0;
    let importeFinal=0;

    const descuentoVestimenta=20;
    const descuentoPerfumeria=20;
    const descuentoLibreria=30;
    const descuentoElectrodomesticos=15;
    const descuentoCalzados=20;
    const topeVestimenta=80000;
    const topePerfumeria=80000;
    const topeLibreria=90000;
    const topeElectrodomesticos=70000;
    const topeCalzado=80000;
    

    rubroComercio=Number(prompt(`Ingrese el rubro: 1)Vestimenta  2)Perfumeria  3)Libreria  4)Electrodomenticos  5)Calzado`));
    importeCompra=Number(prompt(`Ingrese el importe de la compra`));

    switch(rubroComercio)
    {
        case(1):
        {
            descuentoObtenido=(descuentoVestimenta*importeCompra)/100;
            rubroComercio=`Vestimenta`;
            topeMaximo=topeVestimenta;
            break;
        }
        case(2):
        {
            descuentoObtenido=(descuentoPerfumeria*importeCompra)/100;
            rubroComercio=`Perfumeroa`;
            topeMaximo=topePerfumeria;
            break;
        }
        case(3):
        {
            descuentoObtenido=(descuentoLibreria*importeCompra)/100;
            rubroComercio=`Libreria`;
            topeMaximo=topeLibreria;
            break;
        }
        case(4):
        {
            descuentoObtenido=(descuentoElectrodomesticos*importeCompra)/100;
            rubroComercio=`Electrodomesticos`;
            topeMaximo=topeElectrodomesticos;
            break;
        }
        case(5):
        {
            descuentoObtenido=(descuentoCalzados*importeCompra)/100;
            rubroComercio=`Calzados`
            topeMaximo=topeCalzado;
            break;
        }
    }

    if(descuentoObtenido>topeMaximo)
    {
        descuentoObtenido=topeMaximo;
    }

    importeFinal=importeCompra-descuentoObtenido;

    console.log(`Rubro: ${rubroComercio}, Importe de Comrpa: $${importeCompra}, descuento Aplicado: $${descuentoObtenido}, Importe Final a Pagar: $${importeFinal}`)



}