<?php
header("Access-Control-Allow-Origin: *");

include_once '../database/database.php';

function createDataObject(){
    $obj->param1 = $_POST['param1'];
    $obj->param2 = $_POST['param2'];
    return $obj;
}

function storeJsonData(){
    $data = createDataObject();
    
    $jsonFile = fopen("../../data/values.json", 'r+');
    fseek($jsonFile, 0, SEEK_END);
    if (ftell($jsonFile) > 0){
        fseek($jsonFile, -1, SEEK_END);
        fwrite($jsonFile, ',', 1);
        fwrite($jsonFile, json_encode($data).']');
    }
    else{
        fwrite($jsonFile, json_encode(array($data)));
    }
    fclose($jsonFile);
}

if(isset($_POST['param1'])){
    storeJsonData();
    
	http_response_code(201);
	echo "Data has been successfully inserted into database";
}
else{
	http_response_code(-1);
	echo "Failure on inserting data";
}


?>
