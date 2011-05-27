/**
BEGIN_NODE_INCLUDE
var EventEmitter = require('events').EventEmitter;
END_NODE_INCLUDE
 */

/**
 * This class emits the following events:
 * <ul>
 *   <li>'newListener'
 * </ul>
 * @constructor
 */
var EventEmitter = function() {};

/**
 * @param {string} eventType
 * @param {Function} listener
 * @return {EventEmitter} this EventEmitter
 */
EventEmitter.prototype.addListener = function(eventType, listener) {};

/**
 * @param {string} eventType
 * @param {Function} listener
 * @return {EventEmitter} this EventEmitter
 */
EventEmitter.prototype.on = function(eventType, listener) {};

/**
 * @param {string} eventType
 * @param {Function} listener
 * @return {EventEmitter} this EventEmitter
 */
EventEmitter.prototype.once = function(eventType, listener) {};

/**
 * @param {string} eventType
 * @param {Function} listener
 * @return {EventEmitter} this EventEmitter
 */
EventEmitter.prototype.removeListener = function(eventType, listener) {};

/**
 * @param {string=} eventType If omitted, all listeners are removed.
 * @return {EventEmitter} this EventEmitter
 */
EventEmitter.prototype.removeAllListeners = function(eventType) {};

/**
 * @param {number} n
 */
EventEmitter.prototype.setMaxListeners = function(n) {};

/**
 * @param {string} eventType
 * @return {Array.<Function>}
 */
EventEmitter.prototype.listeners = function(eventType) {};

/**
 * @param {string} eventType
 * @param {...*} var_args
 * @return {boolean} true if there was at least one handler for the event;
 *     otherwise, returns false
 */
EventEmitter.prototype.emit = function(eventType, var_args) {};
