const { isObject } = require("util");

httpServer.listen(8080,function(){
    console.log('servidor corriendo en http://localhost:8080;');
})

const mensajes =[
    {
        author: "juan", text: "hola"
    },
    {
        author: "Pedro", text: "chau"
    },
]

io.on ('connection', function (socket) {
    console.log('un cliente se ha conectado');
    socket.emit ('mensajes', mensajes);
});
