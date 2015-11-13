<?php
$conn = mysqli_connect("localhost", "root", "");

mysqli_set_charset($conn, "utf8");

if(mysqli_connect_errno()){
	echo "failed to connect to mysql". mysqli_connect_errno();
}

?>