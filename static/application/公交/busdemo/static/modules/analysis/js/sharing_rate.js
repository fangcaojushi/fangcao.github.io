$(function () {
    $('#sharing_rate').highcharts({
        chart: {
            type: 'column',
            zoomType: 'xy',
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
                text: '单位（年）'
            },
            gridLineColor:'rgba(181,181,179,0.50)',
            gridLineWidth:1,
           	lineColor:'rgba(181,181,179,0.80)',
	        lineWidth: 1,
			gridLineDashStyle:'Dash',
            categories: [ 
            	    '2012',
                '2013',
                '2014',
                '2015',
                '2016',
                '2017']    
        },
        yAxis: {
             min: 0,
			lineColor: 'rgba(181,181,179,0.80)',
            gridLineWidth: 1,
            lineWidth: 1,
            gridLineInterpolation: 'polygon',
			gridLineColor:'rgba(181,181,179,0.50)',
            title: {
                text: '分担率 %'
            },
            gridLineDashStyle:'Dash',
        },
         tooltip: {
            headerFormat: '<span style="font-size:12px">{point.key}年</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding-left:5px"><b>  {point.y}%</b></td></tr>',
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
            name: '公交分担率', 			                                                                                                                
            data: [
            			[53],
            			[59],
            			[62],
            			[65],
            			[70],
            			[82]
                ],
            dataLabels: { 
            	enabled: true, 
            	color: '#FFFFFF', 
            	align: 'center', 
            	x:0, 
            	y: 5, 
            	format: '{point.y:.1f}%',
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
