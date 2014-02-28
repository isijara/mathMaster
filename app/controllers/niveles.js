function cerrarOpcion () {
	$.jugarWin.close();
}

var animation = { transition : Ti.UI.iPhone.AnimationStyle.CURL_DOWN };

function abrirNivelUno(e) {
	console.log(e.source);
	Alloy.Globals.mathMasterConfig.nivel = 'nivelUno';
	var nivel = Alloy.createController("jugar").getView();
	nivel.open(animation);
}

function abrirNivelDos(e) {
	console.log(e.source);
	Alloy.Globals.mathMasterConfig.nivel = 'nivelDos';

	var nivel = Alloy.createController("jugar").getView();
	nivel.open(animation);
}

function abrirNivelTres(e) {
	console.log(e.source);
	Alloy.Globals.mathMasterConfig.nivel = 'nivelTres';
	var nivel = Alloy.createController("jugar").getView();
	nivel.open(animation);
}