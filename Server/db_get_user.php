<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
header('Content-Type: text/html; charset=utf-8');
header('P3P: CP="IDC DSP COR CURa ADMa OUR IND PHY ONL COM STA"');
header("Content-type: application/json; charset=utf-8");
require_once('./dbconnection.php');

require_once('./user_class.php');

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $input = json_decode(file_get_contents("php://input"));
    
    $objUser= new User($pdo);
    $objUser->getUsers();
    $res = json_encode($objUser);
    echo($res);
    

}else{
    echo 'error';
}
?>