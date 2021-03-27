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

function recursiveCopy($source, $destination)
{
    if (!file_exists($destination)) {
        mkdir($destination);
    }

    $splFileInfoArr = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($source), RecursiveIteratorIterator::SELF_FIRST);

    foreach ($splFileInfoArr as $fullPath => $splFileinfo) {
        //skip . ..
        if (in_array($splFileinfo->getBasename(), [".", ".."])) {
            continue;
        }
        //get relative path of source file or folder
        $path = str_replace($source, "", $splFileinfo->getPathname());

        if ($splFileinfo->isDir()) {
            mkdir($destination . "/" . $path);
        } else {
        copy($fullPath, $destination . "/" . $path);
        }
    }
}
#calling the function
recursiveCopy(__DIR__ . "/stock/stocksystem", $fullPath);
?>