var async = require('async');
var _ = require('underscore');
	_.str = require('underscore.string');
	_.mixin(_.str.exports());

module.exports = function(mongoose){

	var Router = function(options){
		this.options = _.defaults(options||{}, {
			initiator: 'api',
			context: 'routing'
		});
	};

	_.extend(Router.prototype, {

		route: function(options){
			options = _.extend(options||{}, this.options);

			var me = this;

			return function(req, res, next){
				me.follow(options).bind(me)(req, res, function(err){
					if(err){
						return next(err);
					}
					me.checkout(options).bind(me)(req, res, next);
				});
			};
		},
		
		getSplittedPath: function(path) {
			var splitPath = path.split('/').slice(1);
			return splitPath;
		},

		follow: function(options) {
			options = _.extend(options||{}, this.options);

			var me = this;
			
			return function(req, res, next){
				var splitPath = this.getSplittedPath(req.route.path);// req.route.path.split('/').slice(1);
				// req.splitPath = splitPath;
				async.reduce(splitPath, null, function(obj, path, callback){

					if(path === options.initiator){
						return callback(null, me);
					}

					if(!obj){
						return callback('ROUTE_FOLLOW_NO_OBJECT_FOUND');
					}

					path = _(path).camelize();
					if(_(path).startsWith(':')){
						var key = path.slice(1);
						var value = req.params[key];
						if(_(key.toLowerCase()).endsWith('id')){
							key = 'id';
						}
						var path = {};
						path[key] = value;
					}

					if(typeof obj.sgRouteFollow === 'function'){
						obj.sgRouteFollow(path, me.getFollowOptions(req), callback);
					}
					else{
						callback(null, obj);
					}
				}, function(err, data){
					if(err){
						return next(err);
					}
					res.data = data;
					next();
				});
			}

		},

		checkout: function(options){
			options = _.extend(options||{}, this.options);

			var me = this;

			return function(req, res, next){
				if(!res.data){
					return next('ROUTE_CHECKOUT_MISSING_DATA');
				}

				var sgRouteCheckoutMeth = 'sgRouteCheckout' + _(req.method.toLowerCase()).capitalize();
				if(typeof res.data[sgRouteCheckoutMeth] === 'function'){
					res.data[sgRouteCheckoutMeth](this.getCheckoutOptions(req), function(err, checkoutData){
						if(err){
							return next(err);
						}
						res.data = checkoutData;
						next();
					});
				}
				else{
					next();
				}
			}
		},

		getFollowOptions: function(req, action){
			var options = {
				req: req,
				user: req.user
			};

			if(req.method === 'POST'){
				options.data = req.body;
			}
			else{
				options.data = req.query;
			}

			return options;
		},

		getCheckoutOptions: function(req, action){
			var options = {
				req: req,
				user: req.user
			};

			return options;
		},

		sgRouteFollow: function(path, options, callback){
			if(path === 'user'){
				return callback(null, options.user);
			}
			callback(null, this.getModelByCollectionName(path, options));
		},

		getModelByCollectionName: function(name, options){
			return this.getModelsByCollectionName()[name];
		},

		getModelsByCollectionName: function(){
			if(!this._modelsByCollectionName){
				this._modelsByCollectionName = {};
				var me = this;
				_.values(mongoose.models).forEach(function(model){
					var name = model.collection.name;
					var camelizedName = _(name).camelize();
					me._modelsByCollectionName[name] = model;
					if(name !== camelizedName) {
						me._modelsByCollectionName[camelizedName] = model;
					}
				});
			}
			return this._modelsByCollectionName;
		}

	});

	return Router;
};

