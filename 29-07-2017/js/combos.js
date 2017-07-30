var bogota = new Array();
var armenia = new Array();
var bolivar = new Array();

var anzoategui = new Array();
var apure = new Array();
var aragua = new Array();

var colonia = new Array();
var republicapresidencial = new Array();
var petorca = new Array();

function colombia(){

	var ciudad = document.getElementById("ciudad");
	var barrio = document.getElementById("barrio");

	bogota[0] = "Ciudad bolivar";
	bogota[1] = "Juan rey";
	bogota[2] = "Suba";

	armenia[0] = "Arenales";
	armenia[1] = "Arrayanes";
	armenia[2] = "San jose";

	bolivar[0] = "Cartajena de indias";
	bolivar[1] = "Magange";
	bolivar[2] = "Cicuco";
		
	if (ciudad.value=="Ciudad") {


		barrio.innerHTML = "<option>Seleccione ciudad</option>";



	}else if (ciudad.value=="Bogota") {

			barrio.innerHTML = "";

		for (var i = 0; i < bogota.length; i++) {

			barrio.innerHTML=barrio.innerHTML + "<option>" + bogota[i] +"</option>";

			}


	}else if (ciudad.value=="Armenia") {

			barrio.innerHTML = "";

		for (var i = 0; i < armenia.length; i++) {

			barrio.innerHTML=barrio.innerHTML + "<option>" + armenia[i] +"</option>";

			}

	}else if(ciudad.value=="Bolivar"){


			barrio.innerHTML = "";

		for (var i = 0; i < bolivar.length; i++) {

			barrio.innerHTML=barrio.innerHTML + "<option>" + bolivar[i] +"</option>";


			}


	}

}

function venezuela(){

	var ciudad = document.getElementById("ciudad");
	var barrio = document.getElementById("barrio");

	anzoategui[0] = "Barcelona";
	anzoategui[1] = "Monagas";
	anzoategui[2] = "Peñalver";

	apure[0] = "San Fernando de Apure";
	apure[1] = "Camejo";
	apure[2] = "San jose";

	aragua[0] = "Maracay";
	aragua[1] = "Ribas";
	aragua[2] = "Rafael";
		
	if (ciudad.value=="Ciudad") {


		barrio.innerHTML = "<option>Seleccione ciudad</option>";



	}else if (ciudad.value=="anzoategui") {

			barrio.innerHTML = "";

		for (var i = 0; i < anzoategui.length; i++) {

			barrio.innerHTML=barrio.innerHTML + "<option>" + anzoategui[i] +"</option>";

			}


	}else if (ciudad.value=="apure") {

			barrio.innerHTML = "";

		for (var i = 0; i < apure.length; i++) {

			barrio.innerHTML=barrio.innerHTML + "<option>" + apure[i] +"</option>";

			}

	}else if(ciudad.value=="aragua"){


			barrio.innerHTML = "";

		for (var i = 0; i < aragua.length; i++) {

			barrio.innerHTML=barrio.innerHTML + "<option>" + aragua[i] +"</option>";


			}


	}

}

function chile(){

	var ciudad = document.getElementById("ciudad");
	var barrio = document.getElementById("barrio");

	colonia[0] = "Santiago";
	colonia[1] = "La Serena";
	colonia[2] = "Cuyo";

	republicapresidencial[0] = "Tacna";
	republicapresidencial[1] = "Tarapaca";
	republicapresidencial[2] = "Antofagasta";

	petorca[0] = "Quillota";
	petorca[1] = "la ligua";
	petorca[2] = "Los andes";
		
	if (ciudad.value=="Ciudad") {


		barrio.innerHTML = "<option>Seleccione ciudad</option>";



	}else if (ciudad.value=="colonia") {

			barrio.innerHTML = "";

		for (var i = 0; i < colonia.length; i++) {

			barrio.innerHTML=barrio.innerHTML + "<option>" + colonia[i] +"</option>";

			}


	}else if (ciudad.value=="republica presidencial") {

			barrio.innerHTML = "";

		for (var i = 0; i < republicapresidencial.length; i++) {

			barrio.innerHTML=barrio.innerHTML + "<option>" + republicapresidencial[i] +"</option>";

			}

	}else if(ciudad.value=="petorca"){


			barrio.innerHTML = "";

		for (var i = 0; i < petorca.length; i++) {

			barrio.innerHTML=barrio.innerHTML + "<option>" + petorca[i] +"</option>";


			}


	}

}

