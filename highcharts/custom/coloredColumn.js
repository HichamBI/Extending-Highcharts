(function (H) {
    var seriesTypes = H.seriesTypes,
        merge = H.merge,
        extendClass = H.extendClass,
        defaultOptions = H.getOptions(),
        plotOptions = defaultOptions.plotOptions;

    plotOptions.coloredColumn = merge(plotOptions.column, { });


    seriesTypes.coloredColumn = extendClass(seriesTypes.column, {
        type: 'coloredColumn',
        axisTypes: ['xAxis', 'yAxis', 'colorAxis']

    });

}(Highcharts));