$(function () {
    $('#pie').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            showAxes: true
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
                type: 'coloredPie',
                name: 'Browser share',
                data: [
                    {
                        name: 'Firefox',
                        value: 45.0,
                        y: 45.0,
                        colorValue: 45.0
                    },
                    {
                        name: 'IE',
                        value: 26.8,
                        y: 26.8,
                        colorValue: 2
                    },
                    {
                        name: 'Chrome',
                        value: 12.8,
                        y: 12.8,
                        colorValue: 3
                    },
                    {
                        name: 'Safari',
                        value: 8.5,
                        y: 8.5,
                        colorValue: 4
                    },
                    {
                        name: 'Opera',
                        value: 6.2,
                        y: 6.2,
                        colorValue: 5
                    },
                    {
                        name: 'Others',
                        value: 0.7,
                        y: 0.7,
                        colorValue: 6
                    }
                ]
            }
        ],
        colorAxis: {
            stops: [
                [0, '#3060cf'],
                [0.5, '#fffbbc'],
                [0.9, '#c4463a'],
                [1, '#c4463a']
            ],
            min: -100,
            max: 100,
            startOnTick: false,
            endOnTick: false,
            labels: {
                format: '{value}'
            }
        }
    });
});