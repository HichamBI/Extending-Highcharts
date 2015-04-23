(function (H) {

    H.wrap(H.seriesTypes.column.prototype, 'translate', function (translate) {
        translate.apply(this, Array.prototype.slice.call(arguments, 1));
        if (this.chart.userOptions.chart.type === 'coloredColumn') {
            this.translateColors.call(this);
        }
    });
    var seriesTypes = H.seriesTypes,
        merge = H.merge,
        extendClass = H.extendClass,
        defaultOptions = H.getOptions(),
        plotOptions = defaultOptions.plotOptions;

    // Stolen from heatmap
    var colorSeriesMixin = {
        optionalAxis: 'colorAxis',
        colorKey: 'colorValue', // Point color option key
        translateColors: seriesTypes.heatmap && seriesTypes.heatmap.prototype.translateColors
    };

    plotOptions.coloredColumn = merge(plotOptions.column, { });

    seriesTypes.coloredColumn = extendClass(seriesTypes.column, merge(colorSeriesMixin, {
        type: 'coloredColumn',
        axisTypes: ['xAxis', 'yAxis', 'colorAxis']
    }));
}(Highcharts));