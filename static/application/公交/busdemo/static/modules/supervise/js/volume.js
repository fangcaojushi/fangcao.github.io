$(function () {
    $('#volume').highcharts({
        chart: {
            type: 'column',
			BorderColor: '#346691',
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
		colors: ['#039FFB', '#23ac38', '#FF3D0F','#F7B516', '#24CBE5', '#DDDF00', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
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
            min: 0,
			gridLineColor: 'rgba(102,102,101,0.3)',
            gridLineWidth: 1,
            title: {
                text: '日均客运量/万人'
            }
        },
		
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b> 约{point.y}万人</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
		legend:{enabled:false},
        plotOptions: {
			series: {
                colorByPoint: false
            },
            column: {
                pointPadding: 0.1,
                borderWidth: 0,
				depth:35,
				borderColor:'#ccc',
				maxPointWidth:35 
            }
        },
        series: [{
            name: '运量',
            data: [400, 573, 578, 493, 666, 530, 620, 518, 496, 580, 506, 653],
			dataLabels: { enabled: true, rotation: -90, color: '#FFFFFF', align: 'right', x:0, y: 5, style: { fontSize: '10px',fontWeight:'normal', fontFamily: 'Verdana, sans-serif', textShadow: '0 0 0px black' }}

        }]
    });
});				