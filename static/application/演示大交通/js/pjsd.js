$(function () {
	 $(document).ready(function () {
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('pjsd'));

option = {
    tooltip : {
        formatter: "平均速度 {b} :<br/> {c}km/h"
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: false},
            restore : {show: false},
            saveAsImage : {show: false}
        }
    },
    series : [
        {
            name:'',
            type:'gauge',
            splitNumber: 5,       // 分割段数，默认为5
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.2, '#18d435'],[0.8, '#3485ff'],[1, '#ff3d0f']], 
                    width: 7
                }
            },
            axisTick: {            // 坐标轴小标记
                splitNumber: 10,   // 每份split细分多少段
                length :0,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto'
                }
            },
            axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: 'auto'
                }
            },
            splitLine: {           // 分隔线
                show: true,        // 默认显示，属性show控制显示与否
                length :11,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            pointer : {
                width : 1
            },
            title : {
                show : true,
                offsetCenter: [0, '-40%'],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bold'
                }
            },
            detail : {
                formatter:'{value}',
                show : false,
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: 'auto',
                    fontWeight: 'bolder'
                }
            },
            data:[{value: 16, name: ''}]
        }
    ]
};// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
})
	 })