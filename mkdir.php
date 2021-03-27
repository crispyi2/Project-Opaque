<?php
	include("models/db-settings.php");
include("models/config.php");

$foldername = $_POST["foldername"];  
$filename   = $foldername;
$path       = __DIR__ . "/Systems" . $loggedInUser->username;
$fullPath   = $path . "/" . $filename;
if (!file_exists($fullPath)){  
    mkdir($fullPath, 0777);  
    echo "The directory was successfully created.";  
}  
echo $fullPath;

$source = "stock/stocksystem";
$dest= $fullPath;

mkdir($dest, 0755);
foreach (
 $iterator = new \RecursiveIteratorIterator(
  new \RecursiveDirectoryIterator($source, \RecursiveDirectoryIterator::SKIP_DOTS),
  \RecursiveIteratorIterator::SELF_FIRST) as $item
) {
  if ($item->isDir()) {
    mkdir($dest . DIRECTORY_SEPARATOR . $iterator->getSubPathName());
  } else {
    copy($item, $dest . DIRECTORY_SEPARATOR . $iterator->getSubPathName());
  }
}
?>