const express = require('express');

const app = express();

let saludo = "Bienvenido/a, ahora estamos en tu perfil";

let producto = {
    tipoProducto: null,
    precio: null,
    cantidad: null
};

app.listen(3000, () => console.log('Servidor prendido'));

app.get('/', (req, res) => res.send('Bienvenidos a mi primer sitio'));

app.get('/contacto', (req, res) => res.send('Dejanos tu contacto'));

app.get('/un-array', (req, res) => res.send([1, 2, 3, 4, 5, 6]));

app.get('/un-objeto', (req, res) => res.send({
    name: 'Juan',
    edad: '28',
    hincha: 'Boca'
}));

app.get('/perfil', (req, res) => res.send(saludo));

app.get('/producto/agregar', (req, res) => res.send(producto));