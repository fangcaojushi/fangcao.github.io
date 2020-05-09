/**
 * 用途：将checkbox全选或取消
 *by fangcaoju
 *根据checkbox的checked状态置该控件的背景色
 */
function doAllChecked(obj,chkElement){
	var isChecked;
	isChecked = obj.checked;	
	var chkEls = document.getElementsByName(chkElement);
	//alert(chkEls.length)
    for(var i=0;i<chkEls.length;i++){
    	if(chkEls[i].disabled == false)			
        chkEls[i].checked = isChecked;
		 onRowChecked(chkEls[i]);
    }
}


/**
 * 用途：选中行中的复选框.
 *by fangcaoju
 *判断obj的value值奇偶置该控件的背景色，隔行效果
 */
function onRowChecked(obj){
  var className = 'datalist_j';
 
  if(obj.checked === true)
  	{
	className = 'rowChecked';
	}
	
 
 else  if(obj.value%2==0)
  			{
  			className = 'datalist_o';
			}
	 
  obj.parentNode.parentNode.className = className;
			
			
}

/*
 * byfangcaoju
 * 用途：查找TR中的checkbox对象
*/
function findChildCheckbox(obj){
  var inputs = obj.getElementsByTagName('INPUT');
  for(var i=0; i<inputs.length; i++){
	if(inputs[i].type == "checkbox")
	  return inputs[i];
  }
} 

/**
 *byfangcaoju
 * 用途：鼠标移到TR上时，改变样式.
 * 用途：tr对象.
 */
function onRowFocus(tr){
  var checked = false;
  var chk = findChildCheckbox(tr);
  if(chk != undefined && chk.checked == true)
    checked = true;	
  if(!checked) tr.className='datalist_over';
}

/**
 ×by fangcaoju
 * 用途：鼠标离开TR上时，改变样式.
 * 用途：tr对象.
 */
function onRowUnfocused(tr,jo){
  var checked = false;
  var chk = findChildCheckbox(tr);
  if(chk != null && chk.checked == true)
    checked = true;
  if(!checked) tr.className='datalist_'+jo;
}



/*权限*/
function Jurisdiction_row(obj,option)   
{
var isChecked = obj.checked;
var chkEls = document.getElementsByName("Jurisdiction");     
 for(var i=0;i<chkEls.length;i++)
	{	
		if(option==chkEls[i].value.substring(0,2))  
		{
		chkEls[i].checked=isChecked;
		}
	}

}
/*
ĸѡ*/

function Jurisdiction_col(obj,option)   
{
var isChecked = obj.checked;
var chkEls = document.getElementsByName("Jurisdiction");    
 for(var i=0;i<chkEls.length;i++)
	{	
	
		if(option==chkEls[i].value.substring(3)) 
		{
		chkEls[i].checked=isChecked;
		}
	}

}

