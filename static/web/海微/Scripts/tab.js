// JavaScript Document
function aa(tabindex,listindex){
	var h=document.getElementById("tab"+tabindex).getElementsByTagName("h3");

	 var d=document.getElementById("tab"+tabindex).getElementsByTagName("div");
	 	for(var i=0;i<h.length;i++)
		  {
		
			   if(listindex-1==i)
			   {
				   h[i].className+=" up";
				   d[i].className+=" block";
			   }
			   else 
			   {
				h[i].className=" ";
				d[i].className=" ";
			   }
		  }
	 

 }