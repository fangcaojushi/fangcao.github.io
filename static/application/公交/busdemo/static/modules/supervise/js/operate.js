$(function () {
    $('#operate').highcharts({
        chart: {
            zoomType: 'xy',
            	BorderColor: '#346691',
			backgroundColor: 'rgba(8,23,47,0.0)',
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
                '15-11',
                '15-12',
                '16-1',
                '16-2',
                '16-3',
                '16-4',
                '16-5',
                '16-6',
                '16-7',
                '16-8',
                '16-9',
                '16-10'
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
                text: '日均客运量/万人',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }, { // Secondary yAxis
            title: {
                text: '日均客运收入/万元',
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
           itemStyle : {
					  'fontSize' : '12px', color: '#aabad5'
				  },
            backgroundColor:'rgba(8,23,47,0.3)'
        },

        series: [{
            name: '运量',
            type: 'column',
            yAxis: 1,
            data: [400, 573, 578, 493, 666, 530, 620, 518, 496, 580, 506, 653],
            tooltip: {
                valueSuffix: '万人'
            }
        }, {
            name: '收入',
            type: 'spline',
            
            data: [350, 523, 528, 443, 516, 480, 570, 468, 446, 530, 456, 603],
            dataLabels: {
                    enabled: true,
                     style: {
                      	color: '#fff',
                      	textShadow: '0 0 0px black',
                    }
                },
            tooltip: {
                valueSuffix: '万元'
            },
            zIndex:99
        }]
    });
});
