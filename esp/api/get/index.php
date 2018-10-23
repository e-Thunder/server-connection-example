<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST");

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $content = @file_get_contents("../../data/values.json");
    http_response_code(200);
    echo $content;
}
else{
    http_response_code(-1);
    echo "Failure: Data not found";
}



?>