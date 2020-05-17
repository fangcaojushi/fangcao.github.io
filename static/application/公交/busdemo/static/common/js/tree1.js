function createNode(){
  var root = {
    "id" : "0",
    "text" : "公交线路",
    "value" : "30",
    "showcheck" : true,
    complete : true,
    "isexpand" : true,
    "checkstate" : 0,
    "hasChildren" : true
  };
  var arr = [];
  for(var i= 1;i<30; i++){
    var subarr = [];
    for(var j=1;j<20;j++){
      var value = "渝D53" + Math.floor(Math.random() * 10) +  Math.floor(Math.random() * 10); 
      subarr.push( {
         "id" : value,
         "text" : value,
         "value" : value,
         "showcheck" : true,
         complete : true,
         "isexpand" : false,
         "checkstate" : 0,
         "hasChildren" : false
      });
    }
    arr.push( {
      "id" : "node-" + i,
      "text" : "10" + i + "路",
      "value" : i + "路",
      "showcheck" : true,
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
