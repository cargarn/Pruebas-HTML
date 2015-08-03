/* Funcion para mostrar la descripcion de los manifestos debajo del titulo de cada uno */
function cambiar(esto){
	vista=document.getElementById(esto).style.display;
	if (vista=='none'){
		vista='block';
	}else{
		vista='none';
	}

	document.getElementById(esto).style.display = vista;
}
/* DE MOMENTO NO SE USARÁ
function validar(formulario) {
	if ((formulario.email.value.indexOf ('@', 0) == -1)||(formulario.email.value.length < 5)) { 
		formulario.email.value="MAL";
		return (false); 
	}else{
		document.form2.pide.click();
		return(false);
	}
}*/

$('#formaa').validate({    
    rules: {
        email: {
            email:true,
            required: true
        },
    },
    highlight: function(element) {
        var id_attr = "#" + $( element ).attr("id") + "1";
        $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
        $(id_attr).removeClass('glyphicon-ok');//.addClass('glyphicon-remove');   
    },
    unhighlight: function(element) {
        var id_attr = "#" + $( element ).attr("id") + "1";
        $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
        $(id_attr).removeClass('glyphicon-remove');//.addClass('glyphicon-ok');  
		document.form2.pide.click();
    }/*,
    errorElement: 'span',
        errorClass: 'help-block',
        errorPlacement: function(error, element) {
            if(element.length) {
                error.insertAfter(element);
            } else {
				error.insertAfter(element);
            }
        } */
 });
 
 //Repito codigo porque no se como utilizar la misma funcion para diferentes ID
 $('#formaa2').validate({    
    rules: {
        email: {
            email:true,
            required: true
        },
    },
    highlight: function(element) {
        var id_attr = "#" + $( element ).attr("id") + "1";
        $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
        $(id_attr).removeClass('glyphicon-ok'); 
    },
    unhighlight: function(element) {
        var id_attr = "#" + $( element ).attr("id") + "1";
        $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
        $(id_attr).removeClass('glyphicon-remove'); 
		document.form2.pide.click();
    }
 });