<?php
class SerializeObject
{
	public static function Serialize($object){
		$values = "";
		$keys = "";
		$arrayCounter = 0;
		while ($value = current($object)) {
			$keys .= key($object);
			$values .= "'".$value."'";
			if($arrayCounter < count($object) - 1){
				$keys .= ", ";
				$values .= ", ";
			}
			$arrayCounter++;
			next($object);
		}
		return [$keys, $values];
	}
}

?>