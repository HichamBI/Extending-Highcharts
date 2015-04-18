$(function () {
    $('#bar').highcharts({
        chart: {
            type: 'coloredColumn'
        },
        title: {
            text: 'Column Chart With Color Axis'
        },
        xAxis: {
            categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
        },
        credits: {
            enabled: false
        },
        series: [
            {
                name: 'John',
                data: [5, 3, 4, 7, 2]
            },
            {
                name: 'Jane',
                data: [2, -2, -3, 2, 1]
            },
            {
                name: 'Joe',
                data: [3, 4, 4, -2, 5]
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