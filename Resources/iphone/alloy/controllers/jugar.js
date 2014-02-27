function Controller() {
    function cerrarOpcion() {
        $.jugarWin.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "jugar";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.jugarWin = Ti.UI.createWindow({
        id: "jugarWin",
        title: ""
    });
    $.__views.jugarWin && $.addTopLevelView($.__views.jugarWin);
    $.__views.header = Ti.UI.createView({
        id: "header"
    });
    $.__views.jugarWin.add($.__views.header);
    $.__views.title = Ti.UI.createLabel({
        text: "Maestro de las Matemáticas",
        id: "title"
    });
    $.__views.header.add($.__views.title);
    $.__views.volver = Ti.UI.createLabel({
        text: "Volver",
        id: "volver"
    });
    $.__views.jugarWin.add($.__views.volver);
    cerrarOpcion ? $.__views.volver.addEventListener("click", cerrarOpcion) : __defers["$.__views.volver!click!cerrarOpcion"] = true;
    var __alloyId1 = [];
    $.__views.row = Ti.UI.createTableViewRow({
        id: "row"
    });
    __alloyId1.push($.__views.row);
    $.__views.nivel1 = Ti.UI.createLabel({
        text: "Nivel 1 ★",
        id: "nivel1"
    });
    $.__views.row.add($.__views.nivel1);
    $.__views.row = Ti.UI.createTableViewRow({
        id: "row"
    });
    __alloyId1.push($.__views.row);
    $.__views.nivel2 = Ti.UI.createLabel({
        text: "Nivel 2 ★★",
        id: "nivel2"
    });
    $.__views.row.add($.__views.nivel2);
    $.__views.row = Ti.UI.createTableViewRow({
        id: "row"
    });
    __alloyId1.push($.__views.row);
    $.__views.nivel3 = Ti.UI.createLabel({
        text: "Nivel 3 ★★★",
        id: "nivel3"
    });
    $.__views.row.add($.__views.nivel3);
    $.__views.tablaCollection = Ti.UI.createTableView({
        data: __alloyId1,
        id: "tablaCollection"
    });
    $.__views.jugarWin.add($.__views.tablaCollection);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var niveles = Alloy.Collections.nivel;
    _.each(niveles, function(el) {
        console.log(el);
    });
    __defers["$.__views.volver!click!cerrarOpcion"] && $.__views.volver.addEventListener("click", cerrarOpcion);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;