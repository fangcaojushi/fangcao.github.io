$(function() {
	var hwf_city = echarts.init(document.getElementById("protfail_rate")),
	failopt = {
	    title : {
	        text: '',
	        subtext: ''
	    },
	   color:['#ed5565'],
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
	    	x:140,
	    	x2:10
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
	            data : ['数字城管系统升级建设','蠡湖大道快速化改造工程','凤翔路快速化改造工程','鸿山公交场站工程室外配套工程',
            		'规划东西支路道路工程','大通路新建工程施工','“六合一”平台设备更新'],
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