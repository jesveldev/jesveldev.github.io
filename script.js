"use strict";

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

		// Se creará una nueva ventana modal para añadirla al documento

		let ventanaModal = document.createElement("DIV"),
			articuloVentanaModal = document.createElement("ARTICLE"),
			primerParrafoVentanaModal = document.createElement("P"),
			segundoParrafoVentanaModal = document.createElement("P"),
			botonVentanaModal = document.createElement("BUTTON");

		// Se configuran los elementos con estilos y clases

		ventanaModal.setAttribute("class","ventana-modal-acercade");
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
		`);

		articuloVentanaModal.setAttribute("style","text-align:center;");

		primerParrafoVentanaModal.setAttribute("class","parrafo-ventana-modal-acercade");
		primerParrafoVentanaModal.textContent="Desarrollado por: Jesús Velásquez.";

		segundoParrafoVentanaModal.setAttribute("class","parrafo-ventana-modal-acercade");
		segundoParrafoVentanaModal.textContent="Versión: Beta";

		botonVentanaModal.setAttribute("style",`
							color:white;
							background-color: #4A8D4A;
							border:none;
							border-radius:5px;
							padding:2%;
							margin-top:5%;
							cursor:pointer;
		`);

		botonVentanaModal.setAttribute("class","cerrar-ventana-modal-acercade");
		botonVentanaModal.textContent="Cerrar";

		// Se anidan los elementos entre si

		articuloVentanaModal.appendChild(primerParrafoVentanaModal);
		articuloVentanaModal.appendChild(segundoParrafoVentanaModal);
		articuloVentanaModal.appendChild(botonVentanaModal);

		ventanaModal.appendChild(articuloVentanaModal);

		// Se añaden los elementos al documento

		document.querySelector("body").insertAdjacentElement("beforeEnd",ventanaModal);

		document.querySelector(".cerrar-ventana-modal-acercade").addEventListener("click",()=>{
			document.querySelector("body").removeChild(document.querySelector(".ventana-modal-acercade"));
		});
	});
}

function Eventos_de_Registro(){
	// Code
}

function Eventos_de_Inicio_de_Sesion(){
	// Code
}


window.addEventListener("load",()=>{

	Eventos_del_Menu_Principal();
	Eventos_de_Registro();
	Eventos_de_Inicio_de_Sesion();

});

