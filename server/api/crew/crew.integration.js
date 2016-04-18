'use strict';

var app = require('../..');
import request from 'supertest';

var newCrew;

describe('Crew API:', function() {

  describe('GET /api/crews', function() {
    var crews;

    beforeEach(function(done) {
      request(app)
        .get('/api/crews')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          crews = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      crews.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/crews', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/crews')
        .send({
          name: 'New Crew',
          info: 'This is the brand new crew!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newCrew = res.body;
          done();
        });
    });

    it('should respond with the newly created crew', function() {
      newCrew.name.should.equal('New Crew');
      newCrew.info.should.equal('This is the brand new crew!!!');
    });

  });

  describe('GET /api/crews/:id', function() {
    var crew;

    beforeEach(function(done) {
      request(app)
        .get('/api/crews/' + newCrew._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          crew = res.body;
          done();
        });
    });

    afterEach(function() {
      crew = {};
    });

    it('should respond with the requested crew', function() {
      crew.name.should.equal('New Crew');
      crew.info.should.equal('This is the brand new crew!!!');
    });

  });

  describe('PUT /api/crews/:id', function() {
    var updatedCrew;

    beforeEach(function(done) {
      request(app)
        .put('/api/crews/' + newCrew._id)
        .send({
          name: 'Updated Crew',
          info: 'This is the updated crew!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedCrew = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedCrew = {};
    });

    it('should respond with the updated crew', function() {
      updatedCrew.name.should.equal('Updated Crew');
      updatedCrew.info.should.equal('This is the updated crew!!!');
    });

  });

  describe('DELETE /api/crews/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/crews/' + newCrew._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when crew does not exist', function(done) {
      request(app)
        .delete('/api/crews/' + newCrew._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
