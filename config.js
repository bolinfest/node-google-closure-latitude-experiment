{
  "id": "node-google-closure-latitude-experiment",
  "inputs": "js/main.js",
  "paths": "js",
  "externs": "externs/node/v0.4.8",
//  "mode": "ADVANCED",
  "mode": "SIMPLE",
  "level": "VERBOSE",
  "pretty-print": true,
  "output-wrapper": "var EventEmitter = require('events').EventEmitter;\nvar http = require('http');\nvar https = require('https');\n%output%"
}
