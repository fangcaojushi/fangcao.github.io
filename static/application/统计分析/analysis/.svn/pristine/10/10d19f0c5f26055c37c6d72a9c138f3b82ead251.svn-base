$(function() {
	var hwf_city = echarts.init(document.getElementById("oper_qual")),
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
	        data:['服务质量']
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
	    	x:120,
	    	x2:30
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
	            data : ['苏交科集团有限公司','华通智能交通公司','鸿信系统集成公司','无锡天舜科技公司','正元信息科技公司'],
	        }
	    ],
	    series : [
	        {
	            name:'服务质量',
	            type:'bar',
	            barMaxWidth:28,	
	            data:[ 86, 88, 92, 94, 98]
	        }
	    ]
	};                   
	hwf_city.setOption(failopt), $(window).resize(hwf_city.resize);
})