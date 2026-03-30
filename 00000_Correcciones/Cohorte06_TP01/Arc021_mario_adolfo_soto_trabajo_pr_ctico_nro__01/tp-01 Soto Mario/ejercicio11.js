/* Un local de venta de comida rápida, lanza su aplicación online que le permite al cliente pagar por la misma
y además aclara que se incluye en el precio total el costo del envío dependiendo la zona en la que vive el
cliente.
1) Zona Centro = $ 2500,00
2) Zona Oeste = $ 3750,00
3) Zona Norte = $ 4225,00
4) Zona Sur = $ 5222,50
5) Zona Este = $ 4288,50
Debe ingresar el importe de la compra, sumarle el costo del envío en función de la zona del cliente.
Recomendación: Es mejor guardar los costos de envío en variables, de tal forma que si en un futuro cambian,
no haya que tocar la lógica del programa, ni ver todo el recorrido, sino simplemente cambiar los precios.*/

{let importeDeLaCompra =0;
importeDeLaCompra = Number(prompt(`ingrese el importe de la compra`));

let costoDeEnvio =0;
costoDeEnvio= Number(prompt(`Ud esta en zona 1-zona centro, 2 zona Oeste, 3 Zona Norte, 4 zona sur, 5 zona este`));


switch (costoDeEnvio)

    {   
        //1) Zona Centro
        case 1:{ costoDeEnvio= 2500;
            break;
        }
        //2) Zona Oeste = $ 3750,00
        case 2:{ costoDeEnvio = 3750;
            break;
        }
        //3) Zona Norte = $ 4225,00
        case 3:{ costoDeEnvio = 4221;
            break;
        }
        //4) Zona Sur = $ 5222,50
        case 4:{ costoDeEnvio = 5222.50;
            break;
        }
        //5) Zona Este = $ 4288,50
        case 5:{ costoDeEnvio= 4288.50;
            break;
        }
        
        default: {console.log(`Ud ingreso una zona incorrecta`);
            break;
        }






}
    let precioTotalAPagar = importeDeLaCompra + costoDeEnvio;
  console.log(`el total a pagar es ${precioTotalAPagar}`);
  
}