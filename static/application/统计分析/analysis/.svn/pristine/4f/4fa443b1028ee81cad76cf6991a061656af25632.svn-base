$(function() {
 // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('hmovie')),

        // 指定图表的配置项和数据
        option = {
            title: {
                text: ''
            },
            tooltip: {},
            legend: {
                data:['故障率','报废率','平均维修时间']
            },
            grid: {
				x: 40,
				x2: 40,
				y2: 24
			},
		calculable: !0,
            xAxis: {
                data: ["海康威视","浙江大华","英飞拓","大立科技","爱谱华顿感","亚太科技","安罗格郎"]
            },
            yAxis: {},
          series: [
            {
                name: '故障率',
                type: 'bar',
                barMaxWidth:'35px',
                label: {
	                normal: {
	                    show: true,
	                    position:"top",
	                    formatter: '{c}%'
	                }
	            },
                itemStyle: {
			      normal: {
			        color: '#F8AC59'
			      }
			    },
                data: [9, 12, 13, 19, 12, 10, 15]
            },
            {
                name: '报废率',
                type: 'bar',
                barMaxWidth:'35px',
                label: {
	                normal: {
	                    show: true,
	                    position:"top",
	                    formatter: '{c}%'
	                }
	            },
                itemStyle: {
			      normal: {
			        color: '#23C6C8'
			      }
			    },
                data: [2, 9, 9, 6, 6, 2, 3]
            },
          {
                name: '平均维修时间',
                type: 'bar',
                barMaxWidth:'35px',
                label: {
	                normal: {
	                    show: true,
	                    position:"top",
	                    formatter: '{c}h'
	                }
	            },
                itemStyle: {
			      normal: {
			        color: '#a8c95f'
			      }
			    },
                data: [9.2, 13.1, 8.9, 11.5, 9.3, 8.8, 8.5]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option), $(window).resize(myChart.resize);
 })