

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

						if (valor1 == 1){

							$("#fila9").val(9);
							$("#fila2").val(parseInt(valor1)+1);
							
						
						}else if (valor1==9){


							$("#fila2").val(1);
							$("#fila9").val(parseInt(valor1)-1);

						}else{

							$("#fila2").val(parseInt(valor1)+1);
							$("#fila9").val(parseInt(valor1)-1);

						}
					
				


					pulso = true;


				}else if (valor2 != ""){

						if (valor2 == 1){

							
							$("#fila3").val(parseInt(valor2)+1);
							$("#fila1").val(9);
						
						}else if (valor2==9){


							$("#fila3").val(1);
							$("#fila1").val(parseInt(valor2)-1);

						}else{

							
							$("#fila3").val(parseInt(valor2)+1);
							$("#fila1").val(parseInt(valor2)-1);

						}

				pulso = true;



				}else if (valor3 != ""){

						if (valor3 == 1){

							
							$("#fila4").val(parseInt(valor3)+1);
							$("#fila2").val(9);
						
						}else if (valor3==9){


							$("#fila4").val(1);
							$("#fila2").val(parseInt(valor3)-1);

						}else{

							$("#fila4").val(parseInt(valor3)+1);
							$("#fila2").val(parseInt(valor3)-1);
							
							

						}

					pulso = true;



				}else if (valor4 != ""){

						if (valor4 == 1){

							
							$("#fila5").val(parseInt(valor4)+1);
							$("#fila3").val(9);
						
						}else if (valor4==9){


							$("#fila5").val(1);
							$("#fila3").val(parseInt(valor4)-1);

						}else{

							$("#fila5").val(parseInt(valor4)+1);
							$("#fila3").val(parseInt(valor4)-1);
							
							

						}

					pulso = true;





				}else if (valor5 != ""){

						if (valor5== 1){

							
							$("#fila6").val(parseInt(valor5)+1);
							$("#fila4").val(9);
						
						}else if (valor5==9){


							$("#fila6").val(1);
							$("#fila4").val(parseInt(valor5)-1);

						}else{

							$("#fila6").val(parseInt(valor5)+1);
							$("#fila4").val(parseInt(valor5)-1);
							
							

						}

					pulso = true;


				}else if (valor6 != ""){

						if (valor6 == 1){

							
							$("#fila5").val(parseInt(valor6)+1);
							$("#fila7").val(9);
						
						}else if (valor6==9){


							$("#fila5").val(1);
							$("#fila7").val(parseInt(valor6)-1);

						}else{

							$("#fila5").val(parseInt(valor6)+1);
							$("#fila7").val(parseInt(valor6)-1);
							
							

						}

				pulso = true;


				}else if (valor7 != ""){

						if (valor7 == 1){

							
							$("#fila8").val(parseInt(valor7)+1);
							$("#fila6").val(9);
						
						}else if (valor7==9){


							$("#fila8").val(1);
							$("#fila6").val(parseInt(valor7)-1);

						}else{

							$("#fila8").val(parseInt(valor7)+1);
							$("#fila6").val(parseInt(valor7)-1);
							
							

						}

				pulso = true;


				}else if (valor8 != ""){

						if (valor8== 1){

							
							$("#fila7").val(parseInt(valor8)+1);
							$("#fila9").val(9);
						
						}else if (valor8==9){


							$("#fila7").val(1);
							$("#fila9").val(parseInt(valor8)-1);

						}else{

							$("#fila7").val(parseInt(valor8)+1);
							$("#fila9").val(parseInt(valor8)-1);
							
							

						}

				pulso = true;


				}else if (valor9 != ""){

						if (valor9 == 1){

							
							$("#fila1").val(parseInt(valor9)+1);
							$("#fila8").val(9);
						
						}else if (valor9==9){


							$("#fila1").val(1);
							$("#fila8").val(parseInt(valor9)-1);

						}else{

							$("#fila1").val(parseInt(valor9)+1);
							$("#fila8").val(parseInt(valor9)-1);
							
							

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