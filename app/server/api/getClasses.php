<?php
require("api.php");
header('Access-Control-Allow-Methods: GET');
mysqli_select_db($conn, "M133Verwaltung");

$sql = "SELECT Id,Name FROM class;";
$result = mysqli_query($conn, $sql);

echo json_encode(mysqli_fetch_all ($result, MYSQLI_ASSOC));
?>