var niveles = Alloy.Collections.nivel;
var nivel = false;


var operaciones = [
					{ op: " 2 x 3 = ?", resultado: 6  },
					{ op: " 2 x 8 = ?", resultado: 16  },
					{ op: " 3 x 3 = ?", resultado: 9  },
					{ op: " 4 x 3 = ?", resultado: 12  },
					{ op: " 5 x 4 = ?", resultado: 20  },
					{ op: " 1 x 3 = ?", resultado: 3  },
					{ op: " 9 x 6 = ?", resultado: 54  },
					{ op: " 7 x 8 = ?", resultado: 56  },
					{ op: " 5 x 3 = ?", resultado: 15  }, 
];

var respuestas = [];



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
	}
			
}

var revisarRespuestas = function(_operaciones, _respuestas) {
	var conteoResultado = 0;
	_.each(_operaciones, function(el, index) {
		if(el.resultado == _respuestas[index]) {
			conteoResultado++;
		}	
	});
	
	return conteoResultado + " aciertos de " + _operaciones.length; 
};


function cerrarOpcion () {
	$.jugarWin.close();
}


function init (){
	$.labelTablaJugar.setText(operaciones[counter++].op);
}


_.each(niveles, function(el){
	console.log(el);
});


function toggleStatus(e) {
  var todo = todos.get(id);
  todo.set({
    "done": todo.get('done') ? 0 : 1,
    "date_completed": moment().unix()
  }).save();
}

function toggleFav(e) {
  chiste.set({ fav: !chiste.is_fav() });
  chiste.save();
}

function verExplicacion () {
  if ($.chiste.text == chiste.get('explicacion')) {
    $.chiste.text = chiste.get('chiste');
    $.chiste.color = "#000000";
    $.fav.text = String.fromCharCode(9733);
  }
  else {
    $.chiste.text = chiste.get('explicacion');
    $.chiste.color = "#666666";
    $.fav.text = '?';
  }
}









//$.fav.text = String.fromCharCode(9733);