// server.js

/* const WebSocket = require('ws');
 
const wss = new WebSocket.Server({ port: 3000 })
 
wss.on('connection', ws => {
  ws.on('message', message => {
    console.log(`Received message => ${message}`)
  })

  ws.on('data', data => {
      console.log(data.key);

  });

  ws.send('Hello! Message From Server!!')
}) */

const http = require('http');
const port = 8000;

const server = http.createServer(function(req,res){
	// Set CORS headers
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	res.setHeader('Access-Control-Allow-Headers', '*');
	if ( req.method === 'OPTIONS' ) {
		res.writeHead(200);
		res.end();
		return;
	}
})
/* 
server.listen(port, (err) => {
  if (err) {
    return console.log('listen error', err)
  }

  console.log('server is lestening on port:' + port);
}) */