<!DOCTYPE html>
<html>
<head>
	<title>Biodata</title>
	<style>
		body {
			margin: 0;
			overflow: hidden;
		}

		.container {
			position: relative;
			width: 100%;
			height: 100vh;
			background-color: #000;
		}

		.star {
			position: absolute;
			width: 2px;
			height: 2px;
			background-color: #FFF;
			border-radius: 50%;
			animation: twinkling-stars linear infinite;
		}

		@keyframes twinkling-stars {
			0%   { opacity: 1; }
			50%  { opacity: 0.5; }
			100% { opacity: 1; }
		}

		.display {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 80%;
			height: 70vh;
			background-color: rgba(255, 255, 255, 0.9);
			border-radius: 10px;
			padding: 20px;
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
		}

		h1 {
			text-align: center;
			font-size: 24px;
			margin-top: 0;
		}

		p {
			line-height: 1.6;
			font-size: 16px;
			text-align: justify;
		}
	</style>
</head>
<body>
	<div class="container">
		<div class="display">
			<h1>Biodata</h1>
			<p>
				Your biodata information goes here.
			</p>
		</div>

		<!-- Twinkling Stars -->
		<div class="star" style="top: 50px; left: 100px;"></div>
		<div class="star" style="top: 150px; left: 250px;"></div>
		<div class="star" style="top: 200px; left: 500px;"></div>
		<!-- Add more stars as desired -->

	</div>
</body>
</html>
