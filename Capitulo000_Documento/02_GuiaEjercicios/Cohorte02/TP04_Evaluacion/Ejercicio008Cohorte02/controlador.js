

window.addEventListener("load",()=>
    {
        console.log("running");

        // Capturamos el elemento del DOM donde se dibujará el gráfico
        const ctx = document.querySelector("#graficoCircular1").getContext("2d");


        // objeto literal que se utiliza para pasarle al constructor de la clase

        const datosDelGrafico = {
            type: "doughnut", // Tipo de gráfico: circular (doughnut)
            data: {
                labels: ["TODO CAÑO", "PREVEDELLO S.A.", "CORRALON LA GRUTA S.R.L.", "CORRALON IECO"],
                datasets: [
                {
                    label: "Participación",
                    data: [25,50,10,15], // Porcentajes de participación
                    backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
                    hoverOffset: 4,
                },
                ],
            },
            options: {
                responsive: true,
                plugins: {
                legend: {
                    display: true,
                    position: "top",
                },
                },
            },
            }


        // Instanciamos un nuevo objeto de la clase Chart
        const graficoCircular = new Chart(ctx,datosDelGrafico);
        })


/* CON ESTOS DATOS DEBEN CREAR EL NUEVO GRÁFICO, SIN ELIMINAR EL ANTERIOR

        // Etiquetas para las empresas
    const labelsEmpresas = [
        "EMPRESA ALPHA", 
        "EMPRESA BETA", 
        "EMPRESA GAMMA", 
        "EMPRESA DELTA", 
        "EMPRESA EPSILON", 
        "EMPRESA ZETA"
    ];

    // Porcentajes de participación
    const dataEmpresas = [20, 25, 15, 10, 20, 10];

    // Colores para cada segmento
    const coloresEmpresas = [
        "#FF5733", // Rojo
        "#33FF57", // Verde
        "#3357FF", // Azul
        "#FF33A1", // Rosa
        "#FFC300", // Amarillo
        "#DAF7A6"  // Verde claro
    ];




*/ 


