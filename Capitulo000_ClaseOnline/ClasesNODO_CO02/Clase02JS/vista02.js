
/*
Ejercicio Nro. 02: 
	Un local comercial desea realizar un programa para sus vendedores
para que les sea sencillo calcular el interés que deben cobrar cuando 
el importe de una venta se realizará con tarjeta de crédito. el interés
que se debe aplicar es del 13.7%. El operador deberá ingresar el importe
de la compra y el programa deberá indicarle el monto total a cobrar al cliente.
*/
{

    // primero: vamos a crear la variable donde almacenaremos el capital

    const interes = 13.7;

    let capitalAIngresar = 0; // forma con camelCase

    // segundo: solicitarle al usuario que la ingrese por teclado

    capitalAIngresar = Number(prompt("Por favor ingrese el Capital:"));

    // tercero: mostrar que la entrada está correctamente ingresada

        //console.log("El Capital ingresado es :"+capitalAIngresar);  
        //console.log("El capital ingresado es",capitalAIngresar);

    console.log(`El Capital ingresado es ${capitalAIngresar}`);

    // cuarto paso vamos a declarar la variable auxiliar 

    let porcentaje = 0; // la declaro y la inicializo en cero
    let totalAPagar = 0; // la declaro y la inicializo en cero

    porcentaje = (capitalAIngresar * interes)/100;

    totalAPagar = capitalAIngresar + porcentaje;

    // quinto paso //

    console.log(`El capital ingresado ${capitalAIngresar} el porcentaje es ${porcentaje} y el total a pagar ${totalAPagar}`);







}