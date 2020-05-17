$(function() {
	var hreason = echarts.init(document.getElementById("hreason")),
	hreasonopt = {
	    title : {
	        text: '',
	    },
	    color: ['#a6cb5f', '#ED5565','#5facdb', '#F7B516', '#24CBE5', '#DDDF00', '#64E572', '#FF9655', '#54b68d', '#6AF9C4'],
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
		    orient: 'vertical',
	        left: 'left',
	        data: ['酒后驾驶','逆向行驶','无证驾驶','未保持安全距离','违法倒车','未按规定让行','超速','违法会车','违法上道路行驶']
	    },
	    series : [
	        {
	            name: '事故原因',
	            type: 'pie',
	            radius: ['40%', '80%'],
	            center: ['50%', '50%'],
//	            roseType : 'radius',
	            data:[
	                {value:135, name:'酒后驾驶'},
	                {value:110, name:'逆向行驶'},
	                {value:89, name:'无证驾驶'},
	                {value:76, name:'未保持安全距离'},
	                {value:31, name:'违法倒车'},
	                {value:26, name:'未按规定让行'},
	                {value:15, name:'超速'},
	                {value:12, name:'违法会车'},
	                {value:8, name:'违法上道路行驶'}
	                
	            ],
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

	hreason.setOption(hreasonopt), $(window).resize(hreason.resize);
})