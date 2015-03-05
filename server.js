var Hapi        = require('hapi');
var server      = new Hapi.Server();

server.connection({ port: 8200});
server.route({
  method: 'GET',
  path: '/{path*}',
  handler: {
    directory: { path: './www/', listing: false, index: true }
  }
});

server.start(function() { console.log('app is online...')});