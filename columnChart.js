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
                name: 'Geoffroy',
                data: [
                    {
                        y: 5,
                        value: 5,
                        colorValue: 5
                    }
                    , {
                        y: 3,
                        value: 3,
                        colorValue: 3
                    }
                    ,
                    {
                        y: 4,
                        value: 4,
                        colorValue: 4
                    },
                    {
                        y: 7,
                        value: 7,
                        colorValue: 7
                    },
                    {
                        y: 2,
                        value: 2,
                        colorValue: 2
                    }
                ]
            },
            {
                name: 'Michael',
                data: [
                    {
                        y: 10,
                        value: 10,
                        colorValue: 10
                    }
                    , {
                        y: 4,
                        value: 4,
                        colorValue: 4
                    }
                    ,
                    {
                        y: 8,
                        value: 8,
                        colorValue: 8
                    },
                    {
                        y: 7,
                        value: 7,
                        colorValue: 7
                    },
                    {
                        y: 1,
                        value: 1,
                        colorValue: 1
                    }
                ]
            },
            {
                name: 'JB',
                data: [
                    {
                        y: 1,
                        value: 1,
                        colorValue: 1
                    }
                    , {
                        y: 5,
                        value: 5,
                        colorValue: 5
                    }
                    ,
                    {
                        y: 6,
                        value: 6,
                        colorValue: 6
                    },
                    {
                        y: 10,
                        value: 10,
                        colorValue: 10
                    },
                    {
                        y: 0,
                        value: 0,
                        colorValue: 0
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
            max: 10,
            startOnTick: false,
            endOnTick: false,
            labels: {
                format: '{value}'
            }
        }
    });
});