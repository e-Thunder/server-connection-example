<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST");

$content = @file_get_contents("../../data/values.json");
http_response_code(200);
echo $content;

?>