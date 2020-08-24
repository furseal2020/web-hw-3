<?php
require "init.php";

$id=$_POST["id"];

$flag = 0;
$subscribe = 0;

$sql = "select subscribe from hw2 where id='$id';";
$result=mysqli_query($conn,$sql);

if (mysqli_affected_rows($conn) ==-1 || mysqli_affected_rows($conn)==0) 
{
    $flag = 0; 
}
else
{
    $row=mysqli_fetch_row($result);
    $subscribe = $row[0];
	$flag = 1; 
}

	$array = array("flag" => $flag, "subscribe" => $subscribe);
	echo json_encode(array("server_response"=>$array));
	
	$result->close();
	$conn->close();

?>