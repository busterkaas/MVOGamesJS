'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var crewCtrlStub = {
  index: 'crewCtrl.index',
  show: 'crewCtrl.show',
  create: 'crewCtrl.create',
  update: 'crewCtrl.update',
  destroy: 'crewCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var crewIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './crew.controller': crewCtrlStub
});

describe('Crew API Router:', function() {

  it('should return an express router instance', function() {
    crewIndex.should.equal(routerStub);
  });

  describe('GET /api/crews', function() {

    it('should route to crew.controller.index', function() {
      routerStub.get
        .withArgs('/', 'crewCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/crews/:id', function() {

    it('should route to crew.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'crewCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/crews', function() {

    it('should route to crew.controller.create', function() {
      routerStub.post
        .withArgs('/', 'crewCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/crews/:id', function() {

    it('should route to crew.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'crewCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/crews/:id', function() {

    it('should route to crew.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'crewCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/crews/:id', function() {

    it('should route to crew.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'crewCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
