function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "rowNiveles";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    exports.destroy = function() {};
    _.extend($, $.__views);
    var chistes = Alloy.Collections.chiste;
    var chiste = false;
    if ($model) {
        chiste = chistes.get($model.id);
        console.log("CHISTE", chiste);
        $.fav.color = chiste && chiste.is_fav() ? "#FF6600" : "#C1C2C3";
    }
    $.fav.text = String.fromCharCode(9733);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;