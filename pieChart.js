$(function () {
    $('#pie').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            showAxes: true,
            type: 'coloredPie'
        },
        title: {
            text: 'Pie Chart With Custom Color Axis'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            coloredPie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [
            {
                name: 'Browser share',
                data: [
                    {
                        name: 'Firefox',
                        value: 65.0,
                        y: 65.0,
                        colorValue: 65.0
                    },
                    {
                        name: 'IE',
                        value: 6.8,
                        y: 6.8,
                        colorValue: 6.8
                    },
                    {
                        name: 'Chrome',
                        value: 12.8,
                        y: 12.8,
                        colorValue: 12.8
                    },
                    {
                        name: 'Safari',
                        value: 8.5,
                        y: 8.5,
                        colorValue: 8.5
                    },
                    {
                        name: 'Opera',
                        value: 6.2,
                        y: 6.2,
                        colorValue: 6.2
                    },
                    {
                        name: 'Others',
                        value: 0.7,
                        y: 0.7,
                        colorValue: 0.7
                    }
                ]
            }
        ],
        colorAxis: {
            stops: [
                [0.2, '#E50000'],
                [0.45, '#EDC60C'],
                [0.5, '#E2EB0F'],
                [1, '#0BB401']
            ],
            min: 0,
            max: 100,
            startOnTick: false,
            endOnTick: false,
            labels: {
                enabled: true,
                format: '{value} %'
            }
        }
    });
});