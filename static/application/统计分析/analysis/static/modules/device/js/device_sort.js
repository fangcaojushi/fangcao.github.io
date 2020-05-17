$(function() {
	var hwf_city = echarts.init(document.getElementById("device-sort")),
	option = {
	color: ['#a6cb5f', '#ED5565','#5facdb', '#F7B516', '#24CBE5', '#DDDF00', '#64E572', '#FF9655', '#54b68d', '#6AF9C4'],
    title : {
//      text: '设备分类',
//      subtext: '共6种设备',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
//  legend: {
//      orient: 'vertical',
//      left: 'left',
//      data: ['信号设备','卡口设备','诱导设备','监控设备','电警设备','事件采集器']
//  },
    series : [
        {
            name: '设备分类',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'信号设备'},
                {value:310, name:'卡口设备'},
                {value:234, name:'诱导设备'},
                {value:135, name:'监控设备'},
                {value:548, name:'电警设备'},
                {value:1548, name:'事件采集器'}
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
hwf_city.setOption(option), $(window).resize(hwf_city.resize);
})