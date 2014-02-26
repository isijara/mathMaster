function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "niveles";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.row = Ti.UI.createTableViewRow({
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    verExplicacion ? $.__views.row.addEventListener("longpress", verExplicacion) : __defers["$.__views.row!longpress!verExplicacion"] = true;
    $.__views.chiste = Ti.UI.createLabel({
        id: "chiste",
        text: "undefined" != typeof $model.__transform["chiste"] ? $model.__transform["chiste"] : $model.get("chiste")
    });
    $.__views.row.add($.__views.chiste);
    $.__views.fav = Ti.UI.createLabel({
        id: "fav"
    });
    $.__views.row.add($.__views.fav);
    toggleFav ? $.__views.fav.addEventListener("click", toggleFav) : __defers["$.__views.fav!click!toggleFav"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.row!longpress!verExplicacion"] && $.__views.row.addEventListener("longpress", verExplicacion);
    __defers["$.__views.fav!click!toggleFav"] && $.__views.fav.addEventListener("click", toggleFav);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;