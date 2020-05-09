// JavaScript Document
 function request(strParame) {
        var args = new Object();
        var query = location.search.substring(1);		
        var pairs = query.split("&"); // Break at ampersand 		
        for (var i = 0; i < pairs.length; i++) {	
            var pos = pairs[i].indexOf('=');
            if (pos == -1) continue;
            var argname = pairs[i].substring(0, pos);
            var value = pairs[i].substring(pos + 1);
            value = decodeURIComponent(value);		
            args[argname] = value;
        }
        return args[strParame];
    }
    window.onload = function () {

        var obj = request("def");
        switch (obj) {
            case "menu2":
                addStyle("menu2");
                break;
            case "menu3":
                addStyle("menu3");
                break;
            case "menu4":
                addStyle("menu4");
                break;
            case "menu5":
                addStyle("menu5");
                break;
            case "menu6":
                addStyle("menu6");
                break;
             default:
                addStyle("menu1");
        }
    }
    function addStyle(ele) {
        var obj = document.getElementById(ele);
        if (obj.className == null || obj.className != "select") {
            obj.className = "select";
        }
    }
   