exports.definition = {
    config: {
        columns: {
            nivel: "TEXT"
        },
        defaults: {
            nivel: "0"
        },
        adapter: {
            type: "sql",
            collection_name: "nivel"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("Nivel", exports.definition, []);

collection = Alloy.C("Nivel", exports.definition, model);

exports.Model = model;

exports.Collection = collection;