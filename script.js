"use strict";

var cuentasRegistradas = [{usuario:"admin",clave:"iamtheboss"}];

// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------

function verificarDatosRegistrados(usuario,clave){

	let retorno;

	cuentasRegistradas.map(e=>{
		(e.usuario==usuario || e.clave==clave)?retorno=true:retorno=false;
	});

	return retorno;
}

// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------

function construirVentanaModal(texto_1="",texto_2){
	
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
	`);

	articuloVentanaModal.setAttribute("style","text-align:center;");

	primerParrafoVentanaModal.setAttribute("class","parrafo-ventana-modal");
	primerParrafoVentanaModal.textContent=texto_1;

	segundoParrafoVentanaModal.setAttribute("class","parrafo-ventana-modal");
	segundoParrafoVentanaModal.textContent=texto_2;

	botonVentanaModal.setAttribute("style",`
		color:white;
		background-color: #4A8D4A;
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

	let bm_iniciar_sesion = document.querySelector("#boton-menu-iniciar-sesion"),
		bm_registro = document.querySelector("#boton-menu-registro"),
		botonISVolver = document.querySelector("#boton-inicio-de-sesion-volver"),
		botonRegVolver = document.querySelector("#breg-volver"),
		botonAcercaDe = document.querySelector("#boton-menu-acercade");


	bm_iniciar_sesion.addEventListener("click",()=>{
		document.querySelector("#menu-principal").style.display="none";
		document.querySelector("#interfaz-inicio-de-sesion").style.display="flex";
	});

	bm_registro.addEventListener("click",()=>{
		document.querySelector("#menu-principal").style.display="none";
		document.querySelector("#interfaz-registro").style.display="flex";
	});

	botonISVolver.addEventListener("click",()=>{
		document.querySelector("#menu-principal").style.display="flex";
		document.querySelector("#interfaz-inicio-de-sesion").style.display="none";
	});

	botonRegVolver.addEventListener("click",()=>{
		document.querySelector("#menu-principal").style.display="flex";
		document.querySelector("#interfaz-registro").style.display="none";
	});

	botonAcercaDe.addEventListener("click",()=>{

		// Se añaden los elementos al documento

		document.querySelector("body").insertAdjacentElement("beforeEnd",construirVentanaModal("Desarrollado por: Jesús Velásquez","Versión: Beta"));

		document.querySelector(".cerrar-ventana-modal").addEventListener("click",()=>{
			document.querySelector("body").removeChild(document.querySelector(".ventana-modal"));
		});
	});
}

// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------

function Evento_de_Registro(){
	document.querySelector("#registrarse").addEventListener("click",()=>{

		// Se extraen los datos de los formularios.

		let datos_de_registro ={
			nombre_de_usuario:document.querySelector("input[name='reg-usuario']").value,
			clave:document.querySelector("input[name='reg-clave']").value,
			confirmar_usuario:document.querySelector("input[name='reg-confirmar-usuario']").value,
			confirmar_clave:document.querySelector("input[name='reg-confirmar-clave']").value
		};

		// Se filtran los datos para confirmar que son correctos.

		if(datos_de_registro.nombre_de_usuario.length==0 || datos_de_registro.nombre_de_usuario.length<5){

			document.querySelector("body").insertAdjacentElement("beforeEnd",
				construirVentanaModal(`
					No es posible registrar estos datos`,`
					El nombre de usuario debe contener mínimo 5 caracteres.`
				)
			);

			document.querySelector(".cerrar-ventana-modal").addEventListener("click",()=>{
				document.querySelector("body").removeChild(document.querySelector(".ventana-modal"));
			});

		}else if(datos_de_registro.clave.length==0 || datos_de_registro.clave.length<5){

			document.querySelector("body").insertAdjacentElement("beforeEnd",
				construirVentanaModal(`
					No es posible registrar estos datos`,`
					La clave debe contener mínimo 6 caracteres.`
				)
			);

			document.querySelector(".cerrar-ventana-modal").addEventListener("click",()=>{
				document.querySelector("body").removeChild(document.querySelector(".ventana-modal"));
			});

		}else if(datos_de_registro.nombre_de_usuario != datos_de_registro.confirmar_usuario){

			document.querySelector("body").insertAdjacentElement("beforeEnd",
				construirVentanaModal(`
					No es posible registrar estos datos`,`
					Los nombres de usuario no coinciden.`
				)
			);

			document.querySelector(".cerrar-ventana-modal").addEventListener("click",()=>{
				document.querySelector("body").removeChild(document.querySelector(".ventana-modal"));
			});

		}else if(datos_de_registro.clave != datos_de_registro.confirmar_clave){

			document.querySelector("body").insertAdjacentElement("beforeEnd",
				construirVentanaModal(`
					No es posible registrar estos datos`,`
					Las contraseñas no coinciden.`
				)
			);

			document.querySelector(".cerrar-ventana-modal").addEventListener("click",()=>{
				document.querySelector("body").removeChild(document.querySelector(".ventana-modal"));
			});

		}else{

			document.querySelector("#registrarse").style.display="none";
			document.querySelector("#breg-volver").style.display="none";
			document.querySelector("#interfaz-registro").style.opacity="0.5";

			document.querySelector("input[name='reg-usuario']").setAttribute("disabled","true");
			document.querySelector("input[name='reg-clave']").setAttribute("disabled","true");
			document.querySelector("input[name='reg-confirmar-usuario']").setAttribute("disabled","true");
			document.querySelector("input[name='reg-confirmar-clave']").setAttribute("disabled","true");

			// --------------------------------------------------------------
			// --------------------------------------------------------------
			// --------------------------------------------------------------

			// En lugar de un setTimeout() debería ir el código que comunica con 
			// la base de datos.

			setTimeout(()=>{

				if(verificarDatosRegistrados(datos_de_registro.nombre_de_usuario,datos_de_registro.clave)){

					document.querySelector("body").insertAdjacentElement("beforeEnd",
						construirVentanaModal(`No es posible registrar estos datos`,`
							El usuario o la contraseña ya existen.`
						)
					);

					document.querySelector(".cerrar-ventana-modal").addEventListener("click",()=>{
						document.querySelector("body").removeChild(document.querySelector(".ventana-modal"));
					});

					document.querySelector("#registrarse").style.display="inline";
					document.querySelector("#breg-volver").style.display="inline";

					document.querySelector("input[name='reg-usuario']").value="";
					document.querySelector("input[name='reg-clave']").value="";
					document.querySelector("input[name='reg-confirmar-usuario']").value="";
					document.querySelector("input[name='reg-confirmar-clave']").value="";
					
					document.querySelector("input[name='reg-usuario']").removeAttribute("disabled");
					document.querySelector("input[name='reg-clave']").removeAttribute("disabled");
					document.querySelector("input[name='reg-confirmar-usuario']").removeAttribute("disabled");
					document.querySelector("input[name='reg-confirmar-clave']").removeAttribute("disabled");

					document.querySelector("#interfaz-registro").style.opacity="1";

				}else{

					// ----------------------------------------------------------------
					// ----------------------------------------------------------------
					// ----------------------------------------------------------------
					// ----------------------------------------------------------------

					// En este espacio de código se podría implementar la comunicación
					// con la base de datos luego de eliminar el setTimeout() donde 
					// está todo anidado.

					let datosDeUsuario = {
						usuario:datos_de_registro.nombre_de_usuario,
						clave:datos_de_registro.clave
					};

					cuentasRegistradas.push(datosDeUsuario);

					// ----------------------------------------------------------------
					// ----------------------------------------------------------------
					// ----------------------------------------------------------------
					// ----------------------------------------------------------------

					document.querySelector("body").insertAdjacentElement("beforeEnd",
						construirVentanaModal(``,`
							Te has registrado en la base de datos correctamente.`
						)
					);

					document.querySelector(".cerrar-ventana-modal").addEventListener("click",()=>{
						document.querySelector("body").removeChild(document.querySelector(".ventana-modal"));
					});

					document.querySelector("#registrarse").style.display="inline";
					document.querySelector("#breg-volver").style.display="inline";

					document.querySelector("input[name='reg-usuario']").value="";
					document.querySelector("input[name='reg-clave']").value="";
					document.querySelector("input[name='reg-confirmar-usuario']").value="";
					document.querySelector("input[name='reg-confirmar-clave']").value="";
					
					document.querySelector("input[name='reg-usuario']").removeAttribute("disabled");
					document.querySelector("input[name='reg-clave']").removeAttribute("disabled");
					document.querySelector("input[name='reg-confirmar-usuario']").removeAttribute("disabled");
					document.querySelector("input[name='reg-confirmar-clave']").removeAttribute("disabled");

					document.querySelector("#interfaz-registro").style.opacity="1";
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
			usuario:document.querySelector("input[name='usuario']").value,
			clave:document.querySelector("input[name='clave']").value
		};

		if(verificarDatosRegistrados(datos.usuario,datos.clave)){

			document.querySelector("#iniciar-sesion").style.display="none";
			document.querySelector("#boton-inicio-de-sesion-volver").style.display="none";
			document.querySelector("#interfaz-inicio-de-sesion").style.opacity="0.5";

			document.querySelector("input[name='usuario']").setAttribute("disabled","true");
			document.querySelector("input[name='clave']").setAttribute("disabled","true");

			setTimeout(()=>{
				document.querySelector("body").insertAdjacentElement("beforeEnd",
					construirVentanaModal(``,`
						Has iniciado sesión correctamente.`
					)
				);

				document.querySelector(".cerrar-ventana-modal").addEventListener("click",()=>{
					document.querySelector("body").removeChild(document.querySelector(".ventana-modal"));
				});

				document.querySelector("#iniciar-sesion").style.display="inline";
				document.querySelector("#boton-inicio-de-sesion-volver").style.display="inline";

				document.querySelector("input[name='usuario']").value="";
				document.querySelector("input[name='clave']").value="";
					
				document.querySelector("input[name='usuario']").removeAttribute("disabled");
				document.querySelector("input[name='clave']").removeAttribute("disabled");

				document.querySelector("#interfaz-inicio-de-sesion").style.opacity="1";
			},3000);

		}else{

			document.querySelector("#iniciar-sesion").style.display="none";
			document.querySelector("#boton-inicio-de-sesion-volver").style.display="none";
			document.querySelector("#interfaz-inicio-de-sesion").style.opacity="0.5";

			document.querySelector("input[name='usuario']").setAttribute("disabled","true");
			document.querySelector("input[name='clave']").setAttribute("disabled","true");

			setTimeout(()=>{
				document.querySelector("body").insertAdjacentElement("beforeEnd",
					construirVentanaModal(``,`
						El usuario o la contraseña es incorrecto. Inténtelo de nuevo.`
					)
				);

				document.querySelector(".cerrar-ventana-modal").addEventListener("click",()=>{
					document.querySelector("body").removeChild(document.querySelector(".ventana-modal"));
				});

				document.querySelector("#iniciar-sesion").style.display="inline";
				document.querySelector("#boton-inicio-de-sesion-volver").style.display="inline";

				document.querySelector("input[name='usuario']").value="";
				document.querySelector("input[name='clave']").value="";
					
				document.querySelector("input[name='usuario']").removeAttribute("disabled");
				document.querySelector("input[name='clave']").removeAttribute("disabled");

				document.querySelector("#interfaz-inicio-de-sesion").style.opacity="1";
			},3000);
		}
	});
}

// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------

window.addEventListener("load",()=>{

	Eventos_del_Menu_Principal();
	Evento_de_Registro();
	Evento_de_Inicio_de_Sesion();

});

