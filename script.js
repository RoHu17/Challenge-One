function validar(){
	if (document.txt.inputTexto.value.length ==0 ) {
alert("textarea vacio");
/*self.location.reload();*/
return false;
}
else return true;

}

function encriptar(){
	var texto = document.getElementById('inputTexto').value.toLowerCase();
	var txtCifrado = texto.replace(/e/igm,"enter");
	var txtCifrado = txtCifrado.replace(/o/igm,"ober");
	var txtCifrado = txtCifrado.replace(/i/igm,"imes");
	var txtCifrado = txtCifrado.replace(/a/igm,"ai");
	var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

	document.getElementById("texto").innerHTML = "<p>¡Mensaje Encriptado con Exito!</p>";
	document.getElementById("texto2").innerHTML = txtCifrado;
	document.getElementById("copiar").style.display = "show";
	document.getElementById("copiar").style.display = "inherit";  
}

//-- FUNCION CORRECTA PARA MOSTRAR LA SEGUNDA IMAGEN

function cambiarImagen1(){
	document.getElementById("ImgRight").src = "Img/encriptar.png";

}

function desencriptar(){
	var texto = document.getElementById('inputTexto').value.toLowerCase();
    /* */
	var txtCifrado = texto.replace(/enter/igm,"e");
	var txtCifrado = txtCifrado.replace(/ober/igm,"o");
	var txtCifrado = txtCifrado.replace(/imes/igm,"i");
	var txtCifrado = txtCifrado.replace(/ai/igm,"a");
	var txtCifrado = txtCifrado.replace(/ufat/igm,"u");

	document.getElementById("ImgRight").src = "Img/desencriptar.png"; 
	document.getElementById("texto").innerHTML = "<p>¡Mensaje Desencriptado con Exito!</p>";
	document.getElementById("texto2").innerHTML = txtCifrado;
	document.getElementById("copiar").style.display = "show";
	document.getElementById("copiar").style.display = "inherit";
}


function copiar(){
	var contenido = document.querySelector("#texto2").value;
	document.getElementById("inputTexto").value = contenido;
}

function borrar() {
	document.getElementById("inputTexto").value = "";
	document.getElementById("texto2").value ="";
}