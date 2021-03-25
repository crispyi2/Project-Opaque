import { fs } from 'fs';
import { readdir } from "fs/promises";
import { join } from "path";
import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './testdata.xml';
import Notes from './testdata.csv';

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    console.log(Data);
    console.log(Notes);


    return element;
}

async function* ls (path = ".")
{ yield path
  for (const dirent of await readdir(path, { withFileTypes: true }))
    if (dirent.isDirectory())
      yield* ls(join(path, dirent.name))
    else
      yield join(path, dirent.name)
}

async function* empty () {}

async function toArray (iter = empty())
{ let r = []
  for await (const x of iter)
    r.push(x)
  return r
}

toArray(ls(".")).then(console.log, console.error)

require.context(
    "/src", // context folder
    true, // include subdirectories
    /.*/ // RegExp
)("./" + expr + "")

var _getAllFilesFromFolder = function(dir) {

    var filesystem = require("fs");
    var results = [];

    filesystem.readdirSync(dir).forEach(function(file) {

        file = dir+'/'+file;
        var stat = filesystem.statSync(file);

        if (stat && stat.isDirectory()) {
            results = results.concat(_getAllFilesFromFolder(file))
        } else results.push(file);

    });

    return results;

};



document.body.appendChild(component());