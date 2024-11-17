<?php
	try {
		$conn = new PDO('mysql:host=localhost;dbname=donutdb;', 'root', '');
        $sql = "DELETE FROM donutdb.donuts WHERE ID = '".$_GET['ID']."';";
        $conn->exec($sql);
        echo "<script> location.href='http://localhost/projects/project3/admin.html?'; </script>";
    } catch(PDOException $e) {
        echo $sql . "<br>" . $e->getMessage();
    }  
    $conn = null;
?>