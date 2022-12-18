import Productos from './api/clase-producto.js';

const express = require('express');
const app = express();

let productos = new Productos();

// ------------ Settings --------------

 const PORT = 8080;
app.set('port', process.env.PORT || 8080);

app.use(express.static('public'))

const router = express.Router();
app.use('/api', router);
//------------- Middleware -----------
router.use(express.json())   // con esto a mi server le estoy permitiendo recibir y entender formatos JSON 
// con todo esto ya estamos preparado para soportar los datos que vamos a recibir en el servidor. 

router.use(express.urlencoded({extended: true}))     // con esto podemos entender y recibir datos desde un formulario, proveniente de una page html


//------------------ PETICIONES ---------------- 


//--peticion GET --> /productos
router.get('/productos/mostrarTodos', (req, res) => {
    res.json(productos.mostrarTodos())
})

//--peticiones GET --> /producto.id
router.get('/productos/mostrar/:id', (req,res) => {
    let { id } = req.params
    res.json(productos.mostrar(id))
})

// --peticiones POST --> /productos/guardaID
router.post('/productos/guardarID', (req,res) => {
    let producto = req.body
    producto.guardarID(producto)
    res.json(producto)
})

// --peticiones PUT --> /productos/actualizaPro/:id
router.put('/productos/actualizarPro/:id', (req,res) => {
    let { id } = req.params
    let producto = req.body
    producto.actualizar(producto,id)
    res.json(producto)
})

// --peticiones DELETE --> /productos/borrar/:id
router.delete('/productos/borrar/:id', (req,res) => {
    let { id } = req.params
    let producto = producto.borrar(id)
    res.json(producto)
})



//--------------- Starting Server ---------------
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))