var exports = module.exports; 

exports.parseCSV = function(data) {
  var obj = JSON.parse(data);
  var result = [];

  var keys = [];
  for (var key in obj) {
	if (key !== 'children') {
		keys.push(key);
	}
  }
	
  var recursive = function(node) {
  	var nodeArray = [];
    for (var i = 0; i < keys.length; i++) {
	  nodeArray.push(node[keys[i]]);
	}
	result.push(nodeArray);
	if (node.children.length > 0) {
	  for (var j = 0; j < node.children.length; j++) {
	    recursive(node.children[j]);
	  }
	}
  }

  recursive(obj);
  
  return result.join('\n');
}
