<?php
	try {
		$conn = new PDO('mysql:host=localhost;dbname=donutdb;', 'root', '');
	} catch(PDOException $e) {
		echo "Connection failed: " . $e->getMessage();
	}
	$stmt = $conn->query("SELECT * FROM donutdb.donuts");
	while ($row = $stmt->fetch())
	{
		$rows[] = $row;
	}
	$encodedData = json_encode($rows);
	$conn = null;
	echo $encodedData;
?>