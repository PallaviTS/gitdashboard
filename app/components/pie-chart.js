import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'div',
    classNames: ['highcharts'],
    contentChanged: (function() {
        return this.rerender();
    }).observes('series'),

    didInsertElement: function() {
        console.log(this.data.language);
        var res = _.groupBy(this.data.language);
        var h = _.mapObject(res, function(v,k)
                            { return (v.length); }
                           );
        var pal =  _.map(h, function(v,k){ return { "name": k, "y": v } });
        var pp =  _.each(pal, function(val, i) {
            return pal[i];
        });
        return $("#" + this.chartId).highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Github Account Details'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
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
            series: [{
                name: "Brands",
                colorByPoint: true,
                data: pp
            }]
        });
    },
    Willdestroyelement: function() {
        return $("#" + this.chartId).highcharts().destroy();
    }
});
