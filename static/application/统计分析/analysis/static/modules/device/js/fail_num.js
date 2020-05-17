$(function() {
	var hwf_city = echarts.init(document.getElementById("fail_num")),
	option = {
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['设备故障','设备总数']
    },
   color:['#1ab394','#ed5565'],
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: [ 'bar','line', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            
            data : ['数字城管系统升级建设','蠡湖大道快速化改造工程','凤翔路快速化改造工程','鸿山公交场站工程室外配套工程',
            		'规划东西支路道路工程','大通路新建工程施工','“六合一”平台设备更新'],
            
            axisLabel:{
		            	interval:0,
		            	rotate:15
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
            name:'设备总数',
            type:'bar',
            stack: '总量',
            data:[260, 192, 191, 234, 290, 330, 310]
        },
        {
            name:'设备故障',
            type:'bar',
            stack: '总量',
            barMaxWidth:34,
            data:[20, 32, 30, 34, 50, 30, 20]
        }
       
    ]
};                                   
	hwf_city.setOption(option), $(window).resize(hwf_city.resize);
})