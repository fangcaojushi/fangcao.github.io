$(function () {
    $('#sbzt').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            backgroundColor: 'rgba(8,23,47,0)',
            plotShadow: false
        },
        title: {
//          text: '监控设备1000台',
			text:null,
            align: 'left',
            verticalAlign: 'top',
            style:{color:'#AABAD5'}
            //y: 50
        },
        colors: [ '#23ac38', '#ff0000', '#24CBE5', '#DDDF00', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y}台</b>'
        },
        legend: {
				  align: 'center',
				  verticalAlign: 'bottom',
//				  layout: 'vertical',
				  labelFormat:"{name}:{y}件",
				  itemStyle : {
					  'fontSize' : '12px', color: '#aabad5',
				  },
				  itemHoverStyle: {
					  color: '#FF0000'
				  },
				  itemHiddenStyle: {
					  color: '#666'
				  }
				  
			  },
         credits: {
		  enabled: false
	  },
        plotOptions: {
            pie: {
           	 	borderColor: "",//去边框
            		shadow: false,		//去阴影
                dataLabels: {
                    enabled: false
                },
                startAngle: -100,
                endAngle: 100,
                center: ['50%', '100%'],
                showInLegend: true
            }
        },
        series: [{
            type: 'pie',
            name: '设备数量',
            innerSize: '67%',
            data: [
                ['在线',   300],
                ['故障',   12]
             
                
            ]
        }]
    });
});
