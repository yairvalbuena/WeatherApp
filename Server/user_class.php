<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
header('Content-Type: text/html; charset=utf-8');
header('P3P: CP="IDC DSP COR CURa ADMa OUR IND PHY ONL COM STA"');
header("Content-type: application/json; charset=utf-8");
require_once('./dbconnection.php');

class User
{
	private $sentencia;
	private $listarUsuarios;
	private $listarUsuario;
	public $pdo;
	public $entrada;
	private $salida;
	public $usuarioId;
	public $nombre;
	public $correo;
	public $usuario;
    
	
	public function __construct($pdo)
	{
		$this->pdo=$pdo;
	}

	public function setUser($name,$user,$email,$pass){
		
        $this->name=$name;
        $this->user=$user;
        $this->email=$email;
        $this->pass=$pass;

		$this->sentencia = $this->pdo->prepare("INSERT INTO `user`(`name`, `user`, `email`, `password`, `rol`) VALUES ('$this->name','$this->user','$this->email','$this->pass',0);");
		$this->sentencia->execute();
	}

	public function getUsers(){
		$this->sentencia = $this->pdo->prepare("SELECT * FROM user");
		$this->sentencia->execute();
		$this->listaUsuarios = $this->sentencia->fetchAll(PDO::FETCH_ASSOC);
		return $this->listaUsuarios;
	}

	public function getUserLogin($user, $pass){

        $this->user=$user;
        $this->pass=$pass;
		$this->sentencia = $this->pdo->prepare("SELECT * FROM user WHERE user='$user' AND password='$pass'");
		$this->sentencia->execute();
		$this->listaUsuario = $this->sentencia->fetchAll(PDO::FETCH_ASSOC);

		return $this->listaUsuario;
	}

	public function funciona(){
		echo('<h1>Está funcionando la clase</h1>');
	}

	public function deleteUser($id){
		$this->id=$id;
		echo($this->id);
		$this->sentencia = $this->pdo->prepare("DELETE FROM user WHERE id='$id'");
		$this->sentencia->execute();
	}
	public function updateUser($id, $nomb, $mail, $usuario){
		$this->nombre = $nomb;
		$this->correo=$mail;
		$this->usuario=$usuario;
		$this->id=$id;
		$this->sentencia = $this->pdo->prepare("UPDATE user SET name = '$this->nombre',user = '$this->usuario', email = '$this->correo'  WHERE id = '$this->id';");
		$this->sentencia->execute();
	}

	public function sesionInicio($id){
		$this->usuarioId = $id;
		$this->entrada = date('m-d-Y h:i:s', time());
		$this->sentencia = $this->pdo->prepare("INSERT INTO `sesionesentrada`(`fecha`, `usuario_id`) VALUES ('$this->entrada','$this->usuarioId');");
		$this->sentencia->execute();
	}
	
	public function sesionFinal($id){
		$this->usuarioId = $id;
		$this->salida = date('m-d-Y h:i:s', time()); 
		$this->sentencia = $this->pdo->prepare("INSERT INTO `sesionessalida`(`fecha`, `usuario_id`) VALUES ('$this->salida','$this->usuarioId');");
		$this->sentencia->execute();
	}
    
}


?>