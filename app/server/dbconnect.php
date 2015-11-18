<?php
require("dbvariables.php");
$conn = mysqli_connect($servername, $username, $password);


if(mysqli_connect_errno()){
	echo "failed to connect to mysql ". mysqli_connect_errno();
}
mysqli_select_db($conn, $database) or die("Couldn't select database.");

?>