$(function () {
    $('#car_interval').highcharts({
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
        credits: {
		  enabled: false
	 	 },
        xAxis: {     	
            title: {
                text: '日期（日）'
            },
            gridLineColor: 'rgba(102,102,101,0.3)',
			gridLineDashStyle:'Dash',
//			lineColor: 'rgba(102,102,101,0.3)',
//			lineWidth:1,
//			minorTickColor:'rgba(102,102,101,0.3)',
//			minorGridLineWidth:4,
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
			gridLineColor: 'rgba(102,102,101,0.3)',
            gridLineWidth: 1,
            
            title: {
                text: '日均发车间隔/分钟'
            },
            gridLineDashStyle:'Dash',
            plotLines: [{   
                    color: '#666',
                    dashStyle: 'Dash', //Dash,Dot,Solid,默认Solid
                    width: 1.5,
                    value: 18,  //y轴显示位置
                    label:{
                    	    color:'#7AC42B',
				        text:'发车间隔平均值:19分钟',     //标签的内容
				        align:'right',                //标签的水平位置，水平居左,默认是水平居中center
				        x:10,                         //标签相对于被定位的位置水平偏移的像素，重新定位，水平居左10px
				        
				        style: {
					        	cursor:'default',
							color:'#7AC42B',
							fontSize:'16px'
						}
				    }
                }]
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
		                '<td style="padding:0"><b> {point.y}分钟</b></td></tr>',
		            footerFormat: '</table>',
		            shared: true,
		            useHTML: true
                }
            }
        },
        series: [{                                                                           
            name: '发车间隔', 			                                                                                                                
            data: [
            			[15],
            			[19],
            			[16],
            			[15],
            			[12],
            			[15],
            			[23],
            			[19],
            			[13],
            			[15],
            			[17],
            			[11],
            			[21],
            			[12],
            			[13],
            			[14],
            			[15],
            			[16],
            			[19],
            			[21],
            			[16],
            			[15],
            			[10],
            			[17],
            			[19],
            			[10],
            			[23],
            			[21],
            			[14],
            			[15]
                ],
           dataLabels: { 
            	enabled: false, 
            	color: '#666', 
            	align: 'center', 
            	x:0, 
            	y:-1, 
            	format: '{point.y}分',
            	style: { 
            		fontSize: '12px',
            		fontWeight:'normal', 
            		fontFamily: 'Verdana, sans-serif', 
            		textShadow: '0 0 1px black'
            	}
            	}
                                                                                             
        }]
    });
});
