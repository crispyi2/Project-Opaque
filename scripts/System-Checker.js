import '/bundle.js'
var fs = require('fs');
const testFolder = '/';

fs.readdirSync(testFolder).forEach(file => {
  console.log(file);
});