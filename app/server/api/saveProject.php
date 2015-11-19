<?php
require("api.php");
require("../modules/SerializeObject.php");
require("../modules/Validation.php");
header('Access-Control-Allow-Methods: POST');
if(isset($_POST["project"])){
	
	
	$project = $_POST["project"];
	if(Validation::Validate($project, ValidationTypes::NOT_NULL)){
		$insertValues = SerializeObject::Serialize($project);	
		$sql = "INSERT INTO project (". $insertValues[0].")
						VALUES (". $insertValues[1] . ")";
		$result = mysqli_query($conn, $sql);
		
		echo $result;
	}
	echo false;
	
	
}

?>