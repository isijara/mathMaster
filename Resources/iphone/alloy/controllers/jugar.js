function Controller() {
    function updateCount() {
        console.log("actualizo");
        $.labelCronometro.setText($.labelCronometro.getText() - 1);
        if ("0" == $.labelCronometro.getText()) {
            console.log("entro a hacer clear");
            clearInterval(chronometer);
            alert("El tiempo ha terminado");
            notificarResultado();
        }
    }
    function notificarResultado() {
        alert(revisarRespuestas(operaciones, respuestas));
    }
    function responder() {
        respuestas.push($.respuesta.getValue());
        if (operaciones.length > counter) {
            $.labelTablaJugar.setText(operaciones[counter++].op);
            $.respuesta.setValue("");
            $.respuesta.focus();
        } else {
            clearInterval(chronometer);
            notificarResultado();
        }
    }
    function cerrarOpcion() {
        $.jugarWin.close();
    }
    function init() {
        $.labelTablaJugar.setText(operaciones[counter++].op);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "jugar";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("nivel");
    $.__views.jugarWin = Ti.UI.createWindow({
        backgroundColor: "#F7F7F7",
        fullscreen: false,
        id: "jugarWin",
        title: "Entrenar"
    });
    $.__views.jugarWin && $.addTopLevelView($.__views.jugarWin);
    init ? $.__views.jugarWin.addEventListener("open", init) : __defers["$.__views.jugarWin!open!init"] = true;
    $.__views.header = Ti.UI.createView({
        id: "header"
    });
    $.__views.jugarWin.add($.__views.header);
    $.__views.title = Ti.UI.createLabel({
        textAlign: "center",
        top: "20dp",
        font: {
            fontSize: "12dp"
        },
        text: "Maestro de las Matemáticas",
        id: "title"
    });
    $.__views.header.add($.__views.title);
    $.__views.volver = Ti.UI.createLabel({
        top: "50dp",
        height: "30dp",
        width: Ti.UI.FILL,
        backgroundColor: "#FF9933",
        color: "#FFFFFF",
        font: {
            fontSize: "16dp"
        },
        textAlign: "center",
        text: "Volver",
        id: "volver"
    });
    $.__views.jugarWin.add($.__views.volver);
    cerrarOpcion ? $.__views.volver.addEventListener("click", cerrarOpcion) : __defers["$.__views.volver!click!cerrarOpcion"] = true;
    $.__views.labelTablaJugar = Ti.UI.createLabel({
        top: "150dp",
        backgroundColor: "F7F7F7",
        width: "25%",
        left: "5%",
        heigth: "30dp",
        id: "labelTablaJugar"
    });
    $.__views.jugarWin.add($.__views.labelTablaJugar);
    $.__views.respuesta = Ti.UI.createTextField({
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        top: "125dp",
        left: "35%",
        width: "30%",
        height: "50dp",
        keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
        id: "respuesta"
    });
    $.__views.jugarWin.add($.__views.respuesta);
    $.__views.btnResponder = Ti.UI.createButton({
        top: "125dp",
        backgroundColor: "#007AFF",
        right: "10%",
        height: "50dp",
        borderWidth: 0,
        width: "20%",
        borderRadius: 5,
        color: "#F7F7F7",
        title: "►",
        id: "btnResponder"
    });
    $.__views.jugarWin.add($.__views.btnResponder);
    responder ? $.__views.btnResponder.addEventListener("click", responder) : __defers["$.__views.btnResponder!click!responder"] = true;
    $.__views.labelCronometro = Ti.UI.createLabel({
        top: "80dp",
        textAlign: "center",
        height: "30dp",
        text: "30",
        id: "labelCronometro"
    });
    $.__views.jugarWin.add($.__views.labelCronometro);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var niveles = Alloy.Collections.nivel;
    var operaciones = [ {
        op: " 2 x 3 = ?",
        resultado: 6
    }, {
        op: " 2 x 8 = ?",
        resultado: 16
    }, {
        op: " 3 x 3 = ?",
        resultado: 9
    }, {
        op: " 4 x 3 = ?",
        resultado: 12
    }, {
        op: " 5 x 4 = ?",
        resultado: 20
    }, {
        op: " 1 x 3 = ?",
        resultado: 3
    }, {
        op: " 9 x 6 = ?",
        resultado: 54
    }, {
        op: " 7 x 8 = ?",
        resultado: 56
    }, {
        op: " 5 x 3 = ?",
        resultado: 15
    } ];
    var respuestas = [];
    var chronometer = setInterval(updateCount, 1e3);
    var counter = 0;
    var revisarRespuestas = function(_operaciones, _respuestas) {
        var conteoResultado = 0;
        _.each(_operaciones, function(el, index) {
            el.resultado == _respuestas[index] && conteoResultado++;
        });
        return conteoResultado + " aciertos de " + _operaciones.length;
    };
    _.each(niveles, function(el) {
        console.log(el);
    });
    __defers["$.__views.jugarWin!open!init"] && $.__views.jugarWin.addEventListener("open", init);
    __defers["$.__views.volver!click!cerrarOpcion"] && $.__views.volver.addEventListener("click", cerrarOpcion);
    __defers["$.__views.btnResponder!click!responder"] && $.__views.btnResponder.addEventListener("click", responder);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;