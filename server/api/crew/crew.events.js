/**
 * Crew model events
 */

'use strict';

import {EventEmitter} from 'events';
var Crew = require('./crew.model');
var CrewEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
CrewEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Crew.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    CrewEvents.emit(event + ':' + doc._id, doc);
    CrewEvents.emit(event, doc);
  }
}

export default CrewEvents;
