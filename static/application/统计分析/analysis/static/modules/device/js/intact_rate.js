$(function() {
	var hwf_city = echarts.init(document.getElementById("intact_rate")),
	
	option = {
	    title : {
	        text: '',
	        subtext: ''
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    color: ['#1ab394'],
	    borderColor:"#1ab394",
	    textStyle:{
	    	color:'#333'
	    },
	    legend: {
	    	show : false,
	        orient : 'vertical',
	        x : 'center',
	        y : 'top',
	        data:['设备完好率']
	    },
	    toolbox: {
	        show : true,
	        feature : {
	            mark : {show: true},
	            dataView : {show: true, readOnly: false},
	            restore : {show: true},
	            saveAsImage : {show: true}
	        }
	    },
	    polar : [
	       {
	           indicator : [
	               { text: '华通智能交通公司', max: 100},
	               { text: '鸿信系统集成公司', max: 100},
	               { text: '无锡天舜科技公司', max: 100},
	               { text: '元欣高英科技公司', max: 100},
	               { text: '正元信息科技公司', max: 100},
	               { text: '市政设施基础公司', max: 100}
	            ]
	        }
	    ],
	    calculable : true,
	    series : [
	        {
	            name: '设备完好率',
	            type: 'radar',
	            itemStyle: {
	                normal: {
	                    areaStyle: {
	                    	type: 'default'	                       	                        
	                    }
	                }
	            },
	            data : [
	                {
	                    value : [90, 80, 94, 92, 89, 85],
	                    name : '设备完好率'
	                }
	            ]
	        }
	    ]
	};                   
	hwf_city.setOption(option), $(window).resize(hwf_city.resize);
})