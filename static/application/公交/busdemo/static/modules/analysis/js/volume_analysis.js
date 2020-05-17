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
			gridLineColor: 'rgba(102,102,101,0.2)',
			gridLineDashStyle:'Dash',
            categories: [
                '15-3',
                '14-3',
                '13-3',
                '12-3',
                '11-3',
                '10-3',
                '9-3',
                '8-3',
                '7-3',
                '6-3',
                '5-3',
                '4-3',
                '3-3',
                '2-3',
                '1-3',
                '28-2',
                '27-2',
                '26-2',
                '25-2',
                '24-2',
                '23-2',
                '22-2',
                '21-2',
                '20-2',
                '19-2',
                '18-2',
                '17-2',
                '16-2',
                '15-2',
                '14-2'
            ]
        },
        yAxis: {
            min: 0,
			gridLineColor: 'rgba(102,102,101,0.2)',
            gridLineWidth: 1,
            title: {
                text: '日均客运量/万人'
            },
            gridLineDashStyle:'Dash',
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
            data: [400, 573, 578, 493, 666, 530, 620, 518, 496, 580, 506, 653,620, 518, 496, 493, 666, 530, 620, 518, 496, 580,573, 578, 493, 666, 530, 620, 518],
			dataLabels: { enabled: true, rotation: -90, color: '#FFFFFF', align: 'right', x:0, y: 5, style: { //fontSize: '10px',
			fontWeight:'normal', fontFamily: 'Verdana, sans-serif', textShadow: '0 0 1px black' }}

        }]
    });
});				