<?php
	try {
		$conn = new PDO('mysql:host=localhost;dbname=donutdb;', 'root', '');
        $sql = "DELETE FROM donutdb.donuts WHERE ID = '".$_GET['ID']."';";
        $conn->exec($sql);
        echo "New record created successfully";
    } catch(PDOException $e) {
        echo $sql . "<br>" . $e->getMessage();
    }  
    $conn = null;
?>

<html>
<body>

<br><br>
<a href="http://localhost/projects/project3/admin.html?">Return to admin page (Then refresh the page to show changes)</a>
</body>
</html>