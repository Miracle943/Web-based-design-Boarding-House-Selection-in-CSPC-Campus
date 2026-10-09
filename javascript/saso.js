const ctx = document.getElementById('studentsPieChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: [
            "ABONITA-SAWCHUK BOARDING HOUSE",
            "AJV BOARDING HOUSE",
            "ANDING BOARDING HOUSE",
            "ARTHUR BEREDICO BOARDING HOUSE",
            "AUDAL'S BOARDING HOUSE",
            "BAYLON'S BOARDING HOUSE",
            "BELLA'S BOARDING HOUSE",
            "BICALDO'S BOARDING HOUSE",
            "BRINA BOARDING HOUSE RENTAL",
            "CAREX BOARDING HOUSE",
            "DAYUPAY BOARDING HOUSE",
            "ESPLAGO BOARDING HOUSE",
            "GOODYBEAR BOARDING HOUSE",
            "HERNANDEZ BOARDING HOUSE",
            "JACOB'S BOARDING HOUSE",
            "JUNIO'S BOARDING HOUSE",
            "MAGG'S BOARDING HOUSE",
            "MARY GRACE MAOMAY BOARDING HOUSE",
            "MOEZ BOARDING HOUSE",
            "RLA BOARDING HOUSE",
            "RUMAH DABBIE BOARDING HOUSE RENTAL",
            "SYLVIA BOARDING HOUSE RENTAL"
        ],
        datasets: [{
            label: "Number of Students",
            data: [
                12, 5, 4, 4, 3,
                3, 4, 3, 3, 3,
                3, 3, 3, 2, 2,
                2, 1, 1, 1, 1,
                1, 1
            ], // total = 65
            borderColor: "#0d6efd",
            backgroundColor: "rgba(13, 110, 253, 0.3)",
            pointBackgroundColor: "#0d6efd",
            pointRadius: 5,
            pointHoverRadius: 7,
            borderWidth: 2,
            fill: false,
            tension: 0.3
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                labels: {
                    font: {
                        size: 13
                    }
                }
            },
            tooltip: {
                backgroundColor: "#0d6efd",
                titleColor: "#fff",
                bodyColor: "#fff",
                padding: 10
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Number of Students',
                    font: {
                        size: 14,
                        weight: 'bold'
                    }
                }
            },
            x: {
                ticks: {
                    autoSkip: false,
                    maxRotation: 45,
                    minRotation: 45,
                    font: {
                        size: 11
                    }
                },
                title: {
                    display: true,
                    text: 'Boarding Houses',
                    font: {
                        size: 14,
                        weight: 'bold'
                    }
                }
            }
        }
    }
});