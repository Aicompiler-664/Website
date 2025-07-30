document.addEventListener("DOMContentLoaded", function () {
    Chart.register(ChartDataLabels);

    const configs = [
        { id: 'pythonChart', label: 'Python', percent: 95, color: '#facc15' },
        { id: 'flaskChart', label: 'Flask', percent: 85, color: '#38bdf8' },
        { id: 'jsChart', label: 'JavaScript', percent: 10, color: '#fb7185' }
    ];

    configs.forEach(({ id, label, percent, color }) => {
        new Chart(document.getElementById(id), {
            type: 'doughnut',
            data: {
                labels: ['', ''],
                datasets: [{
                    data: [percent, 100 - percent],
                    backgroundColor: [color, '#1e293b'],
                    borderWidth: 0
                }]
            },
            options: {
                cutout: '70%',
                plugins: {
                    legend: { display: false },
                    tooltip: { enabled: true },
                    datalabels: {
                        color: '#fff',
                        formatter: function(value, context) {
                            return context.dataIndex === 0 ? value + '%' : '';
                        },
                        font: {
                            weight: 'bold',
                            size: 10
                        },
                        anchor: 'center',
                        align: 'center'
                    }
                }
            },
            plugins: [ChartDataLabels]
        });
    });
});
