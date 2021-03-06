<?php
header("Access-Control-Allow-Origin: *");

include_once '../database/database.php';

if(isset($_POST['content'])){
	$message = $_POST['content'];
	
	$message = str_replace('}{', '}&{', $message);
	$items = explode('&', $message);
	
	foreach($items as &$i){
		$i = str_replace(':','":"', $i);
		$i = str_replace(',','","', $i);
		$i = str_replace('{','{"', $i);
		$i = str_replace('}','"}', $i);
	}
	$str = implode(',', $items);
	
	$jsonFile = fopen("../../data/values.json", 'r+');
    fseek($jsonFile, 0, SEEK_END);
    if (ftell($jsonFile) > 0){
        fseek($jsonFile, -1, SEEK_END);
        fwrite($jsonFile, ',', 1);
        fwrite($jsonFile, $str.']');
    }
    else{
        fwrite($jsonFile, '['.$str.']');
    }
    fclose($jsonFile);
	
	http_response_code(201);
	echo "Data has been successfully inserted into database";
}
else{
	http_response_code(-1);
	echo "Failure on inserting data";
}

?>
