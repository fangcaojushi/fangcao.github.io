$(function () {
    $('#cheliuliang').highcharts({
        chart: {
            zoomType: 'xy',
            	BorderColor: '#346691',
			backgroundColor: 'rgba(8,23,47,0.3)',
            options3d: {
                enabled: true,
                alpha: 5,
                beta: 3,
				viewDistance: 50,
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
               
            }
        },
        colors: ['#039FFB', '#F7B516', '#FF3D0F','#F7B516', '#24CBE5', '#DDDF00', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
        title: {
            text: null 
        },
        credits:{enabled:false},
        subtitle: {
            text: null
        },
        xAxis: [{
        		gridLineColor: 'rgba(102,102,101,0.3)',
            categories: [
                '1月',
                '2月',
                '3月',
                '4月',
                '5月',
                '6月',
                '7月',
                '8月',
                '9月',
                '10月',
                '11月',
                '12月'
            ],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
        		gridLineColor: 'rgba(102,102,101,0.3)',
        		gridLineWidth: 1,
            labels: {
//              format: '万人',
                style: {
                    color: Highcharts.getOptions().colors[1],
                    border:0
                }
            },
            title: {
                text: '年度进出城车流量',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }, { // Secondary yAxis
            title: {
                text: '',
                style: {
                    color: '#666'
                }
            },
            gridLineColor: 'rgba(102,102,101,0.3)',
        		gridLineWidth: 1,
            labels: {
//              format: '万元',
                style: {
                    color: '#666'
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        legend: {
            align: 'center',
//	         x: 100,
            verticalAlign: 'top',
            y: -10,
            floating: true,
           itemStyle: {
					  'fontSize' : '12px', color: '#aabad5'
				  },
            backgroundColor:'rgba(8,23,47,0.3)'
        },

        series: [{
            name: '出城',
            type: 'spline',
            yAxis: 0,
            data: [105, 112, 100, 125, 132, 110, 126, 98, 106, 125, 128, 96],
            tooltip: {
                valueSuffix: '万辆'
            }
        }, {
            name: '进城',
            type: 'spline',
            
            data: [125, 102, 90, 122, 138, 96, 136, 108, 96, 135, 138, 100],
            dataLabels: {
                    enabled: false
                },
            tooltip: {
                valueSuffix: '万辆'
            },
            zIndex:99
        }]
    });
});
