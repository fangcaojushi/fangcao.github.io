$(function() {
	var hwf_city = echarts.init(document.getElementById("repar_time")),
	failopt = {
		    tooltip : {
		        trigger: 'axis'
		    },
		    legend: {
		        data:['维修时长']
		    },
		   color:['#1ab394'],
		    toolbox: {
		        show : true,
		        feature : {
		            mark : {show: true},
		            dataView : {show: true, readOnly: false},
		            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
		            restore : {show: true},
		            saveAsImage : {show: true}
		        }
		    },
		    calculable : true,
		    xAxis : [
		        {
		            type : 'category',
		            data : ['苏交科集团有限公司','华通智能交通公司','鸿信系统集成公司','无锡天舜科技公司','正元信息科技公司'],
		            axisLabel:{
		            	interval:0,
		            	rotate:15
		            }
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value'
		        }
		    ],
		    series : [
		       {
		            name:'维修时长',
		            type:'bar',
		            stack: '总量',
		            barWidth:28,
		            data:[0.6, 1.2, 1.5, 2.0, 2.2]
		        }
		    ]
		};                    
	hwf_city.setOption(failopt), $(window).resize(hwf_city.resize);
})