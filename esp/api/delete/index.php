<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");

$dataFile = fopen("../../data/values.json", "w");

if($dataFile){
    fclose($dataFile);
    http_response_code(200);
    echo "Data has been successfully reset";
}
else{
    http_response_code(-1);
    echo "Failure on resetting data";
}

?>