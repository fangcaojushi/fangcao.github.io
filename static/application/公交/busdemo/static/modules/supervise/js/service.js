$(function () {

	$('#service').highcharts({
	            
	    chart: {
	        polar: true,
	        type: 'area',
			backgroundColor: 'rgba(214,233,251,0.0)',
			style:{color:'#aabad5'}
	    },
		colors: ['#00FF00','#23ac38', '#FF3D0F','#1f4eb0',  '#24CBE5'],
	    credits:{enabled:false},
	    title: {
	        text: null,
	        x: -80
	    },
	    
	    pane: {
	    	size: '80%',
			startAngle: 0,
            endAngle: 360
	    },
	    
	    xAxis: {
	        categories: ['首末班准点率', '车次准点率', '班次兑现率', '班次完成率', 
	                '发车间隔兑现率'],
	        tickmarkPlacement: 'on',
			gridLineColor: 'rgba(181,181,179,0.50)',
			gridLineWidth:1,
	        lineWidth: 0,
			labels: {
                style: {
                color: '#aabad5',
                }
			}
	    },
	        
	    yAxis: {
	        gridLineInterpolation: 'polygon',
			gridLineColor:'rgba(181,181,179,0.50)',
			gridLineWidth:1,
	        lineWidth: 0,
			floor: 0,
            ceiling: 100,
            tickPixelInterval:10,
			labels: {
                format: '{value} %',
				 /*style: {
                    color: 'rgba(35,143,0,0.98)'
                }*/
            }
	    },
	    
	    tooltip: {
	    	shared: true,
	        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}%</b><br/>'
	    },
	    
	    legend: {
	       enabled: false
	    },
	   
	    series: [{
	        name: '服务质量',
	        data: [88, 99, 92, 100, 40],
	        pointPlacement: 'on'
	    }]
	
	});
});
				