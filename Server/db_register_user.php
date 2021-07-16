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
    print_r($input);

    $name = $input->name;
    $user = $input->user;
    $email = $input->email;
    $pass = $input->pass;

    $objUser= new User($pdo);
    $objUser->setUser($name,$user,$email,$pass);

}else{
    echo 'error';
}
?>