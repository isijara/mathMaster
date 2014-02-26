function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "row";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.row = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        backgroundColor: "#fff",
        focusable: false,
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    verExplicacion ? $.__views.row.addEventListener("longpress", verExplicacion) : __defers["$.__views.row!longpress!verExplicacion"] = true;
    $.__views.chiste = Ti.UI.createLabel({
        top: "10dp",
        bottom: "10dp",
        left: "20dp",
        right: "50dp",
        height: Ti.UI.SIZE,
        font: {
            fontSize: "18dp"
        },
        id: "chiste",
        text: "undefined" != typeof $model.__transform["chiste"] ? $model.__transform["chiste"] : $model.get("chiste")
    });
    $.__views.row.add($.__views.chiste);
    $.__views.fav = Ti.UI.createLabel({
        width: "40dp",
        right: 0,
        font: {
            fontSize: "30dp",
            fontWeight: "bold"
        },
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