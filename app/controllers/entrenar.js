function init() {
	
}


var n1, n2;

function doClick(e) {
    alert('Aprenderemos a multiplicar');
}

function generarPreguntar(e) {
	n1 = generarAleatorio(10);
	n2 = generarAleatorio(10);
	$.labelTabla.setText(n1 + ' x ' + n2 + ' = ?');
}

function comprobarRespuesta() {
	var message = ($.respuesta.getValue() == (n1 * n2)) ? 'Felicidades, ha respondido correctamente' : 'Error, siga participando';
	if( n1 !== void 0) {
		alert(message);
	} 
	else {
		alert('Genere una pregunta primero');
	}
	$.respuesta.blur();
}

var generarAleatorio = function(maxNumber) {
	return Math.floor((Math.random()*maxNumber)+1);
};

function obtenerPista(e) {
	var message = '';
	if(n1 !== void 0) {
		message = (n1 < n2) ? 'Suma ' + n1 + ' veces el ' + n2 : 'Suma ' + n2 + ' veces el ' + n1;
	}
	else {
		message = 'Genere una pregunta primero';
	}
	alert(message);
	
}

function cerrarOpcion() {
	$.entrenarWin.close();
}
//$.index.open();
