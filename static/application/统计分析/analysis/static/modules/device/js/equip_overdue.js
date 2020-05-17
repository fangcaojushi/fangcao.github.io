$(function() {
	var hwf_city = echarts.init(document.getElementById("equip_overdue"));
	
var labelTop = {
normal : {
    label : {
        show : true,
        position : 'center',
        formatter :  '{c}',
        textStyle: {
            baseline : 'bottom'
        }
    },
    labelLine : {
        show : false
    },
   color:['#ed5565'],
    }
};
var labelFromatter = {
    normal : {
        label : {
            formatter : function (params){
                return params.value
            },
            textStyle: {
                baseline : 'top'
            }
        }
    },
}
var labelBottom = {
    normal : {
         color: '#1ab394',
        label : {
            show : true,
            position : 'center',
            formatter : '{b}'
        },
        labelLine : {
            show : false
        }
    },
    emphasis: {
         color: '#1ab394',
    }
};
var radius = [40, 55];
option = {
    legend: {
    	show : false,
        x : 'center',
        y : 'center',
        data : ['数字城管工程','蠡湖大道改造工程','凤翔路改造工程','鸿山公交站工程',
            		'东西支路道路工程','大通路新建工程','“六合一”平台工程'],
    },
    title : {
        text: '',
        subtext: '',
        x: 'center'
    },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true, 
                type: ['pie', 'funnel'],
                option: {
                    funnel: {
                        width: '20%',
                        height: '30%',
                        itemStyle : {
                            normal : {
                                label : {
                                    formatter : function (params){
                                        return  params.value
                                    },
                                    textStyle: {
                                        baseline : 'middle'
                                    }
                                }
                            },
                        } 
                    }
                }
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    series : [
        {
            type : 'pie',
            center : ['15%', '30%'],
            radius : radius,
            x: '0%', // for funnel
            itemStyle : labelFromatter,             
            data : [
                {name:'数字城管工程', value:1000, itemStyle : labelBottom},
                {name:'即将过期设备数', value:8,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['38%', '30%'],
            radius : radius,
            x:'20%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'蠡湖大道改造工程', value:566, itemStyle : labelBottom},
                {name:'即将过期设备数', value:24,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['61%', '30%'],
            radius : radius,
            x:'40%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'凤翔路改造工程', value:635, itemStyle : labelBottom},
                {name:'即将过期设备数', value:15,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['84%', '30%'],
            radius : radius,
            x:'60%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'鸿山公交站工程', value:460, itemStyle : labelBottom},
                {name:'即将过期设备数', value:20,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['15%', '70%'],
            radius : radius,
            x:'80%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'东西支路道路工程', value:653, itemStyle : labelBottom},
                {name:'即将过期设备数', value:17,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['38%', '70%'],
            radius : radius,
            y: '55%',   // for funnel
            x: '0%',    // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'大通路新建工程', value:378, itemStyle : labelBottom},
                {name:'即将过期设备数', value:22,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['61%', '70%'],
            radius : radius,
            y: '55%',   // for funnel
            x:'20%',    // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'“六合一”平台工程', value:478, itemStyle : labelBottom},
                {name:'即将过期设备数', value:12,itemStyle : labelTop}
            ]
        }
    ]
};                                     
	hwf_city.setOption(option), $(window).resize(hwf_city.resize);
})