$(function () {
    $('#car_number').highcharts({
        chart: {
            type: 'column',
			BorderColor: '#346691',
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
		colors: ['#039FFB', '#23ac38', '#FF3D0F','#F7B516', '#24CBE5', '#DDDF00', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
        title: {
            text: null
        },
        credits:{enabled:false},
        subtitle: {
            text: null
        },
        xAxis: {
			gridLineColor: 'rgba(102,102,101,0.2)',
			gridLineDashStyle:'Dash',
            categories: [
                '02-01',
                '02-02',
                '02-03',
                '02-04',
                '02-05',
                '02-06',
                '02-07',
                '02-08',
                '02-09',
                '02-10',
                '02-11',
                '02-12',
                '02-13',
                '02-14',
                '02-15',
                '02-16',
                '02-17',
                '02-18',
                '02-19',
                '02-20',
                '02-21',
                '02-22',
                '02-23',
                '02-24',
                '02-25',
                '02-26',
                '02-27',
                '02-28',
                '02-29',
                '02-30'
            ]
        },
        yAxis: {
            min: 0,
			gridLineColor: 'rgba(102,102,101,0.2)',
            gridLineWidth: 1,
            title: {
                text: '日均发车班次/班'
            },
            gridLineDashStyle:'Dash',
        },
		
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b> {point.y}班次</b></td></tr>',
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
            name: '发车量：',
            data: [400, 573, 578, 493, 666, 530, 620, 518, 496, 580, 506, 653,620, 518, 496, 493, 666, 530, 620, 518, 496, 580,573, 578, 493, 666, 530, 620, 518,613],
			dataLabels: { enabled: true, rotation: -90, color: '#FFFFFF', align: 'right', x:0, y: 5, style: { //fontSize: '10px',
			fontWeight:'normal', fontFamily: 'Verdana, sans-serif', textShadow: '0 0 1px black' }}

        }]
    });
});				