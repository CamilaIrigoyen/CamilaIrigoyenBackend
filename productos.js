const contenedor = require('./entrega02.js');
const productos = new contenedor('./productos.txt');

productos.save({
    title: "caña de mosca",
    price:100
});