goog.provide('dab.glat.Location');


/**
 * @constructor
 */
dab.glat.Location = function() {};


/** @type {string} */
dab.glat.Location.prototype.timestamp;


/** @type {number} */
dab.glat.Location.prototype.lat;


/** @type {number} */
dab.glat.Location.prototype.lng;


/** @type {number} */
dab.glat.Location.prototype.accuracy;


/**
 * @param {Object} json
 * @return {dab.glat.Location}
 */
dab.glat.Location.createFromJson = function(json) {
  var data = json['data'];
  if (data['kind'] != 'latitude#location') {
    throw Error('Not a location');
  }
  var loc = new dab.glat.Location();
  loc.timestamp = data['timestampMs'];
  loc.lat = data['latitude'];
  loc.lng = data['longitude'];
  loc.accuracy = data['accuracy'];
  return loc;
};
