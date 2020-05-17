$(function() {
	var htype = echarts.init(document.getElementById("htype")),
	htypeopt = {
	    title : {
	        text: '',
	    },
	    color: ['#a6cb5f', '#ED5565','#5facdb', '#F7B516', '#24CBE5', '#DDDF00', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
		    orient: 'vertical',
	        left: 'left',
	        data: ['轻微事故','一般事故','重大事故','特大事故'],
//	        formatter:'{name}'
	    },
	    series : [
	        {
	            name: '事故原因',
	            type: 'pie',
	            radius: ['40%', '80%'],
	            center: ['50%', '50%'],
//	            roseType : 'radius',
	            data:[
	                {value:135, name:'轻微事故'},
	                {value:110, name:'一般事故'},
	                {value:39, name:'重大事故'},
	                {value:26, name:'特大事故'},
	            ],
	            label: {
	                normal: {
	                    show: true,
	                    position:"outside",
	                }
	            },
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            }
	        }
	    ]
	};

	htype.setOption(htypeopt), $(window).resize(htype.resize);
})