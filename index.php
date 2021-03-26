<?php
$location = "index.html";
include($location);

$dirPath = "Systems";

$destdir = $dirPath;

$handle = opendir($destdir);
$c = 0;
while ($file = readdir($handle)&& $c<3) {
    $c++;
}

if ($c>2) {
    echo 'not empty'
} else {
    echo 'empty';
} 
?>