<?php
require("api.php");

$sql = "SELECT Id,Name FROM class;";
$result = mysqli_query($conn, $sql);

echo json_encode(mysqli_fetch_all ($result, MYSQLI_ASSOC));
?>