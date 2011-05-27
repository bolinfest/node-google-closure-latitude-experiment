/**
 * @fileoverview Main insertion point into the test server.
 */
goog.require('dab.glat.User');
goog.require('dab.glat.rpc');

var port = 1337;

http.createServer(function(req, res) {
  // TODO(bolinfest): Insert the user's auth token for Google Latitude.
  var user = new dab.glat.User('AUTHTOKEN');

  var deferred = dab.glat.rpc.getCurrentLocation(user);
  deferred.addBoth(function(result) {
    var isSuccess = goog.isString(result);
    var statusCode = isSuccess ? 200: 500;
    res.writeHead(statusCode, {'Content-Type': 'text/plain'});
    var body = isSuccess
        ? result
        : 'Failed to access current location: ' + result.message;
    res.end(body);
  });

}).listen(port, '127.0.0.1');

console.log('Server running locally on port ' + port);
