function Controller() {
    function init() {
        var records = Alloy.Globals.mathMasterConfig.record;
        0 != records.nivelUno ? $.recordNivelUno.setText("Nivel 1: " + records.nivelUno + " segundos") : $.recordNivelUno.setText("Nivel 1: sin récord");
        0 != records.nivelDos ? $.recordNivelDos.setText("Nivel 2: " + records.nivelDos + " segundos") : $.recordNivelDos.setText("Nivel 2: sin récord");
        0 != records.nivelTres ? $.recordNivelTres.setText("Nivel 3: " + records.nivelTres + " segundos") : $.recordNivelTres.setText("Nivel 3: sin récord");
    }
    function cerrarOpcion() {
        $.recordsWin.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "records";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.recordsWin = Ti.UI.createWindow({
        backgroundColor: "#F7F7F7",
        fullscreen: false,
        id: "recordsWin",
        title: ""
    });
    $.__views.recordsWin && $.addTopLevelView($.__views.recordsWin);
    init ? $.__views.recordsWin.addEventListener("open", init) : __defers["$.__views.recordsWin!open!init"] = true;
    $.__views.header = Ti.UI.createView({
        id: "header"
    });
    $.__views.recordsWin.add($.__views.header);
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
    $.__views.recordsWin.add($.__views.volver);
    cerrarOpcion ? $.__views.volver.addEventListener("click", cerrarOpcion) : __defers["$.__views.volver!click!cerrarOpcion"] = true;
    var __alloyId2 = [];
    $.__views.__alloyId3 = Ti.UI.createTableViewRow({
        id: "__alloyId3"
    });
    __alloyId2.push($.__views.__alloyId3);
    $.__views.recordNivelUno = Ti.UI.createLabel({
        id: "recordNivelUno"
    });
    $.__views.__alloyId3.add($.__views.recordNivelUno);
    $.__views.__alloyId4 = Ti.UI.createTableViewRow({
        id: "__alloyId4"
    });
    __alloyId2.push($.__views.__alloyId4);
    $.__views.recordNivelDos = Ti.UI.createLabel({
        id: "recordNivelDos"
    });
    $.__views.__alloyId4.add($.__views.recordNivelDos);
    $.__views.__alloyId5 = Ti.UI.createTableViewRow({
        id: "__alloyId5"
    });
    __alloyId2.push($.__views.__alloyId5);
    $.__views.recordNivelTres = Ti.UI.createLabel({
        id: "recordNivelTres"
    });
    $.__views.__alloyId5.add($.__views.recordNivelTres);
    $.__views.recordsTable = Ti.UI.createTableView({
        top: "80dp",
        data: __alloyId2,
        id: "recordsTable"
    });
    $.__views.recordsWin.add($.__views.recordsTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.recordsWin!open!init"] && $.__views.recordsWin.addEventListener("open", init);
    __defers["$.__views.volver!click!cerrarOpcion"] && $.__views.volver.addEventListener("click", cerrarOpcion);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;