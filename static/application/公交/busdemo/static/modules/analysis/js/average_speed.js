$(function () {
    $('#average_speed').highcharts({
        chart: {
            type: 'scatter',
            zoomType: 'xy',
            BorderColor: '#346691',
			backgroundColor: 'rgba(214,233,251,0.0)',
        },
        colors: ['#039FFB', '#23ac38', '#FF3D0F','#F7B516', '#24CBE5', '#DDDF00', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
        title: {
            text: null,
        },
        subtitle: {
            text: null,
        },
        credits:{enabled:false},
        xAxis: {     	
            title: {
                text: '日期（日）'
            },
            gridLineColor: 'rgba(102,102,101,0.3)',
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
                '14-2']    
        },
        yAxis: {
             min: 0,
			gridLineColor: 'rgba(102,102,101,0.3)',
            gridLineWidth: 1,
            title: {
                text: '平均速度  km/h'
            },
            gridLineDashStyle:'Dash',
        },
        legend:{enabled:false},
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}日：</span><table>',
		            pointFormat: '<tr>' +
		                '<td style="padding:0"><b> {point.y}km/h</b></td></tr>',
		            footerFormat: '</table>',
		            shared: true,
		            useHTML: true
                }
            }
        },
        series: [{                                                                           
            name: '平均速度', 			                                                                                                                
            data: [[1, 33], [2, 32], [3, 42], [4, 28], [5, 32],[6, 30], [7, 32], [8, 22], [9, 19], [10, 26],[11, 23], [12, 19], [13, 32], [14, 40], [15, 32],[16, 36], [17, 23], [18, 28], [19, 25], [20, 26],[21, 23], [22, 32], [23, 38], [24, 25], [25, 32],[26, 28], [27, 32], [28, 36],[29, 32]
                ]   
                                                                                             
        }]
    });
});
