<?php
require("../dbconnect.php");
if($debug){
	header("Access-Control-Allow-Origin: *");
} else {
	header("Access-Control-Allow-Origin: http://m133.bplaced.net/");
	header("Access-Control-Allow-Origin: www.m133.bplaced.net/");
	header("Access-Control-Allow-Origin: http://www.m133.bplaced.net/");
}
	

header("Content-Type: application/json; charset=UTF-8");

?>
