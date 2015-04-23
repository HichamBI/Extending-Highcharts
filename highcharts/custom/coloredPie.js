(function (H) {
    H.wrap(H.Axis.prototype, 'render', function (proceed) {
        if (this.chart.userOptions.chart.type !== 'coloredPie') {
            proceed.call(this);
        }
    });

    H.wrap(H.seriesTypes.pie.prototype, 'translate', function (translate) {
        translate.apply(this, Array.prototype.slice.call(arguments, 1));
        if (this.chart.userOptions.chart.type === 'coloredPie') {
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

    // Define default options
    plotOptions.coloredPie = merge(plotOptions.pie, {});

    seriesTypes.coloredPie = extendClass(seriesTypes.pie, merge(colorSeriesMixin, {
        type: 'coloredPie',
        axisTypes: ['colorAxis']
    }));
}(Highcharts));