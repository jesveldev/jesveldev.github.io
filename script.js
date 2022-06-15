"use strict";

var registeredAccounts = [{username:"admin",password:"iamtheboss"}];

// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------

function verifySavedData(username,password){

	let retorno;

	for (let i = 0; i < registeredAccounts.length; i++) {
		
		if(registeredAccounts[i].username==username || registeredAccounts[i].password==password){

			retorno=true;
			break;

		}else retorno=false;
	}

	return retorno;
}

function verificarInicioDeSesion(username,password){

	let retorno;

	for (let i = 0; i < registeredAccounts.length; i++) {
		
		if(registeredAccounts[i].username==username && registeredAccounts[i].password==password){

			retorno=true;
			break;

		}else retorno=false;
	}

	return retorno;
}

// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------

function buildModalWindow(texto_1="",texto_2){
	
	// Se creará una nueva ventana modal para añadirla al documento

	let ventanaModal = document.createElement("DIV"),
		articuloVentanaModal = document.createElement("ARTICLE"),
		primerParrafoVentanaModal = document.createElement("P"),
		segundoParrafoVentanaModal = document.createElement("P"),
		botonVentanaModal = document.createElement("BUTTON");

	// Se configuran los elementos con estilos y clases

	ventanaModal.setAttribute("class","ventana-modal");
	ventanaModal.setAttribute("style",`
		position:fixed;
		top:0;
		left:0;
		width:100%;
		height:100%;
		display:flex;
		flex-flow:row nowrap;
		justify-content:center;
		align-items:center;
		background-color:rgba(20,20,20,0.8);
		color:white;
		text-shadow:0px 0px 8px red;
		font-size:1.1em;
		font-weight:bold;
	`);

	articuloVentanaModal.setAttribute("style","text-align:center;");

	primerParrafoVentanaModal.setAttribute("class","parrafo-ventana-modal");
	primerParrafoVentanaModal.textContent=texto_1;

	segundoParrafoVentanaModal.setAttribute("class","parrafo-ventana-modal");
	segundoParrafoVentanaModal.textContent=texto_2;

	botonVentanaModal.setAttribute("style",`
		color:white;
		background:-webkit-linear-gradient(bottom,#DE2573,#FE4F30);
		border:none;
		border-radius:5px;
		padding:2%;
		margin-top:5%;
		cursor:pointer;
	`);

	botonVentanaModal.setAttribute("class","cerrar-ventana-modal");
	botonVentanaModal.textContent="Cerrar";

	// Se anidan los elementos entre si

	articuloVentanaModal.appendChild(primerParrafoVentanaModal);
	articuloVentanaModal.appendChild(segundoParrafoVentanaModal);
	articuloVentanaModal.appendChild(botonVentanaModal);

	ventanaModal.appendChild(articuloVentanaModal);

	return ventanaModal;
}

// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------

function Eventos_del_Menu_Principal(){

	let bm_iniciar_sesion = document.querySelector("#main-menu-button-login"),
		bm_signupistro = document.querySelector("#main-menu-button-signup"),
		botonISVolver = document.querySelector("#boton-inicio-de-sesion-volver"),
		botonsignupVolver = document.querySelector("#signup-back"),
		botonAcercaDe = document.querySelector("#main-menu-button-about");


	bm_iniciar_sesion.addEventListener("click",()=>{
		document.querySelector("#main-menu").style.display="none";
		document.querySelector("#login-interface").style.display="flex";
	});

	bm_signupistro.addEventListener("click",()=>{
		document.querySelector("#main-menu").style.display="none";
		document.querySelector("#signup-interface").style.display="flex";
	});

	botonISVolver.addEventListener("click",()=>{
		document.querySelector("#main-menu").style.display="flex";
		document.querySelector("#login-interface").style.display="none";
	});

	botonsignupVolver.addEventListener("click",()=>{
		document.querySelector("#main-menu").style.display="flex";
		document.querySelector("#signup-interface").style.display="none";
	});

	botonAcercaDe.addEventListener("click",()=>{

		// Se añaden los elementos al documento

		document.querySelector("body").insertAdjacentElement("beforeEnd",buildModalWindow("Desarrollado por: Jesús Velásquez","Versión: Beta"));

		document.querySelector(".cerrar-ventana-modal").addEventListener("click",()=>{
			document.querySelector("body").removeChild(document.querySelector(".ventana-modal"));
		});
	});
}

// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------

function Evento_de_signupistro(){
	document.querySelector("#signup").addEventListener("click",()=>{

		// Se extraen los datos de los formularios.

		let signupData ={
			username:document.querySelector("input[name='signup-username']").value,
			password:document.querySelector("input[name='signup-password']").value,
			confirm_username:document.querySelector("input[name='signup-confirm-username']").value,
			confirm_password:document.querySelector("input[name='signup-confirm-password']").value

		};

		// Se filtran los datos para confirmar que son correctos.

		if(signupData.username.length==0 || signupData.username.length<5){

			document.querySelector("body").insertAdjacentElement("beforeEnd",
				buildModalWindow(`
					No es posible signupistrar estos datos`,`
					El nombre de username debe contener mínimo 5 caracteres.`
				)
			);

			document.querySelector(".cerrar-ventana-modal").addEventListener("click",()=>{
				document.querySelector("body").removeChild(document.querySelector(".ventana-modal"));
			});

		}else if(signupData.password.length==0 || signupData.password.length<5){

			document.querySelector("body").insertAdjacentElement("beforeEnd",
				buildModalWindow(`
					No es posible signupistrar estos datos`,`
					La password debe contener mínimo 6 caracteres.`
				)
			);

			document.querySelector(".cerrar-ventana-modal").addEventListener("click",()=>{
				document.querySelector("body").removeChild(document.querySelector(".ventana-modal"));
			});

		}else if(signupData.username != signupData.confirm_username){

			document.querySelector("body").insertAdjacentElement("beforeEnd",
				buildModalWindow(`
					No es posible signupistrar estos datos`,`
					Los nombres de username no coinciden.`
				)
			);

			document.querySelector(".cerrar-ventana-modal").addEventListener("click",()=>{
				document.querySelector("body").removeChild(document.querySelector(".ventana-modal"));
			});

		}else if(signupData.password != signupData.confirm_password){

			document.querySelector("body").insertAdjacentElement("beforeEnd",
				buildModalWindow(`
					No es posible signupistrar estos datos`,`
					Las contraseñas no coinciden.`
				)
			);

			document.querySelector(".cerrar-ventana-modal").addEventListener("click",()=>{
				document.querySelector("body").removeChild(document.querySelector(".ventana-modal"));
			});

		}else{

			document.querySelector("#signup").style.display="none";
			document.querySelector("#signup-back").style.display="none";
			document.querySelector("#signup-interface").style.opacity="0.5";

			document.querySelector("input[name='signup-username']").setAttribute("disabled","true");
			document.querySelector("input[name='signup-password']").setAttribute("disabled","true");
			document.querySelector("input[name='signup-confirm-username']").setAttribute("disabled","true");
			document.querySelector("input[name='signup-confirm-password']").setAttribute("disabled","true");

			// --------------------------------------------------------------
			// --------------------------------------------------------------
			// --------------------------------------------------------------

			// En lugar de un setTimeout() debería ir el código que comunica con 
			// la base de datos.

			setTimeout(()=>{

				if(verifySavedData(signupData.username,signupData.password)){

					document.querySelector("body").insertAdjacentElement("beforeEnd",
						buildModalWindow(`Something went wrong`,`
							Password or username already exist.`
						)
					);

					document.querySelector(".cerrar-ventana-modal").addEventListener("click",()=>{
						document.querySelector("body").removeChild(document.querySelector(".ventana-modal"));
					});

					document.querySelector("#signup").style.display="inline";
					document.querySelector("#signup-back").style.display="inline";

					document.querySelector("input[name='signup-username']").value="";
					document.querySelector("input[name='signup-password']").value="";
					document.querySelector("input[name='signup-confirm-username']").value="";
					document.querySelector("input[name='signup-confirm-password']").value="";
					
					document.querySelector("input[name='signup-username']").removeAttribute("disabled");
					document.querySelector("input[name='signup-password']").removeAttribute("disabled");
					document.querySelector("input[name='signup-confirm-username']").removeAttribute("disabled");
					document.querySelector("input[name='signup-confirm-password']").removeAttribute("disabled");

					document.querySelector("#signup-interface").style.opacity="1";

				}else{

					// ----------------------------------------------------------------
					// ----------------------------------------------------------------
					// ----------------------------------------------------------------
					// ----------------------------------------------------------------

					// En este espacio de código se podría implementar la comunicación
					// con la base de datos luego de eliminar el setTimeout() donde 
					// está todo anidado.

					let userData = {
						username:signupData.username,
						password:signupData.password
					};

					registeredAccounts.push(userData);

					// ----------------------------------------------------------------
					// ----------------------------------------------------------------
					// ----------------------------------------------------------------
					// ----------------------------------------------------------------

					document.querySelector("body").insertAdjacentElement("beforeEnd",
						buildModalWindow(``,`
							Te has signupistrado en la base de datos correctamente.`
						)
					);

					document.querySelector(".cerrar-ventana-modal").addEventListener("click",()=>{
						document.querySelector("body").removeChild(document.querySelector(".ventana-modal"));
					});

					document.querySelector("#signup").style.display="inline";
					document.querySelector("#signup-back").style.display="inline";

					document.querySelector("input[name='signup-username']").value="";
					document.querySelector("input[name='signup-password']").value="";
					document.querySelector("input[name='signup-confirm-username']").value="";
					document.querySelector("input[name='signup-confirm-password']").value="";
					
					document.querySelector("input[name='signup-username']").removeAttribute("disabled");
					document.querySelector("input[name='signup-password']").removeAttribute("disabled");
					document.querySelector("input[name='signup-confirm-username']").removeAttribute("disabled");
					document.querySelector("input[name='signup-confirm-password']").removeAttribute("disabled");

					document.querySelector("#signup-interface").style.opacity="1";
				}

			}, 3000);
		}
	});
}

// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------

function Evento_de_Inicio_de_Sesion(){

	document.querySelector("#iniciar-sesion").addEventListener("click",()=>{

		let datos ={
			username:document.querySelector("input[name='username']").value,
			password:document.querySelector("input[name='password']").value
		};

		if(datos.username.length==0){

			document.querySelector("body").insertAdjacentElement("beforeEnd",
				buildModalWindow(``,`
					Coloque su nombre de username.`
				)
			);

			document.querySelector(".cerrar-ventana-modal").addEventListener("click",()=>{
				document.querySelector("body").removeChild(document.querySelector(".ventana-modal"));
			});

		}else if(datos.password.length==0){

			document.querySelector("body").insertAdjacentElement("beforeEnd",
				buildModalWindow(``,`
					Coloque su contraseña.`
				)
			);

			document.querySelector(".cerrar-ventana-modal").addEventListener("click",()=>{
				document.querySelector("body").removeChild(document.querySelector(".ventana-modal"));
			});

		}else if(verificarInicioDeSesion(datos.username,datos.password)){

			document.querySelector("#iniciar-sesion").style.display="none";
			document.querySelector("#boton-inicio-de-sesion-volver").style.display="none";
			document.querySelector("#login-interface").style.opacity="0.5";

			document.querySelector("input[name='username']").setAttribute("disabled","true");
			document.querySelector("input[name='password']").setAttribute("disabled","true");

			setTimeout(()=>{
				document.querySelector("body").insertAdjacentElement("beforeEnd",
					buildModalWindow(``,`
						Has iniciado sesión correctamente.`
					)
				);

				document.querySelector(".cerrar-ventana-modal").addEventListener("click",()=>{
					document.querySelector("body").removeChild(document.querySelector(".ventana-modal"));
				});

				document.querySelector("#iniciar-sesion").style.display="inline";
				document.querySelector("#boton-inicio-de-sesion-volver").style.display="inline";

				document.querySelector("input[name='username']").value="";
				document.querySelector("input[name='password']").value="";
					
				document.querySelector("input[name='username']").removeAttribute("disabled");
				document.querySelector("input[name='password']").removeAttribute("disabled");

				document.querySelector("#login-interface").style.opacity="1";
			},3000);

		}else{

			document.querySelector("#iniciar-sesion").style.display="none";
			document.querySelector("#boton-inicio-de-sesion-volver").style.display="none";
			document.querySelector("#login-interface").style.opacity="0.5";

			document.querySelector("input[name='username']").setAttribute("disabled","true");
			document.querySelector("input[name='password']").setAttribute("disabled","true");

			setTimeout(()=>{
				document.querySelector("body").insertAdjacentElement("beforeEnd",
					buildModalWindow(``,`
						El username o la contraseña es incorrecto. Inténtelo de nuevo.`
					)
				);

				document.querySelector(".cerrar-ventana-modal").addEventListener("click",()=>{
					document.querySelector("body").removeChild(document.querySelector(".ventana-modal"));
				});

				document.querySelector("#iniciar-sesion").style.display="inline";
				document.querySelector("#boton-inicio-de-sesion-volver").style.display="inline";

				document.querySelector("input[name='username']").value="";
				document.querySelector("input[name='password']").value="";
					
				document.querySelector("input[name='username']").removeAttribute("disabled");
				document.querySelector("input[name='password']").removeAttribute("disabled");

				document.querySelector("#login-interface").style.opacity="1";
			},3000);
		}
	});
}

// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------

window.addEventListener("load",()=>{

	Eventos_del_Menu_Principal();
	Evento_de_signupistro();
	Evento_de_Inicio_de_Sesion();

});

