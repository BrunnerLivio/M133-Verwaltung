<?php
require("api.php");
header('Access-Control-Allow-Methods: GET');
$sql = "SELECT Id,Name FROM class;";
$result = mysqli_query($conn, $sql) or die(mysql_error());
echo json_encode(mysqli_fetch_all ($result, MYSQLI_ASSOC));
?>