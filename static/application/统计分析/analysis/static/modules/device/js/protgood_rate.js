$(function() {
	var hwf_city = echarts.init(document.getElementById("protgood_rate")),
	
	option = {
    angleAxis: {
        type: 'category',
        data : ['数字城管系统升级建设','蠡湖大道快速化改造工程','凤翔路快速化改造工程','鸿山公交场站工程室外配套工程',
            		'规划东西支路道路工程','大通路新建工程施工','“六合一”平台设备更新'],
        z: 10
    },
    tooltip : {
		        trigger: 'item',
		        formatter: "{b} <br/>设备完好率 : {c}%"
	},
	color:['#1ab394'],
    radiusAxis: {
    },
    polar: {
    },
    series: [{
        type: 'bar',
        data: [98, 95, 93, 92, 88, 84, 81],
        coordinateSystem: 'polar',
        barMaxWidth:28,
        name: '',
        stack: ''
    }],
    legend: {
        show: false,
    }
};                   
	hwf_city.setOption(option), $(window).resize(hwf_city.resize);
})