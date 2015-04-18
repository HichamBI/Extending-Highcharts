(function (H) {
    H.wrap(H.Axis.prototype, 'render', function (proceed) { });

    var seriesTypes = H.seriesTypes,
        merge = H.merge,
        extendClass = H.extendClass,
        defaultOptions = H.getOptions(),
        plotOptions = defaultOptions.plotOptions;

    plotOptions.coloredPie = merge(plotOptions.pie, { });


    seriesTypes.coloredPie = extendClass(seriesTypes.pie, {
        type: 'coloredPie',
        axisTypes: ['colorAxis']
    });

}(Highcharts));