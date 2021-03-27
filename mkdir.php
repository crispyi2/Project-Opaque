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

?>