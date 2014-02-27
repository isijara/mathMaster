function Controller() {
    function updateCount() {
        console.log("actualizo");
        $.labelCronometro.setText($.labelCronometro.getText() - 1);
        if ("0" == $.labelCronometro.getText()) {
            console.log("entro a hacer clear");
            clearInterval(chronometer);
            alert("El tiempo ha terminado");
            notificarResultado();
        }
    }
    function notificarResultado() {
        alert(revisarRespuestas(operaciones, respuestas));
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "jugarNivelDos";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.jugarNivelDos = Ti.UI.createView({
        id: "jugarNivelDos"
    });
    $.__views.jugarNivelDos && $.addTopLevelView($.__views.jugarNivelDos);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var niveles = Alloy.Collections.nivel;
    var operaciones = [ {
        op: " 2 x 3 = ?",
        resultado: 6
    }, {
        op: " 2 x 5 = ?",
        resultado: 10
    }, {
        op: " 1 x 4 = ?",
        resultado: 4
    }, {
        op: " 4 x 3 = ?",
        resultado: 12
    }, {
        op: " 3 x 3 = ?",
        resultado: 9
    }, {
        op: " 1 x 3 = ?",
        resultado: 3
    }, {
        op: " 9 x 1 = ?",
        resultado: 9
    }, {
        op: " 6 x 6 = ?",
        resultado: 36
    }, {
        op: " 5 x 3 = ?",
        resultado: 15
    } ];
    var respuestas = [];
    var chronometer = setInterval(updateCount, 1e3);
    var revisarRespuestas = function(_operaciones, _respuestas) {
        var conteoResultado = 0;
        _.each(_operaciones, function(el, index) {
            el.resultado == _respuestas[index] && conteoResultado++;
        });
        return conteoResultado + " aciertos de " + _operaciones.length;
    };
    _.each(niveles, function(el) {
        console.log(el);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;