$(function() {
	var hwf_city = echarts.init(document.getElementById("device-rate")),
	option = {
    color: ['#a6cb5f', '#ED5565','#5facdb', '#F7B516', '#24CBE5', '#DDDF00', '#64E572', '#FF9655', '#54b68d', '#6AF9C4'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
            data : ['卡口设备', '监控设备', '信号设备', '诱导设备', '电警设备', '事件采集器'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'设备数量',
            type:'bar',
            barWidth: '70%',
            data:[100, 152, 200, 334, 290, 330]
        }
    ]
};
	hwf_city.setOption(option), $(window).resize(hwf_city.resize);
})