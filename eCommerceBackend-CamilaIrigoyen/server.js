
// const path = require ('path');
// const express = require ('express');
// const{createServer} = require ('http');
// const {Server} = require ('socket.io');
// const app = express ();
// const httpServer = createServer (app);
// const io = new Server (httpServer);

// app.use (express.static(path.join(__dirname,'routers')))


// //escuchamos las peticiones http
// app.get ('./' , (req,res) => {
//     res.sendFile(__dirname + '../index.html' );
// })

// //escuchamos con websocket. Cada vez que un nuevo cliente se conecte me avisa
// io.on ('connection', socket => {
//     console.log('nuevo cliente');
// })

//  httpServer.listen(8080);

//--------------------------------------------------

const config = require('./config.js');
const express = require('express');
const app = express();

console.log(`NODE_ENV=${config.NODE_ENV}`);

app.get('/', (req, res) => {
  res.send('Hola Tierra');
});

app.listen(config.PORT, config.HOST, function () {
  console.log(`App listening on http://${config.HOST}:${config.PORT}`);
});