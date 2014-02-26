exports.definition = {
    config: {
        columns: {
            chiste: "string",
            explicacion: "text",
            fav: "boolean",
            create_time: "integer"
        },
        defaults: {
            fav: false,
            create_time: Date.now()
        },
        adapter: {
            type: "sql",
            collection_name: "tunamx_chiste"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            is_fav: function() {
                if (this.get("fav") && "false" != this.get("fav")) return true;
                return false;
            }
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("chiste", exports.definition, []);

collection = Alloy.C("chiste", exports.definition, model);

exports.Model = model;

exports.Collection = collection;