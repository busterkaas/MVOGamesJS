/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/crews              ->  index
 * POST    /api/crews              ->  create
 * GET     /api/crews/:id          ->  show
 * PUT     /api/crews/:id          ->  update
 * DELETE  /api/crews/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
var Crew = require('./crew.model');

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    console.log(err);
    res.status(statusCode).send(err);
  };
}

function responseWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.extend(entity, updates);
    return updated.saveAsync()
      .spread(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.removeAsync()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

// Gets a list of Crews
export function index(req, res) {
  Crew.find()
    .populate('leader users applicants gameSuggestions gameSuggestions.game gameSuggestions.users users.user')
    .execAsync()
    .then(responseWithResult(res))
    .catch(handleError(res));
}


// Gets a single Crew from the DB
export function show(req, res) {

  Crew.findById(req.params.id)
    .populate('leader gameSuggestions.users.user users applicants gameSuggestions crewMessages.user gameSuggestions.game gameSuggestions.users users.user')
    .execAsync()
    .then(handleEntityNotFound(res))
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Get all Crews in the DB with the requested UsserID
export function crewsByUser (req, res) {
  Crew.find({'users':req.params.id}).populate('leader users gameSuggestions crewMessages.user applicants gameSuggestions.game gameSuggestions.users user.user')
  .execAsync()
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Creates a new Crew in the DB
export function create(req, res) {
  Crew.createAsync(req.body)
    .then(responseWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Crew in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }

  Crew.findById(req.params.id)
    .populate('leader users applicants crewMessages.user gameSuggestions gameSuggestions.game gameSuggestions.users users.user')
    .execAsync()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Deletes a Crew from the DB
export function destroy(req, res) {
  Crew.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
