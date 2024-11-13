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
	file_put_contents('data.json', $encodedData);
	//$conn = null;
?>

<html>
	<body>
	<script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
	<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>

	<p id="p2"></p>

	<div id="like_button_container"></div>

	<script>
		fetch("data.json")
		.then(response => response.json())
		.then(json => {
		let content = "";
		json.forEach(donut => {
			content += donut.Name;
			content += " costs ";
			content += donut.Price;
			content += "<br><br>";
		});
		document.getElementById("p2").innerHTML = content;
	});

		const e = React.createElement;

		class LikeButton extends React.Component {
			render() {
				return "redirectUrl";
			}
		}

		const domContainer = document.querySelector('#like_button_container');
		const root = ReactDOM.createRoot(domContainer);
		root.render(e(LikeButton));

	</script>
	</body>
</html>