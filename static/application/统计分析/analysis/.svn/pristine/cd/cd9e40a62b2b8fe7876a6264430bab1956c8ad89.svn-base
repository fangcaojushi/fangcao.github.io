$(function() {
	var congestrend = echarts.init(document.getElementById("congestrend")),
	congestrendopt = {
	    title: {
	        text: ''
	    },
	    tooltip : {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'cross',
	            label: {
	                backgroundColor: '#6a7985'
	            }
	        }
	    },
	    legend: {
	        data:[]
	    },
	    toolbox: {
	        feature: {
	            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
	            restore : {show: true},
	            saveAsImage : {show: true}
	        }
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis : [
	        {
	            type : 'category',
//	            boundaryGap : false,      //数值轴两端的空白策略  
	            data : ['星期一','星期二','星期三','星期四','星期五','星期六','星期日']
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name:'',
	            type:'bar',
	            smooth:true,
	            barWidth:34,//设置柱子的宽度
//	            stack: '总量',
	            areaStyle: {normal: {}},
	             itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#fe9900','#fed102','#fed102','#fed102','#fe9900',
                           '#fed102','#fed102','#FAD860','#F3A43B','#60C0DD',
                           '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                        ];
                        return colorList[params.dataIndex]
                    },
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{b}\n{c}'
                    }
                }
            },
	            data:[7.8,5.8,5.6,4.6,7.4,5.9,5.3]
	        }
	       
	    ]
	};

	congestrend.setOption(congestrendopt), $(window).resize(congestrend.resize);
})