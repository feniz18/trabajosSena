

$(document).ready(function(){

	
var pulso = false;


	$("#combos").on('click',"#boton", function(){

			if (pulso == true){


				alert("por favor clickee en limpiar para hacer el calculo");


			}else{

				var valor1 = $("#fila1").val();
				var valor2 = $("#fila2").val();
				var valor3 = $("#fila3").val();
				var valor4 = $("#fila4").val();
				var valor5 = $("#fila5").val();
				var valor6 = $("#fila6").val();
				var valor7 = $("#fila7").val();
				var valor8 = $("#fila8").val();
				var valor9 = $("#fila9").val();

			

				if ((valor1 == "") && (valor2=="") && (valor3=="") && (valor4=="")&& (valor5=="")&& (valor6=="")&& (valor7=="") && (valor8=="")&& (valor9=="")) {


					alert("Debe digitar por lo menos un valor");


				}else if (valor1 != ""){

						i = valor1-1;
						z = 9;

						while (i!=valor1){

							

							if (i==0) {

								i = 9;

								continue;


							}
							
							$("#fila" + z).val(i);
							z--;
							i--;
							
						

						}

					pulso = true;


				}else if (valor2 != ""){

						i = valor2-1;
						z = 1;

						while (i!=valor2){

							

							if (i==0) {

								i = 9;

								continue;


							}
							
							$("#fila" + z).val(i);
							i--;

							if((z-1)==0){


								z = 10;

							}

							z--;
		

						}

				pulso = true;



				}else if (valor3 != ""){

						i = valor3-1;
						z = 2;

						while (i!=valor3){

							

							if (i==0) {

								i = 9;

								continue;


							}
							
							$("#fila" + z).val(i);
							i--;

							if((z-1)==0){


								z = 10;

							}

							z--;
		

						}

					pulso = true;



				}else if (valor4 != ""){

						i = valor4-1;
						z = 3;

						while (i!=valor4){

							

							if (i==0) {

								i = 9;

								continue;


							}
							
							$("#fila" + z).val(i);
							i--;

							if((z-1)==0){


								z = 10;

							}

							z--;
		

						}


					pulso = true;





				}else if (valor5 != ""){

						i = valor5-1;
						z = 4;

						while (i!=valor5){

							

							if (i==0) {

								i = 9;

								continue;


							}
							
							$("#fila" + z).val(i);
							i--;

							if((z-1)==0){


								z = 10;

							}

							z--;
		

						}

					pulso = true;


				}else if (valor6 != ""){

						i = valor6-1;
						z = 5;

						while (i!=valor6){

							

							if (i==0) {

								i = 9;

								continue;


							}
							
							$("#fila" + z).val(i);
							i--;

							if((z-1)==0){


								z = 10;

							}

							z--;
		

						}

					pulso = true;


				}else if (valor7 != ""){

						i = valor7-1;
						z = 6;

						while (i!=valor7){

							

							if (i==0) {

								i = 9;

								continue;


							}
							
							$("#fila" + z).val(i);
							i--;

							if((z-1)==0){


								z = 10;

							}

							z--;
		

						}

				pulso = true;


				}else if (valor8 != ""){

						i = valor8-1;
						z = 7;

						while (i!=valor8){

							

							if (i==0) {

								i = 9;

								continue;


							}
							
							$("#fila" + z).val(i);
							i--;

							if((z-1)==0){


								z = 10;

							}

							z--;
		

						}

				pulso = true;


				}else if (valor9 != ""){

						i = valor9-1;
						z = 8;

						while (i!=valor9){

							

							if (i==0) {

								i = 9;

								continue;


							}
							
							$("#fila" + z).val(i);
							i--;

							if((z-1)==0){


								z = 10;

							}

							z--;
		

						}

						pulso = true;
				}



			}

		});



		$("#combos").on("click","#limpiar",function(){



		 		$("#fila1").val("");
				$("#fila2").val("");
				$("#fila3").val("");
				$("#fila4").val("");
				$("#fila5").val("");
				$("#fila6").val("");
				$("#fila7").val("");
				$("#fila8").val("");
				$("#fila9").val("");

				pulso =false;




		});



});