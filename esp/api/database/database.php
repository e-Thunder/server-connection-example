<?php

class Database{
	private $host = "mysql.cba.pl";
	private $db_name = "lukboz";
	private $db_username = "lukboz";
	private $db_password = "Ziemniak123";
	public $connection;
	
	public function getConnection(){
	
		$this->connection = null;
	
		try{
			$this->connection = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->db_username, $this->db_password);
		} catch(PDOException $exception){
			echo "Connection error: " . $exception->getMessage();
		}

		return $this->connection;
	}
}

?>