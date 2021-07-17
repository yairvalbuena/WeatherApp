<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
header('Content-Type: text/html; charset=utf-8');
header('P3P: CP="IDC DSP COR CURa ADMa OUR IND PHY ONL COM STA"');
header("Content-type: application/json; charset=utf-8");
require_once('./dbconnection.php');

class Mensaje
{
	private $sentencia;
	private $MessagesList;

	public $pdo;
    
	
	public function __construct($pdo)
	{
		$this->pdo=$pdo;
	}

	public function setMensaje($mensaje,$userId){
		
        $this->mensaje=$mensaje;
        $this->userId=$userId;

		$this->sentencia = $this->pdo->prepare("INSERT INTO `message`(`message`, `user_id`) VALUES ('$this->mensaje','$this->userId');");
		$this->sentencia->execute();
	}

	public function getMensajes(){

		$this->sentencia = $this->pdo->prepare("SELECT * FROM message");
		$this->sentencia->execute();
		$this->MessagesList = $this->sentencia->fetchAll(PDO::FETCH_ASSOC);
		return $this->MessagesList;
	}

    
}


?>