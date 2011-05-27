goog.provide('dab.glat.rpc');

goog.require('goog.async.Deferred');


/**
 * @param {!dab.glat.User} user
 * @return {!goog.async.Deferred.<dab.glat.Location>}
 */
dab.glat.rpc.getCurrentLocation = function(user) {
  var deferred = new goog.async.Deferred();
  var options = {
    'host': 'www.googleapis.com',
//    'host': 'www.google.com',
    'path': '/latitude/v1/currentLocation?key=' + encodeURIComponent(
        user.getAuthToken())
  };
  var request = https.get(options, function(response) {
    var data = [];
    response.setEncoding('utf8');

    var onEnd = function(arg) {
      if (!deferred.hasFired()) {
        console.log('sending via: ' + arg);
        deferred.callback(data.join(''));
      }
    };

    response.on('data', function(chunk) {
      data.push(chunk);
    });
    response.on('end', function() {
      onEnd('end');
    });
    response.on('close', function() {
      // When trying to access the Google Latitude API, the 'end' event does not
      // appear to get fired, but the 'close' event does. However, unlike the
      // 'close' event for http.ServerRequest, no error object is passed to the
      // callback function.
      //
      // For this reason, we add defensive logic in case an error object is
      // passed to the close callback in a future version of Node.
      //
      // Note that the 'end' event is fired as expected when
      // 'www.google.com' is specified as the 'host'.
      if (arguments.length == 0) {
        onEnd('close');
      } else {
        deferred.errback(arguments[0]);
      }
    });
  });
  request.on('error', function(e) {
    console.log('error');
    deferred.errback(e);
  });
  return deferred;
};
