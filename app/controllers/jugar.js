var niveles = Alloy.Collections.nivel;
var nivel = false;

var config = Alloy.Globals.mathMasterConfig,
	nivel = config.nivel,
	operacionesDeNiveles = config.operaciones,
	operaciones = operacionesDeNiveles[nivel],
	respuestas = [],
	noError = true;



var chronometer = setInterval(updateCount, 1000);
var counter = 0;

function updateCount() {
	console.log("actualizo");
	$.labelCronometro.setText($.labelCronometro.getText() - 1);
	
	if($.labelCronometro.getText() == "0") {
		console.log("entro a hacer clear");
		clearInterval(chronometer);
		alert('El tiempo ha terminado');
		notificarResultado();
		
		
	} 
};



function notificarResultado() {
	alert(revisarRespuestas(operaciones, respuestas));
}
function responder () {
	respuestas.push($.respuesta.getValue());
	if( counter < operaciones.length) { //Si ya se acabaron las operaciones
		$.labelTablaJugar.setText(operaciones[counter++].op);
		$.respuesta.setValue("");
		$.respuesta.focus();
		
	} else {
		clearInterval(chronometer);
		notificarResultado();
		Alloy.Globals.fb.publicarEnFacebook();
		
		var tiempoSolucion = 30 - $.labelCronometro.getText();
		 
		if ( tiempoSolucion < Alloy.Globals.mathMasterConfig.record[nivel] || (Alloy.Globals.mathMasterConfig.record[nivel] == 0) && noError) {
			 Alloy.Globals.mathMasterConfig.record[nivel] = tiempoSolucion;
			 console.log(tiempoSolucion, Alloy.Globals.mathMasterConfig);
			 alert('Felicidades: Nuevo récord');
		}
		  
	}
			
}

var revisarRespuestas = function(_operaciones, _respuestas) {
	var conteoResultado = 0;
	_.each(_operaciones, function(el, index) {
		if(el.resultado == _respuestas[index]) {
			conteoResultado++;
		} else {
			noError = false;
		}	
	});
	
	return conteoResultado + " aciertos de " + _operaciones.length; 
};


function cerrarOpcion () {
	$.jugarWin.close();
	clearInterval(chronometer);
}


function init (){
	$.labelTablaJugar.setText(operaciones[counter++].op);
}


_.each(niveles, function(el){
	console.log(el);
});


