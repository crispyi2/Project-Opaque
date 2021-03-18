var fs = require(["fs"]);
const dirTree = require(["directory-tree"]);

const tree = dirTree('./scripts/');
console.log(tree);