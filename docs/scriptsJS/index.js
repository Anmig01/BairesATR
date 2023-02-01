window.onload = function () {
	//todo el codigo va aqui
	//  ****  Funciones  ****

	function cambiaImg(direccion,circulos,imgEvento) {
		if (direccion == "Izq") {
			actualImg--;
			if(actualImg < 0){
				actualImg = 0;
			}
		}
		else if(direccion == "Der"){
			actualImg++;
			if(actualImg > circulos.length){
				actualImg = circulos.length;
			}			
		}

		circulos[actualImg].className = "fa-solid fa-circle";
		imgEvento.src = imgsUrl[actualImg]; 


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
	let imgEvento = document.getElementById("imgEvento");
	var imgsUrl = [
		"./Imagenes/test.jpg",
		"./Imagenes/EventoFinAño.jpg",
		"./Imagenes/EventoAñoNuevo.jpg",
		"./Imagenes/EventoMusica.jpg"
		];

	btnIzq.onclick = function(){
		cambiaImg("Izq",circulos,imgEvento);
	}
	btnDer.onclick = function(){
		cambiaImg("Der",circulos,imgEvento);
	}	
}