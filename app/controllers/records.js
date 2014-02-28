

function init() {
	var records = Alloy.Globals.mathMasterConfig.record;
	
	( records.nivelUno != 0  ) ? $.recordNivelUno.setText( "Nivel 1: " + records.nivelUno + " segundos") : $.recordNivelUno.setText( "Nivel 1: sin récord");
	( records.nivelDos != 0  ) ? $.recordNivelDos.setText( "Nivel 2: " + records.nivelDos + " segundos") : $.recordNivelDos.setText( "Nivel 2: sin récord");
	( records.nivelTres != 0 ) ? $.recordNivelTres.setText("Nivel 3: " + records.nivelTres + " segundos"): $.recordNivelTres.setText("Nivel 3: sin récord");
	
}
function cerrarOpcion() {
	$.recordsWin.close();
}
