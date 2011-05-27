goog.provide('dab.glat.User');


/**
 * @param {string} authToken
 * @constructor
 */
dab.glat.User = function(authToken) {
  /**
   * @type {string}
   * @private
   */
  this.authToken_ = authToken;  
};


dab.glat.User.prototype.getAuthToken = function() {
  return this.authToken_;
};
