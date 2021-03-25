import { fs } from 'fs';

const fs = require("fs")

fs.mkdir("./src", function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log("New directory successfully created.")
  }
})