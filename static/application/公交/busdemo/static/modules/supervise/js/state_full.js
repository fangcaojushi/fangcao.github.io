$(function () {
    $('#state_full').highcharts({
        chart: {
            zoomType: 'xy',
			backgroundColor: 'rgba(214,233,251,0.0)',
			options3d: {
                enabled: true,
               alpha: 8,
                beta: 8,
				viewDistance: 80,
				frame:{
					back:{
						color:'rgba(2,31,76,.1)',
						size:10
						},
					bottom:{
						color:'rgba(6,62,242,0.20)',
						size:10
						},
					side:{
						color:'rgba(2,31,76,.8)',
						size:2
						}
					}
			},
			
        },
        title: {
            text: null
        },
        credits:{enabled:false},
        subtitle: {
            text: '全市站点覆盖率 300米：52.418% 500米：71.66%'
        },
        xAxis: [{
			gridLineColor: 'rgba(102,102,101,0.1)',
            gridLineWidth: 1,
            categories: [ '2011', '2012', '2013', '2014', '2015','2016','2017']
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}%',
                style: {
                    color: '#666'
                }
            },
            title: {
                text: '覆盖率(%)',
                style: {
                    color: '#666'
                }
            },
			gridLineColor: 'rgba(102,102,101,0.1)',
            gridLineWidth: 1,
			
        }, { // Secondary yAxis
            title: {
                text: '面积(平方公里)',
                style: {
                    color: '#666'
                }
            },
            labels: {
                format: '{value} k㎡',
                style: {
                    color: '#666'
                }
            },
            opposite: true,
			gridLineColor: 'rgba(102,102,101,0.1)',
            gridLineWidth: 1,
        }],
        tooltip: {
            shared: true
        },
        legend: {
            align: 'left',
            verticalAlign: 'bottom',
			itemStyle : {
					  'fontSize' : '10px', color: '#666'
				  },
           
           
        },
		 plotOptions: {
			
            column: {
				depth:35,
            }
        },
        series: [
		{
            name: '站点覆盖率(300米)',
            color: 'rgba(2,244,207,0.30)',
            type: 'line',
            data: [17.0, 22.9, 37.5, 40.5, 46.2, 41.5, 58.2],
            tooltip: {
                valueSuffix: '%'
            }
        },
		{
            name: '站点覆盖率(500米)',
            color: 'rgba(213,243,7,0.50)',
            type: 'line',
            data: [22.0, 41.9, 67.5, 59.5, 61.2, 75.5, 85.2],
            tooltip: {
                valueSuffix: '%'
            }
        },
		{
            name: '站点覆盖面积(300)米',
            color: '#2A7200',
            type: 'area',
            yAxis: 1,
            data: [11.9, 41.5, 56.4, 49.2, 54.0, 76.0,  82.5],
            tooltip: {
                valueSuffix: ' k㎡'
            }

        },
		{
            name: '站点覆盖面积(500)米',
            color: '#FAB308',
            type: 'area',
            yAxis: 1,
            data: [23.9,59.5, 78.4, 79.2, 114.0, 105.0, 112.4],
            tooltip: {
                valueSuffix: ' k㎡'
            }

        },
		{
            name: '区域面积',
            color: '#1F4EB0',
            type: 'area',
            yAxis: 1,
            data: [53.9, 69.5, 96.4, 129.2, 134.0, 126.0,  130.4],
            tooltip: {
                valueSuffix: ' k㎡'
            }

        }
		 ]
    });
});
				