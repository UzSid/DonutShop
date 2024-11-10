		<?php //mysql:host.localhost:3306
	try {
		$conn = new PDO('mysql:host=localhost;dbname=donutdb;', 'root', '');
		//check the connection
		// set the PDO error mode to exception
		//echo "Connected successfully";
	} catch(PDOException $e) {
		echo "Connection failed: " . $e->getMessage();
	}
	//if we got here, the connection was successful
	$stmt = $conn->query("SELECT Name FROM donutdb.donuts");
	while ($row = $stmt->fetch())
	{
		echo $row['Name'] . "\n";
	}
	$conn = null;
?>