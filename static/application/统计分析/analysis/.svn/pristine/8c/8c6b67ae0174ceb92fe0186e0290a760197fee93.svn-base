$(function() {
//	function data(){
//	    var d = [];
//	    for (var i = 0; i < 24; i++) {
//	        d.push({
//		        value: Math.random() * 10 + 10 - Math.abs(i - 12),
//		        name: i + ''
//		    });
//	    }
//	    return d;
//	}
	function labelData(){
	    var labelData = [];
		for (var i = 0; i < 24; ++i) {		    
		    labelData.push({
		        value: 1,
		        name: i + ''
		    });
		}
		return labelData;
	}
	var congestime = echarts.init(document.getElementById("congestime")),
	option = {
	    title: {
	        text: '',
	        left: '50%',
	        textAlign: 'center',
	        top: '20%'
	    },
	    color: ['#58b4ef'],
	    series: [{
	        type: 'pie',
	        
	        data:[50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50],
	        roseType: 'area',
	        color:[ '#008901','#008901','#008901','#008901','#008901','#008901','#008901','#008901','#008901','#008901',
			        '#008901','#008901','#008901','#008901','#008901','#fca100','#fb1f00','#008901','#008901','#008901',
			        '#008901','#008901','#008901','#008901','#008901','#008901','#008901','#008901','#008901','#008901',
			        '#008901','#008901','#008901','#008901','#008901','#fca100','#fb1f00','#fca100','#008901','#008901',
			        '#008901','#008901','#008901','#008901','#008901','#008901','#008901','#008901',],
	        itemStyle: {
	            normal: {
//	                color: 'white',
					borderWidth: 1,
	                borderColor: 'rgba(204, 204, 204, 0.08)'
	            }
	        },
	        labelLine: {
	            normal: {
	                show: false
	            }
	        },
	        label: {
	            normal: {
	                show: false
	            }
	        }
	    }, {
	        type: 'pie',
	        data: labelData(),	        
	        radius: ['75%', '100%'],
	        zlevel: -2,
	        itemStyle: {
	            normal: {
	                color: '#58b4ef',
	                borderColor: 'white'
	            }
	        },
	        label: {
	            normal: {
	                position: 'inside'
	            }
	        }
	    }]
	};

		congestime.setOption(option), $(window).resize(congestime.resize);

})