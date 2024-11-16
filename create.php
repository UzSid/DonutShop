<?php
	try {
		$conn = new PDO('mysql:host=localhost;dbname=donutdb;', 'root', '');
        $sql = "INSERT INTO donutdb.donuts (Name, Description, Price) VALUES ('".$_GET['Name']."', '".$_GET['Description']."', '".$_GET['Price']."');";
        $conn->exec($sql);
        echo "New record created successfully";
    } catch(PDOException $e) {
        echo $sql . "<br>" . $e->getMessage();
    }  
    $conn = null;
?>

<html>
<body>

<br><br>Welcome <?php echo $_GET["Name"]; ?><br>
Your email address is: <?php echo $_GET["Price"]; ?><br>
and also <?php echo $_GET["Description"]; ?><br><br>
<a href="http://localhost/projects/project3/admin.html?">Return to admin page (Then refresh the page to show changes)</a>
</body>
</html>