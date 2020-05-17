$(function() {
 // 基于准备好的dom，初始化echarts实例
        var highroad = echarts.init(document.getElementById('highroad')),

        // 指定图表的配置项和数据
       option = {
			    tooltip : {
			        trigger: 'axis',
			        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
			            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			        }
			    },
			    legend: {
			        data: ['一般事故', '伤人事故','伤亡事故']
			    },
			    grid: {
			        left: '3%',
			        right: '4%',
			        bottom: '3%',
			        containLabel: true
			    },
			    xAxis:  {
			    		type: 'value'
			    },
			    yAxis: {
			       type: 'category',
			       data: ['振石路','东盛路','凌霞路','新畅南路','湖西路','环城南路','兴越路', '城南路', '双桥路']
			    },
			    series: [
			        {
			            name: '一般事故',
			            type: 'bar',
			            stack: '总量',
			            barGap:'50%',
			            label: {
			                normal: {
			                    show: false,
			                }
			            },
			            itemStyle: {
					      normal: {
					        color: '#a8c95f'
					      }
					    },
			            data: [270, 280, 290, 301, 302, 310, 320, 360, 390]
			        },
			        {
			            name: '伤人事故',
			            type: 'bar',
			            stack: '总量',
			            barGap:'50%',
			            label: {
			                normal: {
			                    show: false,
			                }
			            },
			            itemStyle: {
					      normal: {
					        color: '#58b4ef'
					      }
					    },
			            data: [27, 28, 29, 28,28, 37, 39, 33, 39]
			        },
			        {
			            name: '伤亡事故',
			            type: 'bar',
			            stack: '总量',
			            barGap:'50%',
			            label: {
			                normal: {
			                    show: false,
			                }
			            },
			            itemStyle: {
					      normal: {
					        color: '#6ad0e1'
					      }
					    },
			            data: [6, 3, 3, 4, 5, 6, 7, 8, 9]
			        }
			    ],
    				animationEasing: 'elasticOut'
			};

        // 使用刚指定的配置项和数据显示图表。
        highroad.setOption(option), $(window).resize(highroad.resize);
 })