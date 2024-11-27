

window.addEventListener("load",()=>
    {

        console.log("running");

        const ctx = document.querySelector('#miGrafico').getContext('2d');

        const miGrafico = new Chart(ctx, {
            type: 'bar', // Tipo de gráfico: 'bar', 'line', 'pie', etc.
            data: {
                labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
                datasets: [{
                    label: 'Ventas',
                    data: [12, 19, 3, 5, 2],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 10
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


