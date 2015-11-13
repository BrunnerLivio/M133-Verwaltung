<?php
require("api.php");
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header('Access-Control-Allow-Methods: GET');
if(isset($_GET["Id"])){
	$id = $_GET["Id"];

	$sql = "SELECT * FROM project WHERE classId=$id;";
	$result = mysqli_query($conn, $sql);
	
	echo json_encode(mysqli_fetch_all ($result, MYSQLI_ASSOC));
}

?>