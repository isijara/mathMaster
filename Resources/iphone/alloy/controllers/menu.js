function Controller() {
    function jugar() {
        alert("esto es alerta máxima");
    }
    function entrenar() {
        Alloy.createController("entrenar").getView().open();
    }
    function jugar() {
        var jugarWin = Alloy.createController("jugar").getView();
        jugarWin.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "menu";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.menu = Ti.UI.createView({
        top: "50dp",
        height: "30dp",
        width: Ti.UI.FILL,
        backgroundColor: "#FF9933",
        id: "menu"
    });
    $.__views.menu && $.addTopLevelView($.__views.menu);
    $.__views.jugar = Ti.UI.createLabel({
        height: "30dp",
        color: "#FFFFFF",
        width: "34%",
        top: 0,
        left: 0,
        font: {
            fontSize: "16dp"
        },
        textAlign: "center",
        text: "Jugar",
        id: "jugar"
    });
    $.__views.menu.add($.__views.jugar);
    jugar ? $.__views.jugar.addEventListener("click", jugar) : __defers["$.__views.jugar!click!jugar"] = true;
    $.__views.entrenar = Ti.UI.createLabel({
        height: "30dp",
        color: "#FFFFFF",
        width: "33%",
        top: 0,
        left: "34%",
        font: {
            fontSize: "16dp"
        },
        textAlign: "center",
        text: "Entrenar",
        id: "entrenar"
    });
    $.__views.menu.add($.__views.entrenar);
    entrenar ? $.__views.entrenar.addEventListener("click", entrenar) : __defers["$.__views.entrenar!click!entrenar"] = true;
    $.__views.records = Ti.UI.createLabel({
        height: "30dp",
        color: "#FFFFFF",
        width: "33%",
        top: 0,
        left: "67%",
        font: {
            fontSize: "16dp"
        },
        textAlign: "center",
        text: "",
        id: "records"
    });
    $.__views.menu.add($.__views.records);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.jugar!click!jugar"] && $.__views.jugar.addEventListener("click", jugar);
    __defers["$.__views.entrenar!click!entrenar"] && $.__views.entrenar.addEventListener("click", entrenar);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;