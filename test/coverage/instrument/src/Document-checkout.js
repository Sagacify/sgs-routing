
var __cov_bvdkKFQdwBxjJKdjjoh_fw = (Function('return this'))();
if (!__cov_bvdkKFQdwBxjJKdjjoh_fw.__coverage__) { __cov_bvdkKFQdwBxjJKdjjoh_fw.__coverage__ = {}; }
__cov_bvdkKFQdwBxjJKdjjoh_fw = __cov_bvdkKFQdwBxjJKdjjoh_fw.__coverage__;
if (!(__cov_bvdkKFQdwBxjJKdjjoh_fw['src/Document-checkout.js'])) {
   __cov_bvdkKFQdwBxjJKdjjoh_fw['src/Document-checkout.js'] = {"path":"src/Document-checkout.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0},"b":{"1":[0,0],"2":[0,0,0],"3":[0,0],"4":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0},"fnMap":{"1":{"name":"(anonymous_1)","line":6,"loc":{"start":{"line":6,"column":49},"end":{"line":6,"column":76}}},"2":{"name":"(anonymous_2)","line":10,"loc":{"start":{"line":10,"column":50},"end":{"line":10,"column":77}}},"3":{"name":"(anonymous_3)","line":18,"loc":{"start":{"line":18,"column":1},"end":{"line":18,"column":24}}},"4":{"name":"(anonymous_4)","line":30,"loc":{"start":{"line":30,"column":49},"end":{"line":30,"column":76}}},"5":{"name":"(anonymous_5)","line":32,"loc":{"start":{"line":32,"column":35},"end":{"line":32,"column":48}}},"6":{"name":"(anonymous_6)","line":40,"loc":{"start":{"line":40,"column":50},"end":{"line":40,"column":77}}},"7":{"name":"(anonymous_7)","line":44,"loc":{"start":{"line":44,"column":52},"end":{"line":44,"column":79}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":30}},"2":{"start":{"line":2,"column":1},"end":{"line":2,"column":38}},"3":{"start":{"line":3,"column":1},"end":{"line":3,"column":26}},"4":{"start":{"line":4,"column":0},"end":{"line":4,"column":29}},"5":{"start":{"line":6,"column":0},"end":{"line":8,"column":2}},"6":{"start":{"line":7,"column":1},"end":{"line":7,"column":22}},"7":{"start":{"line":10,"column":0},"end":{"line":28,"column":2}},"8":{"start":{"line":11,"column":1},"end":{"line":13,"column":2}},"9":{"start":{"line":12,"column":2},"end":{"line":12,"column":52}},"10":{"start":{"line":15,"column":1},"end":{"line":15,"column":29}},"11":{"start":{"line":16,"column":1},"end":{"line":16,"column":15}},"12":{"start":{"line":17,"column":1},"end":{"line":27,"column":14}},"13":{"start":{"line":19,"column":2},"end":{"line":19,"column":50}},"14":{"start":{"line":20,"column":2},"end":{"line":26,"column":3}},"15":{"start":{"line":21,"column":3},"end":{"line":21,"column":54}},"16":{"start":{"line":24,"column":3},"end":{"line":24,"column":26}},"17":{"start":{"line":25,"column":3},"end":{"line":25,"column":14}},"18":{"start":{"line":30,"column":0},"end":{"line":38,"column":2}},"19":{"start":{"line":31,"column":1},"end":{"line":31,"column":15}},"20":{"start":{"line":32,"column":1},"end":{"line":37,"column":4}},"21":{"start":{"line":33,"column":2},"end":{"line":35,"column":3}},"22":{"start":{"line":34,"column":3},"end":{"line":34,"column":24}},"23":{"start":{"line":36,"column":2},"end":{"line":36,"column":20}},"24":{"start":{"line":40,"column":0},"end":{"line":42,"column":2}},"25":{"start":{"line":41,"column":1},"end":{"line":41,"column":22}},"26":{"start":{"line":44,"column":0},"end":{"line":46,"column":2}},"27":{"start":{"line":45,"column":1},"end":{"line":45,"column":23}}},"branchMap":{"1":{"line":11,"type":"if","locations":[{"start":{"line":11,"column":1},"end":{"line":11,"column":1}},{"start":{"line":11,"column":1},"end":{"line":11,"column":1}}]},"2":{"line":11,"type":"binary-expr","locations":[{"start":{"line":11,"column":4},"end":{"line":11,"column":12}},{"start":{"line":11,"column":16},"end":{"line":11,"column":28}},{"start":{"line":11,"column":32},"end":{"line":11,"column":49}}]},"3":{"line":20,"type":"if","locations":[{"start":{"line":20,"column":2},"end":{"line":20,"column":2}},{"start":{"line":20,"column":2},"end":{"line":20,"column":2}}]},"4":{"line":33,"type":"if","locations":[{"start":{"line":33,"column":2},"end":{"line":33,"column":2}},{"start":{"line":33,"column":2},"end":{"line":33,"column":2}}]}}};
}
__cov_bvdkKFQdwBxjJKdjjoh_fw = __cov_bvdkKFQdwBxjJKdjjoh_fw['src/Document-checkout.js'];
__cov_bvdkKFQdwBxjJKdjjoh_fw.s['1']++;var _=require('underscore');__cov_bvdkKFQdwBxjJKdjjoh_fw.s['2']++;_.str=require('underscore.string');__cov_bvdkKFQdwBxjJKdjjoh_fw.s['3']++;_.mixin(_.str.exports());__cov_bvdkKFQdwBxjJKdjjoh_fw.s['4']++;var async=require('async');__cov_bvdkKFQdwBxjJKdjjoh_fw.s['5']++;mongoose.Document.prototype.sgRouteCheckoutGet=function(options,callback){__cov_bvdkKFQdwBxjJKdjjoh_fw.f['1']++;__cov_bvdkKFQdwBxjJKdjjoh_fw.s['6']++;callback(null,this);};__cov_bvdkKFQdwBxjJKdjjoh_fw.s['7']++;mongoose.Document.prototype._sgRouteCheckoutSet=function(options,callback){__cov_bvdkKFQdwBxjJKdjjoh_fw.f['2']++;__cov_bvdkKFQdwBxjJKdjjoh_fw.s['8']++;if((__cov_bvdkKFQdwBxjJKdjjoh_fw.b['2'][0]++,!options)||(__cov_bvdkKFQdwBxjJKdjjoh_fw.b['2'][1]++,!options.req)||(__cov_bvdkKFQdwBxjJKdjjoh_fw.b['2'][2]++,!options.req.data)){__cov_bvdkKFQdwBxjJKdjjoh_fw.b['1'][0]++;__cov_bvdkKFQdwBxjJKdjjoh_fw.s['9']++;return this.sgRouteCheckoutGet(options,callback);}else{__cov_bvdkKFQdwBxjJKdjjoh_fw.b['1'][1]++;}__cov_bvdkKFQdwBxjJKdjjoh_fw.s['10']++;var data=options.req.data;__cov_bvdkKFQdwBxjJKdjjoh_fw.s['11']++;var me=this;__cov_bvdkKFQdwBxjJKdjjoh_fw.s['12']++;async.each(_(data).keys(),function(key,callback){__cov_bvdkKFQdwBxjJKdjjoh_fw.f['3']++;__cov_bvdkKFQdwBxjJKdjjoh_fw.s['13']++;var camelizedSetPath=_('set_'+key).camelize();__cov_bvdkKFQdwBxjJKdjjoh_fw.s['14']++;if(typeof this[camelizedSetPath]==='function'){__cov_bvdkKFQdwBxjJKdjjoh_fw.b['3'][0]++;__cov_bvdkKFQdwBxjJKdjjoh_fw.s['15']++;me[camelizedSetPath](data[key],options,callback);}else{__cov_bvdkKFQdwBxjJKdjjoh_fw.b['3'][1]++;__cov_bvdkKFQdwBxjJKdjjoh_fw.s['16']++;me.set(key,data[key]);__cov_bvdkKFQdwBxjJKdjjoh_fw.s['17']++;callback();}},callback);};__cov_bvdkKFQdwBxjJKdjjoh_fw.s['18']++;mongoose.Document.prototype.sgRouteCheckoutPut=function(options,callback){__cov_bvdkKFQdwBxjJKdjjoh_fw.f['4']++;__cov_bvdkKFQdwBxjJKdjjoh_fw.s['19']++;var me=this;__cov_bvdkKFQdwBxjJKdjjoh_fw.s['20']++;this._sgRouteCheckoutSet(options,function(err){__cov_bvdkKFQdwBxjJKdjjoh_fw.f['5']++;__cov_bvdkKFQdwBxjJKdjjoh_fw.s['21']++;if(err){__cov_bvdkKFQdwBxjJKdjjoh_fw.b['4'][0]++;__cov_bvdkKFQdwBxjJKdjjoh_fw.s['22']++;return callback(err);}else{__cov_bvdkKFQdwBxjJKdjjoh_fw.b['4'][1]++;}__cov_bvdkKFQdwBxjJKdjjoh_fw.s['23']++;me.save(callback);});};__cov_bvdkKFQdwBxjJKdjjoh_fw.s['24']++;mongoose.Document.prototype.sgRouteCheckoutPost=function(options,callback){__cov_bvdkKFQdwBxjJKdjjoh_fw.f['6']++;__cov_bvdkKFQdwBxjJKdjjoh_fw.s['25']++;callback(null,this);};__cov_bvdkKFQdwBxjJKdjjoh_fw.s['26']++;mongoose.Document.prototype.sgRouteCheckoutDelete=function(options,callback){__cov_bvdkKFQdwBxjJKdjjoh_fw.f['7']++;__cov_bvdkKFQdwBxjJKdjjoh_fw.s['27']++;this.remove(callback);};