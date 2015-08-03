/* Funcion para mostrar la descripcion de los manifestos debajo del titulo de cada uno */
function cambiar(esto){
	vista=document.getElementById(esto).style.display;
	if (vista=='none')
		vista='block';
	else
		vista='none';

	document.getElementById(esto).style.display = vista;
}
	
function validar(formulario) {
	if ((formulario.email.value.indexOf ('@', 0) == -1)||(formulario.email.value.length < 5)) { 
		formulario.email.value="MAL";
		return (false); 
	}else{
		document.form2.pide.click();
		return(false);
	}
}