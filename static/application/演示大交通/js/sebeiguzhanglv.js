$(function () {
    $('#sebeiguzhanglv').highcharts({
        chart: {
            type: 'column',
			BorderColor: '#346691',
			backgroundColor: 'rgba(8,23,47,0.3)',
            options3d: {
                enabled: true,
                alpha: 5,
                beta: 3,
				viewDistance: 50,
//				frame:{
//					back:{
//						color:'rgba(2,31,76,.1)',
//						size:10
//						},
//					bottom:{
//						color:'rgba(6,62,242,0.20)',
//						size:10
//						},
//					side:{
//						color:'rgba(2,31,76,.8)',
//						size:2
//						}
//					}
               
            }
        },
		colors: ['#039FFB', '#23ac38', '#FF3D0F','#F7B516', '#24CBE5', '#DDDF00', '#64E572', '#FF9655',  '#6AF9C4'],
        title: {
            text: null
        },
        credits:{enabled:false},
        subtitle: {
            text: null
        },
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
                text: '设备故障率/%'
            },
            labels:{
            		format: '{value}%'
            },
            plotLines: [{   
                    color: 'red',
                    dashStyle: 'Dash', //Dash,Dot,Solid,默认Solid
                    width: 1.5,
                    value: 15,  //y轴显示位置
                }]
        },
		
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b> 约{point.y}%</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
		legend:{
			enabled:true,
			align: 'right',
            verticalAlign: 'top',
            floating: true,
            itemStyle : {
				  'fontSize' : '12px', color: '#aabad5'
			  },
			  itemHoverStyle: {
				  color: '#FF0000'
			  },
			  itemHiddenStyle: {
				  color: '#666'
			  }
		},
        plotOptions: {
			series: {
                colorByPoint: false
            },
            column: {
                pointPadding: 0.1,
                borderWidth: 0,
				depth:35,
				borderColor:'#ccc'
            }
        },
        series: [{
            name: '故障率',
            data: [5, 8, 13, 12, 11, 15, 17, 13, 9, 6, 11, 8],
			},
			{
            name: '环比故障率',
            data: [4, 6, 11, 11, 10, 13, 13, 12, 10, 10, 10, 7],
			}

        ]
    });
});				