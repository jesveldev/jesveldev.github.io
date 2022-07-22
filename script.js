"use strict";

var registeredAccounts = [{username:"admin",password:"iamtheboss"}];

// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------

function verifySavedData(username,password){

	let returnsData;

	for (let i = 0; i < registeredAccounts.length; i++) {
		
		if(registeredAccounts[i].username==username || registeredAccounts[i].password==password){

			returnsData=true;
			break;

		}else returnsData=false;
	}

	return returnsData;
}

function verificarInicioDeSesion(username,password){

	let returnsData;

	for (let i = 0; i < registeredAccounts.length; i++) {
		
		if(registeredAccounts[i].username==username && registeredAccounts[i].password==password){

			returnsData=true;
			break;

		}else returnsData=false;
	}

	return returnsData;
}

// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------

function buildModalWindow(P1="",P2=""){
	
	// Here will be created a new modal window for add it to document

	let modalWindow = document.createElement("DIV"),
		modalWindowArticle = document.createElement("ARTICLE"),
		firstParagraphModalWindow = document.createElement("P"),
		secondParagraphModalWindow = document.createElement("P"),
		modalWindowButton = document.createElement("BUTTON");

	// Here are setting styles and classes to the elements

	modalWindow.setAttribute("class","modal-window");
	modalWindow.setAttribute("style",`
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

	modalWindowArticle.setAttribute("style","text-align:center;");

	firstParagraphModalWindow.setAttribute("class","modal-window-paragraph");
	firstParagraphModalWindow.textContent=P1;

	secondParagraphModalWindow.setAttribute("class","modal-window-paragraph");
	secondParagraphModalWindow.textContent=P2;

	modalWindowButton.setAttribute("style",`
		color:white;
		background:-webkit-linear-gradient(bottom,#DE2573,#FE4F30);
		border:none;
		border-radius:5px;
		padding:10px 15px;
		margin-top:5%;
		cursor:pointer;
	`);

	modalWindowButton.setAttribute("class","close-modal-window");
	modalWindowButton.textContent="Close";

	// Finally nesting the elements in their containers

	modalWindowArticle.appendChild(firstParagraphModalWindow);
	modalWindowArticle.appendChild(secondParagraphModalWindow);
	modalWindowArticle.appendChild(modalWindowButton);

	modalWindow.appendChild(modalWindowArticle);

	// Returning modal window's HTML element.

	return modalWindow;
}

// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------

function Main_Menu_Events(){

	let logInMenuButton = document.querySelector("#main-menu-button-login"),
		signUpMenuButton = document.querySelector("#main-menu-button-signup"),
		backLoginButton = document.querySelector("#back"),
		signUpBackButton = document.querySelector("#signup-back"),
		aboutMenuButton = document.querySelector("#main-menu-button-about");


	logInMenuButton.addEventListener("click",()=>{
		document.querySelector("#main-menu").style.display="none";
		document.querySelector("#login-interface").style.display="flex";
	});

	signUpMenuButton.addEventListener("click",()=>{
		document.querySelector("#main-menu").style.display="none";
		document.querySelector("#signup-interface").style.display="flex";
	});

	backLoginButton.addEventListener("click",()=>{
		document.querySelector("#main-menu").style.display="flex";
		document.querySelector("#login-interface").style.display="none";
	});

	signUpBackButton.addEventListener("click",()=>{
		document.querySelector("#main-menu").style.display="flex";
		document.querySelector("#signup-interface").style.display="none";
	});

	aboutMenuButton.addEventListener("click",()=>{

		// Se añaden los elementos al documento

		document.querySelector("body").insertAdjacentElement("beforeEnd",buildModalWindow("Developer: Jesús Velásquez","Version: Beta"));

		document.querySelector(".close-modal-window").addEventListener("click",()=>{
			document.querySelector("body").removeChild(document.querySelector(".modal-window"));
		});
	});
}

// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------

function Sign_Up_Event(){
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
					Something went wrong`,`
					Username must contain at least five characters.`
				)
			);

			document.querySelector(".close-modal-window").addEventListener("click",()=>{
				document.querySelector("body").removeChild(document.querySelector(".modal-window"));
			});

		}else if(signupData.password.length==0 || signupData.password.length<6){

			document.querySelector("body").insertAdjacentElement("beforeEnd",
				buildModalWindow(`
					Something went wrong`,`
					Password must contain at least six characters.`
				)
			);

			document.querySelector(".close-modal-window").addEventListener("click",()=>{
				document.querySelector("body").removeChild(document.querySelector(".modal-window"));
			});

		}else if(signupData.username != signupData.confirm_username){

			document.querySelector("body").insertAdjacentElement("beforeEnd",
				buildModalWindow(`
					Something went wrong`,`
					Usernames aren't equal.`
				)
			);

			document.querySelector(".close-modal-window").addEventListener("click",()=>{
				document.querySelector("body").removeChild(document.querySelector(".modal-window"));
			});

		}else if(signupData.password != signupData.confirm_password){

			document.querySelector("body").insertAdjacentElement("beforeEnd",
				buildModalWindow(`
					Something went wrong`,`
					Passwords aren't equal.`
				)
			);

			document.querySelector(".close-modal-window").addEventListener("click",()=>{
				document.querySelector("body").removeChild(document.querySelector(".modal-window"));
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

					document.querySelector(".close-modal-window").addEventListener("click",()=>{
						document.querySelector("body").removeChild(document.querySelector(".modal-window"));
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
							You have succesfully singed up.`
						)
					);

					document.querySelector(".close-modal-window").addEventListener("click",()=>{
						document.querySelector("body").removeChild(document.querySelector(".modal-window"));
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

function Login_Event(){

	document.querySelector("#login").addEventListener("click",()=>{

		let datos ={
			username:document.querySelector("input[name='username']").value,
			password:document.querySelector("input[name='password']").value
		};

		if(datos.username.length==0){

			document.querySelector("body").insertAdjacentElement("beforeEnd",
				buildModalWindow(``,`
					Insert your username.`
				)
			);

			document.querySelector(".close-modal-window").addEventListener("click",()=>{
				document.querySelector("body").removeChild(document.querySelector(".modal-window"));
			});

		}else if(datos.password.length==0){

			document.querySelector("body").insertAdjacentElement("beforeEnd",
				buildModalWindow(``,`
					Insert your password.`
				)
			);

			document.querySelector(".close-modal-window").addEventListener("click",()=>{
				document.querySelector("body").removeChild(document.querySelector(".modal-window"));
			});

		}else if(verificarInicioDeSesion(datos.username,datos.password)){

			document.querySelector("#login").style.display="none";
			document.querySelector("#back").style.display="none";
			document.querySelector("#login-interface").style.opacity="0.5";

			document.querySelector("input[name='username']").setAttribute("disabled","true");
			document.querySelector("input[name='password']").setAttribute("disabled","true");

			setTimeout(()=>{
				document.querySelector("body").insertAdjacentElement("beforeEnd",
					buildModalWindow(``,`
						Has iniciado sesión correctamente.`
					)
				);

				document.querySelector(".close-modal-window").addEventListener("click",()=>{
					document.querySelector("body").removeChild(document.querySelector(".modal-window"));
				});

				document.querySelector("#login").style.display="inline";
				document.querySelector("#back").style.display="inline";

				document.querySelector("input[name='username']").value="";
				document.querySelector("input[name='password']").value="";
					
				document.querySelector("input[name='username']").removeAttribute("disabled");
				document.querySelector("input[name='password']").removeAttribute("disabled");

				document.querySelector("#login-interface").style.opacity="1";
			},3000);

		}else{

			document.querySelector("#login").style.display="none";
			document.querySelector("#back").style.display="none";
			document.querySelector("#login-interface").style.opacity="0.5";

			document.querySelector("input[name='username']").setAttribute("disabled","true");
			document.querySelector("input[name='password']").setAttribute("disabled","true");

			setTimeout(()=>{
				document.querySelector("body").insertAdjacentElement("beforeEnd",
					buildModalWindow(``,`
						Incorrect username or password. Please try it again.`
					)
				);

				document.querySelector(".close-modal-window").addEventListener("click",()=>{
					document.querySelector("body").removeChild(document.querySelector(".modal-window"));
				});

				document.querySelector("#login").style.display="inline";
				document.querySelector("#back").style.display="inline";

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

	Main_Menu_Events();
	Sign_Up_Event();
	Login_Event();

});