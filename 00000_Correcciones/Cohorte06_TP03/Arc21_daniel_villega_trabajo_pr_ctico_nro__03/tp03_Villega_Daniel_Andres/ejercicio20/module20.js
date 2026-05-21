export const fnPromedioDeTres = (nota1, nota2, nota3) => {

    return (nota1 +  nota2 + nota3)/3;
};


export const fnGuardarEstado =(estadoAplicacion) => {

    let estadoApp = JSON.stringify(estadoAplicacion);

    localStorage.setItem("estadoApp", estadoApp);
};

export const fnRecuperarEstado = () => {

    let datoRecuperado = localStorage.getItem("estadoApp");
            console.log(datoRecuperado);

            if (datoRecuperado)

                {
                    let estadoOBJETO = JSON.parse(datoRecuperado);

                    console.log(datoRecuperado);

                    console.log(estadoOBJETO);

                    idNumero1.value = estadoOBJETO.numero1;
                    idNumero2.value = estadoOBJETO.numero2;
                    idNumero3.value = estadoOBJETO.numero3;

                }
};