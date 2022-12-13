const express = require('express');

const app = express();


const port = 8080;

const server = app.listen(port, () => console.log('servidor levanto en :', port))

app.use(express.static('./apirestful/productos.js'))

/* let mostrar = document.getElementById('mostrar'); */

/* function mostrarProductos(mostrar){
    if(mostrar){
       let sumar = function sumarId(productos.js){
        id = 0;
        for( let i =0; i < productos.length; i++){
                productos[i] = id
            id++;
        }
} 
    return productos.js
    }
} */
/* 
server.post( './apirestful/productos.js', () => {
    res.send(mostrarProductos())
} ) */