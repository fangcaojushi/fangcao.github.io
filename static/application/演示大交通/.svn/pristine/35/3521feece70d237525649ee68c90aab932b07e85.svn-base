$(function () {
    $('#jtzs').highcharts({
        chart: {
            zoomType: 'xy',
            	BorderColor: '#346691',
			backgroundColor: 'rgba(8,23,47,0.3)',
            options3d: {
                enabled: false,
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
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
                '11',
                '12',
                '13',
                '14',
                '15',
                '16',
                '17',
                '18',
                '19',
                '20',
                '21',
                '22',
                '23',
                '24',
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
                text: '交通指数',
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
            name: '平均',
            type: 'spline',
            yAxis: 0,
            data: [0.6, 1.2, 1.5, 2.5, 1.8, 3.6, 4.6, 5.2, 2, 2.4, 3.2, 1.5, 1.8, 2.5, 1.8, 3.6,4.6, 5.2, 2,2.2,3.2,3.4,1.4,0.6],
            tooltip: {
                valueSuffix: ''
            }
        }, {
            name: '实时',
            type: 'spline',
            
            data: [0.7, 0.9, 1.1, 2.2, 2.0, 3.9, 4.2, 5.6, 2.5, 1.9, 3.9, 2.5, 0.8, 2.9, 1.2, 4.1,4.6, 4.9, 3.8,2.6,3.1,3.6,1.1,1.6],
            dataLabels: {
                    enabled: false
                },
            tooltip: {
                valueSuffix: ''
            },
            zIndex:99
        }]
    });
});
