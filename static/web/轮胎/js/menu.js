function qiehuan(num){

		for(var id = 0;id<=6;id++)
		{
			if(id==num)
			{
				document.getElementById("qh_con"+id).style.display="block";
				document.getElementById("mynav"+id).className="nav_on";
			}
			else
			{
				document.getElementById("qh_con"+id).style.display="none";
				document.getElementById("mynav"+id).className="";
			}
		}
	}// JavaScript Document
	
	
function search_show(object){
   //alert(object);
	var sch=document.getElementById(object);	
	if(sch.style.display=="none")
		{sch.style.display="block";}
	else
		{sch.style.display="none";}
	
	}
	
function news_mx_show(){
	
	var sch=document.getElementById('news_mx');	
	sch.style.display="block";
	
	}
	
function showTip(divid) 
{ 
var div = document.getElementById(divid); 

			div.style.display="block";
			div.style.top=event.clientY+document.documentElement.scrollTop-170;
			
			div.style.left=event.clientX+5;
			div.style.position="absolute"; 
		
	
}


function closeTip(divid) {
	var div = document.getElementById(divid); 

	div.style.display="none";
}