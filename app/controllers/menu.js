function jugar() {
	alert("esto es alerta máxima");
}


function entrenar() {
	var entrenarWin = Alloy.createController("entrenar").getView().open();
}


function jugar() {
	var jugarWin = Alloy.createController("jugar").getView();
	jugarWin.open();
	
}
