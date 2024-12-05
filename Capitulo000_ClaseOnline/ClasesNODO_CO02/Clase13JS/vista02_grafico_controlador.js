
window.addEventListener("load",()=>{

    console.log("running");

    const ctx = document.querySelector('#miGrafico').getContext('2d');
    const ctx2 = document.querySelector('#miGrafico2').getContext('2d');


    console.log(ctx);
    console.log(ctx2);

    const miGrafico = new Chart(ctx, {
        type: 'bar', // Tipo de gráfico: 'bar', 'line', 'pie', etc.
        data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
            datasets: [{
                label: 'Ventas',
                data: [12, 19, 3, 5, 2],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 0.5
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });        


    const miGrafico2 = new Chart(ctx2, {
        type: 'bar', // Tipo de gráfico: 'bar', 'line', 'pie', etc.
        data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
            datasets: [{
                label: 'Facturacion',
                data: [15,-10, 12, -5, 20],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 0.5
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });        


})