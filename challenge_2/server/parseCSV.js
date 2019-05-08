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
    for (var i = 0; i < keys.length; i++) {
	  result.push(node[keys[i]]);
	}
	if (node.children.length > 0) {
	  for (var j = 0; j < node.children.length; j++) {
	    recursive(node.children[j]);
	  }
	}
  }

  recursive(obj);
  return result.join(',');
}

// The server must flatten the JSON hierarchy, mapping each item/object in the JSON to a single 
//  line of CSV report (see included sample output), where the keys of the JSON objects will be the columns of the CSV report.
// You may assume the JSON data has a regular structure and hierarchy (see included sample file). In other 
//  words, all sibling records at a particular level of the hierarchy will have the same set of properties, but child objects 
//  might not contain the same properties. In all cases, every property you encounter must be present in the final CSV output.
// You may also assume that child records in the JSON will always be in a property called `children`.