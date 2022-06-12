<!DOCTYPE html>
<html lang="es">
	<head>
		<title>Tales Chamber - Base de Datos</title>
		<meta charset="utf-8">
		<!-- <link rel="stylesheet" href="bootstrap-5.1.3-dist/css/bootstrap.css"> -->
		<link rel="stylesheet" href="style.css">
	</head>

	<body>
		<section id="menu-principal">
			<button id="boton-menu-iniciar-sesion" class="boton-menu">Iniciar sesión</button>
			<button id="boton-menu-registro" class="boton-menu">Registro</button>
			<button id="boton-menu-acercade" class="boton-menu">Acerca de </button>
		</section>

		<section id="interfaz-inicio-de-sesion">
			<img src="img/S.png" id="logo">

			<div class="formulario">
				<input type="text" name="usuario" required maxlength="10" minlength="5" autocomplete="off" placeholder="Usuario">

				<input type="password" name="clave" required maxlength="10" minlength="5" autocomplete="off" placeholder="Contraseña">

				<button id="iniciar-sesion" class="boton-inicio-de-sesion">Entrar</button>
			</div>

			<button id="boton-inicio-de-sesion-volver" class="boton-inicio-de-sesion">Volver</button>
		</section>

		<section id="interfaz-registro">

			<h3 class="reg-label">Por favor, ingrese sus datos</h3>

			<div class="formulario">
				<input type="text" name="reg-usuario" required maxlength="10" minlength="5" autocomplete="off" placeholder="Usuario">

				<input type="password" name="reg-clave" required maxlength="10" minlength="6" autocomplete="off" placeholder="Contraseña">

				<input type="text" name="reg-confirmar-usuario" required maxlength="10" minlength="5" autocomplete="off" placeholder="Confirme su usuario">

				<input type="password" name="reg-confirmar-clave" required maxlength="10" minlength="5" autocomplete="off" placeholder="Confirme su contraseña">

				<button id="registrarse" class="breg">Registrarse</button>
			</div>

			<button id="breg-volver" class="breg">Volver</button>
		</section>
	</body>

	<script src="script.js"></script>
</html>