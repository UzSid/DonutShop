<?php
	try {
		$conn = new PDO('mysql:host=localhost;dbname=donutdb;', 'root', '');
        $sql = "INSERT INTO donutdb.donuts (Name, Description, Price) VALUES ('".$_GET['Name']."', '".$_GET['Description']."', '".$_GET['Price']."');";
        $conn->exec($sql);
        echo "<script> location.href='http://localhost/projects/project3/admin.html?'; </script>";
    } catch(PDOException $e) {
        echo $sql . "<br>" . $e->getMessage();
    }  
    $conn = null;
?>