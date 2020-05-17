var setting = {
	view: {
		showLine: false,
		showIcon: showIconForTree
	},
	check: {
		enable: true,
	},
	data: {
		simpleData: {
			enable: true
		}
	}
};
var zNodes =[
	{ id:1, pId:0, name:"市南大队片区", open:true},
	{ id:11, pId:1, name:"市南区三大队片区", open:true},
	{ id:111, pId:11, name:"栈桥附近十字路口探头由东向西方向"},
	{ id:112, pId:11, name:"贵州路与刘家峡路交汇路段探头"},
	{ id:12, pId:1, name:"市北区台东商圈", open:true},
	{ id:121, pId:12, name:"台东8路与延安路交汇路口探头"},
	{ id:122, pId:12, name:"台东6路与尹喜交汇路口探头"},
	{ id:123, pId:12, name:"台东6路与尹喜交汇路口探头"},
	{ id:124, pId:12, name:"台东6路与尹喜交汇路口探头"},
	{ id:125, pId:12, name:"台东6路与尹喜交汇路口探头"},
	{ id:126, pId:12, name:"台东6路与尹喜交汇路口探头"},
	{ id:2, pId:0, name:"市北区万达商圈", checked:true, open:true},//一级
	{ id:21, pId:2, name:"家乐福附近十字路口"},				//二级
	{ id:22, pId:2, name:"万达附近十字路口", open:true},  //二级
	{ id:221, pId:22, name:"山东路与敦化路交汇路口探头"},   //三级
	{ id:222, pId:22, name:"山东路与鞍山路交汇路口探头"},                 //三级
	{ id:223, pId:22, name:"敦化路与鞍山路交汇路口探头"},                 //三级
	{ id:224, pId:22, name:"山东路与鞍山路交汇路口探头"},                 //三级
	{ id:225, pId:22, name:"山东路与鞍山路交汇路口探头"},                 //三级
	{ id:226, pId:22, name:"山东路与鞍山路交汇路口探头"},                 //三级
	{ id:227, pId:22, name:"山东路与鞍山路交汇路口探头"},                 //三级
	{ id:228, pId:22, name:"山东路与鞍山路交汇路口探头"},                 //三级
	{ id:229, pId:22, name:"山东路与鞍山路交汇路口探头"},                 //三级
	{ id:23, pId:2, name:"市南万象城商圈"},			  //二级
	{ id:3, pId:0, name:"市北区新都心商圈", checked:true, open:true},//一级
	{ id:31, pId:3, name:"和达中心城附近十字路口"},				//二级
	{ id:32, pId:3, name:"万达附近十字路口", open:true},  //二级
	{ id:321, pId:32, name:"山东路与敦化路交汇路口探头"},   //三级
	{ id:322, pId:32, name:"山东路与鞍山路交汇路口探头"},                 //三级
	{ id:323, pId:32, name:"敦化路与鞍山路交汇路口探头"},                 //三级
	{ id:324, pId:32, name:"山东路与鞍山路交汇路口探头"},                 //三级
	{ id:325, pId:32, name:"山东路与鞍山路交汇路口探头"},                 //三级
	{ id:326, pId:32, name:"山东路与鞍山路交汇路口探头"},                 //三级
	{ id:327, pId:32, name:"山东路与鞍山路交汇路口探头"},                 //三级
	{ id:328, pId:32, name:"山东路与鞍山路交汇路口探头"},                 //三级
	{ id:329, pId:32, name:"山东路与鞍山路交汇路口探头"},                 //三级
	{ id:33, pId:3, name:"市南万象城商圈"}			  //二级
];

function showIconForTree(treeId, treeNode) {
	return !treeNode.isParent;
};

$(document).ready(function(){
	$.fn.zTree.init($("#tree"), setting, zNodes);

});