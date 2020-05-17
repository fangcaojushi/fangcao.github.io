$(function () {
	var ping_W=$(window).width();
	var legend_status=true;
	if(ping_W<=1440)
	{
		legend_status=false;
	}

	$('#zongtigaikuang').highcharts({
	            
	    chart: {
	        polar: true,
	        type: 'area',
			backgroundColor: 'rgba(8,23,47,0.3)',
			style:{color:'#aabad5'}
	    },
		//colors: ['rgba(28,184,255,0.9)','rgba(255,174,0,0.5)','rgba(3,251,3,0.6)', '#FF3D0F','#1f4eb0',  '#24CBE5'],
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
	        categories: ['交通畅通率', '车辆通行率', '警务执勤率', '设备运维率', 
	                '平均速率'],
	        tickmarkPlacement: 'on',
			gridLineColor: 'rgba(181,181,179,0.50)',
			gridLineWidth:1,
	        lineWidth: 0,
			labels: {
                style: {
                    color: '#aabad5'
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
                format: '{value}%',
//              step:1,
				style: {
                    color: '#666'
                }
            }
	    },
	    
	    tooltip: {
	    	shared: true,
	        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}%</b><br/>'
	    },
	    
	    legend: {
	       enabled: legend_status,
	       align: 'right',
		  verticalAlign: 'middle',
		  layout: 'vertical',
		  labelFormat:"{name}",
		  itemStyle : {
			   color: '#aabad5'
		  },
		  itemHoverStyle: {
			  color: '#FF0000'
		  },
		  itemHiddenStyle: {
			  color: '#666'
		  }
	    },
	   
	    series: [
	    {
	        name: '交通指数',
	        data: [88,89, 88, 82, 49],
//	        color:'rgba(28,184,255,0.9)',
 			color:'#00FF00',
	        pointPlacement: 'on',
	        zIndex:9
	    },
//	    {
//	        name: '同比运行指数',
//	        data: [75, 33, 93, 85, 94],
//	        pointPlacement: 'on'
//	    },
	    {
	        name: '环比指数',
	        data: [71, 85, 91, 71, 41],
//	        color:'rgba(213,243,7,0.6)',
			color:'#f7df16',
	        pointPlacement: 'on',
	        zIndex:99
	    }]
	
	});
});
				