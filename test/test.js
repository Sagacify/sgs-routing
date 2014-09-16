var assert = require('assert');
var express = require('express');
global.mongoose = require('mongoose');
var supertest = require('supertest');
var _ = require('underscore');
var bodyParser = require('body-parser');

require('./TestModel');

//var Router = require('./coverage/instrument/src/index')(mongoose);
var Router = require('../src/index')(mongoose);

var router = new Router({});
var route = router.handle.bind(router);

var test = mongoose.model('Test')({embeddedTests: [{}]});

var createData = function(req, res, next){
	req.data = {};
	_(req.data).extend(req.body);
	_(req.data).extend({paginate: {}});

	next();
};

describe('Testing the mongoose routehandler module.', function () {
	'use strict';

	before(function (done) {
		mongoose.connect('mongodb://localhost:27017/sgs_routehandler', function(err){
			if(err){
				return done(err);
			}
			mongoose.connection.db.dropDatabase(done);
		});
	});

	var app
	before(function (done) {
		app = express();
		app.use(bodyParser.urlencoded({
			extended: true
		}));
		app.use(bodyParser.json());
		app.listen(8000)
		.on('error', done)
		.on('listening', done);
	});

	var testId, embeddedTestId;
	var st = supertest('http://localhost:8000');

	// it('test', function(done){
	// 	var mytest = test;
	// 	mytest.embeddedTests = undefined;
	// 	test.linkedTest = test._id;
	// 	test.save(function(err, test){
	// 		test.populate('linkedTest', function(err){
	// 			mytest.populate('linkedTest.linkedTest', function(err){
	// 				console.log(mytest.toObject())
	// 			});
	// 		});
	// 	});
	// });

	it('POST /api/<collection>', function(done){
		app.post('/api/tests', createData, route, function(req, res){
			assert(res.data instanceof mongoose.Document);
			assert.equal(res.data.attr, req.data.attr);
			testId = res.data.id;
			mongoose.model('Test').count({}, function(err, count){
				if(err){
					done(err);
				}
				assert.equal(count, 1);
				done();
			});
		});

		st.post('/api/tests').send({hey: 'test'}).end();
	});

	it('GET /api/<collection>', function(done){
		app.get('/api/tests', createData, route, function(req, res){
			assert(res.data instanceof Array)
			assert.equal(res.data.length, 1);
			done();
		});

		st.get('/api/tests').end();
	});

	it('GET /api/<collection/<attribute>', function(done){
		app.get('/api/tests/virtual-coll-attr', createData, route, function(req, res){
			assert(res.data instanceof mongoose.Document);
			assert.equal(res.data.id, testId);
			done();
		});

		st.get('/api/tests/virtual-coll-attr').end();
	});	

	it('GET /api/<collection>/:id', function(done){
		app.get('/api/tests/:id', createData, route, function(req, res){
			assert(res.data instanceof mongoose.Document);
			assert.equal(res.data.id, req.params.id);
			done();
		});

		st.get('/api/tests/'+testId).end();
	});	

	it('PUT /api/<collection>/:id', function(done){
		app.put('/api/tests/:id', createData, route, function(req, res){
			assert(res.data instanceof mongoose.Document);
			assert.equal(res.data.linkedTest.toString(), req.data.linkedTest);
			assert.equal(res.data.attr, req.data.attr)
			done();
		});

		st.put('/api/tests/'+testId).send({attr: 'myattr', linkedTest: testId}).end();
	});

	it('GET /api/<collection>/:id/<attribute> with attribute in schema', function(done){
		app.get('/api/tests/:id/linked-test', createData, route, function(req, res){
			assert(res.data instanceof mongoose.Document);
			assert.equal(res.data.id, testId);
			done();
		});

		st.get('/api/tests/' + testId + '/linked-test').end();
	});	

	it('GET /api/<collection>/:id/<attribute> with attribute in method', function(done){
		app.get('/api/tests/:id/virtual-instance-attr', createData, route, function(req, res){
			assert(res.data instanceof mongoose.Document);
			assert.equal(res.data.id, testId);
			done();
		});

		st.get('/api/tests/' + testId + '/virtual-instance-attr').end();
	});	

	it('POST /api/<collection>/:id/<attribute>', function(done){
		app.post('/api/tests/:id/do-that', createData, route, function(req, res){
			assert.equal(res.data.action, 'myaction');
			done();
		});

		st.post('/api/tests/' + testId + '/do-that').send({action: 'myaction'}).end();
	});	

	it('POST /api/<collection>/:id/<documentarray>', function(done){
		app.post('/api/tests/:id/embedded-tests', createData, route, function(req, res){
			assert.equal(res.data.embeddedAttr, 'myembeddedattr');
			embeddedTestId = res.data.id;
			mongoose.model('Test').findById(testId, function(err, test){
				if(err){
					return done(err);
				}
				assert.equal(test.embeddedTests.length, 1);
				done();
			});
		});

		st.post('/api/tests/' + testId + '/embedded-tests').send({embeddedAttr: 'myembeddedattr'}).end();
	});	

	it('GET /api/<collection>/:id/<documentarray>/:embeddedid', function(done){
		app.get('/api/tests/:id/embedded-tests/:embeddedid', createData, route, function(req, res){
			assert.equal(res.data.id, embeddedTestId);
			done();
		});

		st.get('/api/tests/' + testId + '/embedded-tests/' + embeddedTestId).end();
	});	

	it('PUT /api/<collection>/:id/<documentarray>/:embeddedid', function(done){
		app.put('/api/tests/:id/embedded-tests/:embeddedid', createData, route, function(req, res){
			assert.equal(res.data.embeddedAttr, req.data.embeddedAttr);
			done();
		});

		st.put('/api/tests/' + testId + '/embedded-tests/' + embeddedTestId).send({embeddedAttr: 'myembeddedattr2'}).end();
	});		

	it('DELETE /api/<collection>/:id/<documentarray>/:embeddedid', function(done){
		app['delete']('/api/tests/:id/embedded-tests/:embeddedid', createData, route, function(req, res){
			assert.equal(res.data.id, embeddedTestId);
			mongoose.model('Test').findById(testId, function(err, test){
				if(err){
					return done(err);
				}
				assert.equal(test.embeddedTests.length, 0);
				done();
			});
		});

		st.del('/api/tests/' + testId + '/embedded-tests/' + embeddedTestId).end();
	});	

	it('DELETE /api/<collection>/:id', function(done){
		app['delete']('/api/tests/:id', createData, route, function(req, res){
			assert.equal(res.data.id, testId);
			mongoose.model('Test').findById(testId, function(err, test){
				if(err){
					return done(err);
				}
				assert.equal(test, null);
				done();
			});
		});

		st.del('/api/tests/' + testId).end();
	});		

});
