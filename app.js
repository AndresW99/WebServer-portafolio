const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app  = express();
const port = process.env.PORT; 

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');

// Servir contenido estatico
app.use( express.static('public') );

app.get('/', ( req, res) => {
    res.render('home', {
        nombre: 'Andres Wellmann',
        titulo: 'Aprendiendo Node'
    });
});

// Asi es como servimos los archivos de public con rutas
// app.get('/generic', ( req, res) => {
//     res.sendFile(__dirname + '/public/generic.html')
// });

app.get('/generic', ( req, res) => {
    res.render('generic', {
        nombre: 'Paola Juarez',
        titulo: 'Administradora'
    });
});

app.get('/elements', ( req, res) => {
    res.render('elements', {
        nombre: 'Pablo Cruz',
        titulo: 'Administrador'
    });
});

// Esto es un comodin por si van a una ruta que no existe
app.get('*', ( req, res) => {
    res.send('404 | Page not found');
});

app.listen(port, () => {
    console.log(`App corriendo en el puerto ${ port }`);
});