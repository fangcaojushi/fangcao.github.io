$(function () {
    $('#kakoushebei').highcharts({
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
        colors: [ '#23ac38','#676767', '#ff0000', '#24CBE5', '#DDDF00', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y}台</b>'
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
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '50%'],
                showInLegend: false
            }
        },
        series: [{
            type: 'pie',
            name: '设备数量',
            innerSize: '50%',
            data: [
                ['在线',   1100],
                ['离线',       32],
                ['故障', 68]
             
                
            ]
        }]
    });
});
