<?php
require_once __DIR__.'/vendor/autoload.php';

use Symfony\Component\Finder\Finder;

$finder = new Finder();
$finder->in('./data/');

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
	echo '<script src="jsfunctions/fullsystemfolder.js" type="module"></script>';
    return 'not empty';
} else {
	echo '<script src="jsfunctions/emptysystemfolder.js" type="module"></script>';
    return 'empty';
} 
?>