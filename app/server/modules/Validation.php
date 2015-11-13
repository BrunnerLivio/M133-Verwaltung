<?php

abstract class ValidationTypes
{
	const NOT_NULL = 0;
}
class Validation
{
	// parameters
	// $object: Your Object to Validate. Type Object
	// $type: Your Validation type. Type ValidationTypes
	public static function Validate($object, $type) {
		if($type === ValidationTypes::NOT_NULL) {
			foreach($object as $value){
				if(empty($value)){
					return false;
				}
			}
			return true;
		}
	}
}
?>