$("document").ready(function(){

$("#scombos").click(paises);

function paises(){

	var pais = new Array();
	var colombia = new Array();
	var brazil = new Array();
	var puertorico = new Array();



		pais[0] = "Colombia";
		pais[1] = "Brazil";
		pais[2] = "Puerto rico";

		colombia[0] = "Bogota";
		colombia[1] = "Manizales";
		colombia[2] = "cucuta";

		brazil[0] = "Aranales";
		brazil[1] = "La nueva povincia";
		brazil[2] = "Nueva Granada";

		puertorico[0] = "Puerto sur";
		puertorico[1] = "Puerto norte";
		puertorico[2] = "puerto occidente";


		$("#busqueda").attr('class', '');

		/*for (var i = .length - 1; i >= 0; i--) {
			[i]
		}*/


		for (var i = pais.length - 1; i >= 0; i--) {

			$("#busqueda").html($("#busqueda").html() + "<option>" + pais[i] + "</option>");
		}

		$(document).ready(function(){

			$("#busqueda").change(function(){

				$("#busqueda1").attr('class', '');

				$("#busqueda1").html("");

				if ($("#busqueda").val() == 'Colombia'){

					for (var i = colombia.length - 1; i >= 0; i--) {



						$("#busqueda1").html($("#busqueda1").html() + "<option>" + colombia[i] + "</option>");


					}


				}else if ($("#busqueda").val() == 'Brazil'){

					for (var i = brazil.length - 1; i >= 0; i--) {



						$("#busqueda1").html($("#busqueda1").html() + "<option>" + brazil[i] + "</option>");


					}


				}else if ($("#busqueda").val() == 'Puerto rico'){

					for (var i = puertorico.length - 1; i >= 0; i--) {



						$("#busqueda1").html($("#busqueda1").html() + "<option>" + puertorico[i] + "</option>");


					}


				}

				$(document).ready(function() { $("#busqueda1").select2(); });

			});



		});

$(document).ready(function() { $("#busqueda").select2(); });

}






});