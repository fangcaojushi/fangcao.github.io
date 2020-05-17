  $(function() {
      var hwf_city = echarts.init(document.getElementById("cover-rate")),
      option = {
//    title : {
//        text: '设备覆盖率',
//        subtext: '30米：52%    50米：71%'
//    },
    color: ['#a6cb5f', '#ED5565','#5facdb', '#F7B516', '#24CBE5', '#DDDF00', '#64E572', '#FF9655', '#54b68d', '#6AF9C4'],
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['区域面积','设备覆盖面积（500米）','设备覆盖面积（300米）','设备覆盖率（500米）','设备覆盖率（300米）']
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['一区','二区','三区','四区','五区','六区','七区']
        }
    ],
    yAxis : [
      {
      type: 'value',
      name: '平方公里',
      min: 0,
      max: 1000,
      position: 'right'
  }, {
      type: 'value',
//     name: '覆盖率',
      min: 0,
      max: 100,
      position: 'left',
      axisLabel: {
          formatter: '{value} %'
      }
  }
    ],
    series : [
        {
            name:'区域面积',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[400, 520, 510, 540, 760, 830, 710]
        },
        {
            name:'设备覆盖面积（500米）',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[280, 400, 334, 391, 490, 630, 510]
        },
        {
            name:'设备覆盖面积（300米）',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[200, 282, 301, 234, 320, 490, 420]
        },
        {
            name: '设备覆盖率（500米）',
            type: 'line',
            lineStyle: {
                    normal: {
                        width: 3,
                        shadowColor: 'rgba(0,0,0,0.4)',
                        shadowBlur: 10,
                        shadowOffsetY: 10
                    }
                },
            yAxisIndex: 1,
            data: [47,53,71,59,70,71,66]
    },{
        name: '设备覆盖率（300米）',
        type: 'line',
        lineStyle: {
                normal: {
                    width: 3,
                    shadowColor: 'rgba(0,0,0,0.4)',
                    shadowBlur: 10,
                    shadowOffsetY: 10
                }
            },
        yAxisIndex: 1,
        data: [37,43,51,49,50,51,46]
}
    ]
};
      hwf_city.setOption(option), $(window).resize(hwf_city.resize);
})