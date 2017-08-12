document.getElementById("colombia").addEventListener("click",colombiaClick);
document.getElementById("venezuela").addEventListener("click",venezuelaClick);
document.getElementById("chile").addEventListener("click",chileClick);
document.getElementById("matriz").addEventListener("click",matrizClick);


function colombiaClick (){

pais = document.getElementById('combos');


	pais.innerHTML = '<select id="ciudad" onchange="colombia()"><option>Ciudad</option><option>Bogota</option><option>Armenia</option><option>Bolivar</option></select><select id="barrio"><option>Seleccione ciudad</option></select>'

	 $(document).ready(function() { $("#ciudad").select2(); });
	 $(document).ready(function() { $("#barrio").select2(); });
   

}

function venezuelaClick (){

pais = document.getElementById('combos');


	pais.innerHTML = '<select id="ciudad" onchange="venezuela()"><option>Ciudad</option><option>anzoategui</option><option>apure</option><option>aragua</option></select><select id="barrio"><option>Seleccione ciudad</option></select>'
	 $(document).ready(function() { $("#ciudad").select2(); });
	 $(document).ready(function() { $("#barrio").select2(); });


}

function chileClick (){

pais = document.getElementById('combos');


	pais.innerHTML = '<select id="e1" id="ciudad" onchange="chile()"><option>Ciudad</option><option>colonia</option><option>republica presidencial</option><option>petorca</option></select><select id="barrio"><option>Seleccione ciudad</option></select>'
	 $(document).ready(function() { $("#ciudad").select2(); });
	 $(document).ready(function() { $("#barrio").select2(); });


}

function matrizClick(){

pais = document.getElementById('combos');


	pais.innerHTML ='<table><tr id="columna"><td><input type="text" id="fila1"/></td><td><input type="text" id="fila2"/></td><td><input type="text" id="fila3"/></td></tr><tr id="columna"><td><input type="text" id="fila4"/></td><td><input type="text" id="fila5"/></td><td><input type="text" id="fila6"/></td></tr><tr id="columna"><td><input type="text" id="fila7"/></td><td><input type="text" id="fila8"/></td><td><input type="text" id="fila9"/></td></tr></table><div id="cam"><button id="boton">calcular</button> </div><button id="limpiar">limpiar</button></div>'



}