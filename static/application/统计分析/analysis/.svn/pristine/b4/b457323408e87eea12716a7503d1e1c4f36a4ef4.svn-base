$(function() {
	var hwf_city = echarts.init(document.getElementById("serv_qual")),
	failopt = {
		    tooltip : {
		        trigger: 'axis'
		    },
		    legend: {
		        data:['服务质量排名']
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
		            
		            data : ['华通智能交通公司','鸿信系统集成公司','无锡天舜科技公司','元欣高英科技公司','正元信息科技公司','市政设施基础公司','江苏仪征苏中公司'],
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
		            name:'服务质量排名',
		            type:'bar',
		            stack: '总量',
		            barMaxWidth:28,
		            data:[98, 95, 92, 88, 86, 84, 82]
		        }
		    ]
		};                    
	hwf_city.setOption(failopt), $(window).resize(hwf_city.resize);
})