<!doctype html>
<html>
<head>

	<title>Kolcarguesas - El Juego</title>

	<meta charset="utf-8">

	<script src="http://code.jquery.com/jquery-2.1.4.min.js"></script>
	<script src="https://code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>

	<script src="js/objects.js"></script>
	<script src="js/functions.js"></script>
	<script src="js/tasktext.js"></script>
	<script src="js/script.js"></script>

	<link rel="stylesheet" href="css/style.css" type="text/css" />

</head>
<body>
<div class="overlay"></div>
<div class="box"></div>

	<center class="header">
		<h1>Kolcarguesas</h1>
		<p style="padding: 0;">Desarrollado por CristianHG<br></p>
		<small style="margin: 0; padding: 0;">Coloca el puntero encima de los objetos para saber sobre ellos</small>
	</center>

	<div class="container">

		<div class="column full" style="text-align: center;">
			<span id="kolcarhamtext">Kolcar Hamburguesas:</span> 

			<span id="kolcarham_amount">0 </span>

			<div class="separator">&bull;</div> 
			<span id="kolcarguestext">Kolcarguesas:</span> 

			<span id="kolcargues_amount">0 </span>

			<div class="separator">&bull;</div> 
			<span id="samphamtext">SA:MP Hamburguesas:</span> 

			<span id="sampham_amount">0 </span>

			<div class="separator">&bull;</div> 
			<span style="font-weight: bold; color: green;">Dólarguesas (&sect;):</span> 

			<span id="dolargues_amount">0</span>
		</div>

		<div class="floats">

			<div class="column left">
				<h2>Hamburguesas</h2>

				<hr>

				<a href="#" class="option" id="kolcarham" data-type="0">
					<div class="content">
						Kolcar hamburguesa
						<span>1/1 sec</span>
					</div>

					<div class="progress"></div>
				</a>
				<a href="#" class="option" id="kolcargues" data-type="0">
					<div class="content">
						Kolcarguesa
						<span>1/4 sec</span>
					</div>

					<div class="progress"></div>
				</a>
				<a href="#" class="option" id="sampham" data-type="0">
					<div class="content">
						SA:MP hamburguesa
						<span>1/7 sec</span>
					</div>

					<div class="progress"></div>
				</a>
			</div>

			<div class="column right">
				<h2>Ayudantes</h2>

				<hr>

				<a href="#" class="option" id="human_resources" data-type="2" data-wrap="pre">
					<div class="content">
						Recursos humanos
					</div>

					<div class="progress"></div>
				</a>
				<a href="#" class="option" id="faster_cooking" data-type="2" data-wrap="pre">
					<div class="content">
						Contratar a un chef
					</div>

					<div class="progress"></div>
				</a>
				<a href="#" class="option" id="do_marketing" data-type="2" data-wrap="pre">
					<div class="content">
						Hacer mercadeo
					</div>

					<div class="progress"></div>
				</a>
				<a href="#" class="option" id="sync" data-type="2" data-wrap="pre">
					<div class="content">
						Mejorar sincronización
					</div>

					<div class="progress"></div>
				</a>
			</div>

			<div class="column center">
				<h2>Trabajos</h2>

				<hr>
			
				<a href="#" class="option" id="codesamp" data-type="1" data-wrap="pre">
					<div class="content">
						Programar SA:MP
					</div>

					<div class="progress"></div>
				</a>
				<a href="#" class="option" id="rapespookie" data-type="1">
					<div class="content">
						Violar a Spookie
					</div>
					
					<div class="progress"></div>
				</a>
				<a href="#" class="option" id="dopaja" data-type="1">
					<div class="content">
						Hacerse una paja
					</div>

					<div class="progress"></div>
				</a>
			</div>

		</div>

		<div class="column full" style="text-align: left;">
			<h2 style="text-align: left; display: inline;">Vender hamburguesas : </h2>
			<a href="#" class="button_sell" data-sell="kolcarham" style="background: black; margin-left: 3%; color: rgba(255, 255, 255, .7);">Kolcarguesa</a>
			<a href="#" class="button_sell" data-sell="kolcargues" style="background: brown; margin-left: 1%; color: rgba(255, 255, 255, .7);">Kolcar Hamburguesa</a>
			<a href="#" class="button_sell" data-sell="sampham" style="background: orange; margin-left: 1%; color: rgba(255, 255, 255, .7);">SA:MP Hamburguesa</a>
		</div>

	</div>
</body>
</html>