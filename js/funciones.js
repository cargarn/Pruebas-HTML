/* Funcion para mostrar la descripcion de los manifestos debajo del titulo de cada uno */
$(document).ready(function(){
  $('li.dropdown').each(function() {
    var $dropdown = $(this);

    $("a.dropdown-link", $dropdown).click(function(e) {
      e.preventDefault();
      $div = $("div.dropdown-container", $dropdown);
      $div.toggle();
      $("div.dropdown-container").not($div).hide();
      return false;
    });

});
    
  $('html').click(function(){
    $("div.dropdown-container").hide();
  });
     
});

/* DE MOMENTO NO SE USARÁ
function cambiar(esto){
	vista=document.getElementById(esto).style.display;
	if (vista=='none'){
		vista='block';
	}else{
		vista='none';
	}

	document.getElementById(esto).style.display = vista;
}*/
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
 
function manifesto_set(iIndex, iMove){
	var iCurr=0;
	var tJson='[{"title": "1. Somos libres", "text":  "Nadie debería decirnos qué, cómo y cuándo hacer las cosas.<br> Somos libres desde el momento en el que decidimos serlo, somos libres para escuchar la música que queremos. "},'+
				 '{"title": "2. La música tiene sus derechos", "text":  "...y éstos deben ser respetados.<br> El artista es el dueño de su creación y en Muser no contemplamos otra opción. "},'+
	             '{"title": "3. No pagamos Royalties", "text":  "Los sistemas de pago de royalties basados en el número de reproducciones no son justos para los músicos, sencillamente no funcionan. Muser es una comunidad musical gratuita donde nuestros artistas comparten voluntariamente su música y donde el beneficio generado revierte en ellos de forma directa. "},'+
	             '{"title": "4. Si te mueres por la música, te mereces vivir de ella", "text":  "Hemos creado un universo musical en el que los artistas pueden generar beneficios mediante múltiples alternativas. Creemos en un nuevo modelo remunerativo pensado para los artistas, que facilite e incentive su profesionalización. "},'+
	             '{"title": "5. No estamos solos", "text":  "Nuestros partners nos ayudan a crear un ecosistema musical participativo donde artistas, promotores, productores, sellos, espacios y público colaboren en el desarrollo de esta iniciativa.<br> Sin relaciones interesadas ni descompensadas entre quienes aman y apoyan la música. "},'+
	             '{"title": "6. Reinventamos la industria musical", "text":  "¡Adiós reproducciones, hola valoraciones! No importa cuántas veces te han escuchado, lo que importa es quién te ha escuchado y cómo te ha valorado.<br>Todos los artistas parten en igualdad de condiciones y son los musers quienes deciden con sus valoraciones el lugar de cada uno.<br>Sin promociones pagadas.<br>Sin radiofórmula. "},'+
	             '{"title": "7. No vendemos tu privacidad", "text":  "Nos gusta acercarnos a los musers y conocer sus gustos musicales, pero para eso no necesitamos vender sus datos privados. Nadie utilizará tu nombre o tu correo electrónico para lucrarse.<br> Te lo aseguramos. "},'+
	             '{"title": "8. No debemos nada a nadie…", "text":  "Somos independientes y actuamos como tal. No respondemos a presiones ni dictados de terceros.<br> No sacamos beneficio directo de las canciones que se comparten en Muser voluntariamente, de ahí nuestra autonomía. "},'+
	             '{"title": "9. ...ni nos casamos con nadie ", "text":  "Nuestra única ideología es nuestro amor por la música. "},'+
	             '{"title": "10. Mejoremos el mundo", "text":  "La música es cultura, es creatividad, es dinamismo, es unión... Muser nace para defender esos valores porque creemos en ellos como una manera de hacer el mundo mejor. <br>La música es nuestra razón de ser. "}]';
	var oJson=JSON.parse(tJson);
	if (iIndex>-1)
	{
		iCurr=iIndex;
	}
	else
	{
		iCurr+=iMove;
	}

	var oHid=document.getElementById('title');
	var oDid=document.getElementById('text');

	oHid.innerHTML=oJson[iCurr].title;
	oDid.innerHTML=oJson[iCurr].text;
}