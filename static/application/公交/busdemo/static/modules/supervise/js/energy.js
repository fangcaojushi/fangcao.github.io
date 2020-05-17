$(function () {
    var chart;
    
    $(document).ready(function () {
    	
    	// Build the chart
		
        $('#energy').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
				backgroundColor: 'rgba(214,233,251,0.0)',
				options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
            },
			colors: ['#23ac38', '#FF3D0F','#1f4eb0', '#F7B516', '#24CBE5', '#DDDF00', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
			legend: {
				  align: 'right',
				  verticalAlign: 'middle',
				  layout: 'vertical',
	
				  labelFormat:"{name}:  {percentage}%",
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
			  credits: {
				  enabled: false
			  },
            title: {
                text: null
            },
            tooltip: {
        	    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
					 depth: 15,
                    dataLabels: {
                        enabled: true,
                        style: {
                      	color: '#aabad5',
                    }
                    },
					borderColor: false,
                    showInLegend: true
                }
            },
			
            series: [{
                type: 'pie',
                name: '能源所占比例',
                data: [
					['汽油',       20],
					['天然气',    13],
                    ['柴油',   53],
                    ['电车',     8],
                    ['混合动力',   6]
                ]
            }]
        });
    });
    
});				