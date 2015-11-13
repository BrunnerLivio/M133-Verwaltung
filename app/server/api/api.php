<?php
require("../dbconnect.php");
header("Access-Control-Allow-Origin: *");

header("Content-Type: application/json; charset=UTF-8");

mysqli_select_db($conn, "M133Verwaltung");
?>
