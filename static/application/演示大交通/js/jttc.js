$(function () {
    $('#jttc').highcharts({
        chart: {
            type: 'column',
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
			gridLineWidth: 1,
            categories: [
                '鼋头渚',
                '万象城',
                '三国城',
                '八佰伴',
                '三凤桥',
                '南禅寺',
                '蠡园',
                '万达',
                '无锡站',
                '中山路',
                '百脑汇',
            ]
        },
        yAxis: {
            min: 0,
			gridLineColor: 'rgba(102,102,101,0.3)',
            gridLineWidth: 1,
            title: {
                text: '剩余停车位'
            }
        },
		
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b> 约{point.y}个</b></td></tr>',
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
				borderColor:'#ccc'
            }
        },
        series: [{
            name: '剩余停车位',
            colorByPoint: false,
            data: [50, 63, 68, 76, 90, 70, 48, 88, 76,52,48],
			dataLabels: { enabled: false, rotation: -90, color: '#FFFFFF', align: 'right', x:0, y: 5, style: { fontSize: '10px',fontWeight:'normal', fontFamily: 'Verdana, sans-serif', textShadow: '0 0 1px black' }}

        }]
    });
});				