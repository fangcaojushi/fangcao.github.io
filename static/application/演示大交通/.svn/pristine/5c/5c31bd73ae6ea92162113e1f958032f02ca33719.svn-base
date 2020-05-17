$(function () {
    var chart;
    
    $(document).ready(function () {
    	
    	// Build the chart
		
        $('#zongshebei').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
				backgroundColor: 'rgba(8,23,47,0.3)',
				options3d: {
	                enabled: false,
	                alpha:39,
	                beta: 0,
	            }
            },
			colors: [ '#23ac38','#676767', '#F7B516', '#24CBE5', '#DDDF00', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
			
			  credits: {
				  enabled: false
			  },
            title: {
                text: null
            },
            tooltip: {
//      	    pointFormat: '{series.name}: <b>{point}台</b>'
            },
            legend: {
				  align: 'center',
				  verticalAlign: 'bottom',
				 labelFormat:"{name}设备占比率: {percentage:.1f}%",
				  itemStyle : {
					  'fontSize' : '12px', color: '#aabad5'
				  },
				  itemHoverStyle: {
					  color: '#FF0000'
				  },
				  itemHiddenStyle: {
					  color: '#666'
				  }
				  
			  },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
					 depth: 15,
					 innerSize: '50%',
					 
                    dataLabels: {
                        enabled: false,
//                      distance: -50,
//                      align: 'right',
//                      x:50, y: -30,
                    },
					borderColor: false,
                    showInLegend: true
                }
            },
			
            series: [{
                type: 'pie',
                name: '设备数量',
                data: [
					['正常',       3251],
					['不正常',    300]
                ]
            }]
        });
    });
    
});				