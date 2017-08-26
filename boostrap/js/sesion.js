function sesion(){

	var usuario = document.getElementById("usuario");
	var pass = document.getElementById("pass");

	if ((usuario.value == "") || (pass.value == "") ) {

		alert("Usuario o contraseña en blanco por favor digitela");

	}else if (usuario.value != "SENA" || pass.value != "SENA") {

		alert("Usuario y contraseña incorrectos");

	}else{

		alert("Bienvendio al SENA");

		location.href="paises.html";


	}


}


function cancelar(){

	alert("A cancelado el inicio sesion");
	document.getElementById("usuario").value="";
	document.getElementById("pass").value="";


}