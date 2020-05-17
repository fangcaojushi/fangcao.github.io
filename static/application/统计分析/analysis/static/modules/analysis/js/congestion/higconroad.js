$(function() {
 // 基于准备好的dom，初始化echarts实例
        var higconroad = echarts.init(document.getElementById('higconroad')),

        // 指定图表的配置项和数据
       option = {
			    tooltip : {
			        trigger: 'axis',
			        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
			            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			        }
			    },
			    legend: {
			        data: []
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
			       data: ["凤翔路","广瑞路","中山路","兴源北路","人民东路","峭岐枢纽","通江大道","京沪高速","青祁路","东虹路"]
			    },
			    series: [
			        {
			            name: '',
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
			            data: [1.2,1.8,2.3,2.6,3.2,4.3,5.8,6.6,7.6,8.9]
			        }],
    				animationEasing: 'elasticOut'
			};

        // 使用刚指定的配置项和数据显示图表。
        higconroad.setOption(option), $(window).resize(higconroad.resize);
 })