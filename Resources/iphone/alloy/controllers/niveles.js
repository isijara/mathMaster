function Controller() {
    function cerrarOpcion() {
        $.jugarWin.close();
    }
    function abrirNivelUno(e) {
        console.log(e.source);
        var nivel = Alloy.createController("jugarNivelUno").getView();
        nivel.open({
            transition: Ti.UI.iPhone.AnimationStyle.CURL_DOWN
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
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "niveles";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.jugarWin = Ti.UI.createWindow({
        backgroundColor: "#F7F7F7",
        fullscreen: false,
        id: "jugarWin",
        title: "Entrenar"
    });
    $.__views.jugarWin && $.addTopLevelView($.__views.jugarWin);
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
    var __alloyId2 = [];
    $.__views.row = Ti.UI.createTableViewRow({
        height: "30dp",
        backgroundColor: "#fff",
        focusable: false,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_LEFT,
        left: 4,
        id: "row"
    });
    __alloyId2.push($.__views.row);
    $.__views.nivel1 = Ti.UI.createLabel({
        text: "Nivel 1 ★",
        id: "nivel1"
    });
    $.__views.row.add($.__views.nivel1);
    abrirNivelUno ? $.__views.nivel1.addEventListener("click", abrirNivelUno) : __defers["$.__views.nivel1!click!abrirNivelUno"] = true;
    $.__views.row = Ti.UI.createTableViewRow({
        height: "30dp",
        backgroundColor: "#fff",
        focusable: false,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_LEFT,
        left: 4,
        id: "row"
    });
    __alloyId2.push($.__views.row);
    $.__views.nivel2 = Ti.UI.createLabel({
        text: "Nivel 2 ★★",
        id: "nivel2"
    });
    $.__views.row.add($.__views.nivel2);
    abrirNivelDos ? $.__views.nivel2.addEventListener("click", abrirNivelDos) : __defers["$.__views.nivel2!click!abrirNivelDos"] = true;
    $.__views.row = Ti.UI.createTableViewRow({
        height: "30dp",
        backgroundColor: "#fff",
        focusable: false,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_LEFT,
        left: 4,
        id: "row"
    });
    __alloyId2.push($.__views.row);
    $.__views.nivel3 = Ti.UI.createLabel({
        textAlign: "left",
        text: "Nivel 3 ★★★",
        id: "nivel3"
    });
    $.__views.row.add($.__views.nivel3);
    abrirNivelTres ? $.__views.nivel3.addEventListener("click", abrirNivelTres) : __defers["$.__views.nivel3!click!abrirNivelTres"] = true;
    $.__views.tablaCollection = Ti.UI.createTableView({
        top: "80dp",
        data: __alloyId2,
        id: "tablaCollection"
    });
    $.__views.jugarWin.add($.__views.tablaCollection);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.volver!click!cerrarOpcion"] && $.__views.volver.addEventListener("click", cerrarOpcion);
    __defers["$.__views.nivel1!click!abrirNivelUno"] && $.__views.nivel1.addEventListener("click", abrirNivelUno);
    __defers["$.__views.nivel2!click!abrirNivelDos"] && $.__views.nivel2.addEventListener("click", abrirNivelDos);
    __defers["$.__views.nivel3!click!abrirNivelTres"] && $.__views.nivel3.addEventListener("click", abrirNivelTres);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;