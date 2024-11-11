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
	$stmt = $conn->query("SELECT * FROM donutdb.donuts");
	while ($row = $stmt->fetch())
	{
		$rows[] = $row;
		echo $row['Name'] . "\n";
	}
	//$encodedData = json_encode($rows);
	$conn = null;
	$someVar = 1;
?>

<script type="text/javascript">
	var javaScriptVar = "<?php echo $someVar; ?>";
</script>

<html>
<body>

<p id="p1">Hello World!</p>

<p id="p2">Hello World!</p>

<script>document.getElementById("p1").innerHTML = "<?php echo $someVar; ?>"</script>

<div id="like_button_container"></div>
<script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>

<script type="text/javascript">
    fetch($encodedData)
    .then(response => response.json())
    .then(json => {
      // loop through the array and use the data property, "name"
      // you could use a regular for loop also, but this syntax
      // is preferred
      let content = "";
      json.forEach(person => {
        content += person.Name;
        content += " is from ";
        content += person.Price;
      }); //end foreach
  });
</script>


<script type="text/javascript">
	var rows = <?php echo json_encode($rows);?>;
	document.getElementById("p2").innerHTML = rows.toString();
</script>

<script id="index_js" src="like_button.js" data-args="<?php echo $encodedData; ?>"></script>

</body>
</html>