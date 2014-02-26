exports.definition = {
	config : {
		'columns': {
			'nivel': 'TEXT',
			
		},
		'defaults': {
			'nivel': "0"
		},
		"adapter": {
				"type": "sql",
				"collection_name": "nivel"
		}
	},

	extendModel: function(Model) {    
		_.extend(Model.prototype, {
				
		});
	  return Model;
	},

	extendCollection: function(Collection) {    
		_.extend(Collection.prototype, {
			
		});
	
		return Collection;
	}
};