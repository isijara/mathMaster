function Controller() {
    function init() {}
    function generarPreguntar() {
        n1 = generarAleatorio(10);
        n2 = generarAleatorio(10);
        $.labelTabla.setText(n1 + " x " + n2 + " = ?");
    }
    function comprobarRespuesta() {
        var message = $.respuesta.getValue() == n1 * n2 ? "Felicidades, ha respondido correctamente" : "Error, siga participando";
        void 0 !== n1 ? alert(message) : alert("Genere una pregunta primero");
        $.respuesta.blur();
    }
    function obtenerPista() {
        var message = "";
        message = void 0 !== n1 ? n2 > n1 ? "Suma " + n1 + " veces el " + n2 : "Suma " + n2 + " veces el " + n1 : "Genere una pregunta primero";
        alert(message);
    }
    function cerrarOpcion() {
        $.entrenarWin.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "entrenar";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.entrenarWin = Ti.UI.createWindow({
        backgroundColor: "#F7F7F7",
        fullscreen: false,
        id: "entrenarWin",
        title: "Entrenar"
    });
    $.__views.entrenarWin && $.addTopLevelView($.__views.entrenarWin);
    init ? $.__views.entrenarWin.addEventListener("open", init) : __defers["$.__views.entrenarWin!open!init"] = true;
    $.__views.header = Ti.UI.createView({
        id: "header"
    });
    $.__views.entrenarWin.add($.__views.header);
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
    $.__views.entrenarWin.add($.__views.volver);
    cerrarOpcion ? $.__views.volver.addEventListener("click", cerrarOpcion) : __defers["$.__views.volver!click!cerrarOpcion"] = true;
    $.__views.labelTabla = Ti.UI.createLabel({
        top: "80dp",
        backgroundColor: "F7F7F7",
        width: 80,
        heigth: "30dp",
        text: "",
        id: "labelTabla"
    });
    $.__views.entrenarWin.add($.__views.labelTabla);
    $.__views.respuesta = Ti.UI.createTextField({
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        top: "115dp",
        left: "15dp",
        width: "180",
        height: "50dp",
        id: "respuesta"
    });
    $.__views.entrenarWin.add($.__views.respuesta);
    $.__views.btnResponder = Ti.UI.createButton({
        top: "115dp",
        backgroundColor: "#007AFF",
        right: 20,
        height: "50dp",
        borderWidth: 0,
        width: 100,
        borderRadius: 5,
        color: "#F7F7F7",
        title: "Responder",
        id: "btnResponder"
    });
    $.__views.entrenarWin.add($.__views.btnResponder);
    comprobarRespuesta ? $.__views.btnResponder.addEventListener("click", comprobarRespuesta) : __defers["$.__views.btnResponder!click!comprobarRespuesta"] = true;
    $.__views.btnGenerarPregunta = Ti.UI.createButton({
        top: "175dp",
        left: "15dp",
        height: "50dp",
        borderWidth: .1,
        width: "90%",
        borderRadius: 5,
        title: "Preguntar Tabla",
        id: "btnGenerarPregunta"
    });
    $.__views.entrenarWin.add($.__views.btnGenerarPregunta);
    generarPreguntar ? $.__views.btnGenerarPregunta.addEventListener("click", generarPreguntar) : __defers["$.__views.btnGenerarPregunta!click!generarPreguntar"] = true;
    $.__views.btnPista = Ti.UI.createButton({
        top: "235dp",
        left: "15dp",
        height: "50dp",
        borderWidth: 0,
        width: "90%",
        borderRadius: 5,
        backgroundColor: "#4CD964",
        color: "#F7F7F7",
        title: "Obtener Pista",
        id: "btnPista"
    });
    $.__views.entrenarWin.add($.__views.btnPista);
    obtenerPista ? $.__views.btnPista.addEventListener("click", obtenerPista) : __defers["$.__views.btnPista!click!obtenerPista"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var n1, n2;
    var generarAleatorio = function(maxNumber) {
        return Math.floor(Math.random() * maxNumber + 1);
    };
    __defers["$.__views.entrenarWin!open!init"] && $.__views.entrenarWin.addEventListener("open", init);
    __defers["$.__views.volver!click!cerrarOpcion"] && $.__views.volver.addEventListener("click", cerrarOpcion);
    __defers["$.__views.btnResponder!click!comprobarRespuesta"] && $.__views.btnResponder.addEventListener("click", comprobarRespuesta);
    __defers["$.__views.btnGenerarPregunta!click!generarPreguntar"] && $.__views.btnGenerarPregunta.addEventListener("click", generarPreguntar);
    __defers["$.__views.btnPista!click!obtenerPista"] && $.__views.btnPista.addEventListener("click", obtenerPista);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;