$(function () {
    $('#warn').highcharts({
		chart:{
			backgroundColor: 'rgba(214,233,251,0.0)',
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
        title: {
            text: null
        },
		colors: ['#039FFB', '#23ac38', '#FF3D0F','#F7B516', '#24CBE5', '#DDDF00', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
        xAxis: {
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
			]
        },
		 yAxis: {
            
			gridLineColor: 'rgba(102,102,101,0.3)',
            gridLineWidth: 1,
			title: {
                text: '故障异常数量'
            }
           
        },
        labels: {
            items: [{
                html: '车辆报警总数：156',
                style: {
                    left: '26px',
                    top: '0px',
                    color:'#00FF00'
                }
            }]
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    style: {
                        textShadow: '0 0 0px black',
                    }
                }
            }
        },
		legend: {
			
			itemStyle : {
				'fontSize' : '12px', color: '#666'
			},
			itemHoverStyle: {
				color: '#FF0000'
			},
			itemHiddenStyle: {
				color: '#666'
			}
			
		},
		credits: {
			enabled: false
		},
        series: [{
            type: 'column',
            name: '故障',
            data: [3, 2, 1, 3, 4, 10, 5, 7, 8, 13, 18, 11 ]
        }, {
            type: 'column',
            name: '异常',
            data: [2, 3, 5, 7, 6, 5, 8, 11, 3, 5, 9, 7]
//      },
//		 {
//          type: 'spline',
//          name: '平均值',
//          data: [2, 2, 3, 5, 6, 3, 8, 7, 6, 5, 10, 7],
//          zIndex:333,
//          marker: {
//              lineWidth: 2,
//              lineColor: Highcharts.getOptions().colors[3],
//              fillColor: 'white'
//          }
        }, {
            type: 'pie',
            name: '车辆报警数：',
            data: [{
                name: '故障',
                y: 85,
                
            }, {
                name: '异常',
                y: 30,
               
            }],
            center: [50, '15%'],
            size: '20%',
            showInLegend: false,
            dataLabels: {
                enabled: false
            }
        }]
    });
});
