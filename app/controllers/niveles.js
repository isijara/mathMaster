function cerrarOpcion () {
	$.jugarWin.close();
}


function abrirNivelUno(e) {
	console.log(e.source);
	var nivel = Alloy.createController("jugarNivelUno").getView();
	nivel.open({
    	transition : Ti.UI.iPhone.AnimationStyle.CURL_DOWN
   	});
}

function abrirNivelDos(e) {
	console.log(e.source);
	var nivel = Alloy.createController("jugar").getView();
	nivel.open();
}

function abrirNivelTres(e) {
	console.log(e.source);
	var nivel = Alloy.createController("jugar").getView();
	nivel.open();
}