$(function() {
var hwf_city = echarts.init(document.getElementById("device_num"));

var dataStyle = {
    normal: {
        label: {show:false},
        labelLine: {show:false}
    }
};
var placeHolderStyle = {
    normal : {
        color: 'rgba(0,0,0,0)',
        label: {show:false},
        labelLine: {show:false}
    },
    emphasis : {
        color: 'rgba(0,0,0,0)'
    }
};
option = {
	   color: ['#1ab394', '#ED5565','#58b4ef', '#F7B516', '#24CBE5', '#DDDF00', '#64E572', '#FF9655', '#54b68d', '#6AF9C4'],
    title: {
        text: '所属设备数',
        subtext: '',
        sublink: '',
        x: 'center',
        y: 'center',
        itemGap: 20,
        textStyle : {
            color : 'rgba(30,144,255,0.8)',
            fontFamily : '微软雅黑',
            fontSize : 14,
            fontWeight : 'bolder'
        }
    },
    tooltip : {
        show: true,
        formatter: "{b} : {c} ({d}%)"
    },
    legend: {
    	orient: 'horizontal',
    	x: 'center',
    	y: 15,
    	
//      orient : 'vertical',
//      x : document.getElementById('device_num').offsetWidth * 0.75,
//      y : 45,
        itemGap:12,
        data : ['苏交科集团有限公司','华通智能交通公司','鸿信系统集成公司','无锡天舜科技公司','正元信息科技公司'],
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    series : [
        {
            name:'',
            type:'pie',
            clockWise:false,
            radius : [125, 150],
            itemStyle : dataStyle,
            data:[
                {
                    value:680,
                    name:'苏交科集团有限公司'
                },
                {
                    value:32,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
        {
            name:'',
            type:'pie',
            clockWise:false,
            radius : [100, 125],
            itemStyle : dataStyle,
            data:[
                {
                    value:129, 
                    name:'华通智能交通公司'
                },
                {
                    value:71,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
        {
            name:'',
            type:'pie',
            clockWise:false,
            radius : [75, 100],
            itemStyle : dataStyle,
            data:[
                {
                    value:233, 
                    name:'鸿信系统集成公司'
                },
                {
                    value:297,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
        {
            name:'',
            type:'pie',
            clockWise:false,
            radius : [50, 75],
            itemStyle : dataStyle,
            data:[
                {
                    value:153, 
                    name:'无锡天舜科技公司'
                },
                {
                    value:297,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
        {
            name:'',
            type:'pie',
            clockWise:false,
            radius : [25, 50],
            itemStyle : dataStyle,
            data:[
                {
                    value:123, 
                    name:'正元信息科技公司'
                },
                {
                    value:257,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        }
    ]
};
    hwf_city.setOption(option), $(window).resize(hwf_city.resize);                                                  
})