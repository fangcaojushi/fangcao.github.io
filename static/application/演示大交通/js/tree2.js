/**
 * Created by Administrator on 2016-11-18   0018.
 */
function createNode(){
    var root = {
        "id" : "0",
        "text" : "视频设备",
        "value" : "30",
        "showcheck" : false,
        complete : true,
        "isexpand" : true,
        "checkstate" : 0,
        "hasChildren" : true
    };
    var arr = [];
    for(var i= 1;i<50; i++){
        var subarr = [];
        for(var j=1;j<20;j++){
            var value = "设备-" + i + "-" + j;
            subarr.push( {
                "id" : value,
                "text" : value,
                "value" : value,
                "showcheck" : false,
                complete : true,
                "isexpand" : false,
                "checkstate" : 0,
                "hasChildren" : false
            });
        }
        arr.push( {
            "id" : "node-" + i,
            "text" : i + "道路设备",
            "value" : i + "道路设备",
            "showcheck" : false,
            complete : true,
            "isexpand" : false,
            "checkstate" : 0,
            "hasChildren" : true,
            "ChildNodes" : subarr
        });
    }
    root["ChildNodes"] = arr;
    return root;
}

treedata = [createNode()];
