var unique = require('uniq');
var fs = require('fs');

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log(unique(data));