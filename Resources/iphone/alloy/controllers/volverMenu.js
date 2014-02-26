function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "volverMenu";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.volverMenu = Ti.UI.createView({
        id: "volverMenu"
    });
    $.__views.volverMenu && $.addTopLevelView($.__views.volverMenu);
    $.__views.jugar = Ti.UI.createLabel({
        text: "",
        id: "jugar"
    });
    $.__views.volverMenu.add($.__views.jugar);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;