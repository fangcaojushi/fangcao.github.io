$(function() {
	var e = echarts.init(document.getElementById("higconreason")),
	a = {
		title: {
			text: ""
		},
		tooltip: {
			trigger: ""
		},
		legend: {
			  data:['上周','本周']
		},
		grid: {
			x: 40,
			x2: 40,
			y2: 24
		},
		calculable: !0,
		xAxis: [{
			type: "category",
			data: ["早晚高峰","道路施工","占道经营","乱停车"]
		}],
		yAxis: {},
		series: [{
            name:'本周',
            type: 'bar',
            barWidth:34,//设置柱子的宽度
            label: {
                normal: {
                    show: true,
                    position:"top"
                }
            },
            itemStyle: {
		      normal: {
		        color: '#a8c95f'
		      }
		    },
            data: [86, 70, 55, 82]
        },
        {
            name:'上周',
            type: 'bar',
            barWidth:34,//设置柱子的宽度
            label: {
            
                normal: {
                    show: true,
                    position:"top"
                }
            },
            itemStyle: {
		      normal: {
		        color: '#58b4ef'
		      }
		    },
            data: [75, 80, 60, 77]
        }]
	};
	e.setOption(a), $(window).resize(e.resize);
})