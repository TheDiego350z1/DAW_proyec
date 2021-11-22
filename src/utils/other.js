import Chart from 'chart.js/auto';
import formatNumber from './formatNumber';

function other() {
    let table = document.getElementById('table');
    let data = JSON.parse(localStorage.getItem('Transacciones'));

    viewTable()

    function viewTable() {

        if (data.length == 0) {
            table.innerHTML = `<h2>No hay transacciones para mostrar </h2>`
        } else {
            data.forEach(element => {
                table.innerHTML += `
                    <tr>
                        <th scope="row">${element.id}</th>
                        <td>${element.tipo}</td>
                        <td>${formatNumber.format(element.monto)}</td>
                    </tr>
                `
            });
        }
    };
    
    let deposito = data.filter(e => e.tipo == 'Deposito').reduce((x, y) => x + y.monto, 0);
    let retiro = data.filter(e => e.tipo == 'Retiro').reduce((x, y) => x + y.monto, 0);
    let luz = data.filter(e => e.tipo == 'Pago de Luz').reduce((x, y) => x + y.monto, 0);
    let agua = data.filter(e => e.tipo == 'Pago de Agua').reduce((x, y) => x + y.monto, 0);
    let inter = data.filter(e => e.tipo == 'Pago de Internet').reduce((x, y) => x + y.monto, 0);
    let cable = data.filter(e => e.tipo == 'Pago de Cable').reduce((x, y) => x + y.monto, 0);
    let tel = data.filter(e => e.tipo == 'Pago de Telefono').reduce((x, y) => x + y.monto, 0);

    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Deposito', 'Retiro', 'Pago de Luz', 'Pago de Agua', 'Pago de Internet', 'Pago de Cable', 'Pago de Telefono'],
            datasets: [{
                label: '# of Votes',
                data: [deposito, retiro, luz, agua, inter, cable, tel],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(150, 98, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(150, 98, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
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

}

export default other;