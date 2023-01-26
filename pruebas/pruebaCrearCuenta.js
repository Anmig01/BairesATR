//////// Funciones que me gustan///////////////

function opacarFondo(opacidad){
	let cortina = document.querySelector("#cortina");
	cortina.style.display = "flex";
	cortina.style.background = "#000";
	cortina.style.opacity = opacidad;
	cortina.style.alignItems = "center";
	cortina.style.justifyContent = "center";
}
////////////////////////////////
////////////////// Funciones a cambiar/////////////
function crearPopUp(componente, contenedor){
	let ventana = document.createElement(componente);
	let contenedorPopUp = document.querySelector(contenedor);
	ventana.setAttribute("id","popUp");
	//contenido del elemento
	ventana.style.width = "500px";
	ventana.style.height = "500px";
	ventana.style.background = "#555";
	return(ventana);
}
var popUp = crearPopUp();

function desplegarPopUp() {
	//Crear un popUp que muestre dos campos para ingresar el usuario y la contraseña
	//Opacar el fondo
	opacarFondo("0.5");
	// Desplegar ventana de inicio de sesion
	crearPopUp("div","body");

}
//////////////////////////////////////
////////////////////////////////////
var boton = document.getElementById("btnResgistrarse");
boton.addEventListener("click",desplegarPopUp);

let contenedorPopUp = document.querySelector("#cortina");

var cortina = document.querySelector("#cortina");
cortina.addEventListener("click",()=>{
	//popUp.remove();
	cortina.removeChild(popUp);
	cortina.style.display = "none";

})