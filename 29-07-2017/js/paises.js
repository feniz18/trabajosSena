document.getElementById("colombia").addEventListener("click",colombiaClick);
document.getElementById("venezuela").addEventListener("click",venezuelaClick);
document.getElementById("chile").addEventListener("click",chileClick);


function colombiaClick (){

pais = document.getElementById('combos');


	pais.innerHTML = '<select id="ciudad" onchange="colombia()"><option>Ciudad</option><option>Bogota</option><option>Armenia</option><option>Bolivar</option></select><select id="barrio"><option>Seleccione ciudad</option></select>'


}

function venezuelaClick (){

pais = document.getElementById('combos');


	pais.innerHTML = '<select id="ciudad" onchange="venezuela()"><option>Ciudad</option><option>anzoategui</option><option>apure</option><option>aragua</option></select><select id="barrio"><option>Seleccione ciudad</option></select>'


}

function chileClick (){

pais = document.getElementById('combos');


	pais.innerHTML = '<select id="ciudad" onchange="chile()"><option>Ciudad</option><option>colonia</option><option>republica presidencial</option><option>petorca</option></select><select id="barrio"><option>Seleccione ciudad</option></select>'



}