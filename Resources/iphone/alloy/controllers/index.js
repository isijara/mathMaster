function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.mathMasterWin = Ti.UI.createWindow({
        backgroundColor: "#FFFFFF",
        id: "mathMasterWin"
    });
    $.__views.mathMasterWin && $.addTopLevelView($.__views.mathMasterWin);
    $.__views.header = Ti.UI.createView({
        id: "header"
    });
    $.__views.mathMasterWin.add($.__views.header);
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
    $.__views.__alloyId0 = Alloy.createController("menu", {
        id: "__alloyId0",
        __parentSymbol: $.__views.mathMasterWin
    });
    $.__views.__alloyId0.setParent($.__views.mathMasterWin);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.mathMasterWin.open();
    var fb = require("facebook");
    fb.appid = 654538291277702;
    fb.authorize();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;