$("document").ready(function(){


$("#pais").on("change",paises);

function paises(){

	var pais = new Array();



		pais [0,0] = "Colombia";
		pais [1,0] = "Brazil";
		pais [2,0] = "Puerto rico";

		pais[0,1] = "Bogota";
		pais[0,2] = "Manizales";
		pais[0,3] = "cucuta";

		pais[1,1] = "Aranales";
		pais[1,2] = "La nueva povincia";
		pais[1,3] = "Nueva Granada";

		pais[2,1] = "Puerto sur";
		pais[2,2] ="Puerto norte";
		pais[2,3] ="puerto occidente";


		alert("correcto");
}






});