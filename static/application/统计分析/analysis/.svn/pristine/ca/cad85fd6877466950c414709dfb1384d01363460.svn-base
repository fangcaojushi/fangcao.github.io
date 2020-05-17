$(function() {
	var hwf_city = echarts.init(document.getElementById("device-mix")),
	option = {
		color: ['#a6cb5f', '#ED5565','#5facdb', '#F7B516', '#24CBE5', '#DDDF00', '#64E572', '#FF9655', '#54b68d', '#6AF9C4'],
    tooltip: {
        trigger: 'axis'
    },
    toolbox: {
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    grid: {
        containLabel: true
    },
    legend: {
        data: ['报废率','故障率','设备数']
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            alignWithLabel: true
        },
        data: ['卡口设备','信号设备','诱导设备','电警设备','监控设备','事件采集器']
    }],
    yAxis: [{
        type: 'value',
        name: '比率',
        min: 0,
        max: 20,
        position: 'right',
        axisLabel: {
            formatter: '{value} %'
        }
    }, {
        type: 'value',
        name: '设备数',
        min: 0,
        max: 5000,
        position: 'left'
    }],
    series: [{
        name: '故障率',
        type: 'line',
        stack: '故障率',
            label: {
                normal: {
                    show: false,
                    position: 'top',
                }
            },
        lineStyle: {
                normal: {
                    width: 3,
//                  color:'rgba(74,73,138,1)',
                    shadowColor: 'rgba(0,0,0,0.4)',
                    shadowBlur: 10,
                    shadowOffsetY: 10
                }
            },
        data: [7,13,11,9,10,11]
    }, {
        name: '报废率',
        type: 'line',
        stack: '报废率',
            label: {
                normal: {
                    show: false,
                    position: 'top',
                }
            },
        lineStyle: {
                normal: {
                    width: 3,
//                  color:'rgba(120,123,208,1)',
                    shadowColor: 'rgba(0,0,0,0.4)',
                    shadowBlur: 10,
                    shadowOffsetY: 10
                }
            },
        data: [5,7,9,6,8,7]
    },{
        name: '设备数',
        type: 'bar',
        barWidth: '60%',
        yAxisIndex: 1,
        stack: '设备数',
            label: {
                normal: {
                    show: false,
                    position: 'top'
                }
            },
        data: [2009,2360,3250,4390,3507,4576]
    }]
};
	hwf_city.setOption(option), $(window).resize(hwf_city.resize);
})