$(function() {
	var hwf_city = echarts.init(document.getElementById("fail_rate")),
	failopt = {
	    title : {
	        text: '',
	        subtext: ''
	    },
	   color:['#58b4ef'],
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        data:['故障率排名']
	    },
	    toolbox: {
	        show : true,
	        feature : {
	            mark : {show: true},
	            dataView : {show: true, readOnly: false},
	            magicType: {show: true, type: ['line', 'bar']},
	            restore : {show: true},
	            saveAsImage : {show: true}
	        }
	    },
	    calculable : true,
	    grid:{
	    	x:120
//	    	x2:30
	    },
	    xAxis : [
	        {
	            type : 'value',
	            boundaryGap : [0, 0.01]
	        }
	    ],
	    yAxis : [
	        {
	            type : 'category',
	            data : ['华通智能交通公司','鸿信系统集成公司','无锡天舜科技公司','元欣高英科技公司','正元信息科技公司','市政设施基础公司','江苏仪征苏中公司'],
	        }
	    ],
	    series : [
	        {
	            name:'故障率排名',
	            type:'bar',
	            barMaxHeight:28,
	
	            data:[4, 6, 10, 12, 16, 18,19]
	        }
	    ]
	};                   
	hwf_city.setOption(failopt), $(window).resize(hwf_city.resize);
})