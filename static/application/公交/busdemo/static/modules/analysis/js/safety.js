$(function () {
    $('#safety').highcharts({
		chart:{
			backgroundColor: 'rgba(214,233,251,0.0)',
			 options3d: {
                enabled: true,
                alpha: 1,
                beta: 1,
				viewDistance: 100,
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
		colors: ['#039FFB', '#F7B516', '#23AC38','#F7B516', '#24CBE5', '#DDDF00', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
        xAxis: {
			gridLineColor: 'rgba(102,102,101,0.3)',
			gridLineWidth:0,
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
            
			gridLineColor: 'rgba(102,102,101,0.1)',
            gridLineWidth: 1,
			title: {
                text: '公交违规数量'
            }
           
        },
        labels: {
            items: [{
                html: '违规总数：156',
                style: {
                    left: '40px',
                    top: '10px',
                    color:'#00FF00'
                }
            }]
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                maxPointWidth:35,
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    style: {
                        textShadow: '0 0 1px black',
//						fontSize:'8px',
                    }
                }
            }
        },
		legend: {
			align: 'right', //水平方向位置
            verticalAlign: 'top', //垂直方向位置
            x: 0, //距离x轴的距离
            y: -16, //距离Y轴的距离
            floating: true,
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
        series: [
        {
            type: 'column',
            name: '超速',
            data: [13, 22, 31, 33, 14, 20, 15, 17,35, 13, 18, 11 ]
        }, 
        {
            type: 'column',
            name: '飞站',
            data: [13, 12, 11, 29, 14, 10, 15, 17, 28, 13, 18, 11 ]
        }, 
        {
            type: 'column',
            name: '偏移',
            data: [12, 13, 15, 37, 16, 15, 18, 11, 53, 15, 19, 17]
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
            name: '违规总数：',
            data: [{
                name: '超速',
                y: 85,
                
            }, 
            {
                name: '飞站',
                y: 40,
               
            }, 
            {
                name: '偏移',
                y: 28,
               
            }],
            center: [70, '20%'],
            size: '25%',
            showInLegend: false,
            dataLabels: {
                enabled: false
            }
        }]
    });
});
