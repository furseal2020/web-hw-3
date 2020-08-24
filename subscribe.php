<?php
	require "init.php";

	$id=$_POST["id"];

	$flag = 0;
	$sql = "update hw2 set subscribe=1 where id='$id'";

	if(mysqli_query($conn,$sql))
	{
		$flag = 1;
	}
	else
	{
		$flag = 0;
	}

	$array = array("flag" => $flag);
	echo json_encode(array("server_response"=>$array));
	
	$conn->close();

?>