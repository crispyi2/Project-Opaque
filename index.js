import * as fs from 'fs';

fs.mkdir("./src", function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log("New directory successfully created.")
  }
})