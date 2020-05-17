$(function() {
	var hreason = echarts.init(document.getElementById("hwf_reason")),
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
	        data: ['闯红灯','逆向行驶','超速','违反禁令标志','不按导向线行驶','未按规定让行','压线','其它']
	    },
	    series : [
	        {
	            name: '违法原因',
	            type: 'pie',
	            radius: ['40%', '80%'],
	            center: ['50%', '50%'],
//	            roseType : 'radius',
	            data:[
	            	 	{value:135, name:'闯红灯'},
	                {value:110, name:'逆向行驶'},
	                {value:89, name:'超速'},
	                {value:76, name:'违反禁令标志'},
	                {value:31, name:'不按导向线行驶'},
	                {value:26, name:'未按规定让行'},
	                {value:15, name:'压线'},
	                {value:12, name:'其它'},
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