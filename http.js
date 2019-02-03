#!/usr/bin/env node

/* HTTP server.
 *
 * Only starts when this script would end.
 *
 * Efficient: uses poll family system calls rather than process spawning.
 */

var http = require('http');
var util = require('util');
var host = '127.0.0.1'
var port = 1337
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  /* Response and request are documented at:
   * https://nodejs.org/api/http.html#http_event_request
   * Request is https://nodejs.org/api/http.html#http_http_incomingmessage
   * Most interesting fields:
   * - request.headers:
   * - request.url: the path, e.g.: `/some/article`
   */
  response.end((new Date()).toISOString() + '\n' + util.inspect(request));
}).listen(port, host);
console.log('Server running at: http://' + host + '/' + port + '/');
