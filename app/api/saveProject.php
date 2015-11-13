<?php
require("api.php");
if(isset($_POST["project"])){
	$project = json_decode($_POST["project"],true);
	if(!empty($project->Name)){
		$sql = "INSERT INTO project (Id, Name, FirstName, LastName, Notes, CreationDate, classId) Values ($project->Name, $project->FirstName, $project->LastName, $project->Notes,";
	}
	

	$sql = "SELECT * FROM project WHERE classId=$id;";
	$result = mysqli_query($conn, $sql);
	
	echo json_encode(mysqli_fetch_all ($result, MYSQLI_ASSOC));
}

?>