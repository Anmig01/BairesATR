window.onload = function () {
	//todo el codigo va aqui
	//  ****  Funciones  ****
	function mueveCirculo(direccion,circulos) {
		if (direccion == "Izq") {
			actualImg--;
			if(actualImg < 0){
				actualImg = 0;
			}
		}
		else if(direccion == "Der"){
			actualImg++;
			if(actualImg > 2){
				actualImg = 2
			}			
		}
		circulos[actualImg].className = "fa-solid fa-circle";

		for (let indice = 0; indice < circulos.length; indice++) {
				if(indice == actualImg){
					continue;
				}
				circulos[indice].className = "fa-regular fa-circle"; 
			}	
	}
//  *********   Ejecucion Main   ***********
	let circulos = document.getElementsByClassName("fa-circle");
	var actualImg = 0;
	let btnIzq = document.getElementById("arrIzq");
	let btnDer = document.getElementById("arrDer");

	btnIzq.onclick = function(){
		mueveCirculo("Izq",circulos);
	}
	btnDer.onclick = function(){
		mueveCirculo("Der",circulos);
	}	
}