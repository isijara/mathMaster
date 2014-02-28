function jugar() {
	alert("esto es alerta máxima");
}


function entrenar() {
	var entrenarWin = Alloy.createController("entrenar").getView().open();
}


function seleccionarNivel() {
	var jugarWin = Alloy.createController("niveles").getView();
	jugarWin.open();
	
}

function abrirRecords() {
	var recordsWin = Alloy.createController('records').getView();
	recordsWin.open();
}

