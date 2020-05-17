$(function() {
 // 基于准备好的dom，初始化echarts实例
        var highroadwf = echarts.init(document.getElementById('highroadwf')),

        // 指定图表的配置项和数据
       highroadwfopt = {
			    tooltip : {
			        trigger: 'axis',
			        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
			            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			        }
			    },
			    legend: {
			        data: ['闯红灯', '逆行','违反禁令','其它']
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
			       data: ['振石路','干城路','南湖路','健康路','龙山大街','翠山路','丹山路', '合心路', '东华路']
			    },
			    series: [
			        {
			            name: '闯红灯',
			            type: 'bar',
			            stack:'总量',
			            label: {
			                normal: {
			                    show: true,
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
			            name: '逆行',
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
			            name: '违反禁令',
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
					        color: '#64e572'
					      }
					    },
			            data: [6, 3, 3, 4, 5, 6, 7, 8, 9]
			        },
			        {
			            name: '其它',
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
					        color: '#24cbe5'
					      }
					    },
			            data: [6, 5, 5, 3, 5, 4, 7, 2, 9]
			        }
			    ],
    				animationEasing: 'elasticOut'
			};

        // 使用刚指定的配置项和数据显示图表。
        highroadwf.setOption(highroadwfopt), $(window).resize(highroadwf.resize);
 })