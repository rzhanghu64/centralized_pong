const WebSocket = require('ws');
 
const wss = new WebSocket.Server({ port: 3000 });
 
wss.on('connection', ws => {
  ws.on('message', message => {
    console.log(`Received message => ${message}`);
  });

  ws.on('data', data => {
      console.log(data.key);
  });

  ws.send('Hello! Message From Server!!')
});